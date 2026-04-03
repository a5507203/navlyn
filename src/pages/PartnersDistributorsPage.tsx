import { Typography } from 'antd';
import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import { useI18n } from '../i18n/I18nProvider';
import SiteLayout from '../layouts/SiteLayout';
import { distributorMarkers } from '../data/site';

const { Title, Paragraph, Text } = Typography;

export default function PartnersDistributorsPage() {
  const { page } = useI18n();
  const copy = page.partnerDistributors;

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      hero={
        <ImmersivePageHero
          prefix="partners-page-hero"
          media={<img src="/media/company-news-briefing.jpg" alt="Navlyn distributors" decoding="async" />}
          tag="Customers & Partners"
          title={copy.heroTitle}
          description={copy.heroDescription}
        />
      }
    >
      <section className="page-section doc-distributor-stage">
        <SubpageTabNav items={page.partners.tabs} />
        <div className="section-heading">
          <Text className="news-page-kicker">Map Layout</Text>
          <Title level={2}>{copy.sectionTitle}</Title>
          <Paragraph>{copy.sectionDescription}</Paragraph>
        </div>
        <div className="doc-distributor-board">
          <div className="doc-distributor-map">
            <div className="doc-distributor-glow" />
            {distributorMarkers.map((item) => (
              <div key={`${item.region}-${item.city}`} className="doc-distributor-pin">
                <span>{item.flag}</span>
                <strong>{item.region}</strong>
              </div>
            ))}
          </div>
          <div className="doc-distributor-list">
            {distributorMarkers.map((item) => (
              <article key={`${item.region}-${item.city}`} className="doc-distributor-item">
                <div className="doc-distributor-head">
                  <span>{item.flag}</span>
                  <strong>{item.region}</strong>
                </div>
                <p>{item.city}</p>
                <em>{copy.note}</em>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
