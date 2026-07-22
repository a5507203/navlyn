import { Button, Drawer, Dropdown, Layout, Menu, Space, Typography } from 'antd';
import type { MenuProps } from 'antd';
import {
  ClusterOutlined,
  CompassOutlined,
  ContactsOutlined,
  DeploymentUnitOutlined,
  DownOutlined,
  FacebookFilled,
  HomeOutlined,
  InfoCircleOutlined,
  LinkedinFilled,
  MenuOutlined,
  YoutubeFilled,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import Seo from '../components/Seo';
import { footerNavGroups, footerSocialLinks, siteNavItems } from '../data/site';
import { localeOptions } from '../i18n/messages';
import type { Locale } from '../i18n/messages';
import { useI18n } from '../i18n/I18nProvider';
import { assetPath } from '../utils/base';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const navIcons = {
  home: <HomeOutlined />,
  arc: <ClusterOutlined />,
  air: <DeploymentUnitOutlined />,
  sea: <CompassOutlined />,
  partners: <ContactsOutlined />,
  about: <InfoCircleOutlined />,
} as const;

const footerSocialIcons = {
  linkedin: <LinkedinFilled />,
  facebook: <FacebookFilled />,
  youtube: <YoutubeFilled />,
} as const;

const flagStarPath = 'M0-1 .5878.809-.9511-.309H.9511L-.5878.809Z';

function LanguageFlag({ locale }: { locale: Locale }) {
  return (
    <span className="language-flag-icon" data-locale={locale} aria-hidden="true">
      {locale === 'zh' ? (
        <svg viewBox="0 0 30 20" focusable="false">
          <path d={flagStarPath} transform="translate(5 5) scale(3)" />
          <path d={flagStarPath} transform="translate(10 2) rotate(23.04)" />
          <path d={flagStarPath} transform="translate(12 4) rotate(45.87)" />
          <path d={flagStarPath} transform="translate(12 7) rotate(69.95)" />
          <path d={flagStarPath} transform="translate(10 9) rotate(20.66)" />
        </svg>
      ) : null}
    </span>
  );
}

interface SiteLayoutProps extends PropsWithChildren {
  title: string;
  description: string;
  hero?: ReactNode;
  showFooter?: boolean;
  contentClassName?: string;
}

export default function SiteLayout({
  title,
  description,
  hero,
  children,
  showFooter = true,
  contentClassName,
}: SiteLayoutProps) {
  const location = useLocation();
  const { locale, setLocale, shell } = useI18n();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const activeNavPath =
    siteNavItems.find(
      (item) => item.path === location.pathname || (item.path !== '/' && location.pathname.startsWith(`${item.path}/`)),
    )?.path ?? location.pathname;

  const createMenuItems = (showIcons: boolean): MenuProps['items'] =>
    siteNavItems.map((item) => ({
      key: item.path,
      icon: showIcons ? navIcons[item.iconKey] : undefined,
      label: <Link to={item.path}>{shell.nav[item.key]}</Link>,
    }));

  const mobileMenuItems = createMenuItems(true);

  const languageItems: MenuProps['items'] = localeOptions.map((item) => ({
    key: item.key,
    label: item.label,
  }));

  return (
    <Layout className="site-shell">
      <Seo title={title} description={description} />
      <Header className="site-header">
        <div className="site-header-side site-header-side-left">
          <Link to="/" className="brand-mark">
            <img src={assetPath('/media/brand/logo-header-white.png')} alt="Navlyn 航链科技" />
          </Link>
        </div>
        <div className="site-header-center">
          <nav className="desktop-nav" aria-label={shell.accessibility.mainNav}>
            {siteNavItems.map((item) => {
              const isActive = activeNavPath === item.path;

              return (
                <Link key={item.path} to={item.path} className={`desktop-nav-link${isActive ? ' is-active' : ''}`}>
                  {item.key !== 'about' ? (
                    <span className="desktop-nav-icon" aria-hidden="true">
                      {navIcons[item.iconKey]}
                    </span>
                  ) : null}
                  <span className="desktop-nav-text">{shell.nav[item.key]}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="site-header-side site-header-side-right">
          <Space size="middle" className="header-actions-desktop">
            <Dropdown
              menu={{
                items: languageItems,
                selectable: true,
                selectedKeys: [locale],
                onClick: ({ key }) => setLocale(key as typeof locale),
              }}
              trigger={['click']}
              placement="bottomRight"
            >
              <Button type="default" ghost className="header-language-button">
                <LanguageFlag locale={locale} />
                <span>{shell.languageLabel}</span>
                <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </div>
        <div className="header-actions-mobile">
          <Button
            className="mobile-menu-trigger"
            type="default"
            ghost
            icon={<MenuOutlined />}
            onClick={() => setMobileNavOpen(true)}
            aria-label={shell.accessibility.openMenu}
          />
        </div>
      </Header>
      <Drawer
        title="Navlyn"
        placement="right"
        width={320}
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        rootClassName="mobile-nav-drawer"
      >
        <Menu
          mode="inline"
          selectedKeys={[activeNavPath]}
          items={mobileMenuItems}
          onClick={() => setMobileNavOpen(false)}
        />
        <div className="mobile-nav-actions">
          <Dropdown
            menu={{
              items: languageItems,
              selectable: true,
              selectedKeys: [locale],
              onClick: ({ key }) => setLocale(key as typeof locale),
            }}
            trigger={['click']}
            placement="bottomRight"
          >
            <Button block type="default" ghost className="header-language-button mobile-language-button">
              <LanguageFlag locale={locale} />
              <span>{shell.languageLabel}</span>
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Drawer>
      <Content>
        {hero}
        {children ? <div className={`page-shell${contentClassName ? ` ${contentClassName}` : ''}`}>{children}</div> : null}
      </Content>
      <Link to="/contact" className="site-contact-float" aria-label={shell.accessibility.contactLink}>
        <span className="site-contact-float-en">{shell.contactFloat.title}</span>
        <span className="site-contact-float-zh">{shell.contactFloat.subtitle}</span>
      </Link>
      {showFooter ? (
        <Footer className="site-footer">
          <div className="site-footer-inner">
            <div className="site-footer-main">
              <div className="site-footer-brand">
                <img
                  className="site-footer-brand-mark"
                  src={assetPath('/media/brand/mark-blue.webp')}
                  alt="Navlyn"
                />
                <p className="site-footer-brand-copy">{shell.footer.summary}</p>
                <div className="site-footer-socials">
                  {footerSocialLinks.map((item) => (
                    <a
                      key={item.key}
                      className="site-footer-social-link"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      title={item.label}
                    >
                      {footerSocialIcons[item.key]}
                    </a>
                  ))}
                </div>
                <Link className="site-footer-contact-link" to="/contact">
                  {shell.contactFloat.title}
                </Link>
              </div>

              <div className="site-footer-grid">
                {footerNavGroups.map((group) => (
                  <div key={group.key} className="site-footer-group">
                    <Text className="site-footer-group-title">{shell.footer.groups[group.key]}</Text>
                    <div className="site-footer-links">
                      {group.items.map((item) =>
                        item.path ? (
                          <Link key={item.key} className="site-footer-link" to={item.path}>
                            {shell.footer.items[item.key]}
                          </Link>
                        ) : (
                          <span key={item.key} className="site-footer-link is-static">
                            {shell.footer.items[item.key]}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="site-footer-bottom">
              <Text>© 2026 Navlyn. All rights reserved.</Text>
            </div>
          </div>
        </Footer>
      ) : null}
    </Layout>
  );
}
