import type { Locale } from './messages';
import type { ArcGcsDownloadPlatform } from '../config/arcGcs';

interface ArcGcsDownloadPlatformCopy {
  name: string;
  pendingStatus: string;
  downloadAction: string;
}

interface ArcGcsDownloadFaqItem {
  question: string;
  answer?: string;
  lead?: string;
  points?: string[];
  note?: string;
}

export interface ArcGcsDownloadCopy {
  seoTitle: string;
  seoDescription: string;
  heroKicker: string;
  title: string;
  summary: string;
  versionLabel: string;
  platformSectionLabel: string;
  availableNotice: string;
  pendingNotice: string;
  platforms: Record<ArcGcsDownloadPlatform, ArcGcsDownloadPlatformCopy>;
  faqKicker: string;
  faqTitle: string;
  faqDescription: string;
  faqItems: ArcGcsDownloadFaqItem[];
}

export const arcGcsDownloadMessages: Record<Locale, ArcGcsDownloadCopy> = {
  zh: {
    seoTitle: '下载 ARC GCS v1.0.0 | Navlyn 航链科技',
    seoDescription:
      '获取 ARC GCS Windows、macOS 与 Android 客户端发布状态，并查看安装、连接、离线使用和航线导出常见问题。',
    heroKicker: 'ARC GCS SOFTWARE',
    title: '下载 ARC GCS',
    summary: '选择适合的操作平台，下载 ARC GCS v1.0.0。',
    versionLabel: '当前版本',
    platformSectionLabel: 'ARC GCS 平台下载',
    availableNotice: '选择平台下载安装',
    pendingNotice: '下载地址即将开放',
    platforms: {
      windows: {
        name: 'Windows',
        pendingStatus: 'Windows 版即将开放',
        downloadAction: '下载 Windows 版',
      },
      macos: {
        name: 'macOS',
        pendingStatus: 'macOS 版即将开放',
        downloadAction: '下载 macOS 版',
      },
      android: {
        name: 'Android',
        pendingStatus: 'Android 版即将开放',
        downloadAction: '下载 Android 版',
      },
    },
    faqKicker: 'FAQ',
    faqTitle: '安装与使用常见问题',
    faqDescription:
      '从系统要求到飞行前检查，集中查看 ARC GCS 安装和首次使用时最常见的问题。',
    faqItems: [
      {
        question: 'ARC GCS 支持哪些系统和设备？有最低配置要求吗？',
        lead: 'ARC GCS 提供桌面端与手持端适配：',
        points: [
          'Windows：支持 Windows 10 及以上 64 位系统，建议运行内存 8GB 以上，并预留 2GB 以上存储空间。',
          'macOS：提供 DMG 安装包；如需确认支持的系统版本与芯片架构，请联系技术支持。',
          'Android：适配云卓主流工业级手持地面站，可通过正式发布的 APK 安装。',
        ],
      },
      {
        question: '安装过程中报错、无法正常安装怎么办？',
        lead: '请按以下顺序排查：',
        points: [
          'Windows 权限不足：右键点击安装包，选择“以管理员身份运行”后重试。',
          'macOS 安全提示：确认文件来自 Navlyn 官方渠道；若系统提示无法验证开发者或安装包已损坏，请停止安装并联系技术支持，不要绕过系统安全检查。',
          '安全软件拦截：确认安装包来自 Navlyn 官方发布渠道，查看安全软件的隔离或拦截记录，并仅允许经确认的官方安装包。',
          '安装包损坏：从官方渠道重新下载完整安装包，再次安装。',
        ],
        note: '若仍无法解决，请联系技术支持协助排查。',
      },
      {
        question: '第一次使用软件，建议先完成哪些设置？',
        points: [
          '下载常用作业区域的离线地图包。',
          '在相机参数库中匹配自身挂载的相机型号，后续规划会自动适配对应参数。',
        ],
      },
      {
        question: '安装完成后，不联网可以正常使用吗？',
        answer:
          '本地航线规划、已缓存离线地图查看、本地航线库管理和已存储飞行记录复盘等核心基础功能可离线使用。AI 语音助手、在线地图加载与云端同步等功能需要联网。',
      },
      {
        question: '卸载软件会删除本地航线和飞行记录吗？',
        answer:
          '默认卸载不会主动删除用户本地数据目录，历史航线和飞行记录会保留在原存储路径中。为避免意外丢失，仍建议在卸载前导出并备份重要数据。',
      },
      {
        question: '软件如何连接无人机？',
        answer:
          '接通飞行器电源，通过对应方式将设备与地面站连接。软件识别并适配机型后，请等待顶部状态栏显示连接就绪且 GPS 状态正常，再上传任务或进行飞行操控。',
      },
      {
        question: '软件支持哪些飞控和机型？',
        answer:
          'ARC GCS 支持当前主流飞控，并适配多旋翼与 VTOL 垂直起降固定翼两类机型。软件会根据已连接机型调整界面和可用功能，无需手动选择。',
      },
      {
        question: '规划好的航线可以导出吗？支持哪些格式？',
        answer:
          '支持。航线与飞行记录可导出为 JSON、CSV、KML、GPX 四种常用格式，用于数据备份、第三方软件导入或项目交付。',
      },
      {
        question: '为什么起飞指令被拒绝了？',
        answer:
          '软件和飞行器会在起飞前执行安全检查，任一条件不满足都会阻止起飞。常见原因包括 GPS 尚未完成定位、飞行模式不合适、电量过低、飞行器未解锁，或当前位置触发电子围栏限制。',
      },
    ],
  },
  en: {
    seoTitle: 'Download ARC GCS v1.0.0 | Navlyn',
    seoDescription:
      'Check ARC GCS release availability for Windows, macOS, and Android, then review common questions about installation, connection, offline use, and route export.',
    heroKicker: 'ARC GCS SOFTWARE',
    title: 'Download ARC GCS',
    summary: 'Choose your operating platform and download ARC GCS v1.0.0.',
    versionLabel: 'Current version',
    platformSectionLabel: 'ARC GCS platform downloads',
    availableNotice: 'Choose a platform to download',
    pendingNotice: 'Downloads coming soon',
    platforms: {
      windows: {
        name: 'Windows',
        pendingStatus: 'Windows release coming soon',
        downloadAction: 'Download for Windows',
      },
      macos: {
        name: 'macOS',
        pendingStatus: 'macOS release coming soon',
        downloadAction: 'Download for macOS',
      },
      android: {
        name: 'Android',
        pendingStatus: 'Android release coming soon',
        downloadAction: 'Download for Android',
      },
    },
    faqKicker: 'FAQ',
    faqTitle: 'Installation and usage questions',
    faqDescription:
      'Find clear answers to the most common ARC GCS setup and first-flight questions.',
    faqItems: [
      {
        question:
          'Which systems and devices does ARC GCS support, and what are the minimum requirements?',
        lead: 'ARC GCS is designed for desktop and handheld deployments:',
        points: [
          'Windows: Windows 10 or later, 64-bit; 8 GB RAM or more and at least 2 GB of available storage are recommended.',
          'macOS: a DMG installer is provided. Contact technical support to confirm supported macOS versions and processor architectures.',
          'Android: supported Skydroid industrial handheld ground stations can install the official APK.',
        ],
      },
      {
        question: 'What should I do if installation fails or reports an error?',
        lead: 'Check the following in order:',
        points: [
          'Windows permissions: right-click the installer and choose “Run as administrator,” then try again.',
          'macOS security prompt: confirm the file came from an official Navlyn channel. If macOS cannot verify the developer or reports a damaged installer, stop and contact support instead of bypassing system security checks.',
          'Security software block: verify that the installer came from an official Navlyn release channel, review quarantine or block records, and allow only the verified official installer.',
          'Damaged installer: download a fresh copy from the official channel and try again.',
        ],
        note: 'Contact technical support if the issue continues.',
      },
      {
        question: 'What should I configure before using ARC GCS for the first time?',
        points: [
          'Download offline map packages for your regular operating areas.',
          'Match the mounted camera model in the camera parameter library so later plans can use the correct parameters automatically.',
        ],
      },
      {
        question: 'Can ARC GCS work without an internet connection?',
        answer:
          'Core local features—including route planning, cached offline maps, the local route library, and stored flight-record review—can work offline. AI voice assistance, online maps, and cloud synchronization require a network connection.',
      },
      {
        question: 'Will uninstalling ARC GCS remove local routes and flight records?',
        answer:
          'The default uninstall process does not actively remove the local user-data directory, so route and flight-history files remain in their original location. Export and back up important data before uninstalling to reduce the risk of accidental loss.',
      },
      {
        question: 'How does ARC GCS connect to an aircraft?',
        answer:
          'Power on the aircraft and connect it to the ground station using the appropriate connection method. After ARC GCS identifies the aircraft, wait until the top status bar shows a ready connection and normal GPS status before uploading a mission or controlling flight.',
      },
      {
        question: 'Which flight controllers and aircraft types are supported?',
        answer:
          'ARC GCS supports current mainstream flight controllers and is designed for multirotor and VTOL fixed-wing aircraft. It identifies the connected aircraft and adjusts the interface and available features automatically.',
      },
      {
        question: 'Can planned routes be exported, and which formats are available?',
        answer:
          'Yes. Routes and flight records can be exported as JSON, CSV, KML, or GPX for backup, third-party import, and project delivery.',
      },
      {
        question: 'Why was my takeoff command rejected?',
        answer:
          'ARC GCS and the aircraft run safety checks before takeoff. A takeoff is blocked when any required condition is not met—for example, GPS is not ready, the flight mode is unsuitable, battery level is too low, the aircraft is not armed, or the current location triggers a geofence restriction.',
      },
    ],
  },
};
