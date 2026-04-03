import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

export default function NotFoundPage() {
  const { page } = useI18n();
  const copy = page.notFound;

  return (
    <SiteLayout title={copy.seoTitle} description={copy.seoDescription}>
      <section className="page-section not-found-page">
        <div className="section-heading not-found-copy">
          <Text className="news-page-kicker">404</Text>
          <Title level={1}>{copy.title}</Title>
          <Paragraph>{copy.description}</Paragraph>
        </div>

        <div className="not-found-actions">
          <Link to="/" className="ant-btn ant-btn-primary ant-btn-lg button-link">
            {page.common.backHome}
          </Link>
          <Link to="/products" className="ant-btn ant-btn-default ant-btn-lg button-link">
            {page.common.viewProducts}
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
