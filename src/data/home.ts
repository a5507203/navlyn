import { assetPath } from '../utils/base';

interface HomeMediaSlide {
  image: string;
  alt: string;
  imagePosition: string;
}

interface HomeCapabilityItem {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
}

interface HomeHardwareItem {
  key: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
}

interface HomeNewsItem {
  title: string;
  summary: string;
  tag: string;
  meta: string;
  source: string;
  image: string;
  alt: string;
  to: string;
  featured?: boolean;
}

interface HomeIndustryShowcaseCard {
  key: string;
  title: string;
  titleEn: string;
  summary: string;
  scene: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
}

export const homeHero = {
  titleEn: 'Enabling Intelligent Airspace Capabilities',
  titleZh: '开启飞行智能体时代',
  subtitle: '去飞手化｜安全可控｜群体协同',
};

export const homeWhatWeDo = {
  kicker: 'What We Do',
  title: '我们做什么',
  paragraphs: [
    '航链科技（Navlyn）2025 年 8 月成立于中国浙江，承袭法国 Innotech-drone 工业无人机与精密测绘技术积淀，以低空经济 + 人工智能为核心定位，通过 AI 深度赋能硬件，打造具备高度自主意识的飞行智能体。',
    '我们提供从硬件终端、ARC ENGINE 智能操作系统到行业解决方案的全链路低空智能服务，让作业从"遥控执行"走向"意图决策"，推动全球低空经济迈入智能化 3.0 时代。',
  ],
  slides: [
    {
      image: assetPath('/media/what-we-do-1.png'),
      alt: '航链科技业务与团队展示',
      imagePosition: 'center center',
    },
    {
      image: assetPath('/media/what-we-do-2.png'),
      alt: '航链科技低空智能场景展示',
      imagePosition: 'center center',
    },
  ] satisfies HomeMediaSlide[],
};

export const homeIndustryService = {
  kicker: 'Industry Services',
  title: '行业服务',
  description:
    '航链科技以全场景解决方案服务农业、矿业、能源、安防、海岸救援与巡检六大方向，通过空海协同终端与 ARC ENGINE 智能中枢，构建可复制的行业作业体系。',
  stats: [
    '覆盖全球四大洲',
    '200+ 实地项目',
    '累计飞行里程超 400 万公里',
  ],
  cards: [
    {
      key: 'agriculture',
      title: '农业',
      titleEn: 'Agriculture',
      summary: '面向农田巡查、作物监测与农事协同，提供低空智能化的感知与调度能力。',
      scene: 'Precision Agriculture',
      image: assetPath('/media/industry-showcase/agriculture.jpg'),
      imageAlt: '农业场景航拍图',
      imagePosition: 'center center',
    },
    {
      key: 'mining',
      title: '矿业',
      titleEn: 'Mining',
      summary: '覆盖矿区建模、体积测算与风险巡检，适配复杂地形与高频作业场景。',
      scene: 'Mine Intelligence',
      image: assetPath('/media/industry-showcase/mining.jpg'),
      imageAlt: '矿业作业场景图',
      imagePosition: 'center center',
    },
    {
      key: 'energy',
      title: '能源',
      titleEn: 'Energy',
      summary: '服务油气、电力与能源基础设施，强化远距离巡查与关键节点感知效率。',
      scene: 'Energy Infrastructure',
      image: assetPath('/media/industry-showcase/energy.jpg'),
      imageAlt: '能源基础设施场景图',
      imagePosition: 'center 28%',
    },
    {
      key: 'security',
      title: '安防',
      titleEn: 'Security',
      summary: '面向边境巡逻、人群监控与关键基础设施保护，提供全天候空中感知和快速响应能力。',
      scene: 'Security Operations',
      image: assetPath('/media/july-update/security.jpg'),
      imageAlt: '安防与应急响应场景图',
      imagePosition: 'center center',
    },
    {
      key: 'coastal-rescue',
      title: '海岸救援',
      titleEn: 'Coastal Rescue',
      summary: '通过空海联动、快速搜寻与任务编排，提升海岸线与近海区域的救援响应能力。',
      scene: 'Maritime Response',
      image: assetPath('/media/industry-showcase/coastal.jpg'),
      imageAlt: '海岸救援场景图',
      imagePosition: 'center center',
    },
    {
      key: 'inspection',
      title: '巡检',
      titleEn: 'Inspection',
      summary: '适配园区、交通与基础设施场景，让高频巡检任务从人工执行走向系统协同。',
      scene: 'Autonomous Inspection',
      image: assetPath('/media/industry-showcase/inspection.jpg'),
      imageAlt: '巡检场景图',
      imagePosition: 'center center',
    },
  ] satisfies HomeIndustryShowcaseCard[],
  footnote:
    '对应场景图片后续可逐张替换，当前先以科技化沉浸式卡片结构承接行业表达。',
};

