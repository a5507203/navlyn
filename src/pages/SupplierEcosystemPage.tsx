/**
 * THESIS: Turn the partner area into a searchable flight-network directory, not a generic logo wall.
 * OWN-WORLD: Navlyn task-black, signal blue, paper-white logo fields, and a connected-world night horizon.
 * STORY: Visitors identify the ecosystem, search by supplier or product, then enter only complete records.
 * FIRST VIEWPORT: A full-width Earth-at-night image hands off to a dedicated bilingual statement panel.
 * FORM: Existing-world extension, directory staging; the Word brief fixes the structure, so no concept seed applies.
 */
import {
  ArrowUpOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { suppliers } from '../data/suppliers';
import { useI18n } from '../i18n/I18nProvider';
import { getSupplierEcosystemCopy } from '../i18n/supplierMessages';
import SiteLayout from '../layouts/SiteLayout';
import { assetPath } from '../utils/base';
import '../styles/supplier-ecosystem.css';

function normalizeSearchValue(value: string) {
  return value.trim().toLocaleLowerCase();
}

export default function SupplierEcosystemPage() {
  const { contentLocale } = useI18n();
  const copy = getSupplierEcosystemCopy(contentLocale);
  const [query, setQuery] = useState('');
  const normalizedQuery = normalizeSearchValue(query);

  const filteredSuppliers = useMemo(() => {
    if (!normalizedQuery) {
      return suppliers;
    }

    return suppliers.filter((supplier) => {
      const supplierCopy = copy.suppliers[supplier.key];
      const productTerms = supplier.products.flatMap((product) => {
        const productCopy = supplierCopy.products[product.key];
        return productCopy
          ? [productCopy.name, productCopy.summary, ...productCopy.searchTerms]
          : [];
      });
      const searchTerms = [
        supplierCopy.name,
        supplierCopy.cardSummary,
        ...supplierCopy.searchTerms,
        ...productTerms,
      ];

      return searchTerms.some((term) => normalizeSearchValue(term).includes(normalizedQuery));
    });
  }, [copy, normalizedQuery]);

  const clearSearch = () => setQuery('');

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      contentClassName="supplier-ecosystem-shell"
      hero={
        <section className="supplier-ecosystem-hero">
          <div className="supplier-ecosystem-hero-media" aria-hidden="true">
            <img
              className="supplier-ecosystem-hero-image"
              src={assetPath('/media/partners/suppliers/hero-world.png')}
              alt=""
              decoding="async"
            />
          </div>
          <div className="supplier-ecosystem-hero-content" data-content-locale={contentLocale}>
            <h1>{copy.heroTitle}</h1>
            <p>{copy.heroDescription}</p>
          </div>
        </section>
      }
    >
      <section className="supplier-search-stage" aria-labelledby="supplier-directory-title">
        <div className="supplier-search-console">
          <label htmlFor="supplier-search">{copy.searchLabel}</label>
          <div className="supplier-search-control">
            <SearchOutlined aria-hidden="true" />
            <input
              id="supplier-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.searchPlaceholder}
              autoComplete="off"
            />
            {query ? (
              <button type="button" onClick={clearSearch} aria-label={copy.clearSearch}>
                <CloseOutlined aria-hidden="true" />
              </button>
            ) : null}
          </div>
        </div>

        <div className="supplier-directory-heading">
          <div>
            <span className="supplier-directory-kicker">{copy.directoryKicker}</span>
            <h2 id="supplier-directory-title">{copy.directoryTitle}</h2>
            <p>{copy.directoryDescription}</p>
          </div>
          <output className="supplier-result-count" aria-live="polite">
            <strong>{filteredSuppliers.length}</strong>
            <span>/ {suppliers.length}</span>
            <em>{copy.resultsLabel}</em>
          </output>
        </div>

        {filteredSuppliers.length ? (
          <div className="supplier-card-grid">
            {filteredSuppliers.map((supplier) => {
              const supplierCopy = copy.suppliers[supplier.key];
              const isReady = supplier.status === 'ready';
              const cardContent = (
                <>
                  <div className="supplier-card-logo-field">
                    <img
                      src={assetPath(supplier.logo)}
                      alt={`${supplierCopy.name} logo`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="supplier-card-body">
                    <div className="supplier-card-status">
                      <span className={`supplier-status-dot${isReady ? ' is-ready' : ''}`} aria-hidden="true" />
                      {isReady ? copy.readyStatus : copy.preparingStatus}
                    </div>
                    <h3>{supplierCopy.name}</h3>
                    <p>{supplierCopy.cardSummary}</p>
                    <span className="supplier-card-action">
                      {isReady ? (
                        <>
                          {copy.viewDetails}
                          <ArrowUpOutlined aria-hidden="true" />
                        </>
                      ) : (
                        <>
                          <ClockCircleOutlined aria-hidden="true" />
                          {copy.preparingStatus}
                        </>
                      )}
                    </span>
                  </div>
                </>
              );

              return isReady ? (
                <Link
                  key={supplier.key}
                  className="supplier-card is-ready"
                  to={`/partners/suppliers/${supplier.slug}`}
                  aria-label={`${copy.viewDetails}: ${supplierCopy.name}`}
                >
                  {cardContent}
                </Link>
              ) : (
                <article key={supplier.key} className="supplier-card is-preparing" aria-disabled="true">
                  {cardContent}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="supplier-empty-state" role="status">
            <SearchOutlined aria-hidden="true" />
            <h3>{copy.noResultsTitle}</h3>
            <p>{copy.noResultsDescription}</p>
            <button type="button" onClick={clearSearch}>
              {copy.clearSearch}
            </button>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
