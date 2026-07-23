type SiteNavIconKey =
  | 'home'
  | 'arc'
  | 'air'
  | 'sea'
  | 'partners'
  | 'about';

interface SiteNavItem {
  key: 'home' | 'arc' | 'air' | 'sea' | 'partners' | 'about';
  label: string;
  path: string;
  iconKey: SiteNavIconKey;
}

interface FooterNavGroup {
  key: 'productServices' | 'about' | 'ecosystem' | 'language';
  items: Array<{
    key:
      | 'air'
      | 'sea'
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
      | 'en';
    path?: string;
  }>;
}

interface DistributorMarker {
  regionCode: 'FR' | 'TG' | 'MY' | 'CA';
  flag: string;
  city: string;
}

type FooterSocialKey = 'linkedin' | 'facebook' | 'youtube';

interface FooterSocialLink {
  key: FooterSocialKey;
  label: string;
  href: string;
}

export const siteNavItems: SiteNavItem[] = [
  { key: 'home', label: '首页', path: '/', iconKey: 'home' },
  { key: 'arc', label: 'ARC GCS', path: '/arc-os', iconKey: 'arc' },
  { key: 'air', label: 'AIR', path: '/air', iconKey: 'air' },
  { key: 'sea', label: 'SEA', path: '/sea', iconKey: 'sea' },
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
    regionCode: 'FR',
    flag: '🇫🇷',
    city: 'Grenoble',
  },
  {
    regionCode: 'TG',
    flag: '🇹🇬',
    city: 'Lome',
  },
  {
    regionCode: 'MY',
    flag: '🇲🇾',
    city: 'Kuala Lumpur',
  },
  {
    regionCode: 'CA',
    flag: '🇨🇦',
    city: 'Montreal',
  },
];

export const footerSocialLinks: FooterSocialLink[] = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/navlyn/?viewAsMember=true',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/Navlyn/',
  },
  {
    key: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@NavlynDrone',
  },
];

export const footerNavGroups: FooterNavGroup[] = [
  {
    key: 'productServices',
    items: [
      { key: 'air', path: '/air' },
      { key: 'sea', path: '/sea' },
      { key: 'arc', path: '/arc-os' },
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
    items: [{ key: 'zh' }, { key: 'en' }],
  },
];
