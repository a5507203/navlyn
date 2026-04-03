import type { CSSProperties } from "react";
import { Typography } from "antd";
import { useI18n } from "../i18n/I18nProvider";
import SiteLayout from "../layouts/SiteLayout";
import { productDetails, productHero } from "../data/products";

const { Title, Paragraph, Text } = Typography;

export default function ProductsPage() {
  const { page } = useI18n();
  const copy = page.products;

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      hero={
        <section className="products-cinema-hero">
          <div className="products-cinema-media">
            <video
              className="products-cinema-video"
              src={productHero.video}
              poster={productHero.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="products-cinema-overlay" />
            <div className="products-cinema-ambient" />
          </div>
          <div className="products-cinema-copy">
            <Title className="products-cinema-title">{copy.heroTitle}</Title>
            <Text className="products-cinema-subtitle">
              {copy.heroSubtitle}
            </Text>
          </div>
        </section>
      }
    >
      <section className="page-section">
        <div className="products-detail-grid">
          {productDetails.map((item, index) => {
            const card = copy.cards[index];

            return (
            <article
              key={item.key}
              className={`products-detail-card products-detail-card-${item.key}`}
            >
              <div
                className="products-detail-media"
                style={
                  {
                    "--product-media-position": item.imagePosition,
                  } as CSSProperties
                }
              >
                <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
                <div className="products-detail-media-overlay" />
              </div>

              <div className="products-detail-content">
                <div className="products-detail-card-top">
                  <Text className="products-detail-tag">{card.tag}</Text>
                  <Title level={3}>{card.name}</Title>
                  <Paragraph className="products-detail-role">
                    {card.role}
                  </Paragraph>
                  <Paragraph className="products-detail-summary">
                    {card.summary}
                  </Paragraph>
                </div>

                <div className="products-detail-block">
                  <Text className="products-detail-label">{copy.hardwareSpecs}</Text>
                  <div className="products-detail-spec-grid">
                    {card.specs.map((spec) => (
                      <div key={spec.label} className="products-detail-spec">
                        <span>{spec.label}</span>
                        <strong>{spec.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="products-detail-meta">
                  <div className="products-detail-panel">
                    <Text className="products-detail-label">{copy.aiCapabilities}</Text>
                    <ul>
                      {card.aiCapabilities.map((capability) => (
                        <li key={capability}>{capability}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="products-detail-panel">
                    <Text className="products-detail-label">{copy.scenarios}</Text>
                    <div className="products-detail-scene-list">
                      {card.applications.map((scene) => (
                        <span key={scene}>{scene}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
