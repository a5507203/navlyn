import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from './App';
import { I18nProvider } from './i18n/I18nProvider';

describe('ARC GCS download route', () => {
  it('renders the download page at its canonical route', async () => {
    window.localStorage.setItem('navlyn-locale', 'zh');

    render(
      <HelmetProvider>
        <MemoryRouter
          initialEntries={['/downloads/arc-gcs']}
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <I18nProvider>
            <App />
          </I18nProvider>
        </MemoryRouter>
      </HelmetProvider>,
    );

    expect(
      await screen.findByRole(
        'heading',
        { level: 1, name: '下载 ARC GCS' },
        { timeout: 5_000 },
      ),
    ).toBeInTheDocument();
  });
});
