import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
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
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

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
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('submits through the real page flow, prevents duplicate requests, and resets on success', async () => {
    const user = userEvent.setup();
    let resolveRequest: ((response: Response) => void) | undefined;
    const pendingRequest = new Promise<Response>((resolve) => {
      resolveRequest = resolve;
    });
    const fetchMock = vi.fn().mockReturnValue(pendingRequest);
    vi.stubGlobal('fetch', fetchMock);
    vi.stubEnv('VITE_CONTACT_API_BASE_URL', 'https://api.example.com');
    renderContactPage('en');

    await user.type(screen.getByLabelText(/Country \/ Region/), 'France');
    await user.selectOptions(screen.getByLabelText(/Organization type/), 'research');
    await user.type(screen.getByLabelText(/First name/), 'Camille');
    await user.type(screen.getByLabelText(/Last name/), 'Martin');
    await user.type(screen.getByLabelText(/Work email/), 'camille@example.com');
    await user.type(screen.getByLabelText(/Description/), 'We need a coastal survey demo.');

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await user.dblClick(submitButton);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button', { name: 'Submitting…' })).toBeDisabled();

    resolveRequest?.({
      ok: true,
      status: 200,
      json: vi.fn().mockResolvedValue({
        code: 200,
        data: { id: 42, status: 'PENDING', createdAt: 1_784_592_000_000 },
      }),
    } as unknown as Response);

    expect(
      await screen.findByText('Your inquiry has been submitted. Our team will get back to you soon.'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Country \/ Region/)).toHaveValue('');
    expect(screen.getByRole('button', { name: 'Submit' })).toBeEnabled();
  });

  it('keeps entered values and enables retry when the API rejects the request', async () => {
    const user = userEvent.setup();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 503 } as Response));
    vi.stubEnv('VITE_CONTACT_API_BASE_URL', 'https://api.example.com');
    renderContactPage('en');

    await user.type(screen.getByLabelText(/Country \/ Region/), 'France');
    await user.selectOptions(screen.getByLabelText(/Organization type/), 'research');
    await user.type(screen.getByLabelText(/First name/), 'Camille');
    await user.type(screen.getByLabelText(/Last name/), 'Martin');
    await user.type(screen.getByLabelText(/Work email/), 'camille@example.com');
    await user.type(screen.getByLabelText(/Description/), 'Keep this text after failure.');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(
        'We couldn’t submit your inquiry. Please try again or email contact@navlyn.com.',
      );
    });
    expect(screen.getByLabelText(/Description/)).toHaveValue('Keep this text after failure.');
    expect(screen.getByRole('button', { name: 'Submit' })).toBeEnabled();
  });
});
