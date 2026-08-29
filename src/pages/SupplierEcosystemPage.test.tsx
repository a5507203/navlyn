import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { I18nProvider } from '../i18n/I18nProvider';
import SupplierDetailPage from './SupplierDetailPage';
import SupplierEcosystemPage from './SupplierEcosystemPage';

function renderSupplierDirectory() {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={['/partners']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <I18nProvider>
          <SupplierEcosystemPage />
        </I18nProvider>
      </MemoryRouter>
    </HelmetProvider>,
  );
}

function renderSupplierDetail(path: string) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <I18nProvider>
          <Routes>
            <Route path="/partners/suppliers/:supplierSlug" element={<SupplierDetailPage />} />
          </Routes>
        </I18nProvider>
      </MemoryRouter>
    </HelmetProvider>,
  );
}

describe('SupplierEcosystemPage', () => {
  it('uses the supplied world hero with localized live text', () => {
    renderSupplierDirectory();

    const heading = screen.getByRole('heading', {
      level: 1,
      name: '链接世界，航向未来',
    });
    expect(heading).toBeInTheDocument();
    expect(screen.getByText('每一处航迹，都有我们的伙伴。')).toBeInTheDocument();
    expect(document.querySelector('.supplier-ecosystem-hero-image')).toHaveAttribute(
      'src',
      '/media/partners/suppliers/hero-world.png',
    );
  });

  it('renders the new hero copy in English', () => {
    window.localStorage.setItem('navlyn-locale', 'en');
    renderSupplierDirectory();

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Connecting the World, Navigating the Future',
      }),
    ).toBeInTheDocument();
    expect(screen.getByText('Every journey is shared with our partners.')).toBeInTheDocument();
  });

  it('renders internal detail links, external websites, and disabled preparing cards', () => {
    renderSupplierDirectory();

    expect(document.querySelectorAll('.supplier-card')).toHaveLength(12);
    expect(screen.queryByRole('heading', { level: 3, name: '高远' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3, name: '极创翼' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3, name: '禾启智能' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: '火萤科技' })).toBeInTheDocument();
    expect(screen.queryByText('火莹科技')).not.toBeInTheDocument();

    const yellowScanCard = screen.getByRole('heading', { level: 3, name: 'YellowScan' }).closest('.supplier-card');
    const tmotorCard = screen.getByRole('heading', { level: 3, name: 'T-MOTOR' }).closest('.supplier-card');

    expect(yellowScanCard?.tagName).toBe('A');
    expect(yellowScanCard).toHaveAttribute('href', '/partners/suppliers/yellowscan');
    expect(yellowScanCard).not.toHaveAttribute('target');
    expect(tmotorCard?.tagName).toBe('ARTICLE');
    expect(tmotorCard).toHaveAttribute('aria-disabled', 'true');

    const externalSuppliers = [
      ['格瑞普', 'https://www.grepow.cn/'],
      ['数字绿土', 'https://lidar360.com/sy'],
      ['云卓科技', 'https://www.skydroid.xin/#/index'],
      ['SPH Engineering', 'https://www.sphengineering.com/'],
    ] as const;

    for (const [name, website] of externalSuppliers) {
      const card = screen.getByRole('heading', { level: 3, name }).closest('.supplier-card');
      expect(card?.tagName).toBe('A');
      expect(card).toHaveAttribute('href', website);
      expect(card).toHaveAttribute('target', '_blank');
      expect(card).toHaveAttribute('rel', 'noreferrer');
      expect(card).not.toHaveAttribute('aria-disabled');
      expect(card).toHaveAccessibleName(`${name}: 在新标签页打开官网; 资料准备中`);
      expect(within(card as HTMLElement).getAllByText('资料准备中')).not.toHaveLength(0);

      if (name === '云卓科技') {
        expect(card?.querySelector('.supplier-card-logo-field')).toHaveClass('is-light-logo');
      }
    }

    expect(screen.queryByText('官网已开放')).not.toBeInTheDocument();
    expect(screen.queryByText('访问官方网站')).not.toBeInTheDocument();
  });

  it('runs the real input-to-filter path and restores the directory after clearing', async () => {
    const user = userEvent.setup();
    renderSupplierDirectory();

    const search = screen.getByRole('searchbox', { name: '搜索供应商或产品' });
    await user.type(search, '  CLOUDSTATION  ');

    expect(document.querySelectorAll('.supplier-card')).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 3, name: 'YellowScan' })).toBeInTheDocument();

    await user.clear(search);
    await user.type(search, 'UGCS');

    expect(document.querySelectorAll('.supplier-card')).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 3, name: 'SPH Engineering' })).toBeInTheDocument();

    await user.clear(search);
    await user.type(search, 'K40T');

    const emptyHeading = screen.getByRole('heading', { level: 3, name: '没有找到匹配的供应商' });
    const emptyState = emptyHeading.closest('.supplier-empty-state');
    expect(emptyState).not.toBeNull();
    await user.click(within(emptyState as HTMLElement).getByRole('button', { name: '清空搜索' }));
    expect(document.querySelectorAll('.supplier-card')).toHaveLength(12);
  });

  it('links Clients & Partners directly to the supplier ecosystem without a submenu', () => {
    renderSupplierDirectory();

    const header = screen.getByRole('banner');
    const partnersPageLink = within(header).getByRole('link', { name: '客户与合作' });
    expect(partnersPageLink).toHaveAttribute('href', '/partners');
    expect(within(header).queryByRole('button', { name: '展开客户与合作菜单' })).not.toBeInTheDocument();
    expect(within(header).queryByRole('link', { name: '联系我们' })).not.toBeInTheDocument();
  });
});

describe('SupplierDetailPage', () => {
  it('renders the selected ready supplier and its mapped PDF downloads', () => {
    renderSupplierDetail('/partners/suppliers/yellowscan');

    expect(screen.getByRole('heading', { level: 1, name: 'YellowScan' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'CloudStation' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'LiveStation' })).toBeInTheDocument();

    const cloudStationCard = screen.getByRole('heading', { level: 3, name: 'CloudStation' }).closest('article');
    expect(cloudStationCard).not.toBeNull();
    expect(within(cloudStationCard as HTMLElement).getAllByRole('link')).toHaveLength(6);
    expect(screen.getAllByRole('link', { name: /下载 PDF/ })).toHaveLength(7);
  });

  it.each(['tmotor', 'viewpro', 'grepow'])('uses the existing 404 page for unavailable supplier slug %s', (slug) => {
    renderSupplierDetail(`/partners/suppliers/${slug}`);

    expect(screen.getByText('页面未找到')).toBeInTheDocument();
  });
});
