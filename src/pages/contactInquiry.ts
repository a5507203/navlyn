const FEEDBACK_PATH = '/settings/api/v1/feedbacks';
const FEEDBACK_SUCCESS_CODE = 200;
const FEEDBACK_STATUSES = new Set(['PENDING', 'PROCESSING', 'RESOLVED', 'CLOSED']);
const REQUEST_TIMEOUT_MS = 15_000;

export interface ContactInquiryValues {
  countryRegion: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organizationType: string;
  companyName: string;
  website: string;
  description: string;
}

interface FeedbackSubmissionRequest {
  countryRegion: string;
  organizationType: string;
  firstName: string;
  lastName: string;
  workEmail: string;
  phoneNumber?: string;
  organizationName?: string;
  organizationWebsite?: string;
  description: string;
}

export interface ContactInquiryReceipt {
  id?: number;
  status?: 'PENDING' | 'PROCESSING' | 'RESOLVED' | 'CLOSED';
  createdAt?: number;
}

export type ContactInquiryErrorReason =
  | 'configuration'
  | 'validation'
  | 'network'
  | 'http'
  | 'business'
  | 'invalid-response';

export class ContactInquirySubmissionError extends Error {
  readonly reason: ContactInquiryErrorReason;

  constructor(reason: ContactInquiryErrorReason) {
    super(`Contact inquiry submission failed: ${reason}`);
    this.name = 'ContactInquirySubmissionError';
    this.reason = reason;
  }
}

interface SubmitContactInquiryOptions {
  apiBaseUrl: string;
  values: ContactInquiryValues;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function feedbackUrl(apiBaseUrl: string) {
  let baseUrl: URL;

  try {
    baseUrl = new URL(apiBaseUrl);
  } catch {
    throw new ContactInquirySubmissionError('configuration');
  }

  const isLocalHttp =
    baseUrl.protocol === 'http:' &&
    (baseUrl.hostname === 'localhost' || baseUrl.hostname === '127.0.0.1');
  if (
    (baseUrl.protocol !== 'https:' && !isLocalHttp) ||
    baseUrl.username ||
    baseUrl.password ||
    baseUrl.search ||
    baseUrl.hash
  ) {
    throw new ContactInquirySubmissionError('configuration');
  }

  const basePath = baseUrl.pathname.replace(/\/+$/, '');
  return `${baseUrl.origin}${basePath}${FEEDBACK_PATH}`;
}

export function buildFeedbackPayload(values: ContactInquiryValues): FeedbackSubmissionRequest {
  return {
    countryRegion: values.countryRegion,
    organizationType: values.organizationType,
    firstName: values.firstName,
    lastName: values.lastName,
    workEmail: values.email,
    ...(values.phone ? { phoneNumber: values.phone } : {}),
    ...(values.companyName ? { organizationName: values.companyName } : {}),
    ...(values.website ? { organizationWebsite: values.website } : {}),
    description: values.description,
  };
}

function hasValidLength(value: string, maxLength: number) {
  return value.trim().length > 0 && value.length <= maxLength;
}

function hasValidWebsite(value: string) {
  if (!value) {
    return true;
  }

  try {
    const website = new URL(value);
    return website.protocol === 'http:' || website.protocol === 'https:';
  } catch {
    return false;
  }
}

function validateInquiry(values: ContactInquiryValues) {
  const hasValidRequiredFields =
    hasValidLength(values.countryRegion, 100) &&
    hasValidLength(values.organizationType, 100) &&
    hasValidLength(values.firstName, 100) &&
    hasValidLength(values.lastName, 100) &&
    hasValidLength(values.email, 320) &&
    /^[^\s@]+@[^\s@]+$/.test(values.email) &&
    hasValidLength(values.description, 5000);
  const hasValidOptionalFields =
    values.phone.length <= 50 &&
    values.companyName.length <= 200 &&
    values.website.length <= 2048 &&
    hasValidWebsite(values.website);

  if (!hasValidRequiredFields || !hasValidOptionalFields) {
    throw new ContactInquirySubmissionError('validation');
  }
}

function parseReceipt(payload: unknown): ContactInquiryReceipt {
  if (!isRecord(payload)) {
    throw new ContactInquirySubmissionError('invalid-response');
  }

  if ('code' in payload && typeof payload.code !== 'number') {
    throw new ContactInquirySubmissionError('invalid-response');
  }

  if (typeof payload.code === 'number' && payload.code !== FEEDBACK_SUCCESS_CODE) {
    throw new ContactInquirySubmissionError('business');
  }

  if (payload.data === undefined || payload.data === null) {
    return {};
  }

  if (!isRecord(payload.data)) {
    throw new ContactInquirySubmissionError('invalid-response');
  }

  const { id, status, createdAt } = payload.data;
  if (
    (id !== undefined && typeof id !== 'number') ||
    (status !== undefined && (typeof status !== 'string' || !FEEDBACK_STATUSES.has(status))) ||
    (createdAt !== undefined && typeof createdAt !== 'number')
  ) {
    throw new ContactInquirySubmissionError('invalid-response');
  }

  return {
    ...(typeof id === 'number' ? { id } : {}),
    ...(typeof status === 'string' ? { status: status as ContactInquiryReceipt['status'] } : {}),
    ...(typeof createdAt === 'number' ? { createdAt } : {}),
  };
}

export async function submitContactInquiry({
  apiBaseUrl,
  values,
}: SubmitContactInquiryOptions): Promise<ContactInquiryReceipt> {
  const url = feedbackUrl(apiBaseUrl);
  validateInquiry(values);
  let response: Response;
  const controller = new AbortController();
  const timeoutId = globalThis.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'omit',
      signal: controller.signal,
      body: JSON.stringify(buildFeedbackPayload(values)),
    });
  } catch {
    throw new ContactInquirySubmissionError('network');
  } finally {
    globalThis.clearTimeout(timeoutId);
  }

  if (!response.ok) {
    throw new ContactInquirySubmissionError('http');
  }

  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    throw new ContactInquirySubmissionError('invalid-response');
  }

  return parseReceipt(payload);
}
