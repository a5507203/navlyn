import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  buildFeedbackPayload,
  submitContactInquiry,
  type ContactInquiryValues,
} from './contactInquiry';

const values: ContactInquiryValues = {
  countryRegion: 'France',
  firstName: 'Camille',
  lastName: 'Martin',
  email: 'camille@example.com',
  phone: '',
  organizationType: 'research',
  companyName: 'Laboratoire aérien',
  website: 'https://example.com',
  description: 'We need a coastal survey demo.',
};

function responseWith(payload: unknown, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: vi.fn().mockResolvedValue(payload),
  } as unknown as Response;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('contact inquiry API client', () => {
  it('maps form values to the documented feedback contract and omits empty optional fields', () => {
    expect(buildFeedbackPayload(values)).toEqual({
      countryRegion: 'France',
      organizationType: 'research',
      firstName: 'Camille',
      lastName: 'Martin',
      workEmail: 'camille@example.com',
      organizationName: 'Laboratoire aérien',
      organizationWebsite: 'https://example.com',
      description: 'We need a coastal survey demo.',
    });
  });

  it('posts with the production fetch path and returns the accepted feedback receipt', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      responseWith({
        code: 200,
        msg: 'success',
        data: { id: 42, status: 'PENDING', createdAt: 1_784_592_000_000 },
      }),
    );
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      submitContactInquiry({ apiBaseUrl: 'https://api.example.com', values }),
    ).resolves.toEqual({ id: 42, status: 'PENDING', createdAt: 1_784_592_000_000 });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.example.com/settings/api/v1/feedbacks',
      expect.objectContaining({
        method: 'POST',
        credentials: 'omit',
        signal: expect.any(AbortSignal),
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildFeedbackPayload(values)),
      }),
    );
  });

  it.each([
    ['http error', responseWith({ code: 500 }, 500), 'http'],
    ['unexpected zero code', responseWith({ code: 0, msg: 'success' }), 'business'],
    ['business error', responseWith({ code: 1001, msg: 'rejected' }), 'business'],
    ['invalid response', responseWith({ code: '0' }), 'invalid-response'],
  ])('reports a semantic error for %s', async (_label, response, reason) => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response));

    await expect(
      submitContactInquiry({ apiBaseUrl: 'https://api.example.com', values }),
    ).rejects.toMatchObject({ reason });
  });

  it('rejects missing or unsafe API configuration without making a request', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    await expect(submitContactInquiry({ apiBaseUrl: '', values })).rejects.toMatchObject({
      reason: 'configuration',
    });
    await expect(
      submitContactInquiry({ apiBaseUrl: 'http://api.example.com', values }),
    ).rejects.toMatchObject({ reason: 'configuration' });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('validates required values before crossing the network boundary', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);

    await expect(
      submitContactInquiry({
        apiBaseUrl: 'https://api.example.com',
        values: { ...values, description: '   ' },
      }),
    ).rejects.toMatchObject({ reason: 'validation' });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
