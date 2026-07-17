import { describe, expect, it } from 'vitest';
import { buildContactMailto } from './contactInquiry';

describe('contact inquiry email', () => {
  it('encodes every submitted field into a prefilled email', () => {
    const mailto = buildContactMailto({
      recipient: 'contact@navlyn.com',
      subjectPrefix: 'Navlyn website inquiry',
      values: {
        countryRegion: 'France',
        firstName: 'Camille',
        lastName: 'Martin',
        email: 'camille@example.com',
        phone: '',
        organizationType: 'University / Research',
        companyName: 'Lab aérien',
        website: 'https://example.com',
        description: 'We need a coastal survey demo.',
      },
    });

    const [target, query = ''] = mailto.split('?');
    const params = new URLSearchParams(query);

    expect(target).toBe('mailto:contact@navlyn.com');
    expect(params.get('subject')).toBe('Navlyn website inquiry — Lab aérien');
    expect(params.get('body')).toContain('Name: Camille Martin');
    expect(params.get('body')).toContain('Phone: Not provided');
    expect(params.get('body')).toContain('Organization type: University / Research');
    expect(params.get('body')).toContain('Description:\nWe need a coastal survey demo.');
  });

  it('keeps the email readable when optional company details are omitted', () => {
    const mailto = buildContactMailto({
      recipient: 'contact@navlyn.com',
      subjectPrefix: 'Navlyn website inquiry',
      values: {
        countryRegion: 'France',
        firstName: 'Camille',
        lastName: 'Martin',
        email: 'camille@example.com',
        phone: '',
        organizationType: 'University / Research',
        companyName: '',
        website: '',
        description: 'We need a coastal survey demo.',
      },
    });

    const [, query = ''] = mailto.split('?');
    const params = new URLSearchParams(query);

    expect(params.get('subject')).toBe('Navlyn website inquiry');
    expect(params.get('body')).toContain('Company / Organization: Not provided');
    expect(params.get('body')).toContain('Website: Not provided');
  });
});
