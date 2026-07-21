import IndustryShowcaseSection from "../components/IndustryShowcaseSection";
import { useI18n } from "../i18n/I18nProvider";
import SiteLayout from "../layouts/SiteLayout";
import "../styles/home-immersive.css";
import "../styles/home-content.css";

export default function IndustriesPage() {
  const { page } = useI18n();
  const copy = page.home.industries;

  return (
    <SiteLayout
      title={`${copy.title} | Navlyn`}
      description={copy.description}
    >
      <IndustryShowcaseSection className="industry-showcase-section-page" />
    </SiteLayout>
  );
}
