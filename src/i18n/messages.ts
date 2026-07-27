import { pageMessagesEs } from './messages.es';
import { pageMessagesFr } from './messages.fr';

export type Locale = "zh" | "en";
export type ContentLocale = Locale | "fr" | "es";

interface LocaleOption {
  key: Locale;
  label: string;
}

export const localeOptions: LocaleOption[] = [
  { key: "zh", label: "中文" },
  { key: "en", label: "English" },
];

export const contentLocaleMap: Record<Locale, ContentLocale> = {
  zh: "zh",
  en: "en",
};

export const shellMessages = {
  zh: {
    languageLabel: "语言",
    accessibility: {
      mainNav: "主导航",
      openMenu: "打开导航菜单",
      contactLink: "Contact us 联系我们",
      subpageNav: "子页面导航",
    },
    nav: {
      home: "首页",
      arc: "ARC GCS",
      air: "AIR",
      sea: "SEA",
      partners: "客户与合作",
      about: "关于我们",
    },
    contactFloat: {
      title: "Contact Us",
      subtitle: "联系我们 🤝",
    },
    footer: {
      summary:
        "Navlyn 航链科技以 ARC ENGINE 为核心，面向低空经济场景提供飞行智能体系统、硬件终端与行业解决方案。",
      groups: {
        productServices: "产品服务",
        about: "关于我们",
        ecosystem: "合作生态",
        language: "语言",
      },
      items: {
        air: "AIR 飞行平台",
        sea: "SEA 水面平台",
        arc: "ARC GCS",
        flightTraining: "飞行模拟训练",
        vision: "公司愿景",
        news: "新闻报道",
        partners: "客户与合作",
        careers: "人才招聘",
        alliances: "全球合作伙伴",
        distributors: "国际经销商",
        contact: "项目咨询",
        zh: "中文",
        en: "English",
        fr: "Français",
        es: "Español",
      },
    },
  },
  en: {
    languageLabel: "Language",
    accessibility: {
      mainNav: "Main navigation",
      openMenu: "Open navigation menu",
      contactLink: "Contact us",
      subpageNav: "Subpage navigation",
    },
    nav: {
      home: "Home",
      arc: "ARC GCS",
      air: "AIR",
      sea: "SEA",
      partners: "Clients & Partners",
      about: "About",
    },
    contactFloat: {
      title: "Contact Us",
      subtitle: "Let's Talk 🤝",
    },
    footer: {
      summary:
        "Navlyn centers ARC ENGINE to deliver intelligent flight systems, hardware terminals, and industry-ready low-altitude solutions.",
      groups: {
        productServices: "Product Services",
        about: "About",
        ecosystem: "Ecosystem",
        language: "Language",
      },
      items: {
        air: "AIR Platforms",
        sea: "SEA Platforms",
        arc: "ARC GCS",
        flightTraining: "Flight Simulation",
        vision: "Vision",
        news: "News",
        partners: "Clients & Partners",
        careers: "Careers",
        alliances: "Global Partners",
        distributors: "Distributors",
        contact: "Project Inquiry",
        zh: "Chinese",
        en: "English",
        fr: "French",
        es: "Spanish",
      },
    },
  },
  fr: {
    languageLabel: "Langue",
    accessibility: {
      mainNav: "Navigation principale",
      openMenu: "Ouvrir le menu",
      contactLink: "Nous contacter",
      subpageNav: "Navigation secondaire",
    },
    nav: {
      home: "Accueil",
      arc: "ARC GCS",
      air: "AIR",
      sea: "SEA",
      partners: "Clients & partenaires",
      about: "À propos",
    },
    contactFloat: {
      title: "Contact",
      subtitle: "Parlons-en 🤝",
    },
    footer: {
      summary:
        "Navlyn s'appuie sur ARC ENGINE pour proposer des systèmes de vol intelligents, des terminaux matériels et des solutions prêtes pour les opérations basse altitude.",
      groups: {
        productServices: "Produits",
        about: "À propos",
        ecosystem: "Écosystème",
        language: "Langue",
      },
      items: {
        air: "Plateformes AIR",
        sea: "Plateformes SEA",
        arc: "ARC GCS",
        flightTraining: "Simulation de vol",
        vision: "Vision",
        news: "Actualités",
        partners: "Clients & partenaires",
        careers: "Carrières",
        alliances: "Partenaires globaux",
        distributors: "Distributeurs",
        contact: "Demande de projet",
        zh: "Chinois",
        en: "Anglais",
        fr: "Français",
        es: "Espagnol",
      },
    },
  },
  es: {
    languageLabel: "Idioma",
    accessibility: {
      mainNav: "Navegación principal",
      openMenu: "Abrir menú de navegación",
      contactLink: "Contáctanos",
      subpageNav: "Navegación secundaria",
    },
    nav: {
      home: "Inicio",
      arc: "ARC GCS",
      air: "AIR",
      sea: "SEA",
      partners: "Clientes y socios",
      about: "Nosotros",
    },
    contactFloat: {
      title: "Contáctanos",
      subtitle: "Hablemos 🤝",
    },
    footer: {
      summary:
        "Navlyn se apoya en ARC ENGINE para ofrecer sistemas de vuelo inteligente, terminales de hardware y soluciones operativas listas para la economía de baja altitud.",
      groups: {
        productServices: "Productos",
        about: "Nosotros",
        ecosystem: "Ecosistema",
        language: "Idioma",
      },
      items: {
        air: "Plataformas AIR",
        sea: "Plataformas SEA",
        arc: "ARC GCS",
        flightTraining: "Simulación de vuelo",
        vision: "Visión",
        news: "Noticias",
        partners: "Clientes y socios",
        careers: "Carreras",
        alliances: "Socios globales",
        distributors: "Distribuidores",
        contact: "Consulta de proyecto",
        zh: "Chino",
        en: "Inglés",
        fr: "Francés",
        es: "Español",
      },
    },
  },
} as const;

