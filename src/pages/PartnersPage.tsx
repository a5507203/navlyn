/*
 * @Author: Icon oncwnuEuU001JU72QF0Wv2zwAqd0@git.weixin.qq.com
 * @Date: 2026-03-27 20:44:53
 * @LastEditors: Icon oncwnuEuU001JU72QF0Wv2zwAqd0@git.weixin.qq.com
 * @LastEditTime: 2026-04-02 10:42:44
 * @FilePath: /Navlyn_home/src/pages/PartnersPage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';
import SiteLayout from '../layouts/SiteLayout';
import { assetPath } from '../utils/base';

const { Paragraph } = Typography;

export default function PartnersPage() {
  const { page } = useI18n();
  const copy = page.partners;

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      hero={
        <section className="partners-hero">
          <div className="partners-hero-media">
            <img src={assetPath('/media/partners/hero.webp')} alt="Partners" decoding="async" />
          </div>
          <div className="partners-hero-overlay" />
          <div className="partners-hero-copy">
            <h1 className="partners-hero-title">{copy.heroTitle}</h1>
            <p className="partners-hero-subtitle">{copy.heroSubtitle}</p>
          </div>
        </section>
      }
    >
      <section className="page-section partners-content">
        <div className="partners-content-wrapper">
          {copy.paragraphs.map((paragraph) => (
            <Paragraph key={paragraph} className="partners-content-text">
              {paragraph}
            </Paragraph>
          ))}
          <div className="partners-content-cta">
            <Link to="/contact" className="partners-cta-button">
              {copy.cta}
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
