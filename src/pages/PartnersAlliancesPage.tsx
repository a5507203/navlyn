import { Typography } from 'antd';
import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import { useI18n } from '../i18n/I18nProvider';
import SiteLayout from '../layouts/SiteLayout';
import { partnerBrandWall } from '../data/site';

const { Title, Paragraph, Text } = Typography;

export default function PartnersAlliancesPage() {
  const { page } = useI18n();
  const copy = page.partnerAlliances;

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      hero={
        <ImmersivePageHero
          prefix="partners-page-hero"
          media={<img src="/media/about-team-collab.jpg" alt="Navlyn alliances" decoding="async" />}
          tag="Customers & Partners"
          title={copy.heroTitle}
          description={copy.heroDescription}
        />
      }
    >
      <section className="page-section doc-partner-stage">
        <SubpageTabNav items={page.partners.tabs} />
        <div className="section-heading">
          <Text className="news-page-kicker">Logo Wall</Text>
          <Title level={2}>{copy.sectionTitle}</Title>
          <Paragraph>{copy.sectionDescription}</Paragraph>
        </div>
        <div className="doc-logo-wall">
          {partnerBrandWall.map((item) => (
            <div key={item} className="doc-logo-chip">
              {item}
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
