import type { ContentLocale } from './messages';
import type { SupplierKey } from '../data/suppliers';

export interface SupplierProductCopy {
  name: string;
  summary: string;
  searchTerms: readonly string[];
}

export interface SupplierCopy {
  name: string;
  cardSummary: string;
  officialIntro: string;
  searchTerms: readonly string[];
  products: Record<string, SupplierProductCopy>;
}

export interface SupplierEcosystemCopy {
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroDescription: string;
  directoryKicker: string;
  directoryTitle: string;
  directoryDescription: string;
  searchLabel: string;
  searchPlaceholder: string;
  clearSearch: string;
  resultsLabel: string;
  readyStatus: string;
  preparingStatus: string;
  viewDetails: string;
  noResultsTitle: string;
  noResultsDescription: string;
  backToDirectory: string;
  productsTitle: string;
  productsDescription: string;
  documentsTitle: string;
  downloadDocument: string;
  supplierIndexLabel: string;
  suppliers: Record<SupplierKey, SupplierCopy>;
}

const preparingCopyZh = {
  cardSummary: '供应商资料正在整理，内容确认后开放详情。',
  officialIntro: '该供应商的公开简介和产品资料正在整理中。',
  searchTerms: ['供应商', '资料准备中'],
  products: {},
} as const;

const preparingCopyEn = {
  cardSummary: 'Supplier materials are being prepared and will open after review.',
  officialIntro: 'The public introduction and product materials for this supplier are being prepared.',
  searchTerms: ['supplier', 'materials preparing'],
  products: {},
} as const;

