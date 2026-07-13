import { describe, expect, it } from 'vitest';
import { homeIndustryService } from './home';

describe('July home content update', () => {
  it('replaces construction with security', () => {
    const keys = homeIndustryService.cards.map(({ key }) => key);

    expect(keys).toContain('security');
    expect(keys).not.toContain('construction');
    expect(homeIndustryService.description).toContain('安防');
    expect(homeIndustryService.description).not.toContain('建筑');
  });
});
