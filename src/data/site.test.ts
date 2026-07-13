import { describe, expect, it } from 'vitest';
import { siteNavItems } from './site';

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
});
