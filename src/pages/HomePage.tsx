import { Typography } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import IndustryShowcaseSection from '../components/IndustryShowcaseSection';
import {
  homeCapabilities,
  homeHardwareMatrix,
  homeHero,
  homeNews,
  homeWhatWeDo,
} from '../data/home';
import { useI18n } from '../i18n/I18nProvider';
import SiteLayout from '../layouts/SiteLayout';
import { assetPath } from '../utils/base';

const { Title, Paragraph, Text } = Typography;

export default function HomePage() {
  const { page } = useI18n();
  const copy = page.home;
  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const [whatWeDoSlideIndex, setWhatWeDoSlideIndex] = useState(0);
  const [newsSlideIndex, setNewsSlideIndex] = useState(0);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;

    if (!video) {
      return;
    }

    const handleLoaded = () => setHeroVideoReady(true);

    if (video.readyState >= 2) {
      setHeroVideoReady(true);
    }

    video.addEventListener('loadeddata', handleLoaded);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
    };
  }, []);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setWhatWeDoSlideIndex((current) => (current + 1) % homeWhatWeDo.slides.length);
    }, 4600);

    return () => {
      window.clearInterval(rotation);
    };
  }, []);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setNewsSlideIndex((current) => (current + 1) % homeNews.items.length);
    }, 5000);

    return () => {
      window.clearInterval(rotation);
    };
  }, []);

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      contentClassName="page-shell-home"
      hero={
        <section id="home" className={`hero-section${heroVideoReady ? ' is-video-ready' : ''}`}>
          <div className={`hero-media-fallback${heroVideoReady ? ' is-hidden' : ''}`} aria-hidden="true">
            <img className="hero-fallback-poster" src={assetPath('/media/commander-x1.jpg')} alt="" />
            <div className="hero-fallback-float hero-fallback-float-left">
              <img src={assetPath('/media/scout-s1.png')} alt="" />
            </div>
            <div className="hero-fallback-float hero-fallback-float-right">
              <img src={assetPath('/media/seal-usv.jpg')} alt="" />
            </div>
          </div>
          <video
            ref={heroVideoRef}
            className="hero-background-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={assetPath('/media/commander-x1.jpg')}
            onLoadedData={() => setHeroVideoReady(true)}
          >
            <source src={assetPath('/media/hero-video.mp4')} type="video/mp4" />
          </video>
          <div className="hero-ambient" />
          <div className="hero-overlay" />
          <div className="hero-grid">
              <div className="hero-copy">
              <Title className="hero-title-en">{homeHero.titleEn}</Title>
              <Text className="hero-title-zh">{copy.heroSecondary}</Text>
              <Text className="hero-title-sub">{copy.heroSubtitle}</Text>
              <div className="hero-actions">
                <Link className="hero-cta-primary" to="/products">
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
        </section>
      }
    >
      <section className="section-block what-we-do-section">
        <div className="what-we-do-media">
          <div className="what-we-do-carousel-shell">
              <div className="what-we-do-carousel">
              {homeWhatWeDo.slides.map((slide, index) => (
                <div
                  key={slide.image}
                  className={`what-we-do-slide${index === whatWeDoSlideIndex ? ' is-active' : ''}`}
                  aria-hidden={index === whatWeDoSlideIndex ? 'false' : 'true'}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    style={{ objectPosition: slide.imagePosition }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
              <div className="what-we-do-carousel-overlay" />
              <div className="what-we-do-copy">
                <div className="what-we-do-header">
                  <Text className="what-we-do-kicker">{copy.whatWeDo.kicker}</Text>
                  <Title level={2}>{copy.whatWeDo.title}</Title>
                </div>
                <div className="what-we-do-body">
                  {copy.whatWeDo.paragraphs.map((paragraph) => (
                    <Paragraph key={paragraph} className="section-lead-copy">
                      {paragraph}
                    </Paragraph>
                  ))}
                </div>
              </div>
              <div className="what-we-do-carousel-orb what-we-do-carousel-orb-left" aria-hidden="true" />
              <div className="what-we-do-carousel-orb what-we-do-carousel-orb-right" aria-hidden="true" />
              <div className="what-we-do-carousel-controls" aria-label={page.common.whatWeDoCarousel}>
                {homeWhatWeDo.slides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    className={`what-we-do-carousel-dot${index === whatWeDoSlideIndex ? ' is-active' : ''}`}
                    onClick={() => setWhatWeDoSlideIndex(index)}
                    aria-label={`${page.common.whatWeDoCarousel} ${index + 1}`}
                    aria-pressed={index === whatWeDoSlideIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  alt={item.imageAlt}
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

      <section className="section-block product-entry-section">
        <div className="product-entry-heading">
          <Text className="product-entry-kicker">{copy.productGateway.kicker}</Text>
          <Title level={2}>{copy.productGateway.title}</Title>
          <Paragraph className="product-entry-lead">{copy.productGateway.lead}</Paragraph>
        </div>
        <div className="product-entry-cta-wrapper">
          <Link className="product-entry-link product-entry-cta" to={homeHardwareMatrix.ctaTo}>
            {copy.productGateway.cta}
          </Link>
        </div>
        
        {/* Hardware Matrix - Tech Style */}
        <div className="product-hardware-tech-section">
          <div className="product-hardware-tech-sidebar">
            <Text className="product-hardware-tech-kicker">{copy.productGateway.hardwareKicker}</Text>
            <Title level={3} className="product-hardware-tech-title">{copy.productGateway.hardwareTitle}</Title>
            <Paragraph className="product-hardware-tech-desc">{copy.productGateway.hardwareDescription}</Paragraph>
          </div>
          <div className="product-hardware-tech-grid">
            {homeHardwareMatrix.items.map((item, index) => {
              const productCopy = copy.productGateway.hardwareItems[item.key as keyof typeof copy.productGateway.hardwareItems];

              return (
              <Link 
                key={item.key} 
                className={`product-hardware-tech-card product-hardware-tech-card-${index + 1}`} 
                to="/products"
              >
                <div className="product-hardware-tech-visual">
                  <img 
                    src={item.image} 
                    alt={item.imageAlt} 
                    style={{ objectPosition: item.imagePosition }} 
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="product-hardware-tech-overlay" />
                  <div className="product-hardware-tech-glow" aria-hidden="true" />
                  <div className="product-hardware-tech-corner product-hardware-tech-corner-tl" />
                  <div className="product-hardware-tech-corner product-hardware-tech-corner-br" />
                </div>
                <div className="product-hardware-tech-content">
                  <div className="product-hardware-tech-badge">
                    {productCopy.badge}
                  </div>
                  <div className="product-hardware-tech-info">
                    <Text className="product-hardware-tech-label">{productCopy.label}</Text>
                    <Title level={3} className="product-hardware-tech-name">{productCopy.title}</Title>
                    <Paragraph className="product-hardware-tech-spec">{productCopy.description}</Paragraph>
                  </div>
                  <div className="product-hardware-tech-action">
                    <span className="product-hardware-tech-cta">
                      {copy.labels.detail}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
              );
            })}
          </div>
        </div>

        {/* Software Section - ARC ENGINE (简洁版) */}
        <div className="product-software-tech-section">
          <div className="product-software-tech-sidebar">
            <Text className="product-software-tech-kicker">{copy.productGateway.softwareKicker}</Text>
            <Title level={3} className="product-software-tech-title">{copy.productGateway.softwareTitle}</Title>
          </div>
          <Link className="product-software-tech-card" to="/arc-os">
            <div className="product-software-tech-bg" aria-hidden="true">
              <img 
                src={homeHardwareMatrix.software.image} 
                alt="" 
                style={{ objectPosition: homeHardwareMatrix.software.imagePosition }} 
                loading="lazy"
                decoding="async"
              />
              <div className="product-software-tech-bg-overlay" />
              <div className="product-software-tech-grid-lines" />
              <div className="product-software-tech-orb product-software-tech-orb-1" />
              <div className="product-software-tech-orb product-software-tech-orb-2" />
            </div>
            <div className="product-software-tech-shell">
              <div className="product-software-tech-content">
                <div className="product-software-tech-main">
                  <Title level={2} className="product-software-tech-heading">{copy.productGateway.softwareDescription} </Title>
                  <Paragraph className="product-software-tech-text">{copy.productGateway.softwareSummary}</Paragraph>
                </div>
              </div>
            </div>
          </Link>
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
                  <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
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
