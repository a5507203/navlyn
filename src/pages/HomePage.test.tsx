import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { I18nProvider } from '../i18n/I18nProvider';
import HomePage from './HomePage';

function installMotionPreference(matches: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(() => false),
    })),
  });
}

function renderHomePage() {
  return render(
    <HelmetProvider>
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <I18nProvider>
          <HomePage />
        </I18nProvider>
      </MemoryRouter>
    </HelmetProvider>,
  );
}

function activeSlideIndex(selector: string) {
  return Array.from(document.querySelectorAll(selector)).findIndex((slide) =>
    slide.classList.contains('is-active'),
  );
}

describe('HomePage automatic carousels', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    installMotionPreference(false);
  });

  afterEach(() => {
    cleanup();
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('lets the user pause and resume each automatic carousel', () => {
    renderHomePage();

    const pauseButtons = screen.getAllByRole('button', { name: '暂停轮播' });
    expect(pauseButtons).toHaveLength(2);
    expect(activeSlideIndex('.hero-product-slide')).toBe(0);

    fireEvent.click(pauseButtons[0]);
    expect(screen.getAllByRole('button', { name: '继续轮播' })).toHaveLength(1);

    act(() => {
      vi.advanceTimersByTime(5_200);
    });
    expect(activeSlideIndex('.hero-product-slide')).toBe(0);

    fireEvent.click(screen.getByRole('button', { name: '继续轮播' }));
    act(() => {
      vi.advanceTimersByTime(5_200);
    });
    expect(activeSlideIndex('.hero-product-slide')).toBe(1);

    const newsPauseButton = screen.getAllByRole('button', { name: '暂停轮播' })[1];
    fireEvent.click(newsPauseButton);
    const pausedNewsIndex = activeSlideIndex('.news-carousel-slide');
    const newsSlideCount = document.querySelectorAll('.news-carousel-slide').length;
    act(() => {
      vi.advanceTimersByTime(5_000);
    });
    expect(activeSlideIndex('.news-carousel-slide')).toBe(pausedNewsIndex);

    fireEvent.click(screen.getByRole('button', { name: '继续轮播' }));
    act(() => {
      vi.advanceTimersByTime(5_000);
    });
    expect(activeSlideIndex('.news-carousel-slide')).toBe((pausedNewsIndex + 1) % newsSlideCount);
  });

  it('starts both carousels paused when reduced motion is preferred', () => {
    installMotionPreference(true);
    renderHomePage();

    expect(screen.getAllByRole('button', { name: '继续轮播' })).toHaveLength(2);

    act(() => {
      vi.advanceTimersByTime(10_400);
    });

    expect(activeSlideIndex('.hero-product-slide')).toBe(0);
    expect(activeSlideIndex('.news-carousel-slide')).toBe(0);
  });
});
