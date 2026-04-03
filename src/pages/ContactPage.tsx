/*
 * @Author: Icon oncwnuEuU001JU72QF0Wv2zwAqd0@git.weixin.qq.com
 * @Date: 2026-03-20 15:31:54
 * @LastEditors: Icon oncwnuEuU001JU72QF0Wv2zwAqd0@git.weixin.qq.com
 * @LastEditTime: 2026-04-03 09:08:26
 * @FilePath: /Navlyn_home/src/pages/ContactPage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import SiteLayout from '../layouts/SiteLayout';
import { assetPath } from '../utils/base';

export default function ContactPage() {
  return (
    <SiteLayout
      title="联系我们 | Navlyn 航链科技"
      description="联系 Navlyn 航链科技，获取 ARC ENGINE、产品体系与低空智能解决方案支持。"
      contentClassName="contact-page-shell"
    >
      <section className="contact-direct">
        <div className="contact-direct-grid">
          <div className="contact-direct-copy">
            <span className="contact-direct-kicker">CONTACT US</span>
            <h1 className="contact-direct-title">联系我们</h1>

            <div className="contact-direct-cn">
              <p>联系方式：+86 190 1288 5610</p>
              <p>总部：中国·浙江</p>
            </div>

            <div className="contact-direct-en">
              <h2>Contact Us</h2>
              <ul>
                <li>
                  <strong>Direct Line:</strong>
                  <strong>+86 190 1288 5610</strong>
                </li>
                <li>
                  <strong>Address:</strong>
                  <strong>ZHEJIANG, CN // 30.27° N, 120.15° E</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-direct-media">
            <div className="contact-direct-card">
              <img src={assetPath('/media/contact-code.png')} alt="Navlyn 联系二维码" />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
