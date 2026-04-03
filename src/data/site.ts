type SiteNavIconKey =
  | 'home'
  | 'products'
  | 'arc'
  | 'industries'
  | 'partners'
  | 'about';

interface SiteNavItem {
  key: 'home' | 'products' | 'arc' | 'industries' | 'partners' | 'about';
  label: string;
  path: string;
  iconKey: SiteNavIconKey;
}

interface FooterNavGroup {
  key: 'productServices' | 'about' | 'ecosystem' | 'language';
  items: Array<{
    key:
      | 'products'
      | 'arc'
      | 'flightTraining'
      | 'vision'
      | 'news'
      | 'partners'
      | 'careers'
      | 'alliances'
      | 'distributors'
      | 'contact'
      | 'zh'
      | 'en'
      | 'fr'
      | 'es';
    path?: string;
  }>;
}

interface DistributorMarker {
  region: string;
  flag: string;
  city: string;
  note: string;
}

export const siteNavItems: SiteNavItem[] = [
  { key: 'home', label: '首页', path: '/', iconKey: 'home' },
  { key: 'products', label: '产品体系', path: '/products', iconKey: 'products' },
  { key: 'arc', label: 'ARC ENGINE', path: '/arc-os', iconKey: 'arc' },
  { key: 'industries', label: '行业应用', path: '/industries', iconKey: 'industries' },
  { key: 'partners', label: '客户与合作', path: '/partners', iconKey: 'partners' },
  { key: 'about', label: '关于我们', path: '/about', iconKey: 'about' },
];

export const partnerBrandWall = [
  'INNOTECH-DRONE',
  'ARC ENGINE',
  'NAVLYN LAB',
  'LOW-ALTITUDE AI',
  'FLIGHT INTELLIGENCE',
  'GLOBAL DELIVERY',
  'INDUSTRY PARTNER',
  'FIELD INTEGRATOR',
];

export const distributorMarkers: DistributorMarker[] = [
  {
    region: '法国',
    flag: '🇫🇷',
    city: 'Grenoble',
    note: '代理商与联系方式待补充',
  },
  {
    region: '多哥',
    flag: '🇹🇬',
    city: 'Lome',
    note: '代理商与联系方式待补充',
  },
  {
    region: '马来西亚',
    flag: '🇲🇾',
    city: 'Kuala Lumpur',
    note: '代理商与联系方式待补充',
  },
  {
    region: '加拿大',
    flag: '🇨🇦',
    city: 'Montreal',
    note: '代理商与联系方式待补充',
  },
];

export const footerNavGroups: FooterNavGroup[] = [
  {
    key: 'productServices',
    items: [
      { key: 'products', path: '/products' },
      { key: 'arc', path: '/arc-os' },
      { key: 'flightTraining' },
    ],
  },
  {
    key: 'about',
    items: [
      { key: 'vision', path: '/about/vision' },
      { key: 'news', path: '/about/news' },
      { key: 'partners', path: '/partners' },
      { key: 'careers', path: '/about/careers' },
    ],
  },
  {
    key: 'ecosystem',
    items: [
      { key: 'alliances', path: '/partners/alliances' },
      { key: 'distributors', path: '/partners/distributors' },
      { key: 'contact', path: '/contact' },
    ],
  },
  {
    key: 'language',
    items: [{ key: 'zh' }, { key: 'en' }, { key: 'fr' }, { key: 'es' }],
  },
];
