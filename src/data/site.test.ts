import { describe, expect, it } from 'vitest';
import { footerSocialLinks, siteNavItems } from './site';

describe('primary navigation information architecture', () => {
  it('matches the July update document exactly', () => {
    expect(siteNavItems.map(({ key, path }) => [key, path])).toEqual([
      ['home', '/'],
      ['arc', '/arc-os'],
      ['air', '/air'],
      ['sea', '/sea'],
      ['partners', '/partners'],
      ['about', '/about'],
    ]);
  });

  it('keeps the approved footer social platforms in order', () => {
    expect(footerSocialLinks.map(({ key, href }) => ({ key, href }))).toEqual([
      {
        key: 'linkedin',
        href: 'https://www.linkedin.com/company/navlyn/?viewAsMember=true',
      },
      {
        key: 'facebook',
        href: 'https://www.facebook.com/Navlyn/',
      },
      {
        key: 'youtube',
        href: 'https://www.youtube.com/@NavlynDrone',
      },
    ]);
  });
});
