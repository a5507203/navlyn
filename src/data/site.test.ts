import { describe, expect, it } from 'vitest';
import { footerNavGroups, footerSocialLinks, siteNavItems } from './site';

describe('primary navigation information architecture', () => {
  it('matches the July update document exactly', () => {
    const navShape = siteNavItems.map(({ key, path, external }) => [
      key,
      path,
      external ?? false,
    ]);

    expect(navShape).toEqual([
      ['home', '/', false],
      ['arc', '/arc-os', false],
      ['miying', 'http://47.107.185.207/ai-module/', true],
      ['air', '/air', false],
      ['sea', '/sea', false],
      ['partners', '/partners', false],
      ['about', '/about', false],
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

  it('shows only Chinese and English in the footer language group', () => {
    const languageGroup = footerNavGroups.find(({ key }) => key === 'language');

    expect(languageGroup?.items.map(({ key }) => key)).toEqual(['zh', 'en']);
  });
});
