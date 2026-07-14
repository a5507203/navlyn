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

  it('keeps the hero carousel automatic without rendering a pause control', () => {
    renderHomePage();

    expect(document.querySelector('.hero-carousel-toggle')).toBeNull();
    expect(document.querySelectorAll('.hero-product-dot')).toHaveLength(5);
    expect(activeSlideIndex('.hero-product-slide')).toBe(0);
    expect(document.querySelector<HTMLImageElement>('.hero-product-slide.is-active img')?.src)
      .toContain('/media/Homepage%20Carousel/arc-gcs.jpg');

    const secondHeroDot = document.querySelectorAll<HTMLButtonElement>('.hero-product-dot')[1];
    fireEvent.click(secondHeroDot);
    expect(activeSlideIndex('.hero-product-slide')).toBe(1);

    act(() => {
      vi.advanceTimersByTime(5_200);
    });
    expect(activeSlideIndex('.hero-product-slide')).toBe(2);
  });

  it('lets the user pause and resume the news carousel', () => {
    renderHomePage();

    const newsPauseButton = document.querySelector<HTMLButtonElement>('.news-carousel-toggle');
    expect(newsPauseButton).not.toBeNull();
    fireEvent.click(newsPauseButton!);

    const pausedNewsIndex = activeSlideIndex('.news-carousel-slide');
    const newsSlideCount = document.querySelectorAll('.news-carousel-slide').length;

    act(() => {
      vi.advanceTimersByTime(5_000);
    });
    expect(activeSlideIndex('.news-carousel-slide')).toBe(pausedNewsIndex);

    fireEvent.click(newsPauseButton!);
    act(() => {
      vi.advanceTimersByTime(5_000);
    });
    expect(activeSlideIndex('.news-carousel-slide')).toBe((pausedNewsIndex + 1) % newsSlideCount);
  });

  it('starts both carousels paused when reduced motion is preferred', () => {
    installMotionPreference(true);
    renderHomePage();

    expect(document.querySelector('.hero-carousel-toggle')).toBeNull();
    expect(screen.getAllByRole('button', { name: '继续轮播' })).toHaveLength(1);

    act(() => {
      vi.advanceTimersByTime(10_400);
    });

    expect(activeSlideIndex('.hero-product-slide')).toBe(0);
    expect(activeSlideIndex('.news-carousel-slide')).toBe(0);
  });
});
