import { Typography } from "antd";
import { homeIndustryService } from "../data/home";
import { useI18n } from "../i18n/I18nProvider";

const { Title, Paragraph, Text } = Typography;

interface IndustryShowcaseSectionProps {
  className?: string;
}

export default function IndustryShowcaseSection({
  className,
}: IndustryShowcaseSectionProps) {
  const { page } = useI18n();
  const copy = page.home.industries;
  const sectionClassName = [
    "section-block",
    "industry-showcase-section",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName}>
      <div className="industry-showcase-heading">
        <Text className="industry-showcase-kicker">{copy.kicker}</Text>
        <Title level={2}>{copy.title}</Title>
        <Paragraph className="industry-showcase-lead section-lead-copy">
          {copy.description}
        </Paragraph>
        <div
          className="industry-showcase-stats"
          aria-label={`${copy.title} stats`}
        >
          {copy.stats.map((stat) => (
            <span key={stat} className="industry-showcase-stat">
              {stat}
            </span>
          ))}
        </div>
      </div>
      <div className="industry-showcase-stage">
        <div className="industry-showcase-grid">
          {homeIndustryService.cards.map((card) => (
            <article
              key={card.key}
              className={`industry-showcase-card industry-showcase-card-${card.key}`}
            >
              <div className="industry-showcase-card-visual">
                <img
                  className="industry-showcase-card-image"
                  src={card.image}
                  alt={card.imageAlt}
                  style={{ objectPosition: card.imagePosition }}
                  loading="lazy"
                  decoding="async"
                />
                <span className="industry-showcase-card-scene">
                  {card.scene}
                </span>
                <div
                  className="industry-showcase-card-visual-glow"
                  aria-hidden="true"
                />
              </div>
              <div className="industry-showcase-card-copy">
                <Text className="industry-showcase-card-kicker">
                  {card.titleEn}
                </Text>
                <Title level={3}>
                  {copy.cards[card.key as keyof typeof copy.cards].title}
                </Title>
                <Paragraph>
                  {copy.cards[card.key as keyof typeof copy.cards].summary}
                </Paragraph>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
