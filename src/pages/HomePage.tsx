import { Typography } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeProductShowcase from '../components/HomeProductShowcase';
import IndustryShowcaseSection from '../components/IndustryShowcaseSection';
import {
  homeCapabilities,
  homeNews,
} from '../data/home';
import { homeHeroSlides } from '../data/productCatalog';
import { useI18n } from '../i18n/I18nProvider';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function shouldPauseAutomaticCarousels() {
  return typeof window !== 'undefined' && window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export default function HomePage() {
  const { page } = useI18n();
  const copy = page.home;
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [newsSlideIndex, setNewsSlideIndex] = useState(0);
  const [heroCarouselPaused, setHeroCarouselPaused] = useState(shouldPauseAutomaticCarousels);
  const [newsCarouselPaused, setNewsCarouselPaused] = useState(shouldPauseAutomaticCarousels);

  useEffect(() => {
    const motionPreference = window.matchMedia(REDUCED_MOTION_QUERY);
    const pauseForReducedMotion = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setHeroCarouselPaused(true);
        setNewsCarouselPaused(true);
      }
    };

    motionPreference.addEventListener('change', pauseForReducedMotion);

    return () => {
      motionPreference.removeEventListener('change', pauseForReducedMotion);
    };
  }, []);

  useEffect(() => {
    if (heroCarouselPaused) {
      return undefined;
    }

    const rotation = window.setInterval(() => {
      setHeroSlideIndex((current) => (current + 1) % homeHeroSlides.length);
    }, 5200);

    return () => {
      window.clearInterval(rotation);
    };
  }, [heroCarouselPaused]);

  useEffect(() => {
    if (newsCarouselPaused) {
      return undefined;
    }

    const rotation = window.setInterval(() => {
      setNewsSlideIndex((current) => (current + 1) % homeNews.items.length);
    }, 5000);

    return () => {
      window.clearInterval(rotation);
    };
  }, [newsCarouselPaused]);

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      contentClassName="page-shell-home"
      hero={
        <section id="home" className="hero-section">
          <div className="hero-product-carousel" aria-live="off">
            {homeHeroSlides.map((slide, index) => (
              <div
                key={slide.key}
                className={`hero-product-slide${index === heroSlideIndex ? ' is-active' : ''}`}
                aria-hidden={index !== heroSlideIndex}
              >
                <img
                  src={slide.image}
                  alt=""
                  style={{ objectPosition: slide.imagePosition }}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
            ))}
          </div>
          <div className="hero-ambient" />
          <div className="hero-overlay" />
          <div className="hero-grid">
            <div className="hero-copy">
              <Title className="hero-title-en">{copy.heroSecondary}</Title>
              <Text className="hero-title-sub">{copy.heroSubtitle}</Text>
              <div className="hero-actions">
                <Link className="hero-cta-primary" to="/air">
                  <span>{copy.heroPrimaryCta}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link className="hero-cta-secondary" to="/about">
                  {copy.heroSecondaryCta}
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-product-controls" aria-label={copy.productGateway.title}>
            {homeHeroSlides.map((slide, index) => (
              <button
                key={slide.key}
                type="button"
                className={`hero-product-dot${index === heroSlideIndex ? ' is-active' : ''}`}
                onClick={() => setHeroSlideIndex(index)}
                aria-label={`${copy.productGateway.title} ${index + 1}`}
                aria-pressed={index === heroSlideIndex}
              />
            ))}
          </div>
        </section>
      }
    >
      <HomeProductShowcase />

      <IndustryShowcaseSection />

      <section className="section-block capability-section">
        <div className="capability-heading">
          <Text className="capability-kicker">{copy.capabilities.kicker}</Text>
          <Title level={2}>{copy.capabilities.title}</Title>
          <Paragraph className="capability-lead section-lead-copy">{copy.capabilities.intro}</Paragraph>
        </div>
        <div className="capability-grid capability-grid-tech">
{homeCapabilities.map((item, index) => {
            const capabilityCopy = copy.capabilities.cards[index];

            return (
            <article key={item.title} className={`capability-card capability-card-tech capability-card-tech-${index + 1}`}>
              <div className="capability-card-tech-visual">
                <img
                  src={item.image}
                  alt={capabilityCopy.title}
                  style={{ objectPosition: item.imagePosition }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="capability-card-tech-overlay" />
                <div className="capability-card-tech-glow" aria-hidden="true" />
              </div>
              <div className="capability-card-tech-content">
                <div className="capability-card-tech-header">
                  <div className="capability-card-tech-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {item.icon === 'arc-engine' && (
                        <>
                          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="16" cy="16" r="4" fill="currentColor" />
                          <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </>
                      )}
                      {item.icon === 'hardware' && (
                        <>
                          <rect x="6" y="10" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M11 6v4M21 6v4M6 17h6M20 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <circle cx="10" cy="17" r="1.5" fill="currentColor" />
                          <circle cx="14" cy="17" r="1.5" fill="currentColor" />
                        </>
                      )}
                      {item.icon === 'swarm' && (
                        <>
                          <circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="8" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="24" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M14 11.5l-4 8M18 11.5l4 8M10 22h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </>
                      )}
                      {item.icon === 'delivery' && (
                        <>
                          <path d="M6 26l4-6h12l4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 20V8a2 2 0 012-2h4a2 2 0 012 2v12" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="16" cy="14" r="2" fill="currentColor" />
                          <path d="M6 26h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </>
                      )}
                    </svg>
                  </div>
                  <div className="capability-card-tech-meta">
                    <Text className="capability-card-tech-eyebrow">{item.eyebrow}</Text>
                    <Title level={3} className="capability-card-tech-title">{capabilityCopy.title}</Title>
                  </div>
                  <div className="capability-card-tech-stats">
                    <span className="capability-card-tech-stats-value">{item.stats.value}</span>
                    <span className="capability-card-tech-stats-label">{capabilityCopy.statLabel}</span>
                  </div>
                </div>
                <Paragraph className="capability-card-tech-desc">{capabilityCopy.description}</Paragraph>
                <div className="capability-card-tech-tags">
                  {capabilityCopy.tags.map((tag) => (
                    <span key={tag} className="capability-card-tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <section className="section-block news-section">
        <div className="news-heading">
          <Text className="news-kicker">{copy.news.kicker}</Text>
          <Title level={2}>{copy.news.title}</Title>
          <Paragraph className="section-lead-copy">{copy.news.description}</Paragraph>
          <Link className="product-entry-link news-link" to={homeNews.ctaTo}>
            {copy.news.cta}
          </Link>
        </div>
        <div className="news-carousel">
          <div className="news-carousel-track">
            {homeNews.items.map((item, index) => {
              const newsCopy = copy.news.items[index];

              return (
              <a
                key={item.title}
                className={`news-carousel-slide${index === newsSlideIndex ? ' is-active' : ''}`}
                href={item.to}
                target="_blank"
                rel="noreferrer"
                aria-hidden={index === newsSlideIndex ? 'false' : 'true'}
              >
                <div className="news-carousel-media">
                  <img src={item.image} alt={newsCopy.title} loading="lazy" decoding="async" />
                  <div className="news-carousel-overlay" />
                  <div className="news-carousel-glow" />
                </div>
                <div className="news-carousel-content">
                  <div className="news-carousel-meta">
                    <span className="news-carousel-tag">{newsCopy.tag}</span>
                    <span className="news-carousel-date">{newsCopy.meta.split('·')[0].trim()}</span>
                  </div>
                  <Title level={3} className="news-carousel-title">{newsCopy.title}</Title>
                  <Paragraph className="news-carousel-summary">{newsCopy.summary}</Paragraph>
                  <div className="news-carousel-footer">
                    <div className="news-carousel-source">
                      <svg className="news-carousel-icon" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2"/>
                        <circle cx="8" cy="8" r="2" fill="currentColor"/>
                      </svg>
                    <span>{newsCopy.source}</span>
                    </div>
                    <span className="news-carousel-cta">
                      {copy.news.detailCta}
                      <svg viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
              );
            })}
          </div>
          <div className="news-carousel-controls">
            {homeNews.items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`news-carousel-dot${index === newsSlideIndex ? ' is-active' : ''}`}
                onClick={() => setNewsSlideIndex(index)}
                aria-label={`${page.common.newsCarouselItem} ${index + 1}`}
                aria-pressed={index === newsSlideIndex}
              />
            ))}
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
