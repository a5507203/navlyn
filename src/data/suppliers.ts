export type SupplierStatus = 'ready' | 'preparing';

export type SupplierKey =
  | 'tmotor'
  | 'yellowScan'
  | 'yunzhou'
  | 'xinuoMaitian'
  | 'jianfan'
  | 'mingdeXincai'
  | 'flyfire'
  | 'feiteng'
  | 'grepow'
  | 'lidar360'
  | 'skydroid'
  | 'sphEngineering';

export interface SupplierDocument {
  key: string;
  label: string;
  language: 'ZH' | 'EN';
  file: string;
}

export interface SupplierProduct {
  key: string;
  image: string;
  documents: readonly SupplierDocument[];
}

export interface Supplier {
  key: SupplierKey;
  slug: string;
  status: SupplierStatus;
  logo: string;
  logoTone?: 'light' | 'dark';
  website?: `https://${string}`;
  products: readonly SupplierProduct[];
}

const documentsRoot = '/media/partners/suppliers/docs';
const productsRoot = '/media/partners/suppliers/products';
const logosRoot = '/media/partners/suppliers/logos';

export const suppliers: readonly Supplier[] = [
  {
    key: 'tmotor',
    slug: 'tmotor',
    status: 'preparing',
    logo: `${logosRoot}/tmotor.webp`,
    products: [],
  },
  {
    key: 'yellowScan',
    slug: 'yellowscan',
    status: 'ready',
    logo: `${logosRoot}/yellowscan.webp`,
    products: [
      {
        key: 'cloudStation',
        image: `${productsRoot}/yellow-cloudstation.webp`,
        documents: [
          {
            key: 'cloudstation-datasheet',
            label: 'YellowScan CloudStation Datasheet',
            language: 'EN',
            file: `${documentsRoot}/yellowscan/cloudstation-datasheet.pdf`,
          },
          {
            key: 'cloudstation-viewer-datasheet',
            label: 'CloudStation Viewer Datasheet',
            language: 'EN',
            file: `${documentsRoot}/yellowscan/cloudstation-viewer-datasheet.pdf`,
          },
          {
            key: 'cloudstation-trajectory-refinement',
            label: 'Trajectory Refinement',
            language: 'EN',
            file: `${documentsRoot}/yellowscan/cloudstation-trajectory-refinement.pdf`,
          },
          {
            key: 'cloudstation-user-manual',
            label: 'CloudStation User Manual',
            language: 'EN',
            file: `${documentsRoot}/yellowscan/cloudstation-user-manual.pdf`,
          },
          {
            key: 'ytk-user-manual',
            label: 'YTK User Manual',
            language: 'EN',
            file: `${documentsRoot}/yellowscan/ytk-user-manual.pdf`,
          },
          {
            key: 'cloudstation-ultimate-bundle',
            label: 'CloudStation Ultimate Bundle',
            language: 'EN',
            file: `${documentsRoot}/yellowscan/cloudstation-ultimate-bundle.pdf`,
          },
        ],
      },
      {
        key: 'liveStation',
        image: `${productsRoot}/yellow-livestation.webp`,
        documents: [
          {
            key: 'livestation-datasheet',
            label: 'YellowScan LiveStation Datasheet',
            language: 'EN',
            file: `${documentsRoot}/yellowscan/livestation-datasheet.pdf`,
          },
        ],
      },
    ],
  },
  {
    key: 'yunzhou',
    slug: 'yunzhou-intelligence',
    status: 'ready',
    logo: `${logosRoot}/yunzhou.webp`,
    products: [
      {
        key: 'dolphin3',
        image: `${productsRoot}/yunzhou-dolphin3.webp`,
        documents: [
          {
            key: 'dolphin-3-datasheet',
            label: '海豚 3 Datasheet',
            language: 'ZH',
            file: `${documentsRoot}/yunzhou/dolphin-3-datasheet.pdf`,
          },
        ],
      },
    ],
  },
  {
    key: 'xinuoMaitian',
    slug: 'xinuo-maitian',
    status: 'preparing',
    logo: `${logosRoot}/xinuomaitian.webp`,
    products: [],
  },
  {
    key: 'jianfan',
    slug: 'jianfan',
    status: 'preparing',
    logo: `${logosRoot}/jianfan.webp`,
    products: [],
  },
  {
    key: 'mingdeXincai',
    slug: 'mingde-xincai',
    status: 'preparing',
    logo: `${logosRoot}/mingdexincai.webp`,
    products: [],
  },
  {
    key: 'flyfire',
    slug: 'flyfire',
    status: 'ready',
    logo: `${logosRoot}/flyfire.webp`,
    products: [
      {
        key: 'systemOverview',
        image: `${productsRoot}/flyfire-overview.webp`,
        documents: [
          {
            key: 'v2-system-overview',
            label: 'Flyfire V2.0 Product Overview',
            language: 'ZH',
            file: `${documentsRoot}/flyfire/v2-system-overview.pdf`,
          },
        ],
      },
      {
        key: 'm30Pro',
        image: `${productsRoot}/flyfire-m30pro.webp`,
        documents: [
          {
            key: 'm30-pro',
            label: 'Flyfire M30 Pro',
            language: 'EN',
            file: `${documentsRoot}/flyfire/m30-pro.pdf`,
          },
        ],
      },
      {
        key: 'manti3',
        image: `${productsRoot}/flyfire-manti3.webp`,
        documents: [
          {
            key: 'manti-3',
            label: 'Flyfire Manti 3',
            language: 'EN',
            file: `${documentsRoot}/flyfire/manti-3.pdf`,
          },
        ],
      },
      {
        key: 'manti4',
        image: `${productsRoot}/flyfire-manti4.webp`,
        documents: [
          {
            key: 'manti-4',
            label: 'Flyfire Manti 4',
            language: 'EN',
            file: `${documentsRoot}/flyfire/manti-4.pdf`,
          },
        ],
      },
      {
        key: 'owlM350',
        image: `${productsRoot}/flyfire-owlm350.webp`,
        documents: [
          {
            key: 'owl-m350',
            label: 'Flyfire OWL-M350',
            language: 'EN',
            file: `${documentsRoot}/flyfire/owl-m350.pdf`,
          },
        ],
      },
    ],
  },
  {
    key: 'feiteng',
    slug: 'feiteng',
    status: 'preparing',
    logo: `${logosRoot}/feiteng.webp`,
    products: [],
  },
  {
    key: 'grepow',
    slug: 'grepow',
    status: 'preparing',
    logo: `${logosRoot}/grepow.webp`,
    website: 'https://www.grepow.cn/',
    products: [],
  },
  {
    key: 'lidar360',
    slug: 'lidar360',
    status: 'preparing',
    logo: `${logosRoot}/lidar360.webp`,
    website: 'https://lidar360.com/sy',
    products: [],
  },
  {
    key: 'skydroid',
    slug: 'skydroid',
    status: 'preparing',
    logo: `${logosRoot}/skydroid.webp`,
    logoTone: 'light',
    website: 'https://www.skydroid.xin/#/index',
    products: [],
  },
  {
    key: 'sphEngineering',
    slug: 'sph-engineering',
    status: 'preparing',
    logo: `${logosRoot}/sph-engineering.webp`,
    website: 'https://www.sphengineering.com/',
    products: [],
  },
];

export function findSupplierBySlug(slug: string | undefined) {
  return suppliers.find((supplier) => supplier.slug === slug);
}
