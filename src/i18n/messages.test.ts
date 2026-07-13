import { describe, expect, it } from 'vitest';
import {
  contentLocaleMap,
  localeOptions,
  pageMessages,
} from './messages';

const localeKeys = ['en', 'es', 'fr', 'zh'];

function shapeOf(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(shapeOf);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, child]) => [key, shapeOf(child)]),
    );
  }

  return typeof value;
}

function stringLeaves(value: unknown, path = ''): Map<string, string> {
  const leaves = new Map<string, string>();

  if (typeof value === 'string') {
    leaves.set(path, value);
    return leaves;
  }

  if (Array.isArray(value)) {
    value.forEach((child, index) => {
      for (const [childPath, text] of stringLeaves(child, `${path}[${index}]`)) {
        leaves.set(childPath, text);
      }
    });
    return leaves;
  }

  if (value && typeof value === 'object') {
    Object.entries(value as Record<string, unknown>).forEach(([key, child]) => {
      for (const [childPath, text] of stringLeaves(child, path ? `${path}.${key}` : key)) {
        leaves.set(childPath, text);
      }
    });
  }

  return leaves;
}

describe('internationalized page catalogs', () => {
  it('provides four independent content locales', () => {
    expect(localeOptions.map(({ key }) => key).sort()).toEqual(localeKeys);
    expect(Object.keys(pageMessages).sort()).toEqual(localeKeys);
    expect(contentLocaleMap).toEqual({ zh: 'zh', en: 'en', fr: 'fr', es: 'es' });
  });

  it('keeps every translated catalog structurally aligned', () => {
    const baseline = shapeOf(pageMessages.zh);

    expect(shapeOf(pageMessages.en)).toEqual(baseline);
    expect(shapeOf(pageMessages.fr)).toEqual(baseline);
    expect(shapeOf(pageMessages.es)).toEqual(baseline);
  });

  it('does not silently reuse English descriptive paragraphs in French or Spanish', () => {
    const english = stringLeaves(pageMessages.en);

    for (const translated of [pageMessages.fr, pageMessages.es]) {
      const leaves = stringLeaves(translated);

      for (const [path, englishText] of english) {
        const isSourceMetadata = path.endsWith('.meta') || path.endsWith('.source');

        if (englishText.length >= 40 && !isSourceMetadata) {
          expect(leaves.get(path), path).not.toBe(englishText);
        }
      }
    }
  });

  it('keeps the industry overview aligned with the security card', () => {
    expect(pageMessages.zh.home.industries.description).toContain('安防');
    expect(pageMessages.zh.home.industries.description).not.toContain('建筑');
    expect(pageMessages.en.home.industries.description).toContain('security');
    expect(pageMessages.en.home.industries.description).not.toContain('construction');
  });
});