export const pageMessages = {
  zh: {
    home: {
      seoTitle: "Navlyn 航链科技 | 开启飞行智能体时代",
      seoDescription:
        "Navlyn 航链科技以 ARC ENGINE 为核心，提供飞行智能体系统、硬件终端与行业解决方案，服务测绘、矿业、工程与应急救援场景。",
      heroSecondary: "开启飞行智能体时代",
      heroSubtitle: "去飞手化｜安全可控｜群体协同",
      heroPrimaryCta: "探索产品",
      heroSecondaryCta: "了解更多",
      whatWeDo: {
        kicker: "What We Do",
        title: "我们做什么",
        paragraphs: [
          "航链科技（Navlyn）2025 年 8 月成立于中国浙江，以低空经济 + 人工智能为核心定位，通过 AI 深度赋能硬件，打造具备高度自主意识的飞行智能体。",
          "我们提供从硬件终端、ARC ENGINE 智能操作系统到行业解决方案的全链路低空智能服务，让作业从“遥控执行”走向“意图决策”，推动全球低空经济迈入智能化 3.0 时代。",
        ],
      },
      industries: {
        kicker: "Industry Services",
        title: "行业服务",
        description:
          "航链科技以全场景解决方案服务农业、矿业、能源、安防、海岸救援与巡检六大方向，通过空海协同终端与 ARC ENGINE 智能中枢，构建可复制的行业作业体系。",
        stats: ["覆盖全球四大洲", "200+ 实地项目", "累计飞行里程超 400 万公里"],
        cards: {
          agriculture: {
            title: "农业",
            summary: "面向农田巡查、作物监测与农事协同，提供低空智能化的感知与调度能力。",
          },
          mining: {
            title: "矿业",
            summary: "覆盖矿区建模、体积测算与风险巡检，适配复杂地形与高频作业场景。",
          },
          energy: {
            title: "能源",
            summary: "服务油气、电力与能源基础设施，强化远距离巡查与关键节点感知效率。",
          },
          security: {
            title: "安防",
            summary: "面向边境巡逻、人群监控与关键基础设施保护，提供全天候空中感知和快速响应能力。",
          },
          "coastal-rescue": {
            title: "海岸救援",
            summary: "通过空海联动、快速搜寻与任务编排，提升海岸线与近海区域的救援响应能力。",
          },
          inspection: {
            title: "巡检",
            summary: "适配园区、交通与基础设施场景，让高频巡检任务从人工执行走向系统协同。",
          },
        },
      },
      capabilities: {
        kicker: "Core Capabilities",
        title: "王牌能力",
        intro:
          "从系统中枢、软硬件协同到群体安全与工程交付，航链科技把低空能力沉淀为可复用、可规模化的系统能力。",
        cards: [
          {
            title: "ARC ENGINE",
            description:
              "L4 级端侧智能平台，实现任务意图理解、自动规划与全域治理。低空经济的「安卓系统」，让飞行从遥控执行走向意图决策。",
            tags: ["意图理解", "自动规划", "全域治理"],
            statValue: "L4",
            statLabel: "自主等级",
          },
          {
            title: "软硬一体",
            description:
              "空海一体硬件矩阵与 AI 中枢深度融合。硬件标准化、软件持续进化，达成「硬件折旧，软件增值」的持续演进能力。",
            tags: ["硬件标准化", "AI 融合", "持续进化"],
            statValue: "200+",
            statLabel: "协同设备",
          },
          {
            title: "群体智能",
            description:
              "多机与空海联动协同，最多调度 200 台设备并行作业。主权级权限治理与主动安全防护，满足关键行业合规要求。",
            tags: ["多机协同", "主动安全", "权限治理"],
            statValue: "200",
            statLabel: "最大协同",
          },
          {
            title: "全场景交付",
            description:
              "从厘米级精密测绘到 24 小时无人巡检，从极端环境到应急救援，提供可落地、可复盘、可规模化的系统能力。",
            tags: ["全球交付", "实地验证", "规模落地"],
            statValue: "400万+",
            statLabel: "飞行里程",
          },
        ],
      },
      productGateway: {
        kicker: "Product",
        title: "产品入口",
        lead: "从空海一体硬件终端到 ARC ENGINE 智能中枢，航链科技构建完整的低空智能产品体系。",
        cta: "预约体验",
        hardwareKicker: "Core Hardware Matrix",
        hardwareTitle: "核心硬件矩阵",
        hardwareDescription:
          "覆盖任务决策、空中执行与水面搜救三类终端，面向多场景部署形成完整的现场执行能力。",
        hardwareItems: {
          commander: {
            badge: "旗舰",
            label: "Commander Series",
            title: "指挥官 Commander X1",
            description: "边缘算力与任务决策中心",
          },
          scout: {
            badge: "作业",
            label: "Scout Series",
            title: "尖兵 Scout S1",
            description: "高性价比多功能作业机",
          },
          seal: {
            badge: "水面",
            label: "Seal Series",
            title: "海豹 Seal S1",
            description: "自主水面无人救生艇",
          },
        },
        softwareKicker: "Core Software System",
        softwareTitle: "ARC ENGINE",
        softwareDescription: "低空智能操作系统",
        softwareSummary:
          "围绕任务理解、系统治理与多终端协同，构成航链科技低空智能体系中的软件中枢。",
      },
      news: {
        kicker: "Company News",
        title: "公司报道",
        description:
          "聚焦品牌发布、技术表达与产业交流，持续呈现航链科技在低空智能领域的最新公开报道与传播内容。",
        cta: "查看更多报道",
        detailCta: "查看详情",
        items: [
          {
            title: "航链科技品牌发布与低空智能路线获主流媒体持续关注",
            summary:
              "围绕飞行智能体、ARC ENGINE 与低空经济创新实践，多家主流媒体持续跟进航链科技的品牌发布与技术表达。",
            tag: "主流媒体报道",
            meta: "2026.02 · 新华网 / 中国日报网 / 界面新闻",
            source: "新华网 / 中国日报网 / 经济观察网 / 界面新闻 / 环球时报",
          },
          {
            title: "浙江电视台聚焦发布会现场与产品体系展示",
            summary:
              "从发布会现场、核心讲解到硬件展示，报道集中呈现航链科技在低空智能领域的产品表达与场景落地。",
            tag: "电视媒体",
            meta: "2026.02 · 浙江电视台",
            source: "浙江电视台",
          },
          {
            title: "中国经济新闻网专访：低空经济智能化转型新探索",
            summary:
              "深度解析航链科技如何通过 ARC ENGINE 推动低空经济智能化转型，打造飞行智能体生态。",
            tag: "深度专访",
            meta: "2026.02 · 中国经济新闻网",
            source: "中国经济新闻网",
          },
          {
            title: "航链科技亮相行业峰会，展示低空智能创新成果",
            summary:
              "在多个行业峰会上分享飞行智能体技术路线与落地经验，获得业界广泛关注与认可。",
            tag: "行业活动",
            meta: "2026.01 · 行业峰会",
            source: "行业媒体联盟",
          },
          {
            title: "国际合作持续深化，拓展全球低空智能市场",
            summary:
              "与多国企业和机构建立战略合作，共同推动低空智能技术在全球范围内的应用与落地。",
            tag: "国际合作",
            meta: "2026.01 · 国际合作",
            source: "国际合作媒体",
          },
        ],
      },
      labels: {
        detail: "查看详情",
      },
    },
    products: {
      seoTitle: "产品体系 | Navlyn 航链科技",
      seoDescription:
        "查看 Navlyn 航链科技三款硬件终端如何分别承担任务决策、日常执行与水域响应角色。",
      heroTitle: "精密，且强悍。为极限作业而生的三款硬核先驱",
      heroSubtitle:
        "基于 ARC Inside 底层内核驱动，实现从边缘算力中心到全自主执行终端的闭环链路，让低空作业不再受限于环境。",
      hardwareSpecs: "硬件参数",
      aiCapabilities: "AI 能力",
      scenarios: "应用场景",
      cards: [
        {
          tag: "Commander X1",
          name: "指挥官 Commander X1",
          role: "边缘算力中枢 / 任务决策中心",
          summary:
            "面向低空决策网络构建与大范围任务调度，作为任务理解、算力汇聚与现场指挥的中枢节点。",
          specs: [
            { label: "翼展", value: "3米" },
            { label: "最大起飞重量", value: "19KG" },
            { label: "载荷", value: "3.5KG" },
            { label: "航行速度", value: "65-85公里/小时" },
            { label: "飞行时间", value: "3小时" },
            { label: "快速拆装", value: "3分钟" },
          ],
          aiCapabilities: [
            "任务解构：理解模糊指令，自动拆解并分配给巡逻机。",
            "实时建图：汇总所有从机的地图数据，生成全局态势图。",
            "自主安全：抗干扰、无 GPS 导航。",
          ],
          applications: ["大范围测绘", "巡检调度", "物流网络", "救援协同"],
        },
        {
          tag: "Scout S1",
          name: "尖兵 Scout S1",
          role: "高性价比，多功能任务执行",
          summary:
            "聚焦高频巡逻、基础设施检查与矿区巡检，在部署效率和复杂环境适配之间取得平衡。",
          specs: [
            { label: "翼展", value: "1.7米" },
            { label: "最大起飞重量", value: "4.5KG" },
            { label: "载荷", value: "800G" },
            { label: "航行速度", value: "57-80公里/小时" },
            { label: "飞行时间", value: "2小时" },
            { label: "快速拆装", value: "1分钟" },
          ],
          aiCapabilities: ["目标识别、智能跟随、自动避障。", "多机协同、群体智能。"],
          applications: ["日常安防巡逻", "公路巡检", "智慧矿区", "精细化设施检查"],
        },
        {
          tag: "Seal S1",
          name: "海豹 Seal S1",
          role: "救生艇 / 水域响应节点",
          summary:
            "服务江河湖泊海滩巡逻与救生，把低空系统能力延伸到水域现场，形成空海一体的执行闭环。",
          specs: [
            { label: "尺寸", value: "长1000mm × 宽700mm × 高248mm" },
            { label: "重量", value: "15.9kg" },
            { label: "航速", value: "7m/s" },
            { label: "拖曳能力", value: "1000kg" },
            { label: "遥控距离", value: "1403m" },
            { label: "机器人防水等级", value: "IP67" },
          ],
          aiCapabilities: ["落水人员识别，自动避障。", "空海联动，群体智能。"],
          applications: ["江河巡逻", "湖泊搜救", "海滩响应", "近岸救生"],
        },
      ],
    },
    arc: {
      seoTitle: "ARC GCS 低空 AI 操作系统 | Navlyn 航链科技",
      seoDescription: "了解 ARC GCS 的智能任务规划、多形态协同与飞行风险预检能力。",
      heroTitle: "ARC GCS｜低空 AI 操作系统",
      downloadLabel: "下载 ARC GCS",
      downloadPending: "下载地址即将开放",
      featuresLabel: "ARC GCS 核心能力",
      videoFallback: "您的浏览器暂不支持视频播放。",
      features: [
        {
          label: "VOICE ASSISTANT",
          title: "AI 语音助手｜极简操控，高效作业",
          videoLabel: "AI 语音助手演示视频",
        },
        {
          label: "AREA PLANNING",
          title: "一键绘区｜自动生成测绘航线",
          videoLabel: "一键绘区演示视频",
        },
        {
          label: "MIXED MISSIONS",
          title: "多形态混排｜全域任务一体规划",
          videoLabel: "多形态混排演示视频",
        },
        {
          label: "RISK PREFLIGHT",
          title: "智能风险预检｜前置防护，安全飞行",
          videoLabel: "智能风险预检演示视频",
        },
      ],
      resources: {
        eyebrow: "RESOURCES & SUPPORT",
        title: "ARC GCS 使用手册与售后支持",
        description: "获取使用资料，或联系 Navlyn 售后团队。",
        softwareTitle: "ARC GCS 客户端",
        softwareDescription: "前往下载页查看 Windows、macOS 与 Android 的发布状态。",
        manualTitle: "ARC GCS 使用手册",
        manualDescription: "下载操作、任务规划与设备适配说明。",
        manualDownloadLabel: "下载使用手册",
        supportTitle: "售后支持",
        supportDescription: "产品使用或技术问题，请发送邮件联系我们。",
        supportAction: "发送邮件",
      },
    },
    about: {
      seoTitle: "关于我们 | Navlyn 航链科技",
      seoDescription: "查看 Navlyn 航链科技关于公司愿景、新闻报道与职业招聘的二级入口。",
      paragraphs: [
        "浙江航链科技有限公司是一家聚焦低空智能装备与行业解决方案的科技企业。公司源自法国 Innotech 的技术与国际化基础，相关产品与方案已在海外多个国家和地区建立分销网络，并在巡检、测绘、安防、应急等多个场景形成落地案例，部分项目已成为国际行业中具有代表性的经典应用。",
        '在此基础上，航链科技依托中国成熟的制造与供应链体系，进一步推动低空装备的本地化研发、快速迭代与规模化交付。公司不仅聚焦复合翼无人机、无人船等核心装备，也积极推动低空智能操作系统开发，形成"智能硬件 + 操作系统 + 场景方案"的整体能力。',
        "未来，航链科技将以产业链主的角色，持续整合更多无人机、低空基础设施及相关智能制造企业，在人工智能与机器人智能能力的赋能下，推动低空应用从单一设备走向系统化、协同化和规模化升级，目前正处于全面拓展与加速落地阶段。",
      ],
    },
    common: {
      updateBadge: "页面正在更新",
      backHome: "返回首页",
      backNews: "返回新闻列表",
      viewProducts: "查看产品体系",
      previousStory: "上一篇",
      nextStory: "下一篇",
      moreStories: "更多报道",
      businessInfoTitle: "商务联系信息",
      businessInfoDescription: "商务邮箱、电话、办公地址与展示中心等正式联系信息，将通过该区域统一呈现。",
      businessEmail: "商务邮箱",
      businessAddress: "办公地址 / 展示中心",
      placeholderDescription: "当前页面框架已建立，具体资料、图文内容与交互信息将根据后续素材继续补充。",
      whatWeDoCarousel: "我们做什么图片切换",
      newsCarouselItem: "查看报道",
      pauseCarousel: "暂停轮播",
      resumeCarousel: "继续轮播",
      hardwareSeries: {
        commander: "Commander Series",
        scout: "Scout Series",
        seal: "Seal Series",
      },
    },
    contact: {
      seoTitle: "联系我们 | Navlyn 航链科技",
      seoDescription: "预约产品演示、行业方案沟通与合作洽谈，了解 Navlyn 如何把低空智能能力落到真实业务场景。",
      heroTitle: "让官网从品牌认知走向真实合作与演示承接",
      heroDescription: "围绕产品演示、行业方案、渠道合作与国际业务对接，建立清晰、高效、可信的沟通入口。",
      actions: {
        services: "查看服务内容",
        contact: "查看联系入口",
      },
      navItems: {
        services: "我们能提供什么服务",
        audience: "适合哪些客户沟通",
        contact: "沟通入口概览",
      },
      services: {
        kicker: "Demo Services",
        title: "把产品演示、行业方案与合作洽谈组织成清晰入口",
        description: "通过更清晰的服务分类和沟通指引，让不同客户能够快速找到合适的产品、方案与合作对接路径。",
        cards: [
          {
            title: "产品演示",
            detail: "适合首次建立产品认知，快速理解 Commander、Scout、Seal 与 ARC ENGINE 的协同关系。",
          },
          {
            title: "行业方案沟通",
            detail: "适合围绕测绘、工程、矿业、应急等场景梳理目标、部署方式与交付路径。",
          },
          {
            title: "合作与渠道洽谈",
            detail: "适合国际合作伙伴、经销商、高校实验室与联合创新项目对接。",
          },
        ],
      },
      audience: {
        kicker: "Who It's For",
        title: "适合哪些客户发起沟通",
        description: "把不同类型客户的目标、关注点与合作方向先放到公开入口中，官网才能从展示层真正走向承接层。",
        items: [
          "政府 / 城市治理客户：关注安全可控、低空治理、应急能力。",
          "国央企 / 大型企业：关注规模化部署、行业落地与合规管理。",
          "海外客户 / 渠道伙伴：关注产品组合、培训支持与长期合作方式。",
          "高校 / 技术合作方：关注系统路线、实验室合作与人才培养。",
        ],
      },
      process: {
        kicker: "Process",
        title: "从首次沟通到演示安排的承接流程",
        description: "以清晰、可预期的沟通路径承接演示预约、行业咨询与合作洽谈，帮助双方更快进入有效交流。",
        steps: [
          {
            step: "01",
            title: "明确需求方向",
            detail: "先确认你更关注产品演示、场景方案，还是合作洽谈，我们据此准备沟通内容。",
          },
          {
            step: "02",
            title: "快速响应与匹配",
            detail: "根据行业、地区与合作意图，匹配合适的产品、案例和团队成员进入沟通。",
          },
          {
            step: "03",
            title: "安排演示或交流",
            detail: "可继续衔接线上讲解、现场演示、案例复盘与后续合作路径说明。",
          },
        ],
      },
      panel: {
        kicker: "Contact Paths",
        title: "把产品、方案与合作意向映射到更清晰的沟通入口",
        description: "围绕产品演示、行业咨询与合作洽谈，建立更清晰的对外沟通结构，帮助客户快速匹配合适入口。",
        note: "当前页面以介绍沟通路径和服务范围为主，帮助客户更快找到合适的产品、方案与合作对接入口。",
        sideTitle: "合作与演示入口",
        sideDescription: "适用于产品演示、行业方案咨询、代理合作、高校实验室交流等场景。",
        actionLabel: "了解公司背景",
        cards: [
          {
            title: "产品演示",
            description: "适合需要快速了解 ARC ENGINE、指挥机和巡查终端能力的客户。",
          },
          {
            title: "方案咨询",
            description: "适合矿业、工程、测绘和应急救援场景的项目需求沟通。",
          },
          {
            title: "合作洽谈",
            description: "适合渠道伙伴、国际合作方和高校实验室对接。",
          },
        ],
        sideItems: [
          {
            title: "商务沟通入口",
            description: "适用于产品演示申请、行业方案咨询、渠道合作对接与联合创新交流。",
          },
          {
            title: "建议沟通准备",
            description: "建议提前准备行业场景、预期目标、部署地点与时间要求，便于快速安排合适的演示内容。",
          },
        ],
      },
      inquiryForm: {
        kicker: "发起沟通",
        title: "联系我们的团队",
        description: "告诉我们您的业务场景、组织背景与合作目标，我们会据此准备更合适的沟通内容。",
        fields: {
          countryRegion: "国家 / 地区",
          firstName: "名",
          lastName: "姓",
          email: "工作邮箱",
          phone: "联系电话",
          organizationType: "机构类型",
          companyName: "公司 / 机构名称",
          website: "公司 / 机构网站",
          description: "需求描述",
        },
        selectPlaceholder: "请选择",
        descriptionPlaceholder: "请简要描述应用场景、目标、部署地点、时间要求或希望了解的产品。",
        organizationOptions: [
          { value: "company", label: "企业" },
          { value: "government", label: "政府 / 公共机构" },
          { value: "distributor", label: "经销商 / 合作伙伴" },
          { value: "research", label: "高校 / 研究机构" },
          { value: "other", label: "其他" },
        ],
        submitLabel: "提交",
        submittingLabel: "提交中…",
        submitNote: "提交后，我们的团队将尽快与您联系。",
        successMessage: "提交成功，我们的团队将尽快与您联系。",
        errorMessage: "提交失败，请检查网络后重试，或直接发送邮件至 contact@navlyn.com。",
      },
    },
    partners: {
      seoTitle: "客户与合作 | Navlyn 航链科技",
      seoDescription: "查看 Navlyn 客户与合作页面下的合作伙伴与全球经销商入口。",
      heroTitle: "链接世界，航向未来",
      heroSubtitle: "每一处航迹，都有我们的伙伴。",
      paragraphs: [
        "“航链”不仅是技术的链接，更是全球信任的链接。我们在多哥感受非洲的生机，在马来西亚见证东盟的速度，在德国、比利时严谨的工业氛围中砥砺前行。",
        "无论您身处澳大利亚的广袤海岸，还是沙特阿拉伯的能源基地，Navlyn 官方授权代理商均可为您提供最及时的专业咨询与技术支撑。",
      ],
      cta: "联系我们",
      tabs: [
        {
          title: "合作伙伴",
          description: "合作伙伴页将用于展示合作品牌与 Logo 墙，目前页面正在更新。",
          path: "/partners/alliances",
        },
        {
          title: "全球经销商",
          description: "全球经销商页将用于承接地图、国家、城市与代理商联系方式，目前页面正在更新。",
          path: "/partners/distributors",
        },
      ],
    },
    partnerAlliances: {
      seoTitle: "合作伙伴 | Navlyn 航链科技",
      seoDescription: "查看 Navlyn 合作伙伴页面框架与合作品牌展示区。",
      heroTitle: "合作伙伴",
      heroDescription: "合作伙伴页先建立大标题与品牌展示区框架，后续继续替换真实 Logo、联合项目与合作说明。",
      sectionTitle: "合作品牌展示区",
      sectionDescription: "文档要求这一页以大标题和 Logo 墙为核心。当前先建立品牌墙结构，等待后续真实合作标识与项目内容接入。",
    },
    partnerDistributors: {
      seoTitle: "全球经销商 | Navlyn 航链科技",
      seoDescription: "查看 Navlyn 全球经销商页面框架与地图信息占位。",
      heroTitle: "全球经销商",
      heroDescription: "世界地图、国家城市与代理商联系方式将在经销商名单齐备后继续接入，当前先建立展示框架。",
      sectionTitle: "世界地图与代理商信息框架",
      sectionDescription: "这一页按文档先建立“世界地图 + 小旗子 + 城市与联系方式”的承接框架，当前以区域卡片形式占位。",
      note: "代理商与联系方式待补充",
    },
    aboutTabs: [
      {
        title: "公司愿景",
        description: "查看品牌愿景、核心表达与企业介绍的第一版页面框架。",
        path: "/about/vision",
      },
      {
        title: "新闻报道",
        description: "查看企业新闻、公开报道与传播内容的聚合展示页。",
        path: "/about/news",
      },
      {
        title: "职业招聘",
        description: "查看航链科技招聘页框架与岗位卡片布局，后续继续补充内容。",
        path: "/about/careers",
      },
    ],
    aboutVision: {
      seoTitle: "公司愿景 | Navlyn 航链科技",
      seoDescription: "查看 Navlyn 航链科技的品牌愿景、核心表达与阶段性里程碑。",
      heroTitle: "以飞行智能体系统推动低空能力进入真正可规模化的时代",
      heroDescription: "围绕品牌愿景、系统能力与国际合作基础，建立 Navlyn 在低空智能领域的长期表达与发展方向。",
      sectionTitle: "Enabling Intelligent Airspace Capabilities",
      sectionDescription: "从单机作业到多机多域协同，从手动控制到意图驱动执行，航链科技希望把低空能力沉淀为可长期运行的系统能力。",
      pillars: [
        {
          title: "品牌愿景",
          description: "让飞行智能体从概念走向真实业务现场，成为低空经济的新型基础能力。",
        },
        {
          title: "系统方向",
          description: "用 ARC ENGINE 串起硬件终端、任务理解、执行编排与持续学习闭环。",
        },
        {
          title: "国际合作",
          description: "承袭法国工业无人机与精密测绘积累，继续构建面向全球的交付网络与合作基础。",
        },
      ],
      milestones: [
        "2025 年 8 月，航链科技在浙江启动品牌与产品发布。",
        "承袭法国工业无人机服务商 Innotech-drone 的工程和交付积累。",
        "围绕 ARC ENGINE 构建软件中枢、硬件终端与行业方案协同体系。",
        "联合高校和实验室持续推动低空智能与人才培养。",
      ],
    },
    aboutNews: {
      seoTitle: "新闻报道 | Navlyn 航链科技",
      seoDescription: "查看 Navlyn 航链科技的公开报道、媒体引用与阶段性新闻内容。",
      heroTitle: "新闻报道",
      heroDescription: "聚焦品牌发布、技术表达与产业交流，汇总航链科技当前已公开的媒体报道与传播内容。",
      sectionTitle: "公开报道与传播内容",
      sectionDescription: "当前先基于企业新闻报道目录搭建第一版新闻页，后续可以继续补更多报道、正文与专题内容。",
    },
    aboutCareers: {
      seoTitle: "职业招聘 | Navlyn 航链科技",
      seoDescription: "查看 Navlyn 航链科技职业招聘页框架与岗位分类展示。",
      heroTitle: "职业招聘",
      heroDescription: "招聘页先建立结构框架，后续再继续接入 Logo 动画、岗位信息与投递方式。",
      sectionTitle: "岗位框架",
      sectionDescription: "当前先建立招聘页骨架，围绕研发、产品与商务三类岗位组织内容，后续继续补正式 JD 与投递入口。",
      bannerLabel: "Join Navlyn",
      bannerTitle: "招聘页先建立品牌入口与岗位结构",
      bannerDescription: "文档里提到 Logo 动画素材，但当前目录未找到文件。本页先用品牌入口和岗位框架承接，后续再接动画。",
      highlights: [
        "围绕飞行智能体、系统平台与国际合作建立跨学科团队",
        "持续开放研发、产品、设计、市场与商务岗位",
        "岗位信息与投递方式将在后续资料齐备后继续补充",
      ],
      previewCards: [
        {
          title: "研发类岗位",
          description: "算法工程、系统平台、前端与低空智能相关岗位内容正在更新。",
        },
        {
          title: "产品与设计岗位",
          description: "围绕产品体系、体验设计与内容表达的岗位信息正在更新。",
        },
        {
          title: "商务与运营岗位",
          description: "围绕国际合作、行业方案与品牌传播的岗位信息正在更新。",
        },
      ],
      updateTitle: "招聘内容持续更新中",
      updateDescription: "由于当前目录中未找到 Logo 动画与岗位清单源文件，本页先完成结构，后续可直接补充动画素材与岗位内容。",
    },
    newsDetail: {
      notFoundTitle: "未找到对应报道",
      notFoundDescription: "当前报道可能已下线、链接已变更，或当前内容尚未正式发布。",
      moreStories: "更多报道",
    },
    notFound: {
      seoTitle: "页面未找到 | Navlyn 航链科技",
      seoDescription: "当前访问的页面不存在或链接已失效。",
      title: "页面未找到",
      description: "你访问的地址可能已变更，或者当前内容尚未上线。可以先返回首页，或者继续浏览产品体系与 ARC ENGINE。",
    },
  },
  en: {
    home: {
      seoTitle: "Navlyn | Enabling Intelligent Airspace Capabilities",
      seoDescription:
        "Navlyn powers low-altitude intelligence with ARC ENGINE, smart hardware terminals, and industry solutions for surveying, mining, engineering, and emergency response.",
      heroSecondary: "The Era of Intelligent Flight",
      heroSubtitle: "Autonomy | Reliability | Collaboration",
      heroPrimaryCta: "Explore Products",
      heroSecondaryCta: "Learn More",
      whatWeDo: {
        kicker: "What We Do",
        title: "What We Do",
        paragraphs: [
          "Founded in Zhejiang, China in August 2025, Navlyn inherits the industrial UAV and precision mapping expertise of France-based Innotech-drone. With low-altitude economy plus AI at its core, the company deeply fuses intelligence into hardware to build highly autonomous flight agents.",
          "From hardware terminals and ARC ENGINE to industry-ready solutions, Navlyn delivers an end-to-end low-altitude intelligence stack that moves operations from remote control to intent-driven decision making, pushing the global low-altitude economy toward the intelligent 3.0 era.",
        ],
      },
      industries: {
        kicker: "Industry Services",
        title: "Industry Services",
        description:
          "Navlyn serves agriculture, mining, energy, security, coastal rescue, and inspection with scenario-driven solutions built on air-sea terminals and the ARC ENGINE control core.",
        stats: [
          "Serving four continents",
          "200+ field projects",
          "4M+ km cumulative flight distance",
        ],
        cards: {
          agriculture: {
            title: "Agriculture",
            summary:
              "Precision sensing and task orchestration for crop monitoring, farmland patrols, and coordinated agricultural workflows.",
          },
          mining: {
            title: "Mining",
            summary:
              "Mine modeling, volumetric measurement, and risk inspection for complex terrain and high-frequency field operations.",
          },
          energy: {
            title: "Energy",
            summary:
              "Long-range inspection and key-node sensing for oil, gas, power, and critical energy infrastructure.",
          },
          security: {
            title: "Security",
            summary:
              "Persistent aerial awareness for border patrol, crowd monitoring, and the protection of critical infrastructure.",
          },
          "coastal-rescue": {
            title: "Coastal Rescue",
            summary:
              "Air-sea coordination, rapid search, and mission orchestration for fast response across shorelines and nearshore waters.",
          },
          inspection: {
            title: "Inspection",
            summary:
              "System-driven high-frequency inspection for campuses, transport corridors, and distributed infrastructure networks.",
          },
        },
      },
      capabilities: {
        kicker: "Core Capabilities",
        title: "Core Capabilities",
        intro:
          "From intelligent control and hardware-software synergy to swarm safety and field delivery, Navlyn distills low-altitude operations into reusable and scalable system capability.",
        cards: [
          {
            title: "ARC ENGINE",
            description:
              "An L4 edge intelligence platform for intent understanding, autonomous planning, and full-domain governance. It turns flight from remote execution into intent-driven decision making.",
            tags: ["Intent Understanding", "Autonomous Planning", "Governance"],
            statValue: "L4",
            statLabel: "Autonomy Level",
          },
          {
            title: "Dual-Core Stack",
            description:
              "An air-sea hardware matrix fused with an AI control core. Hardware stays standardized while software keeps evolving in the field.",
            tags: ["Standardized Hardware", "AI Fusion", "Continuous Evolution"],
            statValue: "200+",
            statLabel: "Connected Devices",
          },
          {
            title: "Swarm Intelligence",
            description:
              "Coordinate multi-aircraft and air-sea assets at scale, with sovereign-grade governance and active safety for critical industries.",
            tags: ["Multi-Agent Orchestration", "Active Safety", "Access Governance"],
            statValue: "200",
            statLabel: "Max Coordination",
          },
          {
            title: "Field Delivery",
            description:
              "From centimeter-grade surveying to continuous unmanned inspection, Navlyn delivers scalable capabilities for extreme environments and emergency response.",
            tags: ["Global Delivery", "Field Validation", "Scalable Rollout"],
            statValue: "4M+",
            statLabel: "Flight Distance",
          },
        ],
      },
      productGateway: {
        kicker: "Product",
        title: "Products",
        lead:
          "From air-sea hardware terminals to the ARC ENGINE software core, Navlyn builds a complete low-altitude intelligence product stack.",
        cta: "Book a Demo",
        hardwareKicker: "Core Hardware Matrix",
        hardwareTitle: "Core Hardware Matrix",
        hardwareDescription:
          "A three-terminal field architecture covering mission control, aerial execution, and water-surface rescue.",
        hardwareItems: {
          commander: {
            badge: "Flagship",
            label: "Commander Series",
            title: "Commander X1",
            description: "Edge intelligence and mission decision hub",
          },
          scout: {
            badge: "Field",
            label: "Scout Series",
            title: "Scout S1",
            description: "Cost-efficient multi-role field terminal",
          },
          seal: {
            badge: "Marine",
            label: "Seal Series",
            title: "Seal S1",
            description: "Autonomous surface rescue craft",
          },
        },
        softwareKicker: "Core Software System",
        softwareTitle: "ARC ENGINE",
        softwareDescription: "Low-altitude Intelligent Operating System",
        softwareSummary:
          "Built around mission understanding, governance, and multi-terminal coordination, ARC ENGINE forms the software core of Navlyn's low-altitude intelligence stack.",
      },
      news: {
        kicker: "Company News",
        title: "Company News",
        description:
          "Track Navlyn's latest public stories around product launches, technology narratives, and industry collaboration in low-altitude intelligence.",
        cta: "View More Stories",
        detailCta: "Read Story",
        items: [
          {
            title: "Mainstream media continues tracking Navlyn’s launch and low-altitude intelligence roadmap",
            summary:
              "Across flight-agent systems, ARC ENGINE, and real low-altitude practice, multiple major outlets have followed Navlyn’s brand launch and technical narrative.",
            tag: "Mainstream Coverage",
            meta: "2026.02 · Xinhua / China Daily / Jiemian",
            source: "Xinhua / China Daily / Economic Observer / Jiemian / Global Times",
          },
          {
            title: "Zhejiang TV spotlights the launch event and product showcase",
            summary:
              "From keynote explanations to hardware showcases, the coverage highlights Navlyn’s product narrative and scenario-driven low-altitude deployment.",
            tag: "Broadcast Media",
            meta: "2026.02 · Zhejiang TV",
            source: "Zhejiang TV",
          },
          {
            title: "China Economic News interview: new paths toward intelligent low-altitude transformation",
            summary:
              "A closer look at how Navlyn uses ARC ENGINE to drive intelligent transformation in the low-altitude economy and build a flight-agent ecosystem.",
            tag: "Feature Interview",
            meta: "2026.02 · China Economic News",
            source: "China Economic News",
          },
          {
            title: "Navlyn appears at industry summits with new low-altitude intelligence results",
            summary:
              "Navlyn shared its flight-agent roadmap and field experience at several summits, drawing broad industry attention.",
            tag: "Industry Event",
            meta: "2026.01 · Industry Summit",
            source: "Industry Media Alliance",
          },
          {
            title: "Global collaboration expands with deeper low-altitude market partnerships",
            summary:
              "Strategic partnerships with international enterprises and institutions continue to extend the global reach of Navlyn’s low-altitude intelligence solutions.",
            tag: "Global Collaboration",
            meta: "2026.01 · International",
            source: "International Media",
          },
        ],
      },
      labels: {
        detail: "View Details",
      },
    },
    products: {
      seoTitle: "Products | Navlyn",
      seoDescription:
        "Explore three Navlyn hardware terminals built for command, execution, and water-surface response across extreme operational scenarios.",
      heroTitle:
        "Precision. Power. Three rugged pioneers built for extreme operations.",
      heroSubtitle:
        "Powered by the ARC Inside core, this trio forms a closed operational chain from edge intelligence and mission command to fully autonomous field execution.",
      hardwareSpecs: "Hardware Specs",
      aiCapabilities: "AI Capabilities",
      scenarios: "Scenarios",
      cards: [
        {
          tag: "Commander X1",
          name: "Commander X1",
          role: "Edge Intelligence Hub / Mission Control Center",
          summary:
            "Built for low-altitude decision networks and large-area mission orchestration, acting as the central node for task understanding, compute aggregation, and field command.",
          specs: [
            { label: "Wingspan", value: "3 m" },
            { label: "Max Takeoff Weight", value: "19 kg" },
            { label: "Payload", value: "3.5 kg" },
            { label: "Cruise Speed", value: "65-85 km/h" },
            { label: "Flight Time", value: "3 h" },
            { label: "Rapid Assembly", value: "3 min" },
          ],
          aiCapabilities: [
            "Task decomposition: interpret intent and dispatch to field terminals.",
            "Live mapping: aggregate fleet data into a unified situation map.",
            "Autonomous safety: anti-jamming and GPS-denied navigation.",
          ],
          applications: ["Large-area surveying", "Inspection command", "Logistics networks", "Rescue coordination"],
        },
        {
          tag: "Scout S1",
          name: "Scout S1",
          role: "Affordable Multi-Role Field Executor",
          summary:
            "Designed for high-frequency patrols, infrastructure inspection, and mining workflows with a strong balance between deployment speed and field adaptability.",
          specs: [
            { label: "Wingspan", value: "1.7 m" },
            { label: "Max Takeoff Weight", value: "4.5 kg" },
            { label: "Payload", value: "800 g" },
            { label: "Cruise Speed", value: "57-80 km/h" },
            { label: "Flight Time", value: "2 h" },
            { label: "Rapid Assembly", value: "1 min" },
          ],
          aiCapabilities: [
            "Target recognition, intelligent tracking, and obstacle avoidance.",
            "Multi-aircraft coordination and swarm intelligence.",
          ],
          applications: ["Daily patrols", "Road inspection", "Smart mining", "Fine-grained asset inspection"],
        },
        {
          tag: "Seal S1",
          name: "Seal S1",
          role: "Rescue Craft / Water Response Node",
          summary:
            "Built for rivers, lakes, beaches, and near-shore response, extending Navlyn's low-altitude system intelligence into real water operations.",
          specs: [
            { label: "Dimensions", value: "1000 × 700 × 248 mm" },
            { label: "Weight", value: "15.9 kg" },
            { label: "Speed", value: "7 m/s" },
            { label: "Tow Capacity", value: "1000 kg" },
            { label: "Control Range", value: "1403 m" },
            { label: "Ingress Rating", value: "IP67" },
          ],
          aiCapabilities: [
            "Person-overboard recognition and autonomous obstacle avoidance.",
            "Air-sea coordination with swarm intelligence.",
          ],
          applications: ["River patrol", "Lake rescue", "Beach response", "Near-shore lifesaving"],
        },
      ],
    },
    arc: {
      seoTitle: "ARC GCS Low-Altitude AI Operating System | Navlyn",
      seoDescription:
        "Explore ARC GCS for intelligent mission planning, mixed-platform coordination, and flight risk preflight checks.",
      heroTitle: "ARC GCS | Low-Altitude AI Operating System",
      downloadLabel: "Download ARC GCS",
      downloadPending: "Download coming soon",
      featuresLabel: "ARC GCS capabilities",
      videoFallback: "Your browser does not support video playback.",
      features: [
        {
          label: "VOICE ASSISTANT",
          title: "AI Voice Assistant | Minimal Control, Efficient Operations",
          videoLabel: "AI Voice Assistant demonstration video",
        },
        {
          label: "AREA PLANNING",
          title: "One-Tap Area Planning | Generate Survey Routes Automatically",
          videoLabel: "One-Tap Area Planning demonstration video",
        },
        {
          label: "MIXED MISSIONS",
          title: "Mixed Mission Planning | Plan Every Mission in One Workspace",
          videoLabel: "Mixed Mission Planning demonstration video",
        },
        {
          label: "RISK PREFLIGHT",
          title: "Smart Risk Preflight | Detect Issues Early, Fly Safely",
          videoLabel: "Smart Risk Preflight demonstration video",
        },
      ],
      resources: {
        eyebrow: "RESOURCES & SUPPORT",
        title: "ARC GCS Manual and Support",
        description: "Get product guidance or contact the Navlyn support team.",
        softwareTitle: "ARC GCS Client",
        softwareDescription:
          "Visit the download page for Windows, macOS, and Android release availability.",
        manualTitle: "ARC GCS User Manual",
        manualDescription: "Download guidance for operation, mission planning, and device compatibility.",
        manualDownloadLabel: "Download user manual",
        supportTitle: "After-Sales Support",
        supportDescription: "Email us with product usage or technical questions.",
        supportAction: "Send email",
      },
    },
    about: {
      seoTitle: "About | Navlyn",
      seoDescription:
        "Explore Navlyn's background, industry foundation, and integrated capability across intelligent hardware, software, and scenarios.",
      paragraphs: [
        "Navlyn is a technology company focused on low-altitude intelligent equipment and industry solutions. Built on the international engineering foundation of France-based Innotech, its products and solutions have already established overseas distribution in multiple countries and landed in inspection, surveying, security, and emergency response scenarios.",
        'With the support of China\'s mature manufacturing and supply-chain ecosystem, Navlyn is accelerating localized R&D, rapid iteration, and scalable delivery. The company focuses on fixed-wing UAVs, unmanned surface vehicles, and the ongoing development of intelligent operating systems for low-altitude operations, building an integrated capability across hardware, software, and scenario solutions.',
        "Looking ahead, Navlyn aims to act as a chain-leading integrator that connects UAVs, low-altitude infrastructure, and intelligent manufacturing partners. Driven by AI and embodied intelligence, the company is pushing low-altitude applications from standalone equipment toward system-level, collaborative, and scalable deployment.",
      ],
    },
    common: {
      updateBadge: "Page Update in Progress",
      backHome: "Back to Home",
      backNews: "Back to News",
      viewProducts: "View Products",
      previousStory: "Previous Story",
      nextStory: "Next Story",
      moreStories: "More Stories",
      businessInfoTitle: "Business Contact Information",
      businessInfoDescription:
        "Official business email, phone, office address, and demo center details will be published here in a single place.",
      businessEmail: "Business Email",
      businessAddress: "Office / Demo Center",
      placeholderDescription:
        "The page structure is in place. Detailed materials, imagery, and interactive information will continue to be added as assets arrive.",
      whatWeDoCarousel: "What We Do image carousel",
      newsCarouselItem: "View story",
      pauseCarousel: "Pause carousel",
      resumeCarousel: "Resume carousel",
      hardwareSeries: {
        commander: "Commander Series",
        scout: "Scout Series",
        seal: "Seal Series",
      },
    },
    contact: {
      seoTitle: "Contact | Navlyn",
      seoDescription:
        "Book product demos, discuss industry solutions, and start collaboration conversations with the Navlyn team.",
      heroTitle: "Explore the ways Navlyn can enhance your operations.",
      heroDescription: "",
      actions: {
        services: "View Services",
        contact: "View Contact Paths",
      },
      navItems: {
        services: "What we can provide",
        audience: "Who should reach out",
        contact: "Contact overview",
      },
      services: {
        kicker: "Demo Services",
        title: "Organize demos, solution planning, and collaboration into clear entry points",
        description:
          "Clear service categories and communication guidance help each type of customer quickly find the right product, solution, and collaboration path.",
        cards: [
          {
            title: "Product Demo",
            detail:
              "Ideal for first-time product discovery and quickly understanding how Commander, Scout, Seal, and ARC ENGINE work together.",
          },
          {
            title: "Industry Solution Discussion",
            detail:
              "Ideal for surveying, engineering, mining, and emergency scenarios that require deployment planning and delivery path alignment.",
          },
          {
            title: "Partnership & Channel Talks",
            detail:
              "Ideal for global partners, distributors, university labs, and joint innovation projects.",
          },
        ],
      },
      audience: {
        kicker: "Who It's For",
        title: "Who should start the conversation",
        description:
          "Putting audience goals and collaboration priorities into the public entry point helps the website move from display to real intake.",
        items: [
          "Government / city operations: focused on safe governance, low-altitude control, and emergency readiness.",
          "State-owned and large enterprises: focused on scalable deployment, scenario rollout, and compliance.",
          "Overseas customers / channel partners: focused on product mix, training support, and long-term collaboration.",
          "Universities / technical partners: focused on system roadmap, lab cooperation, and talent development.",
        ],
      },
      process: {
        kicker: "Process",
        title: "From first inquiry to scheduled demo",
        description:
          "A clear and predictable path helps both sides move quickly from initial contact to a useful demo, consultation, or partnership discussion.",
        steps: [
          {
            step: "01",
            title: "Clarify the request",
            detail:
              "We first identify whether the focus is product demo, solution planning, or partnership discussion, then prepare the right materials.",
          },
          {
            step: "02",
            title: "Match the right team",
            detail:
              "Based on industry, region, and collaboration intent, we match the right products, case studies, and team members.",
          },
          {
            step: "03",
            title: "Arrange the next exchange",
            detail:
              "The next step can be an online walkthrough, field demo, case review, or partnership discussion.",
          },
        ],
      },
      panel: {
        kicker: "Contact Paths",
        title: "Map product, solution, and partnership intent to clear conversation routes",
        description:
          "A clearer external communication structure helps customers quickly reach the right entry point for demos, solution discussions, and collaboration.",
        note:
          "This page focuses on clarifying service scope and communication routes so customers can quickly match the right contact path.",
        sideTitle: "Demo & Collaboration Entry",
        sideDescription:
          "Suitable for product demos, industry consultations, agency partnerships, and university lab exchanges.",
        actionLabel: "Learn About Navlyn",
        cards: [
          {
            title: "Product Demo",
            description: "For customers who want a fast understanding of ARC ENGINE and Navlyn hardware capabilities.",
          },
          {
            title: "Solution Consultation",
            description: "For mining, engineering, surveying, and emergency-response project planning discussions.",
          },
          {
            title: "Partnership Discussion",
            description: "For channel partners, international collaborators, and university labs.",
          },
        ],
        sideItems: [
          {
            title: "Business Contact Path",
            description: "Use this route for demos, solution inquiries, channel discussions, and joint innovation projects.",
          },
          {
            title: "Recommended Prep",
            description: "Sharing scenario, goals, deployment location, and timing in advance helps us prepare the right demo faster.",
          },
        ],
      },
      inquiryForm: {
        kicker: "Start a conversation",
        title: "Reach out to our team",
        description:
          "Tell us about your organization, operating scenario, and goals so we can prepare the right conversation.",
        fields: {
          countryRegion: "Country / Region",
          firstName: "First name",
          lastName: "Last name",
          email: "Work email",
          phone: "Phone number",
          organizationType: "Organization type",
          companyName: "Company / Organization name",
          website: "Company / Organization website",
          description: "Description",
        },
        selectPlaceholder: "Please select",
        descriptionPlaceholder:
          "Describe your use case, goals, deployment location, timeline, or the products you would like to explore.",
        organizationOptions: [
          { value: "company", label: "Company" },
          { value: "government", label: "Government / Public sector" },
          { value: "distributor", label: "Distributor / Partner" },
          { value: "research", label: "University / Research" },
          { value: "other", label: "Other" },
        ],
        submitLabel: "Submit",
        submittingLabel: "Submitting…",
        submitNote: "Submit your details and our team will get back to you.",
        successMessage: "Your inquiry has been submitted. Our team will get back to you soon.",
        errorMessage: "We couldn’t submit your inquiry. Please try again or email contact@navlyn.com.",
      },
    },
    partners: {
      seoTitle: "Clients & Partners | Navlyn",
      seoDescription: "Explore Navlyn's partner ecosystem and distributor entry points.",
      heroTitle: "Connected to the world, built for the future",
      heroSubtitle: "Every mission trace carries a partner behind it.",
      paragraphs: [
        '"Navlyn" connects more than technology. It connects trust across regions. We feel the momentum of Africa in Togo, the speed of Southeast Asia in Malaysia, and the rigor of industrial Europe in Germany and Belgium.',
        "Whether you are based on the Australian coastline or inside an energy facility in the Middle East, authorized Navlyn partners can provide timely consultation and technical support.",
      ],
      cta: "Contact Us",
      tabs: [
        {
          title: "Alliance Partners",
          description: "A placeholder for brand partners, logo walls, and joint projects while the page continues to evolve.",
          path: "/partners/alliances",
        },
        {
          title: "Global Distributors",
          description: "A placeholder for maps, countries, cities, and distributor contact details while the page continues to evolve.",
          path: "/partners/distributors",
        },
      ],
    },
    partnerAlliances: {
      seoTitle: "Alliance Partners | Navlyn",
      seoDescription: "Explore the Navlyn alliance page framework and brand wall area.",
      heroTitle: "Alliance Partners",
      heroDescription:
        "This page starts with a clear headline and partner wall framework, ready for real logos, joint projects, and collaboration narratives.",
      sectionTitle: "Brand Showcase",
      sectionDescription:
        "The current structure is centered on a headline and logo wall so it can later absorb real partner identities and joint project content.",
    },
    partnerDistributors: {
      seoTitle: "Global Distributors | Navlyn",
      seoDescription: "Explore the Navlyn distributor page framework and global map placeholder.",
      heroTitle: "Global Distributors",
      heroDescription:
        "The world map, countries, cities, and distributor contact details will be connected as the directory becomes complete. This page first establishes the presentation framework.",
      sectionTitle: "World Map & Distributor Information Framework",
      sectionDescription:
        "This page starts with a simple structure for world map, country markers, cities, and contact details, currently represented as regional cards.",
      note: "Distributor contact details coming soon",
    },
    aboutTabs: [
      {
        title: "Vision",
        description: "Explore Navlyn's first-pass vision page and core company narrative.",
        path: "/about/vision",
      },
      {
        title: "News",
        description: "Browse the aggregated page for company news, public stories, and communications.",
        path: "/about/news",
      },
      {
        title: "Careers",
        description: "Preview Navlyn's recruiting structure and job categories before full role content is added.",
        path: "/about/careers",
      },
    ],
    aboutVision: {
      seoTitle: "Company Vision | Navlyn",
      seoDescription: "Explore Navlyn's brand vision, core narrative, and milestone structure.",
      heroTitle: "Scaling low-altitude capability through flight-agent systems",
      heroDescription:
        "Build a long-term narrative around brand vision, system capability, and international foundations in low-altitude intelligence.",
      sectionTitle: "Enabling Intelligent Airspace Capabilities",
      sectionDescription:
        "From single-terminal operations to multi-agent collaboration, and from manual control to intent-driven execution, Navlyn aims to turn low-altitude capability into a long-running system layer.",
      pillars: [
        {
          title: "Brand Vision",
          description: "Move flight agents from concept to real operational fields and turn them into a new layer of low-altitude infrastructure.",
        },
        {
          title: "System Direction",
          description: "Use ARC ENGINE to connect hardware terminals, mission understanding, orchestration, and the learning loop.",
        },
        {
          title: "International Foundation",
          description: "Extend the industrial UAV and precision-mapping heritage of France into a global delivery and partnership network.",
        },
      ],
      milestones: [
        "In August 2025, Navlyn launched its brand and product narrative in Zhejiang.",
        "It inherits engineering and delivery foundations from France-based Innotech-drone.",
        "ARC ENGINE now links software control, hardware terminals, and scenario solutions into one system.",
        "Navlyn continues to work with universities and labs on low-altitude intelligence and talent development.",
      ],
    },
    aboutNews: {
      seoTitle: "News | Navlyn",
      seoDescription: "Browse Navlyn's public news, media references, and early-stage story archive.",
      heroTitle: "Media Coverage",
      heroDescription:
        "A first-pass collection of public stories around brand launches, technical narratives, and industry exchange.",
      sectionTitle: "Public Stories & Media Materials",
      sectionDescription:
        "This page begins with a lightweight news structure and can later expand with more coverage, full articles, and themed story collections.",
    },
    aboutCareers: {
      seoTitle: "Careers | Navlyn",
      seoDescription: "Preview Navlyn's recruiting structure and job categories.",
      heroTitle: "Careers",
      heroDescription:
        "The careers page first establishes the structure. Animation assets, role details, and submission paths can be added later.",
      sectionTitle: "Role Structure",
      sectionDescription:
        "This first version groups content around engineering, product, and business roles before full job descriptions and application entry are added.",
      bannerLabel: "Join Navlyn",
      bannerTitle: "Establish the brand entry and hiring structure first",
      bannerDescription:
        "The original planning mentions logo animation assets, but none are currently available. This page therefore starts with a brand entry and role structure.",
      highlights: [
        "Build an interdisciplinary team around flight agents, system platforms, and international collaboration.",
        "Keep opening roles across R&D, product, design, marketing, and business.",
        "Role details and application routes will continue to expand as source materials arrive.",
      ],
      previewCards: [
        {
          title: "Engineering Roles",
          description: "Algorithms, system platform, frontend, and low-altitude intelligence roles are being prepared.",
        },
        {
          title: "Product & Design Roles",
          description: "Roles across product systems, experience design, and narrative content are being prepared.",
        },
        {
          title: "Business & Operations Roles",
          description: "Roles across international cooperation, industry solutions, and brand communication are being prepared.",
        },
      ],
      updateTitle: "Hiring content is still being expanded",
      updateDescription:
        "Because the current asset directory does not yet include animation or job-list sources, the page now focuses on structure and can later absorb those materials directly.",
    },
    newsDetail: {
      notFoundTitle: "Story Not Found",
      notFoundDescription:
        "The story may have been removed, the link may have changed, or the content may not be publicly available yet.",
      moreStories: "More Stories",
    },
    notFound: {
      seoTitle: "Page Not Found | Navlyn",
      seoDescription: "The page you requested does not exist or the link is invalid.",
      title: "Page Not Found",
      description:
        "The address may have changed, or the content may not be available yet. You can return home or keep exploring Products and ARC ENGINE.",
    },
  },
  fr: pageMessagesFr,
  es: pageMessagesEs,
} as const;