export const homeCapabilities: HomeCapabilityItem[] = [
  {
    eyebrow: 'System Intelligence',
    title: 'ARC ENGINE',
    description: 'L4 级端侧智能平台，实现任务意图理解、自动规划与全域治理。低空经济的「安卓系统」，让飞行从遥控执行走向意图决策。',
    tags: ['意图理解', '自动规划', '全域治理'],
    icon: 'arc-engine',
    image: assetPath('/media/arc-engine-01.jpg'),
    imageAlt: 'ARC ENGINE system capability',
    imagePosition: 'center 38%',
  },
  {
    eyebrow: 'Hardware Matrix',
    title: '软硬一体',
    description: '空海一体硬件矩阵与 AI 中枢深度融合。硬件标准化、软件持续进化，达成「硬件折旧，软件增值」的持续演进能力。',
    tags: ['硬件标准化', 'AI 融合', '持续进化'],
    icon: 'hardware',
    image: assetPath('/media/capability-arc-os-2.jpg'),
    imageAlt: 'Navlyn hardware and AI integration',
    imagePosition: '64% center',
  },
  {
    eyebrow: 'Secure Swarm',
    title: '群体智能',
    description: '多机与空海联动协同，最多调度 200 台设备并行作业。主权级权限治理与主动安全防护，满足关键行业合规要求。',
    tags: ['多机协同', '主动安全', '权限治理'],
    icon: 'swarm',
    image: assetPath('/media/capability-swarm-security.png'),
    imageAlt: 'Navlyn swarm and secure collaboration',
    imagePosition: '62% 32%',
  },
  {
    eyebrow: 'Field Delivery',
    title: '全场景交付',
    description: '从厘米级精密测绘到 24 小时无人巡检，从极端环境到应急救援，提供可落地、可复盘、可规模化的系统能力。',
    tags: ['全球交付', '实地验证', '规模落地'],
    icon: 'delivery',
    image: assetPath('/media/capability-delivery.png'),
    imageAlt: 'Navlyn engineering delivery capability',
    imagePosition: 'center center',
  },
];

export const homeHardwareMatrix = {
  kicker: 'Product',
  title: '产品入口',
  lead: '从空海一体硬件终端到 ARC ENGINE 智能中枢，航链科技构建完整的低空智能产品体系。',
  ctaLabel: '预约体验',
  ctaTo: '/contact',
  hardwareHeading: '核心硬件矩阵',
  hardwareKicker: 'Core Hardware Matrix',
  hardwareDescription: '覆盖任务决策、空中执行与水面搜救三类终端，面向多场景部署形成完整的现场执行能力。',
  items: [
    {
      key: 'commander',
      title: '指挥官 Commander X1',
      description: '边缘算力与任务决策中心',
      image: assetPath('/media/navlyn-x1.png'),
      imageAlt: 'Commander X1',
      imagePosition: 'center 52%',
    },
    {
      key: 'scout',
      title: '尖兵 Scout S1',
      description: '高性价比多功能作业机',
      image: assetPath('/media/scout-s1.png'),
      imageAlt: 'Scout S1',
      imagePosition: 'center 42%',
    },
    {
      key: 'seal',
      title: '海豹 Seal S1',
      description: '自主水面无人救生艇',
      image: assetPath('/media/navlyn-s1.png'),
      imageAlt: 'Seal S1',
      imagePosition: 'center 50%',
    },
  ] satisfies HomeHardwareItem[],
  software: {
    kicker: 'Core Software System',
    heading: '核心软件系统',
    title: 'ARC ENGINE',
    description: '低空智能操作系统',
    summary: '围绕任务理解、系统治理与多终端协同，构成航链科技低空智能体系中的软件中枢。',
    metrics: [
      {
        label: 'Intent Layer',
        title: '任务理解',
        description: '把作业目标转译为可执行任务链路。',
      },
      {
        label: 'Control Stack',
        title: '系统治理',
        description: '统一权限、流程与全域运行状态。',
      },
      {
        label: 'Swarm Link',
        title: '多端协同',
        description: '联动空中终端、地面中枢与水面节点。',
      },
    ],
    chips: ['意图驱动', '多端编排', '安全治理', '系统中枢'],
    image: assetPath('/media/arc-module-11.jpg'),
    imageAlt: 'ARC ENGINE software system',
    imagePosition: 'center center',
  },
};

