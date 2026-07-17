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

interface BuildContactMailtoOptions {
  recipient: string;
  subjectPrefix: string;
  values: ContactInquiryValues;
}

export function buildContactMailto({
  recipient,
  subjectPrefix,
  values,
}: BuildContactMailtoOptions) {
  const subject = values.companyName ? `${subjectPrefix} — ${values.companyName}` : subjectPrefix;
  const body = [
    `Name: ${values.firstName} ${values.lastName}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || 'Not provided'}`,
    `Country / Region: ${values.countryRegion}`,
    `Organization type: ${values.organizationType}`,
    `Company / Organization: ${values.companyName || 'Not provided'}`,
    `Website: ${values.website || 'Not provided'}`,
    '',
    'Description:',
    values.description,
  ].join('\n');

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
