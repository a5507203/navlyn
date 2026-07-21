import {
  DownloadOutlined,
  FileTextOutlined,
  MailOutlined,
} from '@ant-design/icons';
import {
  ARC_GCS_SUPPORT_EMAIL,
  arcGcsDownloadUrl,
  arcGcsManualUrl,
} from '../config/arcGcs';
import { useI18n } from '../i18n/I18nProvider';
import SiteLayout from '../layouts/SiteLayout';
import { assetPath } from '../utils/base';
import '../styles/arc-gcs.css';

const featureMedia = [
  {
    copyIndex: 0,
    video: '/media/arc-gcs/videos/voice-assistant.mp4',
    poster: '/media/arc-gcs/posters/voice-assistant-first-frame.webp',
  },
  {
    copyIndex: 1,
    video: '/media/arc-gcs/videos/area-routing.mp4',
    poster: '/media/arc-gcs/posters/area-routing-first-frame.webp',
  },
  {
    copyIndex: 2,
    video: '/media/arc-gcs/videos/mixed-missions.mp4',
    poster: '/media/arc-gcs/posters/mixed-missions-first-frame.webp',
  },
  {
    copyIndex: 3,
    video: '/media/arc-gcs/videos/risk-preflight.mp4',
    poster: '/media/arc-gcs/posters/risk-preflight-first-frame.webp',
  },
] as const;

interface DownloadCtaProps {
  href: string | undefined;
  label: string;
  pendingLabel: string;
  tone?: 'primary' | 'quiet';
}

function DownloadCta({
  href,
  label,
  pendingLabel,
  tone = 'primary',
}: DownloadCtaProps) {
  const className = `arc-gcs-download arc-gcs-download-${tone}`;
  const content = (
    <>
      <DownloadOutlined aria-hidden="true" />
      <span className="arc-gcs-download-copy">
        <span>{label}</span>
        {!href ? <small>{pendingLabel}</small> : null}
      </span>
    </>
  );

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={`${className} is-disabled`} type="button" disabled>
      {content}
    </button>
  );
}

export default function ArcPage() {
  const { page } = useI18n();
  const copy = page.arc;

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      headerSize="large"
      hero={
        <div className="arc-gcs-page">
          <section className="arc-gcs-hero" aria-labelledby="arc-gcs-title">
            <img
              className="arc-gcs-hero-image"
              src={assetPath('/media/arc-gcs/images/hero.webp')}
              alt=""
              width="2560"
              height="1440"
              loading="eager"
              decoding="async"
            />
            <h1 id="arc-gcs-title" className="arc-gcs-visually-hidden">
              {copy.heroTitle}
            </h1>
            <div className="arc-gcs-hero-shade" aria-hidden="true" />
            <div className="arc-gcs-hero-action">
              <DownloadCta
                href={arcGcsDownloadUrl}
                label={copy.downloadLabel}
                pendingLabel={copy.downloadPending}
              />
            </div>
          </section>

          <section className="arc-gcs-capabilities" aria-label={copy.featuresLabel}>
            {featureMedia.map((media) => {
              const feature = copy.features[media.copyIndex];
              const [titleLead, titleDetail] = feature.title.split(/\s*[｜|]\s*/, 2);

              return (
                <article className="arc-gcs-feature" key={feature.label}>
                  <header className="arc-gcs-feature-heading">
                    <span className="arc-gcs-feature-label">{feature.label}</span>
                    <h2 aria-label={feature.title}>
                      <span className="arc-gcs-feature-title-lead">{titleLead}</span>
                      {titleDetail ? (
                        <span className="arc-gcs-feature-title-detail">{titleDetail}</span>
                      ) : null}
                    </h2>
                  </header>
                  <div className="arc-gcs-video-shell">
                    <video
                      className="arc-gcs-video"
                      controls
                      playsInline
                      preload="none"
                      poster={assetPath(media.poster)}
                      aria-label={feature.videoLabel}
                    >
                      <source src={assetPath(media.video)} type="video/mp4" />
                      {copy.videoFallback}
                    </video>
                  </div>
                </article>
              );
            })}
          </section>

          <section className="arc-gcs-resources" aria-labelledby="arc-gcs-resources-title">
            <div className="arc-gcs-resources-heading">
              <span>{copy.resources.eyebrow}</span>
              <h2 id="arc-gcs-resources-title">{copy.resources.title}</h2>
              <p>{copy.resources.description}</p>
            </div>

            <div className="arc-gcs-resource-grid">
              <article className="arc-gcs-resource-card">
                <DownloadOutlined className="arc-gcs-resource-icon" aria-hidden="true" />
                <div>
                  <h3>{copy.resources.softwareTitle}</h3>
                  <p>{copy.resources.softwareDescription}</p>
                </div>
                <DownloadCta
                  href={arcGcsDownloadUrl}
                  label={copy.downloadLabel}
                  pendingLabel={copy.downloadPending}
                  tone="quiet"
                />
              </article>

              <article className="arc-gcs-resource-card">
                <FileTextOutlined className="arc-gcs-resource-icon" aria-hidden="true" />
                <div>
                  <h3>{copy.resources.manualTitle}</h3>
                  <p>{copy.resources.manualDescription}</p>
                </div>
                <DownloadCta
                  href={arcGcsManualUrl}
                  label={copy.resources.manualDownloadLabel}
                  pendingLabel={copy.downloadPending}
                  tone="quiet"
                />
              </article>

              <article className="arc-gcs-resource-card arc-gcs-support-card">
                <MailOutlined className="arc-gcs-resource-icon" aria-hidden="true" />
                <div>
                  <h3>{copy.resources.supportTitle}</h3>
                  <p>{copy.resources.supportDescription}</p>
                </div>
                <a
                  className="arc-gcs-support-link"
                  href={`mailto:${ARC_GCS_SUPPORT_EMAIL}`}
                >
                  <span>{copy.resources.supportAction}</span>
                  <strong>{ARC_GCS_SUPPORT_EMAIL}</strong>
                </a>
              </article>
            </div>
          </section>
        </div>
      }
    />
  );
}
