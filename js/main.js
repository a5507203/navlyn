/* ========================================
   航链科技 Navlyn — Main JavaScript
   ======================================== */

(function () {
  'use strict';

  // ── i18n Translation System ──
  var translations = {
    en: {
      // Navbar
      nav_home: 'Home',
      nav_products: 'Products',
      nav_cases: 'Cases',
      nav_news: 'News',
      nav_about: 'About',
      nav_contact: 'Contact Us',

      // Products overview
      products_title: 'Product Matrix',
      products_desc: 'Low-altitude intelligent product ecosystem from air to water',

      // Product cards
      card_commander_tag: 'VTOL Fixed-Wing',
      card_commander_title: 'Commander X1',
      card_commander_desc: 'Edge Computing Hub · Mission Decision Center',
      card_scout_tag: 'Patrol Drone',
      card_scout_title: 'Scout S1',
      card_scout_desc: 'Mission Execution · Multi-Drone Coordination',
      card_seal_tag: 'Smart Lifeboat',
      card_seal_title: 'Seal S1',
      card_seal_desc: 'Air-Sea Coordination · Smart Rescue',

      // Commander X1 detail
      commander_title: 'Commander<br>Edge Computing Hub',
      commander_desc: 'A VTOL fixed-wing UAV that serves as both a flight platform and edge computing hub. Powered by ARC OS, it enables autonomous mission decomposition, real-time situational mapping, and anti-jamming autonomous flight.',
      commander_feat1_title: 'Mission Decomposition',
      commander_feat1_desc: 'Interprets ambiguous commands, auto-decomposes and assigns subtasks',
      commander_feat2_title: 'Real-time Mapping',
      commander_feat2_desc: 'Builds global situational maps with multi-source data fusion',
      commander_feat3_title: 'Autonomous Safety',
      commander_feat3_desc: 'Anti-jamming flight, GPS-denied navigation, smart obstacle avoidance',
      commander_spec1_val: '3<small>m</small>',
      commander_spec1_label: 'Wingspan',
      commander_spec2_val: '19<small>KG</small>',
      commander_spec2_label: 'Max Takeoff Weight',
      commander_spec3_val: '3.5<small>KG</small>',
      commander_spec3_label: 'Payload',
      commander_spec4_val: '65-85<small>km/h</small>',
      commander_spec4_label: 'Cruise Speed',
      commander_spec5_val: '3<small>hrs</small>',
      commander_spec5_label: 'Flight Time',
      commander_spec6_val: '3<small>min</small>',
      commander_spec6_label: 'Quick Assembly',

      // Scout S1 detail
      scout_title: 'Scout<br>Mission Execution & Multi-Drone Coordination',
      scout_desc: 'A lightweight patrol drone with intelligent target recognition, auto-tracking, and swarm intelligence capabilities — the ideal executor for low-altitude patrol and precision inspection.',
      scout_feat1_title: 'Target Recognition',
      scout_feat1_desc: 'AI-powered real-time target detection and tracking',
      scout_feat2_title: 'Multi-Drone Coordination',
      scout_feat2_desc: 'Swarm intelligence for complex collaborative missions',
      scout_feat3_title: 'Smart Obstacle Avoidance',
      scout_feat3_desc: 'Omnidirectional sensing, autonomous obstacle evasion',
      scout_spec1_val: '1.7<small>m</small>',
      scout_spec1_label: 'Wingspan',
      scout_spec2_val: '4.5<small>KG</small>',
      scout_spec2_label: 'Max Takeoff Weight',
      scout_spec3_val: '800<small>g</small>',
      scout_spec3_label: 'Payload',
      scout_spec4_val: '57-80<small>km/h</small>',
      scout_spec4_label: 'Cruise Speed',
      scout_spec5_val: '2<small>hrs</small>',
      scout_spec5_label: 'Flight Time',
      scout_spec6_val: '1<small>min</small>',
      scout_spec6_label: 'Quick Assembly',

      // Seal S1 detail
      seal_title: 'Seal<br>Smart Lifeboat',
      seal_desc: 'An intelligent surface lifeboat equipped with AI-based drowning person detection and auto-obstacle avoidance, supporting air-sea coordination and swarm collaboration — a reliable partner for water rescue.',
      seal_feat1_title: 'Drowning Detection',
      seal_feat1_desc: 'AI-powered automatic detection of persons in water',
      seal_feat2_title: 'Air-Sea Coordination',
      seal_feat2_desc: 'Works with drones to build a 3D rescue network',
      seal_feat3_title: 'Swarm Collaboration',
      seal_feat3_desc: 'Multi-boat formation covering large water areas',
      seal_spec1_label: 'Dimensions',
      seal_spec2_label: 'Weight',
      seal_spec3_label: 'Speed',
      seal_spec4_label: 'Towing Capacity',
      seal_spec5_label: 'Remote Range',
      seal_spec6_label: 'Waterproof Rating',

      // ARC AI
      arcai_title: 'ARC OS Low-Altitude AI Operating System',
      arcai_desc: 'From single-drone intelligence to swarm autonomy, redefining low-altitude operations',

      // Cases
      cases_title: 'Global Case Studies',
      cases_desc: 'From underground pipelines to smart mines, ARC technology empowers global clients',
      case1_tag: 'OGE · France',
      case1_title: 'Underground Pipeline Detection & Analysis',
      case1_desc: 'Provided OGE with a drone-based remote sensing pipeline inspection solution. Through multispectral imaging and AI analysis, achieved early leak warning and precise localization, significantly reducing inspection costs.',
      case2_tag: 'Smart Mining · Madagascar',
      case2_title: 'Madagascar Smart Mining District',
      case2_desc: 'Deployed drone inspection and surveying systems in a large Madagascar mining district, enabling 3D mine modeling, automated inventory estimation, and safety hazard identification to drive digital transformation.',
      case3_tag: 'Aegis Group · France',
      case3_title: 'Aegis Group, France',
      case3_desc: 'Delivered a comprehensive industrial inspection drone solution for the Aegis Group, covering automated inspection of power lines, wind turbines, and building structures.',

      // News
      news_title: 'News',
      news_feat_title: 'Navlyn Showcases at International Drone Expo, ARC OS Draws Industry Attention',
      news_feat_excerpt: 'Navlyn exhibited its full product lineup, with ARC OS making its public debut. The demonstration of pilot-free operation and multi-drone coordination attracted significant interest from international clients.',
      news1_title: 'Commander X1 Completes Full-Scenario Flight Tests',
      news1_excerpt: 'Commander X1 completed 100+ hours of flight testing under adverse weather conditions, validating the reliability of its anti-jamming navigation system.',
      news2_title: 'Seal S1 Smart Lifeboat Officially Launched',
      news2_excerpt: 'The new surface rescue product line was officially released, ushering in a new era of air-sea coordinated smart rescue.',
      news3_title: 'ARC 2.0 Multi-Drone Coordination System Passes Acceptance',
      news3_excerpt: 'ARC 2.0 swarm coordination version officially passed industry acceptance, supporting up to 20 drones in simultaneous coordinated operations.',
      news4_title: 'Navlyn Signs Strategic Partnership with OGE, France',
      news4_excerpt: 'Both parties will collaborate on pipeline detection, infrastructure inspection, and more.',

      // Contact / About
      contact_title: 'Contact Us',
      contact_intro: 'Navlyn is dedicated to building a low-altitude intelligent product ecosystem, with the ARC OS AI operating system at its core, delivering full-stack intelligent solutions from sensing to decision-making, from single drone to swarm.',
      contact_qr_label: 'Scan to follow on WeChat',
      team_title: 'Team & Laboratory',

      // Footer
      footer_tagline: 'Low-Altitude Intelligent Product Ecosystem<br>ARC Empowering Industrial Innovation',
      footer_links_title: 'Quick Links',
      footer_link_products: 'Product Matrix',
      footer_link_cases: 'Global Cases',
      footer_link_news: 'News',
      footer_link_about: 'About Us',
      footer_products_title: 'Products',
      footer_product_commander: 'Commander X1',
      footer_product_scout: 'Scout S1',
      footer_product_seal: 'Seal S1',
      footer_contact_title: 'Contact',
      footer_contact_address: 'Address: Shenzhen, China'
    },
    zh: {
      // Navbar
      nav_home: '首页',
      nav_products: '产品',
      nav_cases: '案例',
      nav_news: '新闻',
      nav_about: '关于',
      nav_contact: '联系我们',

      // Products overview
      products_title: '产品矩阵',
      products_desc: '覆盖空中到水面的低空智能产品生态',

      // Product cards
      card_commander_tag: 'VTOL 固定翼',
      card_commander_title: '指挥官 Commander X1',
      card_commander_desc: '边缘算力中枢 · 任务决策中心',
      card_scout_tag: '巡查无人机',
      card_scout_title: '尖兵 Scout S1',
      card_scout_desc: '任务执行 · 多机协同',
      card_seal_tag: '智能救生艇',
      card_seal_title: '海豹 Seal S1',
      card_seal_desc: '空海联动 · 智能救援',

      // Commander X1 detail
      commander_title: '指挥官<br>边缘算力中枢',
      commander_desc: 'VTOL 固定翼无人机，兼具飞行平台与边缘算力中枢双重身份。搭载 ARC OS，实现任务自主解构、实时态势建图与抗干扰自主飞行。',
      commander_feat1_title: '任务解构',
      commander_feat1_desc: '理解模糊指令，自动拆解分配子任务',
      commander_feat2_title: '实时建图',
      commander_feat2_desc: '构建全局态势图，多源数据融合',
      commander_feat3_title: '自主安全',
      commander_feat3_desc: '抗干扰飞行、无GPS导航、智能避障',
      commander_spec1_val: '3<small>米</small>',
      commander_spec1_label: '翼展',
      commander_spec2_val: '19<small>KG</small>',
      commander_spec2_label: '最大起飞重量',
      commander_spec3_val: '3.5<small>KG</small>',
      commander_spec3_label: '载重',
      commander_spec4_val: '65-85<small>km/h</small>',
      commander_spec4_label: '航行速度',
      commander_spec5_val: '3<small>小时</small>',
      commander_spec5_label: '飞行时间',
      commander_spec6_val: '3<small>分钟</small>',
      commander_spec6_label: '快速拆装',

      // Scout S1 detail
      scout_title: '尖兵<br>任务执行与多机协同',
      scout_desc: '轻量化巡查无人机，具备目标智能识别、自动跟随和群体智能协同能力，是低空巡查与精细化检查的最佳执行者。',
      scout_feat1_title: '目标识别',
      scout_feat1_desc: 'AI 驱动的实时目标检测与跟踪',
      scout_feat2_title: '多机协同',
      scout_feat2_desc: '群体智能，协同完成复杂任务',
      scout_feat3_title: '智能避障',
      scout_feat3_desc: '全向感知，自主规避障碍物',
      scout_spec1_val: '1.7<small>米</small>',
      scout_spec1_label: '翼展',
      scout_spec2_val: '4.5<small>KG</small>',
      scout_spec2_label: '最大起飞重量',
      scout_spec3_val: '800<small>g</small>',
      scout_spec3_label: '载重',
      scout_spec4_val: '57-80<small>km/h</small>',
      scout_spec4_label: '航行速度',
      scout_spec5_val: '2<small>小时</small>',
      scout_spec5_label: '飞行时间',
      scout_spec6_val: '1<small>分钟</small>',
      scout_spec6_label: '快速拆装',

      // Seal S1 detail
      seal_title: '海豹<br>智能救生艇',
      seal_desc: '水面智能救生艇，搭载 AI 落水人员识别与自动避障系统，支持空海联动与群体协同，是水上救援的可靠伙伴。',
      seal_feat1_title: '落水识别',
      seal_feat1_desc: 'AI 自动识别落水人员位置',
      seal_feat2_title: '空海联动',
      seal_feat2_desc: '与无人机协同，构建立体救援网',
      seal_feat3_title: '群体协同',
      seal_feat3_desc: '多艇编队，覆盖大面积水域',
      seal_spec1_label: '尺寸',
      seal_spec2_label: '重量',
      seal_spec3_label: '航速',
      seal_spec4_label: '拖曳能力',
      seal_spec5_label: '遥控距离',
      seal_spec6_label: '防水等级',

      // ARC AI
      arcai_title: 'ARC OS 低空 AI 操作系统',
      arcai_desc: '从单机智能到集群自治，重新定义低空作业方式',

      // Cases
      cases_title: '国际案例',
      cases_desc: '从地下管道到智慧矿区，ARC 技术赋能全球客户',
      case1_tag: 'OGE · 法国',
      case1_title: '地下管道探测分析',
      case1_desc: '为 OGE 提供基于无人机遥感的地下管道检测方案，通过多光谱成像与 AI 分析，实现管道泄漏早期预警和精准定位，大幅降低巡检成本。',
      case2_tag: '智慧矿区 · 马达加斯加',
      case2_title: '马达加斯加智慧矿区',
      case2_desc: '在马达加斯加大型矿区部署无人机巡检与测绘系统，实现矿区三维建模、库存量自动估算和安全隐患识别，助力矿区数字化转型。',
      case3_tag: '爱吉斯集团 · 法国',
      case3_title: '法国爱吉斯集团',
      case3_desc: '为法国爱吉斯集团提供工业巡检无人机整体解决方案，涵盖电力线路、风电设施与建筑结构的自动化检测。',

      // News
      news_title: '新闻动态',
      news_feat_title: '航链科技亮相国际无人机展，ARC OS 引发行业关注',
      news_feat_excerpt: '航链科技携全线产品参展，ARC OS 低空 AI 操作系统首次公开演示，展示了去飞手化操控与多机协同的核心能力，引发众多国际客户洽谈合作意向。',
      news1_title: 'Commander X1 完成全场景飞行测试',
      news1_excerpt: '指挥官 X1 在复杂气象条件下完成 100+ 小时飞行测试，验证了抗干扰导航系统的可靠性。',
      news2_title: '海豹 Seal S1 智能救生艇发布',
      news2_excerpt: '全新水面救援产品线正式发布，开启空海联动智能救援新时代。',
      news3_title: 'ARC 2.0 多机协同系统通过验收',
      news3_excerpt: 'ARC 2.0 集群协同版本正式通过行业验收，支持最多 20 架无人机同时协同作业。',
      news4_title: '航链科技与法国 OGE 签署战略合作协议',
      news4_excerpt: '双方将在管道探测、基础设施巡检等领域展开深度合作。',

      // Contact / About
      contact_title: '联系我们',
      contact_intro: '航链科技（Navlyn）致力于构建低空智能产品生态，以 ARC OS 低空 AI 操作系统为核心，打造从感知到决策、从单机到集群的全栈智能解决方案。',
      contact_qr_label: '微信扫码关注公众号',
      team_title: '团队与实验室',

      // Footer
      footer_tagline: '低空智能产品生态<br>ARC 赋能工业新未来',
      footer_links_title: '快速链接',
      footer_link_products: '产品矩阵',
      footer_link_cases: '国际案例',
      footer_link_news: '新闻动态',
      footer_link_about: '关于我们',
      footer_products_title: '产品',
      footer_product_commander: '指挥官 Commander X1',
      footer_product_scout: '尖兵 Scout S1',
      footer_product_seal: '海豹 Seal S1',
      footer_contact_title: '联系方式',
      footer_contact_address: '地址：中国 · 浙江'
    }
  };

  var currentLang = localStorage.getItem('navlyn-lang') || 'zh';

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('navlyn-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    var dict = translations[lang];
    if (!dict) return;

    // Replace textContent for data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Replace innerHTML for data-i18n-html elements
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update toggle button text
    var btnText = lang === 'zh' ? 'EN' : '中';
    var langToggle = document.getElementById('langToggle');
    var mobileLangToggle = document.getElementById('mobileLangToggle');
    if (langToggle) langToggle.textContent = btnText;
    if (mobileLangToggle) mobileLangToggle.textContent = btnText;
  }

  // Bind language toggle buttons
  var langToggle = document.getElementById('langToggle');
  var mobileLangToggle = document.getElementById('mobileLangToggle');

  function toggleLang() {
    setLang(currentLang === 'zh' ? 'en' : 'zh');
  }

  if (langToggle) langToggle.addEventListener('click', toggleLang);
  if (mobileLangToggle) mobileLangToggle.addEventListener('click', toggleLang);

  // Apply saved language on load
  if (currentLang !== 'zh') {
    setLang(currentLang);
  }

  // ── Navbar scroll effect ──
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    // Navbar background
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active nav link
    let current = '';
    sections.forEach(function (section) {
      const top = section.offsetTop - 200;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Mobile hamburger menu ──
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ── Intersection Observer: scroll reveal animations ──
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });

  document.querySelectorAll('.reveal-up, .reveal-fade').forEach(function (el) {
    revealObserver.observe(el);
  });

  // ── Product Gallery: thumbnail switcher ──
  document.querySelectorAll('.gallery-thumbs').forEach(function (thumbContainer) {
    var thumbs = thumbContainer.querySelectorAll('.gallery-thumb');
    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var src = this.getAttribute('data-src');
        var targetId = this.getAttribute('data-target');

        // Find the main image in the same product detail section
        var mainImg;
        if (targetId) {
          mainImg = document.getElementById(targetId);
        } else {
          var section = this.closest('.product-detail');
          mainImg = section ? section.querySelector('.gallery-main img') : null;
        }

        if (mainImg && src) {
          mainImg.style.opacity = '0';
          setTimeout(function () {
            mainImg.src = src;
            mainImg.style.opacity = '1';
          }, 200);
        }

        // Update active state
        thumbs.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');
      });
    });
  });

  // ── Video Modal ──
  var videoModal = document.getElementById('videoModal');
  var videoPlayer = document.getElementById('videoModalPlayer');

  document.querySelectorAll('.video-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var videoSrc = this.getAttribute('data-video');
      if (videoSrc && videoPlayer && videoModal) {
        videoPlayer.querySelector('source').src = videoSrc;
        videoPlayer.load();
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        videoPlayer.play();
      }
    });
  });

  function closeVideoModal() {
    if (videoModal && videoPlayer) {
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    }
  }

  if (videoModal) {
    videoModal.querySelector('.video-modal-backdrop').addEventListener('click', closeVideoModal);
    videoModal.querySelector('.video-modal-close').addEventListener('click', closeVideoModal);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeVideoModal();
      // Also close mobile menu
      if (hamburger && mobileMenu) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  // ── Number Counter Animation ──
  var statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var counters = entry.target.querySelectorAll('.stat-number');
        counters.forEach(function (counter) {
          animateCounter(counter);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  var statsGrid = document.querySelector('.stats-grid');
  if (statsGrid) {
    statsObserver.observe(statsGrid);
  }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var duration = 2000;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);
      el.textContent = current.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // ── Hero animation on load ──
  window.addEventListener('load', function () {
    document.querySelectorAll('.hero .reveal-up').forEach(function (el) {
      el.classList.add('visible');
    });
  });

})();
