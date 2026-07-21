import { describe, expect, it } from 'vitest';
import { airProducts, homeHeroSlides, homeProductSlides, seaProducts } from './productCatalog';

describe('July product catalog', () => {
  it('contains the documented AIR and SEA products', () => {
    expect(airProducts.map(({ key }) => key)).toEqual(['titan', 'commander', 'scout']);
    expect(seaProducts.map(({ key }) => key)).toEqual(['seal']);
  });

  it('provides six home product entries including the pending counter-UAS system', () => {
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

  it('uses the existing in-water Seal image on the SEA product page', () => {
    const seal = seaProducts.find(({ key }) => key === 'seal');

    expect(seal?.image).toBe('/media/products/navlyn-s1.webp');
  });

  it('keeps the product grid images separate from the hero carousel', () => {
    expect(homeProductSlides.map(({ key, image }) => ({ key, image }))).toEqual([
      { key: 'titan', image: '/media/home/products/titan.webp' },
      { key: 'commander', image: '/media/products/scout-s1.webp' },
      { key: 'scout', image: '/media/products/navlyn-x1.webp' },
      { key: 'seal', image: '/media/products/navlyn-s1.webp' },
      { key: 'arc', image: '/media/products/catalog/arc.webp' },
      { key: 'counterUas', image: '' },
    ]);
  });

  it('uses five provided hero images with ARC first', () => {
    expect(homeHeroSlides.map(({ key, image }) => ({ key, image }))).toEqual([
      { key: 'arc', image: '/media/home/carousel/arc-gcs.webp' },
      { key: 'titan', image: '/media/home/carousel/titan-t1.webp' },
      { key: 'commander', image: '/media/home/carousel/commander-x1.webp' },
      { key: 'scout', image: '/media/home/carousel/scout-s1.webp' },
      { key: 'seal', image: '/media/home/carousel/seal-s1.webp' },
    ]);
    expect(homeHeroSlides.some(({ key }) => key === 'counterUas')).toBe(false);
  });
});
