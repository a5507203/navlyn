import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import type { ArcGcsDownloadUrls } from '../config/arcGcs';
import { I18nProvider } from '../i18n/I18nProvider';
import type { Locale } from '../i18n/messages';
import ArcGcsDownloadPage from './ArcGcsDownloadPage';

const unavailableDownloads: ArcGcsDownloadUrls = {
  windows: undefined,
  macos: undefined,
  android: undefined,
};

function renderDownloadPage(
  locale: Locale = 'zh',
  downloadUrls: ArcGcsDownloadUrls = unavailableDownloads,
) {
  window.localStorage.setItem('navlyn-locale', locale);

  return render(
    <HelmetProvider>
      <MemoryRouter
        initialEntries={['/downloads/arc-gcs']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <I18nProvider>
          <ArcGcsDownloadPage downloadUrls={downloadUrls} />
        </I18nProvider>
      </MemoryRouter>
    </HelmetProvider>,
  );
}

describe('ArcGcsDownloadPage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renders the current version and three unavailable platform releases', () => {
    renderDownloadPage();

    expect(
      screen.getByRole('heading', { level: 1, name: '下载 ARC GCS' }),
    ).toBeInTheDocument();
    expect(screen.getByText('v1.0.0')).toBeInTheDocument();
    expect(
      Array.from(
        document.querySelectorAll<HTMLElement>(
          '.arc-gcs-download-platform-action',
        ),
        (action) => action.dataset.platform,
      ),
    ).toEqual(['windows', 'macos', 'android']);

    expect(
      screen.getByRole('button', { name: 'Windows 版即将开放' }),
    ).toBeDisabled();
    expect(
      screen.getByRole('button', { name: 'macOS 版即将开放' }),
    ).toBeDisabled();
    expect(
      screen.getByRole('button', { name: 'Android 版即将开放' }),
    ).toBeDisabled();
    expect(
      document.querySelector('.arc-gcs-download-platform-action[href]'),
    ).toBeNull();
  });

  it('enables only the platform with a configured URL', () => {
    renderDownloadPage('zh', {
      windows: 'https://downloads.example.com/arc-gcs/windows.exe',
      android: undefined,
      macos: undefined,
    });

    expect(
      screen.getByRole('link', { name: '下载 Windows 版' }),
    ).toHaveAttribute(
      'href',
      'https://downloads.example.com/arc-gcs/windows.exe',
    );
    expect(screen.getByText('选择平台下载安装')).toBeVisible();
    expect(
      screen.getByRole('button', { name: 'macOS 版即将开放' }),
    ).toBeDisabled();
    expect(
      screen.getByRole('button', { name: 'Android 版即将开放' }),
    ).toBeDisabled();
  });

  it('renders a configured macOS DMG as the Apple platform download', () => {
    renderDownloadPage('en', {
      windows: undefined,
      macos: 'https://downloads.example.com/arc-gcs/macos.dmg',
      android: undefined,
    });

    expect(
      screen.getByRole('link', { name: 'Download for macOS' }),
    ).toHaveAttribute(
      'href',
      'https://downloads.example.com/arc-gcs/macos.dmg',
    );
    expect(
      document.querySelector('[data-platform="macos"] .anticon-apple'),
    ).toBeInTheDocument();
  });

  it('keeps all nine FAQ answers visible and numbered in order', () => {
    renderDownloadPage();

    const faqItems = document.querySelectorAll('.arc-gcs-download-faq-item');
    expect(faqItems).toHaveLength(9);
    expect(
      Array.from(
        document.querySelectorAll('.arc-gcs-download-faq-index'),
        (index) => index.textContent,
      ),
    ).toEqual(['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9']);
    expect(screen.getByText(/航线与飞行记录可导出为 JSON/)).toBeVisible();
    expect(screen.getByText(/软件和飞行器会在起飞前执行安全检查/)).toBeVisible();
  });

  it('uses the complete English page structure', () => {
    renderDownloadPage('en');

    expect(
      screen.getByRole('heading', { level: 1, name: 'Download ARC GCS' }),
    ).toBeInTheDocument();
    expect(
      document.querySelectorAll('.arc-gcs-download-platform-action'),
    ).toHaveLength(3);
    expect(document.querySelectorAll('.arc-gcs-download-faq-item')).toHaveLength(9);
    expect(
      screen.getByRole('heading', {
        name: 'Installation and usage questions',
      }),
    ).toBeInTheDocument();
  });

  it('keeps the ARC GCS navigation section active on the download route', () => {
    renderDownloadPage();

    const arcNavLink = document.querySelector<HTMLAnchorElement>(
      '.desktop-nav-link[href="/arc-os"]',
    );
    expect(arcNavLink).toHaveClass('is-active');
    expect(arcNavLink).toHaveAttribute('aria-current', 'location');
  });
});
