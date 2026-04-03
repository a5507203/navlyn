import { Typography } from 'antd';
import { useI18n } from '../i18n/I18nProvider';
import SiteLayout from '../layouts/SiteLayout';
import { assetPath } from '../utils/base';

const { Title, Paragraph, Text } = Typography;

export default function ArcPage() {
  const { page } = useI18n();
  const copy = page.arc;

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      hero={
        <section className="arc-hero">
          <div className="arc-hero-media">
            <img src={assetPath('/media/arc-engine-01.jpg')} alt="NAVLYN ARC" />
          </div>
          <div className="arc-hero-overlay" />
          <div className="arc-hero-copy">
            <Title level={1} className="arc-hero-title">
              {copy.heroTitle}
            </Title>
            <Text className="arc-hero-subtitle">
              {copy.heroSubtitle}
            </Text>
          </div>
          <div className="arc-hero-feature">
            <img
              src={assetPath('/media/arc-engine-02.jpg')}
              alt="Voice Control"
              className="arc-hero-feature-image"
              loading="lazy"
              decoding="async"
            />
            <div className="arc-hero-feature-copy">
              <Text className="arc-hero-feature-label">
                {copy.features[0].label}
              </Text>
              <Title level={2} className="arc-hero-feature-title">
                {copy.features[0].title}
              </Title>
              <Paragraph className="arc-hero-feature-desc">
                {copy.features[0].description}
              </Paragraph>
            </div>
          </div>
          <div className="arc-hero-feature">
            <img
              src={assetPath('/media/arc-engine-03.jpg')}
              alt="Voice Control"
              className="arc-hero-feature-image"
              loading="lazy"
              decoding="async"
            />
            <div className="arc-hero-feature-copy">
              <Text className="arc-hero-feature-label">
                {copy.features[1].label}
              </Text>
              <Title level={2} className="arc-hero-feature-title">
                {copy.features[1].title}
              </Title>
              <Paragraph className="arc-hero-feature-desc">
                {copy.features[1].description}
              </Paragraph>
            </div>
          </div>
          <div className="arc-hero-feature">
            <img
              src={assetPath('/media/arc-engine-04.jpg')}
              alt="Voice Control"
              className="arc-hero-feature-image"
              loading="lazy"
              decoding="async"
            />
            <div className="arc-hero-feature-copy">
              <Text className="arc-hero-feature-label">
                {copy.features[2].label}
              </Text>
              <Title level={2} className="arc-hero-feature-title">
                {copy.features[2].title}
              </Title>
              <Paragraph className="arc-hero-feature-desc">
                {copy.features[2].description}
              </Paragraph>
            </div>
          </div>
          <div className="arc-hero-feature">
            <img
              src={assetPath('/media/arc-engine-05.jpg')}
              alt="Voice Control"
              className="arc-hero-feature-image"
              loading="lazy"
              decoding="async"
            />
            <div className="arc-hero-feature-copy">
              <Text className="arc-hero-feature-label">
                {copy.features[3].label}
              </Text>
              <Title level={2} className="arc-hero-feature-title">
                {copy.features[3].title}
              </Title>
              <Paragraph className="arc-hero-feature-desc">
                {copy.features[3].description}
              </Paragraph>
            </div>
          </div>
        </section>
      }
    ></SiteLayout>
  );
}
