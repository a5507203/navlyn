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
  websiteLinkLabel: string;
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
    websiteLinkLabel: '在新标签页打开官网',
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
      flyfire: {
        name: '火萤科技',
        cardSummary: '无人机降落伞与安全回收系统资料。',
        officialIntro: '本页汇集已提供的火萤科技无人机降落伞产品资料，仅展示图片与 PDF 下载。',
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
      feiteng: { name: '飞腾', ...preparingCopyZh },
      grepow: {
        ...preparingCopyZh,
        name: '格瑞普',
        cardSummary: '无人机电池与定制电源解决方案。',
        searchTerms: ['无人机电池', '锂电池', '电池定制', 'grepow', 'tattu'],
      },
      lidar360: {
        ...preparingCopyZh,
        name: '数字绿土',
        cardSummary: 'LiDAR 点云与影像处理分析软件。',
        searchTerms: ['lidar360', '激光雷达', '点云', '测绘', '数字绿土'],
      },
      skydroid: {
        ...preparingCopyZh,
        name: '云卓科技',
        cardSummary: '无人机遥控器、数据链与地面站产品。',
        searchTerms: ['skydroid', '云卓', '遥控器', '数据链', '地面站'],
      },
      sphEngineering: {
        ...preparingCopyZh,
        name: 'SPH Engineering',
        cardSummary: '无人机任务规划、传感器集成与测绘解决方案。',
        searchTerms: ['sph engineering', 'sph-engineering', 'ugcs', 'skyhub', '任务规划', '传感器', '测绘'],
      },
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
    websiteLinkLabel: 'Open the official website in a new tab',
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
      feiteng: { name: '飞腾', ...preparingCopyEn },
      grepow: {
        ...preparingCopyEn,
        name: 'Grepow',
        cardSummary: 'UAV batteries and custom power solutions.',
        searchTerms: ['uav battery', 'lithium battery', 'custom battery', 'grepow', 'tattu'],
      },
      lidar360: {
        ...preparingCopyEn,
        name: 'LiDAR360',
        cardSummary: 'LiDAR point-cloud and imagery processing software.',
        searchTerms: ['lidar360', 'lidar', 'point cloud', 'mapping', 'greenvalley'],
      },
      skydroid: {
        ...preparingCopyEn,
        name: 'SKYDROID',
        cardSummary: 'UAV controllers, data links, and ground control products.',
        searchTerms: ['skydroid', 'controller', 'data link', 'ground control station'],
      },
      sphEngineering: {
        ...preparingCopyEn,
        name: 'SPH Engineering',
        cardSummary: 'Drone mission planning, sensor integration, and surveying solutions.',
        searchTerms: ['sph engineering', 'sph-engineering', 'ugcs', 'skyhub', 'mission planning', 'sensor', 'surveying'],
      },
    },
  },
};

export function getSupplierEcosystemCopy(locale: ContentLocale) {
  return locale === 'zh' ? messages.zh : messages.en;
}
