import { describe, expect, it } from 'vitest';
import { airProducts, homeProductSlides, seaProducts } from './productCatalog';

describe('July product catalog', () => {
  it('contains the documented AIR and SEA products', () => {
    expect(airProducts.map(({ key }) => key)).toEqual(['titan', 'commander', 'scout']);
    expect(seaProducts.map(({ key }) => key)).toEqual(['seal']);
  });

  it('provides a six-item home product carousel', () => {
    expect(homeProductSlides.map(({ key }) => key)).toEqual([
      'titan',
      'commander',
      'scout',
      'seal',
      'arc',
      'counterUas',
    ]);
  });

  it('keeps public specifications attached to every released product', () => {
    for (const product of [...airProducts, ...seaProducts]) {
      expect(product.specs.length).toBeGreaterThanOrEqual(4);
      expect(product.image).toMatch(/^\/media\//);
    }
  });

  it('uses the documented IP67 rating for the Seal remote control', () => {
    const seal = seaProducts.find(({ key }) => key === 'seal');
    const remoteWaterproofRating = seal?.specs.find(
      ({ key }) => key === 'remoteWaterproofRating',
    );

    expect(remoteWaterproofRating?.value).toBe('IP67');
  });
});
