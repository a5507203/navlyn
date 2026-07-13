import { Typography } from 'antd';
import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import { useI18n } from '../i18n/I18nProvider';
import SiteLayout from '../layouts/SiteLayout';
import { distributorMarkers } from '../data/site';
import { assetPath } from '../utils/base';

const { Title, Paragraph, Text } = Typography;

export default function PartnersDistributorsPage() {
  const { locale, page } = useI18n();
  const copy = page.partnerDistributors;
  const regionNames = new Intl.DisplayNames([locale], { type: 'region' });

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      hero={
        <ImmersivePageHero
          prefix="partners-page-hero"
          media={<img src={assetPath('/media/company-news-briefing.jpg')} alt={copy.heroTitle} decoding="async" />}
          tag={copy.heroTitle}
          title={copy.heroTitle}
          description={copy.heroDescription}
        />
      }
    >
      <section className="page-section doc-distributor-stage">
        <SubpageTabNav items={page.partners.tabs} />
        <div className="section-heading">
          <Text className="news-page-kicker">{copy.heroTitle}</Text>
          <Title level={2}>{copy.sectionTitle}</Title>
          <Paragraph>{copy.sectionDescription}</Paragraph>
        </div>
        <div className="doc-distributor-board">
          <div className="doc-distributor-map">
            <div className="doc-distributor-glow" />
            {distributorMarkers.map((item) => {
              const regionName = regionNames.of(item.regionCode) ?? item.regionCode;

              return (
              <div key={`${item.regionCode}-${item.city}`} className="doc-distributor-pin">
                <span>{item.flag}</span>
                <strong>{regionName}</strong>
              </div>
              );
            })}
          </div>
          <div className="doc-distributor-list">
            {distributorMarkers.map((item) => {
              const regionName = regionNames.of(item.regionCode) ?? item.regionCode;

              return (
              <article key={`${item.regionCode}-${item.city}`} className="doc-distributor-item">
                <div className="doc-distributor-head">
                  <span>{item.flag}</span>
                  <strong>{regionName}</strong>
                </div>
                <p>{item.city}</p>
                <em>{copy.note}</em>
              </article>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
