import {
  AndroidOutlined,
  WindowsOutlined,
} from '@ant-design/icons';
import type { ReactNode } from 'react';
import {
  ARC_GCS_DOWNLOAD_VERSION,
  arcGcsDownloadUrls,
  type ArcGcsDownloadPlatform,
  type ArcGcsDownloadUrls,
} from '../config/arcGcs';
import { arcGcsDownloadMessages } from '../i18n/arcGcsDownloadMessages';
import { useI18n } from '../i18n/I18nProvider';
import SiteLayout from '../layouts/SiteLayout';
import { assetPath } from '../utils/base';
import '../styles/arc-gcs-download.css';

interface ArcGcsDownloadPageProps {
  downloadUrls?: ArcGcsDownloadUrls;
}

const platformOrder = ['windows', 'android'] as const satisfies readonly ArcGcsDownloadPlatform[];

const platformIcons: Record<(typeof platformOrder)[number], ReactNode> = {
  windows: <WindowsOutlined aria-hidden />,
  android: <AndroidOutlined aria-hidden />,
};

const heroSrcSet = [
  `${assetPath('/media/arc-gcs/download/hero-1280.webp')} 1280w`,
  `${assetPath('/media/arc-gcs/download/hero-1920.webp')} 1920w`,
  `${assetPath('/media/arc-gcs/download/hero-2560.webp')} 2560w`,
].join(', ');

export default function ArcGcsDownloadPage({
  downloadUrls = arcGcsDownloadUrls,
}: ArcGcsDownloadPageProps) {
  const { locale } = useI18n();
  const copy = arcGcsDownloadMessages[locale];
  const hasAvailableDownload = platformOrder.some(
    (platform) => Boolean(downloadUrls[platform]),
  );

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      contentClassName="page-shell-arc-gcs-download"
    >
      <div className="arc-gcs-download-page">
        <section
          className="arc-gcs-download-hero"
          aria-labelledby="arc-gcs-download-title"
        >
          <picture aria-hidden="true">
            <source
              type="image/webp"
              srcSet={heroSrcSet}
              sizes="100vw"
            />
            <img
              src={assetPath('/media/arc-gcs/download/hero-1920.webp')}
              srcSet={heroSrcSet}
              sizes="100vw"
              alt=""
              width="2560"
              height="1440"
              loading="eager"
              decoding="async"
            />
          </picture>

          <div className="arc-gcs-download-hero-actions">
            <header className="arc-gcs-download-live-copy">
              <span className="arc-gcs-download-kicker">{copy.heroKicker}</span>
              <h1 id="arc-gcs-download-title">{copy.title}</h1>
              <p>{copy.summary}</p>
              <span className="arc-gcs-download-version">
                <span>{copy.versionLabel}</span>
                <strong>{ARC_GCS_DOWNLOAD_VERSION}</strong>
              </span>
            </header>

            <div
              className="arc-gcs-download-platform-actions"
              aria-label={copy.platformSectionLabel}
            >
              {platformOrder.map((platform) => {
                const platformCopy = copy.platforms[platform];
                const href = downloadUrls[platform];
                const className =
                  `arc-gcs-download-platform-action is-${platform}` +
                  (href ? ' is-available' : ' is-disabled');

                return href ? (
                  <a
                    className={className}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={platformCopy.downloadAction}
                    data-platform={platform}
                    key={platform}
                  >
                    {platformIcons[platform]}
                    <span>{platformCopy.name}</span>
                  </a>
                ) : (
                  <button
                    className={className}
                    type="button"
                    disabled
                    aria-label={platformCopy.pendingStatus}
                    data-platform={platform}
                    key={platform}
                  >
                    {platformIcons[platform]}
                    <span>{platformCopy.name}</span>
                  </button>
                );
              })}
            </div>

            <p className="arc-gcs-download-availability" aria-live="polite">
              {hasAvailableDownload
                ? copy.availableNotice
                : copy.pendingNotice}
            </p>
          </div>
        </section>

        <section
          className="arc-gcs-download-faq"
          aria-labelledby="arc-gcs-download-faq-title"
        >
          <header className="arc-gcs-download-faq-heading">
            <span>{copy.faqKicker}</span>
            <h2 id="arc-gcs-download-faq-title">{copy.faqTitle}</h2>
            <p>{copy.faqDescription}</p>
          </header>

          <div className="arc-gcs-download-faq-grid">
            {copy.faqItems.map((item, index) => (
              <article className="arc-gcs-download-faq-item" key={item.question}>
                <span className="arc-gcs-download-faq-index" aria-hidden="true">
                  Q{index + 1}
                </span>
                <div>
                  <h3>{item.question}</h3>
                  <div className="arc-gcs-download-faq-answer">
                    {item.lead ? <p>{item.lead}</p> : null}
                    {item.answer ? <p>{item.answer}</p> : null}
                    {item.points ? (
                      <ul>
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                    {item.note ? <p>{item.note}</p> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
