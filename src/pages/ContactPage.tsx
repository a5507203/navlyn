/*
 * @Author: Icon oncwnuEuU001JU72QF0Wv2zwAqd0@git.weixin.qq.com
 * @Date: 2026-03-20 15:31:54
 * @LastEditors: Icon oncwnuEuU001JU72QF0Wv2zwAqd0@git.weixin.qq.com
 * @LastEditTime: 2026-04-03 09:08:26
 * @FilePath: /Navlyn_home/src/pages/ContactPage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import SiteLayout from '../layouts/SiteLayout';
import { useI18n } from '../i18n/I18nProvider';
import { assetPath } from '../utils/base';

export default function ContactPage() {
  const { page } = useI18n();
  const copy = page.contact;

  return (
    <SiteLayout
      title={copy.seoTitle}
      description={copy.seoDescription}
      contentClassName="contact-page-shell"
    >
      <section className="contact-direct">
        <div className="contact-direct-grid">
          <div className="contact-direct-copy">
            <span className="contact-direct-kicker">{copy.panel.kicker}</span>
            <h1 className="contact-direct-title">{copy.heroTitle}</h1>

            {copy.heroDescription ? (
              <div className="contact-direct-cn">
                <p>{copy.heroDescription}</p>
              </div>
            ) : null}

            <div className="contact-direct-en">
              <h2>{copy.panel.sideTitle}</h2>
              <p>{copy.panel.sideDescription}</p>
              <ul>
                <li>
                  <strong>+86 190 1288 5610</strong>
                </li>
                <li>
                  <strong>support@navlyn.com</strong>
                </li>
                <li>
                  <strong>{page.common.businessAddress}</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-direct-media">
            <div className="contact-direct-card">
              <img src={assetPath('/media/contact-code.png')} alt={copy.panel.sideTitle} />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
