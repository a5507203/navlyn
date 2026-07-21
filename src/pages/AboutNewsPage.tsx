import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import { getNewsItems, formatNewsDate } from '../data/news';
import { useI18n } from '../i18n/I18nProvider';
import SiteLayout from '../layouts/SiteLayout';
import { assetPath } from '../utils/base';

const { Title, Paragraph, Text } = Typography;

export default function AboutNewsPage() {
  const { contentLocale, locale, page } = useI18n();
  const copy = page.aboutNews;
  const newsItems = getNewsItems(contentLocale);

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      hero={
        <ImmersivePageHero
          prefix="about-page-hero"
          media={<img src={assetPath('/media/about/news-feature.webp')} alt={copy.heroTitle} decoding="async" />}
          tag={copy.heroTitle}
          title={copy.heroTitle}
          description={copy.heroDescription}
        />
      }
    >
      <section className="page-section doc-news-stage">
        <SubpageTabNav items={page.aboutTabs} />
        <div className="section-heading">
          <Text className="news-page-kicker">{copy.heroTitle}</Text>
          <Title level={2}>{copy.sectionTitle}</Title>
          <Paragraph>{copy.sectionDescription}</Paragraph>
        </div>
        <div className="doc-news-list">
          {newsItems.map((item) => (
            <Link
              key={item.title}
              className="doc-news-item"
              to={`/news/${item.slug}`}
            >
              <div className="doc-news-item-media">
                <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
              </div>
              <div className="doc-news-item-copy">
                <Text className="panel-label">{item.tag}</Text>
                <Title level={3}>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
                <span>
                  {formatNewsDate(item.date, locale)} · {item.location}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
