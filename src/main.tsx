import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { I18nProvider } from './i18n/I18nProvider';
import { browserRouterFuture } from './routerConfig';
import { routerBasename } from './utils/base';
import './styles/base.css';
import './styles/shared-ui.css';
import './styles/footer.css';
import './styles/header.css';
import './styles/home-hero.css';
import './styles/home-immersive.css';
import './styles/home-content.css';
import './styles/subpage-hero.css';
import './styles/route-hero.css';
import './styles/document-core.css';
import './styles/document-feature-pages.css';
import './styles/news.css';
import './styles/contact.css';
import './styles/product-catalog.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#3c8cff',
            colorInfo: '#3c8cff',
            colorBgBase: '#050816',
            fontFamily:
              '"Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif',
            borderRadius: 18,
          },
        }}
      >
        <I18nProvider>
          <BrowserRouter basename={routerBasename} future={browserRouterFuture}>
            <App />
          </BrowserRouter>
        </I18nProvider>
      </ConfigProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
