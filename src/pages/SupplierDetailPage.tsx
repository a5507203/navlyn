import {
  ArrowLeftOutlined,
  DownloadOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { findSupplierBySlug } from '../data/suppliers';
import { useI18n } from '../i18n/I18nProvider';
import { getSupplierEcosystemCopy } from '../i18n/supplierMessages';
import SiteLayout from '../layouts/SiteLayout';
import { assetPath } from '../utils/base';
import NotFoundPage from './NotFoundPage';
import '../styles/supplier-ecosystem.css';

export default function SupplierDetailPage() {
  const { supplierSlug } = useParams();
  const { contentLocale } = useI18n();
  const copy = getSupplierEcosystemCopy(contentLocale);
  const supplier = findSupplierBySlug(supplierSlug);

  if (!supplier || supplier.status !== 'ready') {
    return <NotFoundPage />;
  }

  const supplierCopy = copy.suppliers[supplier.key];

  return (
    <SiteLayout
      title={`${supplierCopy.name} | ${copy.seoTitle}`}
      description={supplierCopy.officialIntro}
      contentClassName="supplier-detail-shell"
      hero={
        <section className="supplier-detail-hero">
          <div className="supplier-detail-hero-orbit" aria-hidden="true" />
          <div className="supplier-detail-hero-content">
            <Link to="/partners/suppliers" className="supplier-detail-back">
              <ArrowLeftOutlined aria-hidden="true" />
              {copy.backToDirectory}
            </Link>
            <div className="supplier-detail-identity">
              <div className="supplier-detail-logo-field">
                <img src={assetPath(supplier.logo)} alt={`${supplierCopy.name} logo`} decoding="async" />
              </div>
              <div>
                <span>{copy.supplierIndexLabel}</span>
                <h1>{supplierCopy.name}</h1>
                <p>{supplierCopy.officialIntro}</p>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <section className="supplier-product-stage" aria-labelledby="supplier-products-title">
        <div className="supplier-product-heading">
          <h2 id="supplier-products-title">{copy.productsTitle}</h2>
          <p>{copy.productsDescription}</p>
        </div>

        <div className="supplier-product-list">
          {supplier.products.map((product) => {
            const productCopy = supplierCopy.products[product.key];

            return (
              <article key={product.key} className="supplier-product-card">
                <div className="supplier-product-media">
                  <img
                    src={assetPath(product.image)}
                    alt={`${productCopy.name} document cover`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="supplier-product-content">
                  <div>
                    <h3>{productCopy.name}</h3>
                    <p>{productCopy.summary}</p>
                  </div>

                  <div className="supplier-document-group">
                    <span className="supplier-document-heading">
                      <FileTextOutlined aria-hidden="true" />
                      {copy.documentsTitle}
                    </span>
                    <div className="supplier-document-list">
                      {product.documents.map((document) => (
                        <a
                          key={document.key}
                          href={assetPath(document.file)}
                          download
                          className="supplier-document-link"
                        >
                          <span>
                            <strong>{document.label}</strong>
                            <em>PDF · {document.language}</em>
                          </span>
                          <span className="supplier-document-download">
                            {copy.downloadDocument}
                            <DownloadOutlined aria-hidden="true" />
                          </span>
                        </a>
                      ))}
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
