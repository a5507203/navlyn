import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { I18nProvider, useI18n } from './I18nProvider';

function LocaleProbe() {
  const { locale, contentLocale } = useI18n();

  return (
    <output aria-label="active locale">
      {locale}:{contentLocale}
    </output>
  );
}

function renderLocaleProbe(storedLocale: string) {
  window.localStorage.setItem('navlyn-locale', storedLocale);

  return render(
    <I18nProvider>
      <LocaleProbe />
    </I18nProvider>,
  );
}

describe('I18nProvider supported locales', () => {
  it.each(['fr', 'es'])('falls the retired %s locale back to Chinese', async (storedLocale) => {
    renderLocaleProbe(storedLocale);

    expect(screen.getByRole('status', { name: 'active locale' })).toHaveTextContent('zh:zh');
    await waitFor(() => {
      expect(window.localStorage.getItem('navlyn-locale')).toBe('zh');
      expect(document.documentElement.lang).toBe('zh');
    });
  });

  it('keeps a stored English locale active', async () => {
    renderLocaleProbe('en');

    expect(screen.getByRole('status', { name: 'active locale' })).toHaveTextContent('en:en');
    await waitFor(() => {
      expect(window.localStorage.getItem('navlyn-locale')).toBe('en');
      expect(document.documentElement.lang).toBe('en');
    });
  });
});
