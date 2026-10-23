import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { I18nProvider } from '../i18n/I18nProvider';
import SiteLayout from './SiteLayout';

function renderLayout() {
  return render(
    <HelmetProvider>
      <MemoryRouter
        initialEntries={['/']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <I18nProvider>
          <SiteLayout title="Test" description="Test description">
            <main>Content</main>
          </SiteLayout>
        </I18nProvider>
      </MemoryRouter>
    </HelmetProvider>,
  );
}

describe('SiteLayout navigation', () => {
  const getComputedStyle = window.getComputedStyle.bind(window);

  beforeEach(() => {
    window.localStorage.clear();
    vi.spyOn(window, 'getComputedStyle').mockImplementation((element) =>
      getComputedStyle(element),
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('opens the Miying external experience from desktop and mobile navigation', async () => {
    const user = userEvent.setup();
    renderLayout();

    const header = document.querySelector('header');
    expect(header).not.toBeNull();
    const desktopLink = within(header as HTMLElement).getByRole('link', {
      name: '觅影 (在新标签页打开)',
    });
    expect(desktopLink).toHaveAttribute('href', 'http://47.107.185.207/ai-module/');
    expect(desktopLink).toHaveAttribute('target', '_blank');
    expect(desktopLink).toHaveAttribute('rel', 'noreferrer');

    await user.click(screen.getByRole('button', { name: '打开导航菜单' }));
    const drawer = await screen.findByRole('dialog');
    const mobileLink = within(drawer).getByRole('link', {
      name: '觅影 (在新标签页打开)',
    });
    expect(mobileLink).toHaveAttribute('href', 'http://47.107.185.207/ai-module/');
    expect(mobileLink).toHaveAttribute('target', '_blank');
    expect(mobileLink).toHaveAttribute('rel', 'noreferrer');
  });
});