const messages: Record<'zh' | 'en', SupplierEcosystemCopy> = {
  zh: {
    seoTitle: '供应商生态 | Navlyn 航链科技',
    seoDescription: '浏览 Navlyn 供应商生态，搜索供应商与产品，并下载公开产品资料。',
    heroTitle: '链接世界，航向未来',
    heroDescription: '每一处航迹，都有我们的伙伴。',
    directoryKicker: 'Supplier Network',
    directoryTitle: '供应商与产品目录',
    directoryDescription: '输入供应商名称或产品关键词实时筛选；资料已就绪的供应商可进入详情页。',
    searchLabel: '搜索供应商或产品',
    searchPlaceholder: '输入供应商名称或产品关键词',
    clearSearch: '清空搜索',
    resultsLabel: '家供应商',
    readyStatus: '资料已就绪',
    preparingStatus: '资料准备中',
    viewDetails: '查看供应商详情',
    noResultsTitle: '没有找到匹配的供应商',
    noResultsDescription: '请尝试其他供应商名称或产品关键词，或清空搜索查看全部。',
    backToDirectory: '返回供应商生态',
    productsTitle: '产品与资料',
    productsDescription: '以下内容来自已提供的公开产品资料，可按产品下载对应 PDF。',
    documentsTitle: '可下载资料',
    downloadDocument: '下载 PDF',
    supplierIndexLabel: '供应商生态',
    suppliers: {
      tmotor: { name: 'T-MOTOR', ...preparingCopyZh },
      yellowScan: {
        name: 'YellowScan',
        cardSummary: '激光雷达测绘软件与数据工作流资料。',
        officialIntro:
          '本页汇集已提供的 YellowScan CloudStation 与 LiveStation 公开资料，便于集中浏览与下载。',
        searchTerms: ['激光雷达', '测绘', '点云', '软件', 'lidar'],
        products: {
          cloudStation: {
            name: 'CloudStation',
            summary: 'CloudStation 软件资料，包含数据表、Viewer、轨迹优化说明及使用手册。',
            searchTerms: ['cloud station', 'viewer', 'trajectory', 'ytk', '点云'],
          },
          liveStation: {
            name: 'LiveStation',
            summary: 'LiveStation 产品数据表与公开说明资料。',
            searchTerms: ['live station', '实时', '数据表'],
          },
        },
      },
      yunzhou: {
        name: '云洲智能',
        cardSummary: '无人船产品与水上作业平台资料。',
        officialIntro: '本页提供已整理的云洲智能“海豚 3”公开产品资料与下载入口。',
        searchTerms: ['无人船', '水面平台', 'usv', '云洲'],
        products: {
          dolphin3: {
            name: '海豚 3',
            summary: '海豚 3 产品数据表与公开说明资料。',
            searchTerms: ['海豚3', '海豚 3', 'dolphin 3', '无人船'],
          },
        },
      },
      xinuoMaitian: { name: '希诺麦田', ...preparingCopyZh },
      jianfan: { name: '建帆', ...preparingCopyZh },
      mingdeXincai: { name: '明德新材', ...preparingCopyZh },
      jichuangyi: { name: '极创翼', ...preparingCopyZh },
      flyfire: {
        name: '火莹科技',
        cardSummary: '无人机降落伞与安全回收系统资料。',
        officialIntro: '本页汇集已提供的火莹科技无人机降落伞产品资料，仅展示图片与 PDF 下载。',
        searchTerms: ['降落伞', '无人机安全', '回收系统', 'flyfire'],
        products: {
          systemOverview: {
            name: 'Flyfire V2.0 产品系列',
            summary: 'Flyfire V2.0 产品系列公开说明资料。',
            searchTerms: ['v2.0', '产品系列', '降落伞'],
          },
          m30Pro: {
            name: 'Flyfire M30 Pro',
            summary: 'Flyfire M30 Pro 产品资料与 PDF 下载。',
            searchTerms: ['m30 pro', 'm30pro'],
          },
          manti3: {
            name: 'Flyfire Manti 3',
            summary: 'Flyfire Manti 3 产品资料与 PDF 下载。',
            searchTerms: ['manti 3', 'manti3'],
          },
          manti4: {
            name: 'Flyfire Manti 4',
            summary: 'Flyfire Manti 4 产品资料与 PDF 下载。',
            searchTerms: ['manti 4', 'manti4'],
          },
          owlM350: {
            name: 'Flyfire OWL-M350',
            summary: 'Flyfire OWL-M350 产品资料与 PDF 下载。',
            searchTerms: ['owl-m350', 'owl m350', 'm350'],
          },
        },
      },
      viewpro: {
        name: '禾启智能',
        cardSummary: '无人机光电吊舱与云台相机产品资料。',
        officialIntro: '本页汇集已提供的禾启智能云台相机产品单页、说明书与用户手册。',
        searchTerms: ['云台相机', '光电吊舱', '摄像头', 'viewpro'],
        products: {
          h50t: {
            name: 'H50T',
            summary: 'H50T 产品单页与公开说明资料。',
            searchTerms: ['h50t', '云台相机'],
          },
          k40t: {
            name: 'K40T',
            summary: 'K40T 四光 AI 云台相机说明书与英文用户手册。',
            searchTerms: ['k40t', '四光', 'ai', '云台相机'],
          },
          k40tMini: {
            name: 'K40T MINI',
            summary: 'K40T MINI 产品单页与公开说明资料。',
            searchTerms: ['k40t mini', 'k40tmini'],
          },
          k8tV2: {
            name: 'K8T-V2',
            summary: 'K8T-V2 产品单页与公开说明资料。',
            searchTerms: ['k8t-v2', 'k8t v2'],
          },
          m4tNova4t: {
            name: 'M4T / NOVA4T',
            summary: 'M4T 与 NOVA4T 产品数据表及 NOVA-4T 英文用户手册。',
            searchTerms: ['m4t', 'nova4t', 'nova-4t'],
          },
        },
      },
      feiteng: { name: '飞腾', ...preparingCopyZh },
      gaoyuan: { name: '高远', ...preparingCopyZh },
    },
  },
  en: {
    seoTitle: 'Supplier Ecosystem | Navlyn',
    seoDescription: 'Browse the Navlyn supplier ecosystem, search suppliers and products, and download public materials.',
    heroTitle: 'Connecting the World, Navigating the Future',
    heroDescription: 'Every journey is shared with our partners.',
    directoryKicker: 'Supplier Network',
    directoryTitle: 'Supplier and product directory',
    directoryDescription:
      'Search by supplier or product keyword. Suppliers with complete materials open into dedicated detail pages.',
    searchLabel: 'Search suppliers or products',
    searchPlaceholder: 'Enter a supplier or product keyword',
    clearSearch: 'Clear search',
    resultsLabel: 'suppliers',
    readyStatus: 'Materials ready',
    preparingStatus: 'Materials preparing',
    viewDetails: 'View supplier details',
    noResultsTitle: 'No matching suppliers found',
    noResultsDescription: 'Try another supplier or product keyword, or clear the search to view all suppliers.',
    backToDirectory: 'Back to supplier ecosystem',
    productsTitle: 'Products and materials',
    productsDescription: 'The following public materials are organized by product and available as PDF downloads.',
    documentsTitle: 'Downloads',
    downloadDocument: 'Download PDF',
    supplierIndexLabel: 'Supplier Ecosystem',
    suppliers: {
      tmotor: { name: 'T-MOTOR', ...preparingCopyEn },
      yellowScan: {
        name: 'YellowScan',
        cardSummary: 'LiDAR mapping software and data workflow materials.',
        officialIntro:
          'This page brings together the provided public materials for YellowScan CloudStation and LiveStation.',
        searchTerms: ['lidar', 'mapping', 'point cloud', 'software'],
        products: {
          cloudStation: {
            name: 'CloudStation',
            summary: 'CloudStation datasheets, Viewer material, trajectory refinement notes, and user manuals.',
            searchTerms: ['cloud station', 'viewer', 'trajectory', 'ytk', 'point cloud'],
          },
          liveStation: {
            name: 'LiveStation',
            summary: 'LiveStation product datasheet and public reference material.',
            searchTerms: ['live station', 'live data', 'datasheet'],
          },
        },
      },
      yunzhou: {
        name: '云洲智能',
        cardSummary: 'Unmanned surface vessel product materials.',
        officialIntro: 'This page provides the supplied public product material for the Dolphin 3.',
        searchTerms: ['unmanned surface vessel', 'usv', 'yunzhou', '无人船'],
        products: {
          dolphin3: {
            name: 'Dolphin 3',
            summary: 'Dolphin 3 product datasheet and public reference material.',
            searchTerms: ['dolphin 3', 'dolphin3', 'usv'],
          },
        },
      },
      xinuoMaitian: { name: '希诺麦田', ...preparingCopyEn },
      jianfan: { name: '建帆', ...preparingCopyEn },
      mingdeXincai: { name: '明德新材', ...preparingCopyEn },
      jichuangyi: { name: '极创翼', ...preparingCopyEn },
      flyfire: {
        name: 'Flyfire',
        cardSummary: 'UAV parachute and recovery system materials.',
        officialIntro:
          'This page brings together the supplied Flyfire UAV parachute product materials as images and PDF downloads.',
        searchTerms: ['parachute', 'uav safety', 'recovery system', 'flyfire'],
        products: {
          systemOverview: {
            name: 'Flyfire V2.0 Product Range',
            summary: 'Public overview material for the Flyfire V2.0 product range.',
            searchTerms: ['v2.0', 'product range', 'parachute'],
          },
          m30Pro: {
            name: 'Flyfire M30 Pro',
            summary: 'Flyfire M30 Pro product material and PDF download.',
            searchTerms: ['m30 pro', 'm30pro'],
          },
          manti3: {
            name: 'Flyfire Manti 3',
            summary: 'Flyfire Manti 3 product material and PDF download.',
            searchTerms: ['manti 3', 'manti3'],
          },
          manti4: {
            name: 'Flyfire Manti 4',
            summary: 'Flyfire Manti 4 product material and PDF download.',
            searchTerms: ['manti 4', 'manti4'],
          },
          owlM350: {
            name: 'Flyfire OWL-M350',
            summary: 'Flyfire OWL-M350 product material and PDF download.',
            searchTerms: ['owl-m350', 'owl m350', 'm350'],
          },
        },
      },
      viewpro: {
        name: 'Viewpro',
        cardSummary: 'Electro-optical gimbal camera product materials.',
        officialIntro:
          'This page organizes the supplied Viewpro product sheets, specifications, and user manuals.',
        searchTerms: ['gimbal camera', 'electro-optical payload', 'camera', 'viewpro'],
        products: {
          h50t: {
            name: 'H50T',
            summary: 'H50T product sheet and public reference material.',
            searchTerms: ['h50t', 'gimbal camera'],
          },
          k40t: {
            name: 'K40T',
            summary: 'K40T four-sensor AI gimbal camera specification and English user manual.',
            searchTerms: ['k40t', 'four sensor', 'ai', 'gimbal camera'],
          },
          k40tMini: {
            name: 'K40T MINI',
            summary: 'K40T MINI product sheet and public reference material.',
            searchTerms: ['k40t mini', 'k40tmini'],
          },
          k8tV2: {
            name: 'K8T-V2',
            summary: 'K8T-V2 product sheet and public reference material.',
            searchTerms: ['k8t-v2', 'k8t v2'],
          },
          m4tNova4t: {
            name: 'M4T / NOVA4T',
            summary: 'M4T and NOVA4T datasheet with the NOVA-4T English user manual.',
            searchTerms: ['m4t', 'nova4t', 'nova-4t'],
          },
        },
      },
      feiteng: { name: '飞腾', ...preparingCopyEn },
      gaoyuan: { name: '高远', ...preparingCopyEn },
    },
  },
};

export function getSupplierEcosystemCopy(locale: ContentLocale) {
  return locale === 'zh' ? messages.zh : messages.en;
}
