import { Typography } from 'antd';
import type { ReactNode } from 'react';

const { Title, Paragraph, Text } = Typography;

interface ImmersivePageHeroProps {
  prefix: string;
  media: ReactNode;
  tag: string;
  title: string;
  description: string;
  extra?: ReactNode;
}

export default function ImmersivePageHero({
  prefix,
  media,
  tag,
  title,
  description,
  extra,
}: ImmersivePageHeroProps) {
  return (
    <section className={prefix}>
      <div className={`${prefix}-media`}>{media}</div>
      <div className={`${prefix}-overlay`} />
      <div className={`${prefix}-shell`}>
        <div className={`${prefix}-copy`}>
          <Text className={`${prefix}-tag`}>{tag}</Text>
          <Title>{title}</Title>
          <Paragraph>{description}</Paragraph>
        </div>

        {extra}
      </div>
    </section>
  );
}
