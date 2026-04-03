/*
 * @Author: Icon oncwnuEuU001JU72QF0Wv2zwAqd0@git.weixin.qq.com
 * @Date: 2026-03-27 20:42:48
 * @LastEditors: Icon oncwnuEuU001JU72QF0Wv2zwAqd0@git.weixin.qq.com
 * @LastEditTime: 2026-04-02 10:58:34
 * @FilePath: /Navlyn_home/src/pages/AboutPage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Typography } from 'antd';
import { useI18n } from '../i18n/I18nProvider';
import SiteLayout from '../layouts/SiteLayout';
import { assetPath } from '../utils/base';

const { Paragraph } = Typography;

export default function AboutPage() {
  const { page } = useI18n();
  const copy = page.about;

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      hero={
        <section className="about-hero">
          <div className="about-hero-media">
            <video
              className="about-hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={assetPath('/media/about-team-collab.jpg')}
            >
              <source src={assetPath('/media/about.mp4')} type="video/mp4" />
            </video>
          </div>
        </section>
      }
    >
      <section className="page-section about-content">
        <div className="about-content-wrapper">
          {copy.paragraphs.map((paragraph) => (
            <Paragraph key={paragraph} className="about-content-text">
              {paragraph}
            </Paragraph>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
