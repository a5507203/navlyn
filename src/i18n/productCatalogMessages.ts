import type { HomeProductKey, ProductKey, ProductSpecKey } from '../data/productCatalog';

export type ProductCatalogLocale = 'zh' | 'en' | 'fr' | 'es';

export interface ProductPageMessage {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  introduction: string;
}

export interface ProductMessage {
  name: string;
  status: string;
  role: string;
  summary: string;
  imageAlt: string;
  capabilities: string[];
  applications: string[];
}

export interface HomeProductMessage {
  name: string;
  summary: string;
  status: string;
}

export interface ProductCatalogCopy {
  pages: {
    air: ProductPageMessage;
    sea: ProductPageMessage;
  };
  labels: {
    specifications: string;
    capabilities: string;
    applications: string;
    downloadManual: string;
    manualLanguage: string;
  };
  specLabels: Record<ProductSpecKey, string>;
  products: Record<ProductKey, ProductMessage>;
  home: Record<HomeProductKey, HomeProductMessage>;
}

export const productCatalogMessages: Record<ProductCatalogLocale, ProductCatalogCopy> = {
  zh: {
    pages: {
      air: {
        seoTitle: 'AIR 无人机产品 | Navlyn 航链科技',
        seoDescription: '了解 Titan、Commander X1 与 Scout S1 无人机及其公开技术参数。',
        eyebrow: 'AIR · 空中智能终端',
        title: '面向真实作业的无人机平台',
        introduction:
          '从重型远距作业、空中智能中枢到高效数据采集，三款垂直起降平台覆盖不同任务规模。以下参数均来自 Navlyn 中文产品手册。',
      },
      sea: {
        seoTitle: 'SEA 无人船产品 | Navlyn 航链科技',
        seoDescription: '了解 Seal S1 自主水面艇及其水上救援、巡逻能力与公开技术参数。',
        eyebrow: 'SEA · 水面智能终端',
        title: '空海协同的水上响应节点',
        introduction:
          'Seal S1 面向快速水上救援与水域巡逻，并可与无人机协同构建空海应急响应网络。以下参数均来自 Navlyn 中文产品手册。',
      },
    },
    labels: {
      specifications: '技术参数',
      capabilities: '产品特点',
      applications: '任务场景',
      downloadManual: '下载中文产品手册',
      manualLanguage: '附件语言：中文',
    },
    specLabels: {
      aircraftDimensions: '飞行器尺寸',
      maximumTakeoffWeight: '最大起飞重量',
      maximumPayload: '最大载重',
      cruiseSpeed: '巡航速度',
      maximumSpeed: '最快速度',
      maximumFlightTime: '最长飞行时间',
      maximumRange: '最大飞行里程',
      windResistance: '抗风等级',
      maximumTakeoffAltitude: '最大起飞海拔高度',
      standardRange: '标准射程',
      quickAssembly: '快速组装',
      vesselDimensions: '尺寸',
      weight: '重量',
      speed: '速度',
      towingCapacity: '牵引能力',
      remoteControlDistance: '远程控制距离',
      vesselWaterproofRating: '艇体防水等级',
      remoteWaterproofRating: '遥控器防水等级',
    },
    products: {
      titan: {
        name: '泰坦 Titan T1',
        status: '重型作业机',
        role: '大规模远距离作业平台',
        summary:
          '高效、坚固的固定翼垂直起降无人机，专为要求严苛的大规模远距离作业而设计；支持一分钟内免工具组装与模块化载荷快速部署。',
        imageAlt: '跑道上的泰坦 Titan T1 垂直起降无人机',
        capabilities: ['高效载荷能力', '冗余飞行控制系统', '快速部署模块化载荷舱'],
        applications: ['远距离作业', '重型运输', '航空测绘', '巡检监控'],
      },
      commander: {
        name: '指挥官 Commander X1',
        status: '智慧大型作业机',
        role: '空中作业智能中枢',
        summary:
          '面向多智能体协作与实时数据处理的多功能智能中心枢纽，内置人工智能边缘计算模块，并可承担协同与中继节点任务。',
        imageAlt: '指挥官 Commander X1 垂直起降无人机',
        capabilities: ['多无人机协同和中继', '无 GNSS 惯性导航', '人工智能边缘计算模块'],
        applications: ['多机协同', '实时数据处理', '航空测绘', '监控巡检'],
      },
      scout: {
        name: '尖兵 Scout S1',
        status: '高性能长续航作业机',
        role: '灵活的空中数据采集平台',
        summary:
          '结合固定翼飞行效率与垂直起降灵活性，面向摄影测量和监视等先进空中数据采集作业，可在复杂环境下快速部署。',
        imageAlt: '尖兵 Scout S1 垂直起降无人机',
        capabilities: ['最长两小时飞行', '集成 PPK/RTK 技术', '现场快速组装'],
        applications: ['摄影测量', '空中监视', '数据采集', '复杂环境作业'],
      },
      seal: {
        name: '海豹 Seal S1',
        status: '无人救生艇',
        role: '自主水面救援与巡逻平台',
        summary:
          '专为快速水上救援和水域巡逻设计的自主水面艇，可与无人机同步协作，共同构建紧密联动的空海应急响应网络。',
        imageAlt: '海豹 Seal S1 自主水面救生艇',
        capabilities: ['自主水面艇平台', '与无人机无缝同步', '空海应急协同'],
        applications: ['快速水上救援', '水域巡逻', '空海协同响应'],
      },
    },
    home: {
      titan: { name: '泰坦 Titan', summary: '重型远距作业平台', status: 'AIR' },
      commander: { name: '指挥官 Commander X1', summary: '空中作业智能中枢', status: 'AIR' },
      scout: { name: '尖兵 Scout S1', summary: '高性能数据采集平台', status: 'AIR' },
      seal: { name: '海豹 Seal', summary: '自主水面救援与巡逻', status: 'SEA' },
      arc: { name: 'ARC GCS', summary: '智能任务控制与协同入口', status: 'ARC GCS' },
      counterUas: { name: '反无系统', summary: '产品信息暂未发布', status: '即将推出' },
    },
  },
  en: {
    pages: {
      air: {
        seoTitle: 'AIR Unmanned Aircraft | Navlyn',
        seoDescription: 'Explore the Titan, Commander X1 and Scout S1 aircraft and their published specifications.',
        eyebrow: 'AIR · AUTONOMOUS AERIAL SYSTEMS',
        title: 'Aircraft platforms built for field operations',
        introduction:
          'From heavy-duty long-range missions and aerial coordination to efficient data acquisition, three VTOL platforms address different operational scales. All specifications below come from the Navlyn Chinese product manual.',
      },
      sea: {
        seoTitle: 'SEA Unmanned Surface Vessel | Navlyn',
        seoDescription: 'Explore the Seal S1 USV, its water-rescue and patrol roles, and its published specifications.',
        eyebrow: 'SEA · AUTONOMOUS SURFACE SYSTEMS',
        title: 'A surface response node for air–sea coordination',
        introduction:
          'Seal S1 is designed for rapid water rescue and patrol and can coordinate with aircraft as part of an air–sea emergency-response network. All specifications below come from the Navlyn Chinese product manual.',
      },
    },
    labels: {
      specifications: 'Specifications',
      capabilities: 'Product highlights',
      applications: 'Mission scenarios',
      downloadManual: 'Download Chinese product manual',
      manualLanguage: 'Attachment language: Chinese',
    },
    specLabels: {
      aircraftDimensions: 'Aircraft dimensions',
      maximumTakeoffWeight: 'Maximum takeoff weight',
      maximumPayload: 'Maximum payload',
      cruiseSpeed: 'Cruise speed',
      maximumSpeed: 'Maximum speed',
      maximumFlightTime: 'Maximum flight time',
      maximumRange: 'Maximum flight range',
      windResistance: 'Wind resistance',
      maximumTakeoffAltitude: 'Maximum takeoff altitude',
      standardRange: 'Standard range',
      quickAssembly: 'Quick assembly',
      vesselDimensions: 'Dimensions',
      weight: 'Weight',
      speed: 'Speed',
      towingCapacity: 'Towing capacity',
      remoteControlDistance: 'Remote-control distance',
      vesselWaterproofRating: 'Vessel waterproof rating',
      remoteWaterproofRating: 'Remote waterproof rating',
    },
    products: {
      titan: {
        name: 'Titan T1',
        status: 'Heavy-duty aircraft',
        role: 'Large-scale, long-range operations platform',
        summary:
          'An efficient, rugged fixed-wing VTOL aircraft designed for demanding large-scale, long-range operations, with tool-free assembly in under one minute and a rapidly deployable modular payload bay.',
        imageAlt: 'Titan T1 VTOL aircraft on a runway',
        capabilities: ['High-efficiency payload capacity', 'Redundant flight-control system', 'Rapidly deployed modular payload bay'],
        applications: ['Long-range operations', 'Heavy transport', 'Aerial surveying', 'Inspection and monitoring'],
      },
      commander: {
        name: 'Commander X1',
        status: 'Intelligent large aircraft',
        role: 'Intelligent hub for aerial operations',
        summary:
          'A versatile intelligent hub for multi-agent collaboration and real-time data processing, with an integrated AI edge-computing module and support for coordinated relay missions.',
        imageAlt: 'Commander X1 VTOL aircraft',
        capabilities: ['Multi-aircraft coordination and relay', 'GNSS-denied inertial navigation', 'Integrated AI edge computing'],
        applications: ['Multi-aircraft coordination', 'Real-time data processing', 'Aerial surveying', 'Inspection and monitoring'],
      },
      scout: {
        name: 'Scout S1',
        status: 'High-performance endurance aircraft',
        role: 'Flexible aerial data-acquisition platform',
        summary:
          'Combining fixed-wing efficiency with VTOL flexibility, Scout S1 supports advanced aerial data acquisition such as photogrammetry and surveillance, with rapid deployment in complex environments.',
        imageAlt: 'Scout S1 VTOL aircraft',
        capabilities: ['Up to two hours of flight', 'Integrated PPK/RTK technology', 'Rapid field assembly'],
        applications: ['Photogrammetry', 'Aerial surveillance', 'Data acquisition', 'Complex-environment operations'],
      },
      seal: {
        name: 'Seal S1',
        status: 'Unmanned rescue vessel',
        role: 'Autonomous surface rescue and patrol platform',
        summary:
          'An autonomous surface vessel designed for rapid water rescue and patrol that can synchronize with aircraft to form a closely coordinated air–sea emergency-response network.',
        imageAlt: 'Seal S1 autonomous surface rescue vessel',
        capabilities: ['Autonomous surface-vessel platform', 'Seamless synchronization with aircraft', 'Coordinated air–sea response'],
        applications: ['Rapid water rescue', 'Water patrol', 'Coordinated air–sea response'],
      },
    },
    home: {
      titan: { name: 'Titan', summary: 'Heavy-duty long-range platform', status: 'AIR' },
      commander: { name: 'Commander X1', summary: 'Intelligent aerial operations hub', status: 'AIR' },
      scout: { name: 'Scout S1', summary: 'High-performance data acquisition', status: 'AIR' },
      seal: { name: 'Seal', summary: 'Autonomous surface rescue and patrol', status: 'SEA' },
      arc: { name: 'ARC GCS', summary: 'Intelligent mission control and coordination', status: 'ARC GCS' },
      counterUas: { name: 'Counter-UAS', summary: 'Product information has not been released', status: 'Coming soon' },
    },
  },
  fr: {
    pages: {
      air: {
        seoTitle: 'Drones AIR | Navlyn',
        seoDescription: 'Découvrez les aéronefs Titan, Commander X1 et Scout S1 ainsi que leurs caractéristiques publiées.',
        eyebrow: 'AIR · SYSTÈMES AÉRIENS AUTONOMES',
        title: 'Des plateformes aériennes conçues pour le terrain',
        introduction:
          'Des missions lourdes à longue portée à la coordination aérienne et à l’acquisition efficace de données, trois plateformes VTOL répondent à différentes échelles d’opération. Toutes les caractéristiques ci-dessous proviennent du manuel produit Navlyn en chinois.',
      },
      sea: {
        seoTitle: 'Navire de surface SEA | Navlyn',
        seoDescription: 'Découvrez le Seal S1, ses missions de sauvetage et de patrouille, ainsi que ses caractéristiques publiées.',
        eyebrow: 'SEA · SYSTÈMES DE SURFACE AUTONOMES',
        title: 'Un nœud d’intervention pour la coordination air–mer',
        introduction:
          'Le Seal S1 est conçu pour le sauvetage rapide et la patrouille sur l’eau. Il peut coopérer avec des drones au sein d’un réseau d’intervention d’urgence air–mer. Toutes les caractéristiques ci-dessous proviennent du manuel produit Navlyn en chinois.',
      },
    },
    labels: {
      specifications: 'Caractéristiques',
      capabilities: 'Points forts',
      applications: 'Scénarios de mission',
      downloadManual: 'Télécharger le manuel produit en chinois',
      manualLanguage: 'Langue de la pièce jointe : chinois',
    },
    specLabels: {
      aircraftDimensions: 'Dimensions de l’aéronef',
      maximumTakeoffWeight: 'Masse maximale au décollage',
      maximumPayload: 'Charge utile maximale',
      cruiseSpeed: 'Vitesse de croisière',
      maximumSpeed: 'Vitesse maximale',
      maximumFlightTime: 'Durée de vol maximale',
      maximumRange: 'Distance de vol maximale',
      windResistance: 'Résistance au vent',
      maximumTakeoffAltitude: 'Altitude maximale de décollage',
      standardRange: 'Portée standard',
      quickAssembly: 'Assemblage rapide',
      vesselDimensions: 'Dimensions',
      weight: 'Poids',
      speed: 'Vitesse',
      towingCapacity: 'Capacité de remorquage',
      remoteControlDistance: 'Portée de télécommande',
      vesselWaterproofRating: 'Étanchéité du navire',
      remoteWaterproofRating: 'Étanchéité de la télécommande',
    },
    products: {
      titan: {
        name: 'Titan T1',
        status: 'Aéronef pour travaux lourds',
        role: 'Plateforme d’opérations longue portée à grande échelle',
        summary:
          'Un aéronef VTOL à voilure fixe, robuste et efficace, destiné aux opérations exigeantes à grande échelle et longue portée, avec assemblage sans outil en moins d’une minute et soute modulaire rapidement déployable.',
        imageAlt: 'Aéronef VTOL Titan T1 sur une piste',
        capabilities: ['Capacité d’emport à haut rendement', 'Système de commande de vol redondant', 'Soute modulaire à déploiement rapide'],
        applications: ['Opérations longue portée', 'Transport lourd', 'Levé aérien', 'Inspection et surveillance'],
      },
      commander: {
        name: 'Commander X1',
        status: 'Grand aéronef intelligent',
        role: 'Centre intelligent des opérations aériennes',
        summary:
          'Un centre intelligent polyvalent pour la collaboration multi-agent et le traitement des données en temps réel, intégrant un module de calcul IA en périphérie et des fonctions de relais coordonné.',
        imageAlt: 'Aéronef VTOL Commander X1',
        capabilities: ['Coordination et relais multi-drones', 'Navigation inertielle sans GNSS', 'Calcul IA intégré en périphérie'],
        applications: ['Coordination multi-drones', 'Traitement en temps réel', 'Levé aérien', 'Inspection et surveillance'],
      },
      scout: {
        name: 'Scout S1',
        status: 'Aéronef endurant haute performance',
        role: 'Plateforme flexible d’acquisition de données aériennes',
        summary:
          'Alliant l’efficacité d’une voilure fixe à la souplesse du VTOL, le Scout S1 réalise des acquisitions aériennes avancées, notamment en photogrammétrie et surveillance, avec un déploiement rapide en environnement complexe.',
        imageAlt: 'Aéronef VTOL Scout S1',
        capabilities: ['Jusqu’à deux heures de vol', 'Technologie PPK/RTK intégrée', 'Assemblage rapide sur le terrain'],
        applications: ['Photogrammétrie', 'Surveillance aérienne', 'Acquisition de données', 'Opérations en environnement complexe'],
      },
      seal: {
        name: 'Seal S1',
        status: 'Navire de sauvetage sans équipage',
        role: 'Plateforme autonome de sauvetage et de patrouille',
        summary:
          'Un navire de surface autonome conçu pour le sauvetage rapide et la patrouille sur l’eau, capable de se synchroniser avec des drones pour former un réseau d’intervention d’urgence air–mer étroitement coordonné.',
        imageAlt: 'Navire autonome de sauvetage Seal S1',
        capabilities: ['Plateforme de surface autonome', 'Synchronisation transparente avec les drones', 'Intervention coordonnée air–mer'],
        applications: ['Sauvetage aquatique rapide', 'Patrouille sur l’eau', 'Intervention coordonnée air–mer'],
      },
    },
    home: {
      titan: { name: 'Titan', summary: 'Plateforme lourde à longue portée', status: 'AIR' },
      commander: { name: 'Commander X1', summary: 'Centre intelligent d’opérations aériennes', status: 'AIR' },
      scout: { name: 'Scout S1', summary: 'Acquisition de données haute performance', status: 'AIR' },
      seal: { name: 'Seal', summary: 'Sauvetage et patrouille de surface autonomes', status: 'SEA' },
      arc: { name: 'ARC GCS', summary: 'Contrôle et coordination intelligents des missions', status: 'ARC GCS' },
      counterUas: { name: 'Système anti-drones', summary: 'Informations produit non encore publiées', status: 'Bientôt disponible' },
    },
  },
  es: {
    pages: {
      air: {
        seoTitle: 'Aeronaves no tripuladas AIR | Navlyn',
        seoDescription: 'Descubre las aeronaves Titan, Commander X1 y Scout S1 y sus especificaciones publicadas.',
        eyebrow: 'AIR · SISTEMAS AÉREOS AUTÓNOMOS',
        title: 'Plataformas aéreas diseñadas para operaciones reales',
        introduction:
          'Desde misiones pesadas de largo alcance y coordinación aérea hasta la adquisición eficiente de datos, tres plataformas VTOL cubren distintas escalas operativas. Todas las especificaciones siguientes proceden del manual de producto de Navlyn en chino.',
      },
      sea: {
        seoTitle: 'Embarcación de superficie SEA | Navlyn',
        seoDescription: 'Descubre la Seal S1, sus funciones de rescate y patrulla y sus especificaciones publicadas.',
        eyebrow: 'SEA · SISTEMAS DE SUPERFICIE AUTÓNOMOS',
        title: 'Un nodo de respuesta para la coordinación aire–mar',
        introduction:
          'Seal S1 está diseñada para el rescate acuático rápido y la patrulla, y puede coordinarse con aeronaves como parte de una red de respuesta de emergencia aire–mar. Todas las especificaciones siguientes proceden del manual de producto de Navlyn en chino.',
      },
    },
    labels: {
      specifications: 'Especificaciones',
      capabilities: 'Aspectos destacados',
      applications: 'Escenarios de misión',
      downloadManual: 'Descargar el manual de producto en chino',
      manualLanguage: 'Idioma del archivo: chino',
    },
    specLabels: {
      aircraftDimensions: 'Dimensiones de la aeronave',
      maximumTakeoffWeight: 'Peso máximo de despegue',
      maximumPayload: 'Carga útil máxima',
      cruiseSpeed: 'Velocidad de crucero',
      maximumSpeed: 'Velocidad máxima',
      maximumFlightTime: 'Tiempo máximo de vuelo',
      maximumRange: 'Alcance máximo de vuelo',
      windResistance: 'Resistencia al viento',
      maximumTakeoffAltitude: 'Altitud máxima de despegue',
      standardRange: 'Alcance estándar',
      quickAssembly: 'Montaje rápido',
      vesselDimensions: 'Dimensiones',
      weight: 'Peso',
      speed: 'Velocidad',
      towingCapacity: 'Capacidad de remolque',
      remoteControlDistance: 'Distancia de control remoto',
      vesselWaterproofRating: 'Protección impermeable de la embarcación',
      remoteWaterproofRating: 'Protección impermeable del mando',
    },
    products: {
      titan: {
        name: 'Titan T1',
        status: 'Aeronave para trabajos pesados',
        role: 'Plataforma de operaciones de gran escala y largo alcance',
        summary:
          'Una aeronave VTOL de ala fija, resistente y eficiente, diseñada para operaciones exigentes de gran escala y largo alcance, con montaje sin herramientas en menos de un minuto y compartimento modular de despliegue rápido.',
        imageAlt: 'Aeronave VTOL Titan T1 en una pista',
        capabilities: ['Capacidad de carga de alta eficiencia', 'Sistema redundante de control de vuelo', 'Compartimento modular de despliegue rápido'],
        applications: ['Operaciones de largo alcance', 'Transporte pesado', 'Levantamiento aéreo', 'Inspección y vigilancia'],
      },
      commander: {
        name: 'Commander X1',
        status: 'Aeronave inteligente de gran tamaño',
        role: 'Centro inteligente de operaciones aéreas',
        summary:
          'Un centro inteligente versátil para la colaboración multiagente y el procesamiento de datos en tiempo real, con un módulo integrado de computación periférica de IA y funciones de retransmisión coordinada.',
        imageAlt: 'Aeronave VTOL Commander X1',
        capabilities: ['Coordinación y retransmisión entre aeronaves', 'Navegación inercial sin GNSS', 'Computación periférica de IA integrada'],
        applications: ['Coordinación de aeronaves', 'Procesamiento en tiempo real', 'Levantamiento aéreo', 'Inspección y vigilancia'],
      },
      scout: {
        name: 'Scout S1',
        status: 'Aeronave de alto rendimiento y autonomía',
        role: 'Plataforma flexible de adquisición de datos aéreos',
        summary:
          'Scout S1 combina la eficiencia del ala fija con la flexibilidad VTOL para realizar adquisiciones aéreas avanzadas, como fotogrametría y vigilancia, con despliegue rápido en entornos complejos.',
        imageAlt: 'Aeronave VTOL Scout S1',
        capabilities: ['Hasta dos horas de vuelo', 'Tecnología PPK/RTK integrada', 'Montaje rápido sobre el terreno'],
        applications: ['Fotogrametría', 'Vigilancia aérea', 'Adquisición de datos', 'Operaciones en entornos complejos'],
      },
      seal: {
        name: 'Seal S1',
        status: 'Embarcación de rescate no tripulada',
        role: 'Plataforma autónoma de rescate y patrulla de superficie',
        summary:
          'Una embarcación autónoma de superficie diseñada para el rescate acuático rápido y la patrulla, capaz de sincronizarse con aeronaves para formar una red de respuesta de emergencia aire–mar estrechamente coordinada.',
        imageAlt: 'Embarcación autónoma de rescate Seal S1',
        capabilities: ['Plataforma autónoma de superficie', 'Sincronización fluida con aeronaves', 'Respuesta coordinada aire–mar'],
        applications: ['Rescate acuático rápido', 'Patrulla acuática', 'Respuesta coordinada aire–mar'],
      },
    },
    home: {
      titan: { name: 'Titan', summary: 'Plataforma pesada de largo alcance', status: 'AIR' },
      commander: { name: 'Commander X1', summary: 'Centro inteligente de operaciones aéreas', status: 'AIR' },
      scout: { name: 'Scout S1', summary: 'Adquisición de datos de alto rendimiento', status: 'AIR' },
      seal: { name: 'Seal', summary: 'Rescate y patrulla autónomos de superficie', status: 'SEA' },
      arc: { name: 'ARC GCS', summary: 'Control y coordinación inteligentes de misiones', status: 'ARC GCS' },
      counterUas: { name: 'Sistema antidrones', summary: 'Información del producto aún no publicada', status: 'Próximamente' },
    },
  },
};
