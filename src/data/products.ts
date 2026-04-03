import { assetPath } from '../utils/base';

interface ProductSpecItem {
  label: string;
  value: string;
}

interface ProductDetailItem {
  key: 'commander' | 'scout' | 'seal';
  tag: string;
  name: string;
  role: string;
  summary: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  specs: ProductSpecItem[];
  aiCapabilities: string[];
  applications: string[];
}

export const productHero = {
  title: '精密，且强悍。为极限作业而生的三款硬核先驱',
  description:
    '基于 ARC Inside 底层内核驱动，实现从边缘算力中心到全自主执行终端的闭环链路，让低空作业不再受限于环境。',
  video: assetPath('/media/product-hardware-rescue.mp4'),
  poster: assetPath('/media/commander-x1-product.jpg'),
};

export const productDetails: ProductDetailItem[] = [
  {
    key: 'commander',
    tag: 'Commander X1',
    name: '指挥官 Commander X1',
    role: '边缘算力中枢 / 任务决策中心',
    summary:
      '面向低空决策网络构建与大范围任务调度，作为任务理解、算力汇聚与现场指挥的中枢节点。',
    image: assetPath('/media/navlyn-x1.png'),
    imageAlt: 'Commander X1',
    imagePosition: 'center 54%',
    specs: [
      { label: '翼展', value: '3米' },
      { label: '最大起飞重量', value: '19KG' },
      { label: '载荷', value: '3.5KG' },
      { label: '航行速度', value: '65-85公里/小时' },
      { label: '飞行时间', value: '3小时' },
      { label: '快速拆装', value: '3分钟' },
    ],
    aiCapabilities: [
      '任务解构：理解模糊指令，自动拆解并分配给巡逻机。',
      '实时建图：汇总所有从机的地图数据，生成全局态势图。',
      '自主安全：抗干扰、无 GPS 导航。',
    ],
    applications: ['大范围测绘', '巡检调度', '物流网络', '救援协同'],
  },
  {
    key: 'scout',
    tag: 'Scout S1',
    name: '尖兵 Scout S1',
    role: '高性价比，多功能任务执行',
    summary:
      '聚焦高频巡逻、基础设施检查与矿区巡检，在部署效率和复杂环境适配之间取得平衡。',
    image: assetPath('/media/scout-s1-front.png'),
    imageAlt: 'Scout S1',
    imagePosition: 'center 50%',
    specs: [
      { label: '翼展', value: '1.7米' },
      { label: '最大起飞重量', value: '4.5KG' },
      { label: '载荷', value: '800G' },
      { label: '航行速度', value: '57-80公里/小时' },
      { label: '飞行时间', value: '2小时' },
      { label: '快速拆装', value: '1分钟' },
    ],
    aiCapabilities: [
      '目标识别、智能跟随、自动避障。',
      '多机协同、群体智能。',
    ],
    applications: ['日常安防巡逻', '公路巡检', '智慧矿区', '精细化设施检查'],
  },
  {
    key: 'seal',
    tag: 'Seal S1',
    name: '海豹 Seal S1',
    role: '救生艇 / 水域响应节点',
    summary:
      '服务江河湖泊海滩巡逻与救生，把低空系统能力延伸到水域现场，形成空海一体的执行闭环。',
    image: assetPath('/media/navlyn-s1.png'),
    imageAlt: 'Seal S1',
    imagePosition: 'center 46%',
    specs: [
      { label: '尺寸', value: '长1000mm × 宽700mm × 高248mm' },
      { label: '重量', value: '15.9kg' },
      { label: '航速', value: '7m/s' },
      { label: '拖曳能力', value: '1000kg' },
      { label: '遥控距离', value: '1403m' },
      { label: '机器人防水等级', value: 'IP67' },
    ],
    aiCapabilities: [
      '落水人员识别，自动避障。',
      '空海联动，群体智能。',
    ],
    applications: ['江河巡逻', '湖泊搜救', '海滩响应', '近岸救生'],
  },
];
