import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { I18nProvider } from '../i18n/I18nProvider';
import type { Locale } from '../i18n/messages';
import ArcPage from './ArcPage';

function renderArcPage(locale: Locale = 'zh') {
  window.localStorage.setItem('navlyn-locale', locale);

  return render(
    <HelmetProvider>
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <I18nProvider>
          <ArcPage />
        </I18nProvider>
      </MemoryRouter>
    </HelmetProvider>,
  );
}

describe('ArcPage', () => {
  it('renders the approved capability sequence with web-compatible video behavior', () => {
    renderArcPage();

    expect(
      screen.getByRole('heading', { level: 1, name: 'ARC GCS｜低空 AI 操作系统' }),
    ).toBeInTheDocument();

    const featureHeadings = [
      'AI 语音助手｜极简操控，高效作业',
      '一键绘区｜自动生成测绘航线',
      '多形态混排｜全域任务一体规划',
      '智能风险预检｜前置防护，安全飞行',
    ];
    const renderedFeatureHeadings = Array.from(
      document.querySelectorAll<HTMLHeadingElement>('.arc-gcs-feature h2'),
      (heading) => heading.textContent,
    );
    expect(renderedFeatureHeadings).toEqual(featureHeadings);

    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>('.arc-gcs-video'));
    expect(videos).toHaveLength(4);
    expect(document.querySelector('.arc-gcs-flight-path')).toBeNull();
    expect(document.querySelector('.arc-gcs-video-bar')).toBeNull();
    expect(document.querySelectorAll('.arc-gcs-feature-title-long')).toHaveLength(1);
    expect(videos.map((video) => video.querySelector('source')?.getAttribute('src'))).toEqual([
      '/media/arc-gcs/videos/voice-assistant.mp4',
      '/media/arc-gcs/videos/area-routing.mp4',
      '/media/arc-gcs/videos/mixed-missions.mp4',
      '/media/arc-gcs/videos/risk-preflight.mp4',
    ]);

    for (const video of videos) {
      expect(video).toHaveAttribute('controls');
      expect(video).toHaveAttribute('playsinline');
      expect(video).toHaveAttribute('preload', 'none');
      expect(video).toHaveAttribute('poster');
    }
  });

  it('keeps unconfigured downloads visible but disabled and exposes after-sales email', () => {
    renderArcPage();

    const pendingLabels = screen.getAllByText('下载地址即将开放');
    expect(pendingLabels).toHaveLength(3);
    pendingLabels.forEach((pendingLabel) => {
      expect(pendingLabel.closest('button')).toBeDisabled();
    });

    expect(document.querySelector('.arc-gcs-page a[href="#"]')).toBeNull();
    expect(screen.getByRole('link', { name: /support@navlyn\.com/ })).toHaveAttribute(
      'href',
      'mailto:support@navlyn.com',
    );
  });

  it('uses localized ARC GCS copy without changing the page structure', () => {
    renderArcPage('en');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'ARC GCS | Low-Altitude AI Operating System',
      }),
    ).toBeInTheDocument();
    expect(document.querySelectorAll('.arc-gcs-feature')).toHaveLength(4);
    expect(screen.getByRole('heading', { name: 'ARC GCS Manual and Support' }))
      .toBeInTheDocument();
  });
});
