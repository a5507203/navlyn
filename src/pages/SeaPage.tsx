import { Typography } from 'antd';
import ProductDetailCard from '../components/ProductDetailCard';
import { seaProducts } from '../data/productCatalog';
import { useI18n } from '../i18n/I18nProvider';
import { productCatalogMessages } from '../i18n/productCatalogMessages';
import SiteLayout from '../layouts/SiteLayout';

const { Paragraph, Text, Title } = Typography;

export default function SeaPage() {
  const { locale } = useI18n();
  const copy = productCatalogMessages[locale];
  const page = copy.pages.sea;
  const heroProduct = seaProducts[0];

  return (
    <SiteLayout
      title={page.seoTitle}
      description={page.seoDescription}
      contentClassName="product-catalog-page-shell"
      hero={
        <section className="product-catalog-hero product-catalog-hero-sea">
          <img src={heroProduct.image} alt={copy.products.seal.imageAlt} decoding="async" />
          <div className="product-catalog-hero-overlay" />
          <div className="product-catalog-hero-copy">
            <Text className="product-catalog-hero-eyebrow">{page.eyebrow}</Text>
            <Title>{page.title}</Title>
            <Paragraph>{page.introduction}</Paragraph>
          </div>
        </section>
      }
    >
      <nav className="product-catalog-jump-nav" aria-label={page.title}>
        <a href="#seal">{copy.products.seal.name}</a>
      </nav>

      <section className="product-catalog-grid">
        {seaProducts.map((product) => (
          <ProductDetailCard
            key={product.key}
            product={product}
            copy={copy.products[product.key]}
            labels={copy.labels}
            specLabels={copy.specLabels}
          />
        ))}
      </section>
    </SiteLayout>
  );
}
