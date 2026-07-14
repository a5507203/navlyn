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

    expect(seal?.image).toBe('/media/navlyn-s1.png');
  });

  it('keeps the product grid images separate from the hero carousel', () => {
    expect(homeProductSlides.map(({ key, image }) => ({ key, image }))).toEqual([
      { key: 'titan', image: '/media/july-update/titan.jpg' },
      { key: 'commander', image: '/media/scout-s1.png' },
      { key: 'scout', image: '/media/navlyn-x1.png' },
      { key: 'seal', image: '/media/navlyn-s1.png' },
      { key: 'arc', image: '/media/july-update/arc.jpg' },
      { key: 'counterUas', image: '' },
    ]);
  });

  it('uses five provided hero images with ARC first', () => {
    expect(homeHeroSlides.map(({ key, image }) => ({ key, image }))).toEqual([
      { key: 'arc', image: '/media/Homepage Carousel/arc-gcs.jpg' },
      { key: 'titan', image: '/media/Homepage Carousel/titan-t1.jpg' },
      { key: 'commander', image: '/media/Homepage Carousel/commander-x1.jpg' },
      { key: 'scout', image: '/media/Homepage Carousel/scout-s1.jpg' },
      { key: 'seal', image: '/media/Homepage Carousel/seal-s1.jpg' },
    ]);
    expect(homeHeroSlides.some(({ key }) => key === 'counterUas')).toBe(false);
  });
});