export const homeNews = {
  kicker: 'Company News',
  title: '公司报道',
  description: '聚焦品牌发布、技术表达与产业交流，持续呈现航链科技在低空智能领域的最新公开报道与传播内容。',
  ctaLabel: '查看更多报道',
  ctaTo: '/about/news',
  items: [
    {
      title: '航链科技品牌发布与低空智能路线获主流媒体持续关注',
      summary: '围绕飞行智能体、ARC ENGINE 与低空经济创新实践，多家主流媒体持续跟进航链科技的品牌发布与技术表达。',
      tag: '主流媒体报道',
      meta: '2026.02 · 新华网 / 中国日报网 / 界面新闻',
      source: '新华网 / 中国日报网 / 经济观察网 / 界面新闻 / 环球时报',
      image: assetPath('/media/news/NANF2027-opq4339369331.jpg'),
      alt: '航链科技发布会现场',
      to: 'https://www.news.cn/digital/20260205/3a11fec4d2be4756bd569b850abb8db1/c.html',
      featured: true,
    },
    {
      title: '浙江电视台聚焦发布会现场与产品体系展示',
      summary: '从发布会现场、核心讲解到硬件展示，报道集中呈现航链科技在低空智能领域的产品表达与场景落地。',
      tag: '电视媒体',
      meta: '2026.02 · 浙江电视台',
      source: '浙江电视台',
      image: assetPath('/media/news/NANF2041-opq4339388354.jpg'),
      alt: '航链科技现场讲解',
      to: 'https://www.cztv.com/video/20091537/wh/horizontal_vod?id=20091537',
    },
    {
      title: '中国经济新闻网专访：低空经济智能化转型新探索',
      summary: '深度解析航链科技如何通过 ARC ENGINE 推动低空经济智能化转型，打造飞行智能体生态。',
      tag: '深度专访',
      meta: '2026.02 · 中国经济新闻网',
      source: '中国经济新闻网',
      image: assetPath('/media/news/NANF2116-opq4339429072.jpg'),
      alt: '航链科技专访现场',
      to: 'https://www.cet.com.cn/wzsy/kjzx/10312200.shtml',
      featured: false,
    },
    {
      title: '航链科技亮相行业峰会，展示低空智能创新成果',
      summary: '在多个行业峰会上分享飞行智能体技术路线与落地经验，获得业界广泛关注与认可。',
      tag: '行业活动',
      meta: '2026.01 · 行业峰会',
      source: '行业媒体联盟',
      image: assetPath('/media/news/DSC07068-opq4339381333.jpg'),
      alt: '航链科技峰会展示',
      to: 'https://tech.china.com/articles/20260202/202602021806807.html',
      featured: false,
    },
    {
      title: '国际合作持续深化，拓展全球低空智能市场',
      summary: '与多国企业和机构建立战略合作，共同推动低空智能技术在全球范围内的应用与落地。',
      tag: '国际合作',
      meta: '2026.01 · 国际合作',
      source: '国际合作媒体',
      image: assetPath('/media/news/DSC07230-opq4339422028.jpg'),
      alt: '国际合作签约现场',
      to: 'https://caijing.chinadaily.com.cn/a/202602/12/WS698d5900a310942cc499f697.html',
      featured: false,
    },
  ] satisfies HomeNewsItem[],
};
