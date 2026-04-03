import { Typography } from 'antd';
import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import UpdatePageState from '../components/UpdatePageState';
import { useI18n } from '../i18n/I18nProvider';
import SiteLayout from '../layouts/SiteLayout';
import { assetPath } from '../utils/base';

const { Title, Paragraph, Text } = Typography;

export default function AboutCareersPage() {
  const { page } = useI18n();
  const copy = page.aboutCareers;

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      hero={
        <ImmersivePageHero
          prefix="about-page-hero"
          media={<img src={assetPath('/media/company-news-briefing.jpg')} alt="Navlyn careers" decoding="async" />}
          tag="Careers"
          title={copy.heroTitle}
          description={copy.heroDescription}
        />
      }
    >
      <section className="page-section doc-jobs-stage">
        <SubpageTabNav items={page.aboutTabs} />
        <div className="section-heading">
          <Text className="news-page-kicker">Hiring Categories</Text>
          <Title level={2}>{copy.sectionTitle}</Title>
          <Paragraph>{copy.sectionDescription}</Paragraph>
        </div>
        <div className="doc-career-banner">
          <img src={assetPath('/media/logo-white.png')} alt="Navlyn" />
          <div className="doc-career-banner-copy">
            <Text className="panel-label">{copy.bannerLabel}</Text>
            <Title level={3}>{copy.bannerTitle}</Title>
            <Paragraph>{copy.bannerDescription}</Paragraph>
          </div>
        </div>
        <div className="doc-career-points">
          {copy.highlights.map((item) => (
            <article key={item} className="doc-career-point">
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
        <div className="doc-jobs-grid">
          {copy.previewCards.map((item) => (
            <article key={item.title} className="doc-jobs-card">
              <Title level={3}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section doc-placeholder-stage">
        <UpdatePageState
          kicker="Careers"
          title={copy.updateTitle}
          description={copy.updateDescription}
        />
      </section>
    </SiteLayout>
  );
}
