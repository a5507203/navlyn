import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { I18nProvider } from '../i18n/I18nProvider';
import type { Locale } from '../i18n/messages';
import ContactPage from './ContactPage';

function renderContactPage(locale: Locale) {
  window.localStorage.setItem('navlyn-locale', locale);

  return render(
    <HelmetProvider>
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <I18nProvider>
          <ContactPage />
        </I18nProvider>
      </MemoryRouter>
    </HelmetProvider>,
  );
}

describe('ContactPage', () => {
  it('shows the WeChat QR code only for the Chinese locale', () => {
    const { unmount } = renderContactPage('zh');

    expect(document.querySelector('.contact-direct-card img')).toBeInTheDocument();

    unmount();
    renderContactPage('en');

    expect(document.querySelector('.contact-direct-card')).not.toBeInTheDocument();
  });

  it('renders the localized inquiry form with a required description', () => {
    renderContactPage('en');

    expect(screen.getByRole('heading', { name: 'Reach out to our team' })).toBeInTheDocument();
    expect(screen.getByLabelText(/Country \/ Region/)).toBeRequired();
    expect(screen.getByLabelText(/Work email/)).toHaveAttribute('type', 'email');
    expect(screen.getByLabelText('Phone number')).not.toBeRequired();
    expect(screen.getByLabelText('Company / Organization name')).not.toBeRequired();
    expect(screen.getByLabelText('Company / Organization website')).not.toBeRequired();
    expect(screen.getByLabelText(/Description/)).toBeRequired();
    expect(screen.getByRole('button', { name: 'Send inquiry by email' })).toBeInTheDocument();
  });
});
