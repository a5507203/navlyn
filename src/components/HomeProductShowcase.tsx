import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { homeProductSlides } from '../data/productCatalog';
import { useI18n } from '../i18n/I18nProvider';
import { productCatalogMessages } from '../i18n/productCatalogMessages';

const { Paragraph, Text, Title } = Typography;

export default function HomeProductShowcase() {
  const { locale, page } = useI18n();
  const copy = page.home.productGateway;
  const products = productCatalogMessages[locale].home;

  return (
    <section className="section-block home-product-showcase" aria-labelledby="home-products-title">
      <div className="home-product-showcase-heading">
        <Text className="product-entry-kicker">{copy.kicker}</Text>
        <Title id="home-products-title" level={2}>{copy.title}</Title>
        <Paragraph className="section-lead-copy">{copy.lead}</Paragraph>
      </div>

      <div className="home-product-showcase-grid">
        {homeProductSlides.map((product, index) => {
          const isPending = product.key === 'counterUas';
          const productCopy = products[product.key];
          const cardContent = (
            <>
              <div className={`home-product-showcase-media${product.image ? '' : ' is-empty'}`}>
                {product.image ? (
                  <img
                    src={product.image}
                    alt=""
                    style={{ objectPosition: product.imagePosition }}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span>{productCopy.summary}</span>
                )}
                <div className="home-product-showcase-overlay" aria-hidden="true" />
              </div>
              <div className="home-product-showcase-copy">
                <Text className="home-product-showcase-index">
                  {String(index + 1).padStart(2, '0')}
                </Text>
                <Title level={3}>{productCopy.name}</Title>
                <Text className="home-product-showcase-summary">{productCopy.summary}</Text>
                <span className="home-product-showcase-action">
                  {productCopy.status}
                </span>
              </div>
            </>
          );

          return isPending ? (
            <article key={product.key} className="home-product-showcase-card is-pending">
              {cardContent}
            </article>
          ) : (
            <Link key={product.key} className="home-product-showcase-card" to={product.to}>
              {cardContent}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
