import type { ContentLocale, Locale } from '../i18n/messages';
import { assetPath } from '../utils/base';
import { newsItemsEs } from './news.es';
import { newsItemsFr } from './news.fr';

export interface NewsItem {
  slug: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  imageAlt: string;
  body: readonly string[];
}

const NEWS_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const DATE_FORMAT_LOCALE: Record<Locale, string> = {
  zh: 'zh-CN',
  en: 'en-US',
};

export function formatNewsDate(date: string, locale: Locale) {
  const match = NEWS_DATE_PATTERN.exec(date);

  if (!match) {
    return date;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const parsedDate = new Date(year, month - 1, day);

  if (
    parsedDate.getFullYear() !== year ||
    parsedDate.getMonth() !== month - 1 ||
    parsedDate.getDate() !== day
  ) {
    return date;
  }

  return new Intl.DateTimeFormat(DATE_FORMAT_LOCALE[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(parsedDate);
}

const newsItemsByLocale: Record<ContentLocale, readonly NewsItem[]> = {
  zh: [
    {
      slug: 'technology-breakthroughs',
      tag: 'Technology',
      title: '聚焦技术突破',
      description: '持续展示航链科技在飞行智能、系统协同与低空作业能力上的研发进展。',
      date: '2026-01-26',
      location: '浙江 · 杭州',
      image: assetPath('/media/news/team-1.webp'),
      imageAlt: 'Navlyn technology collaboration',
      body: [
        '围绕飞行智能体、系统协同与任务执行闭环，航链科技正在把技术能力持续沉淀为可复用的工程体系。现阶段官网先以品牌资料中的真实团队素材作为占位，后续可逐步替换为正式新闻稿与研发动态。',
        '这部分内容未来适合承接系统升级、算法迭代、硬件能力增强与工程成果发布，用更连续的方式记录航链科技在低空智能领域的技术推进。',
      ],
    },
    {
      slug: 'product-launches',
      tag: 'Release',
      title: '产品发布与品牌亮相',
      description: '围绕产品发布、系统演示与品牌活动，逐步沉淀官网新闻内容。',
      date: '2026-01-26',
      location: '浙江 · 嘉兴',
      image: assetPath('/media/news/team-2.webp'),
      imageAlt: 'Navlyn product and team presentation',
      body: [
        '从品牌发布、产品首秀到系统演示，产品动态页将作为官网对外呈现的重要信息入口，帮助客户与合作伙伴快速理解航链科技的产品矩阵与品牌节奏。',
        '当前版本先保留轻量化的新闻结构，待你补充正式发布会内容、活动照片与新闻原文后，即可进一步升级为完整的动态栏目。',
      ],
    },
    {
      slug: 'global-collaboration',
      tag: 'Global',
      title: '国际合作与行业展会',
      description: '记录中法团队合作、海外交流与行业展会中的关键时刻与落地实践。',
      date: '2026-01-26',
      location: '中国 / 法国',
      image: assetPath('/media/news/team-3.webp'),
      imageAlt: 'Navlyn international team collaboration',
      body: [
        '中法团队协作、海外交流与行业展会，是航链科技建立国际品牌识别与合作信任的重要组成部分。官网新闻区未来可以承接国际合作纪要、行业参展记录与跨区域项目沟通成果。',
      ],
    },
  ],
  en: [
    {
      slug: 'technology-breakthroughs',
      tag: 'Technology',
      title: 'Tracking Technical Breakthroughs',
      description: 'A running view of Navlyn’s progress in flight intelligence, system coordination, and low-altitude operational capability.',
      date: '2026-01-26',
      location: 'Hangzhou, Zhejiang',
      image: assetPath('/media/news/team-1.webp'),
      imageAlt: 'Navlyn technology collaboration',
      body: [
        'Across flight agents, coordinated systems, and closed-loop task execution, Navlyn is steadily turning technical strength into reusable engineering capability. The current site uses authentic team imagery from the brand archive as a placeholder and can later be replaced with formal news stories and R&D updates.',
        'This section is well suited for future updates on system upgrades, algorithm iteration, hardware enhancement, and engineering milestones, creating a more continuous narrative of Navlyn’s progress in low-altitude intelligence.',
      ],
    },
    {
      slug: 'product-launches',
      tag: 'Release',
      title: 'Product Launches & Brand Debuts',
      description: 'A space for product releases, system showcases, and brand activity to gradually build the public news timeline.',
      date: '2026-01-26',
      location: 'Jiaxing, Zhejiang',
      image: assetPath('/media/news/team-2.webp'),
      imageAlt: 'Navlyn product and team presentation',
      body: [
        'From brand launches and first product reveals to live system demonstrations, this stream is meant to become a key public-facing window into Navlyn’s product matrix and brand rhythm.',
        'The current version keeps the structure intentionally lightweight. Once formal launch content, event photography, and article text are available, it can be expanded into a complete newsroom.',
      ],
    },
    {
      slug: 'global-collaboration',
      tag: 'Global',
      title: 'Global Collaboration & Industry Events',
      description: 'Moments from Sino-French collaboration, international exchange, and industry exhibitions that shape Navlyn’s global presence.',
      date: '2026-01-26',
      location: 'China / France',
      image: assetPath('/media/news/team-3.webp'),
      imageAlt: 'Navlyn international team collaboration',
      body: [
        'Cross-border teamwork, international exchange, and industry exhibitions are central to how Navlyn builds global trust and brand recognition. This section can later host partnership summaries, event records, and transregional project milestones.',
      ],
    },
  ],
  fr: newsItemsFr,
  es: newsItemsEs,
};

export function getNewsItems(locale: ContentLocale) {
  return newsItemsByLocale[locale];
}
