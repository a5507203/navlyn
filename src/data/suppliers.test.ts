import { describe, expect, it } from 'vitest';
import { getSupplierEcosystemCopy } from '../i18n/supplierMessages';
import { suppliers } from './suppliers';

function isPublicAssetPath(assetPath: string, extension: RegExp) {
  return assetPath.startsWith('/media/partners/suppliers/') && extension.test(assetPath);
}

describe('supplier ecosystem catalog', () => {
  it('contains the confirmed eleven suppliers with four ready records', () => {
    expect(suppliers).toHaveLength(11);
    expect(suppliers.filter(({ status }) => status === 'ready')).toHaveLength(4);
    expect(suppliers.filter(({ status }) => status === 'preparing')).toHaveLength(7);
  });

  it('keeps slugs unique and prevents preparing suppliers from exposing products', () => {
    expect(new Set(suppliers.map(({ slug }) => slug)).size).toBe(suppliers.length);

    for (const supplier of suppliers) {
      if (supplier.status === 'ready') {
        expect(supplier.products.length).toBeGreaterThan(0);
      } else {
        expect(supplier.products).toHaveLength(0);
      }
    }
  });

  it('maps every ready product to public media and at least one PDF', () => {
    for (const supplier of suppliers) {
      expect(isPublicAssetPath(supplier.logo, /\.webp$/)).toBe(true);

      for (const product of supplier.products) {
        expect(isPublicAssetPath(product.image, /\.webp$/)).toBe(true);
        expect(product.documents.length).toBeGreaterThan(0);

        for (const document of product.documents) {
          expect(isPublicAssetPath(document.file, /\.pdf$/)).toBe(true);
        }
      }
    }
  });

  it('provides matching Chinese and English copy for every catalog item', () => {
    const chinese = getSupplierEcosystemCopy('zh');
    const english = getSupplierEcosystemCopy('en');

    for (const supplier of suppliers) {
      expect(chinese.suppliers[supplier.key].name).toBeTruthy();
      expect(english.suppliers[supplier.key].name).toBeTruthy();

      for (const product of supplier.products) {
        expect(chinese.suppliers[supplier.key].products[product.key]?.name).toBeTruthy();
        expect(english.suppliers[supplier.key].products[product.key]?.name).toBeTruthy();
      }
    }
  });

  it('falls French and Spanish supplier content back to English', () => {
    const english = getSupplierEcosystemCopy('en');

    expect(getSupplierEcosystemCopy('fr')).toBe(english);
    expect(getSupplierEcosystemCopy('es')).toBe(english);
  });
});
