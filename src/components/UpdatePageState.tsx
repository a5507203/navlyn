import { Typography } from 'antd';
import { useI18n } from '../i18n/I18nProvider';

const { Title, Paragraph, Text } = Typography;

interface UpdatePageStateProps {
  kicker: string;
  title: string;
  description: string;
}

export default function UpdatePageState({ kicker, title, description }: UpdatePageStateProps) {
  const { page } = useI18n();

  return (
    <section className="doc-update-state">
      <Text className="news-page-kicker">{kicker}</Text>
      <Title level={2}>{title}</Title>
      <Paragraph>{description}</Paragraph>
      <div className="doc-update-badge">{page.common.updateBadge}</div>
    </section>
  );
}
