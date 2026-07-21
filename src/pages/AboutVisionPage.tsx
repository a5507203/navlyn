import { Typography } from 'antd';
import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import { useI18n } from '../i18n/I18nProvider';
import SiteLayout from '../layouts/SiteLayout';
import { assetPath } from '../utils/base';

const { Title, Paragraph, Text } = Typography;

export default function AboutVisionPage() {
  const { page } = useI18n();
  const copy = page.aboutVision;

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      hero={
        <ImmersivePageHero
          prefix="about-page-hero"
          media={<img src={assetPath('/media/about/team-collab.webp')} alt={copy.heroTitle} decoding="async" />}
          tag={copy.heroTitle}
          title={copy.heroTitle}
          description={copy.heroDescription}
        />
      }
    >
      <section className="page-section doc-story-stage">
        <SubpageTabNav items={page.aboutTabs} />
        <div className="section-heading">
          <Text className="news-page-kicker">{copy.heroTitle}</Text>
          <Title level={2}>{copy.sectionTitle}</Title>
          <Paragraph>{copy.sectionDescription}</Paragraph>
        </div>
        <div className="doc-vision-pillars">
          {copy.pillars.map((item) => (
            <article key={item.title} className="doc-vision-pillar">
              <Title level={3}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </article>
          ))}
        </div>
        <div className="doc-story-grid">
          {copy.milestones.map((item) => (
            <article key={item} className="doc-story-card">
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
