import { describe, expect, it } from 'vitest';
import { getNewsItems } from './news';

describe('localized news catalog', () => {
  it('keeps the same routes in every language', () => {
    const baseline = getNewsItems('zh').map(({ slug }) => slug);

    for (const locale of ['en', 'fr', 'es'] as const) {
      expect(getNewsItems(locale).map(({ slug }) => slug)).toEqual(baseline);
    }
  });

  it('contains independent French and Spanish article copy', () => {
    const english = getNewsItems('en');

    for (const locale of ['fr', 'es'] as const) {
      const translated = getNewsItems(locale);
      translated.forEach((article, index) => {
        expect(article.description).not.toBe(english[index].description);
        expect(article.body.join(' ')).not.toBe(english[index].body.join(' '));
      });
    }
  });
});
