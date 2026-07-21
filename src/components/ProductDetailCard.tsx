import { DownloadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import type { CSSProperties } from 'react';
import type { ProductCatalogItem, ProductSpecKey } from '../data/productCatalog';
import { productManualPath } from '../data/productCatalog';
import type { ProductCatalogCopy, ProductMessage } from '../i18n/productCatalogMessages';
import '../styles/product-catalog.css';

const { Paragraph, Text, Title } = Typography;

interface ProductDetailCardProps {
  product: ProductCatalogItem;
  copy: ProductMessage;
  labels: ProductCatalogCopy['labels'];
  specLabels: Record<ProductSpecKey, string>;
}

export default function ProductDetailCard({ product, copy, labels, specLabels }: ProductDetailCardProps) {
  return (
    <article id={product.key} className={`product-catalog-card product-catalog-card-${product.key}`}>
      <div
        className="product-catalog-card-media"
        style={{ '--product-image-position': product.imagePosition } as CSSProperties}
      >
        <img src={product.image} alt={copy.imageAlt} loading="lazy" decoding="async" />
        <div className="product-catalog-card-media-overlay" />
      </div>

      <div className="product-catalog-card-content">
        <div className="product-catalog-card-heading">
          <Text className="product-catalog-card-status">{copy.status}</Text>
          <Title level={2}>{copy.name}</Title>
          <Paragraph className="product-catalog-card-role">{copy.role}</Paragraph>
          <Paragraph className="product-catalog-card-summary">{copy.summary}</Paragraph>
        </div>

        <section className="product-catalog-spec-section" aria-labelledby={`${product.key}-specifications`}>
          <Text id={`${product.key}-specifications`} className="product-catalog-section-label">
            {labels.specifications}
          </Text>
          <dl className="product-catalog-spec-grid">
            {product.specs.map((spec) => (
              <div key={spec.key} className="product-catalog-spec-item">
                <dt>{specLabels[spec.key]}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="product-catalog-card-meta">
          <section className="product-catalog-panel" aria-labelledby={`${product.key}-capabilities`}>
            <Text id={`${product.key}-capabilities`} className="product-catalog-section-label">
              {labels.capabilities}
            </Text>
            <ul>
              {copy.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </section>

          <section className="product-catalog-panel" aria-labelledby={`${product.key}-applications`}>
            <Text id={`${product.key}-applications`} className="product-catalog-section-label">
              {labels.applications}
            </Text>
            <div className="product-catalog-application-list">
              {copy.applications.map((application) => (
                <span key={application}>{application}</span>
              ))}
            </div>
          </section>
        </div>

        <div className="product-catalog-manual">
          <a href={productManualPath} download className="product-catalog-manual-link">
            <DownloadOutlined aria-hidden="true" />
            <span>{labels.downloadManual}</span>
          </a>
          <Text className="product-catalog-manual-language">{labels.manualLanguage}</Text>
        </div>
      </div>
    </article>
  );
}
