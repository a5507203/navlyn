import { render, screen, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { beforeAll, describe, expect, it } from 'vitest';
import App from './App';
import { I18nProvider } from './i18n/I18nProvider';

function LocationProbe() {
  const location = useLocation();

  return <output data-testid="route-location">{location.pathname}</output>;
}

function renderAppAt(path: string) {
  return render(
    <HelmetProvider>
      <I18nProvider>
        <MemoryRouter
          initialEntries={[path]}
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <App />
          <LocationProbe />
        </MemoryRouter>
      </I18nProvider>
    </HelmetProvider>,
  );
}

describe('partners routes', () => {
  beforeAll(async () => {
    await import('./pages/SupplierEcosystemPage');
  });

  it('renders the supplier ecosystem at the canonical /partners route', async () => {
    renderAppAt('/partners');

    expect(
      await screen.findByRole(
        'heading',
        { level: 1, name: '链接世界，航向未来' },
        { timeout: 5_000 },
      ),
    ).toBeInTheDocument();
    expect(screen.getByTestId('route-location')).toHaveTextContent('/partners');
  });

  it('replaces the legacy supplier directory URL with /partners', async () => {
    renderAppAt('/partners/suppliers');

    await waitFor(() => {
      expect(screen.getByTestId('route-location')).toHaveTextContent('/partners');
    });
    expect(
      await screen.findByRole(
        'heading',
        { level: 1, name: '链接世界，航向未来' },
        { timeout: 5_000 },
      ),
    ).toBeInTheDocument();
  });
});
