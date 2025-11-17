// 这个文件包含所有可替换的内容，便于维护和更新

export interface MenuItem {
  label: string
  href?: string
  children?: {
    title?: string
    items: Array<{ label: string; href: string }>
  }[]
}

export const siteConfig = {
  // 基础信息
  siteName: "德视安",
  siteDescription: "楼宇对讲、智能家居",
  logo: "/logo.jpg",
  logoLight: "/logo-light.svg",
  logoDark: "/logo-dark.svg",

  // 颜色主题 - 与静态网站保持一致
  colors: {
    primary: "#0066cc", // 主蓝色
    primaryDark: "#004d99", // 深蓝色
    primaryLight: "#3399ff", // 浅蓝色
    secondary: "#00a8e8", // 辅助蓝色
    accent: "#ff6b35", // 强调色
    headerBg: "#051b33", // Header/Footer深蓝背景
    background: "#ffffff",
    backgroundLight: "#f9f9f9",
    backgroundGray: "#f5f5f5",
    foreground: "#333333",
    textSecondary: "#666666",
    textLight: "#999999",
    border: "#e0e0e0",
  },

  // 导航菜单 - React 标准路由
  navigation: [
    { 
      label: "首页", 
      href: "/" 
    },
    {
      label: "产品中心",
      children: [
        {
          items: [
            { label: "数字医护对讲系统", href: "/digital-medical-intercom" },
            { label: "二线制医护对讲系统", href: "/two-wire-medical-intercom" },
            { label: "无线呼叫系统", href: "/wireless-call-system" },
            { label: "无线输液呼叫系统", href: "/wireless-infusion-call" },
            { label: "ICU探视对讲系统", href: "/icu-visit-intercom" },
            { label: "数字时钟系统", href: "/digital-clock-system" },
            { label: "排队叫号系统", href: "/queuing-system" },
            { label: "信息发布系统", href: "/info-display-system" },
            { label: "智慧康养系统", href: "/smart-aging-system" },
            { label: "智能照明系统", href: "/smart-lighting-system" },
          ]
        }
      ]
    },
    {
      label: "解决方案",
      children: [
        {
          items: [
            { label: "智慧医院", href: "/smart-hospital" },
            { label: "智慧康养", href: "/smart-healthcare" },
            { label: "智能照明", href: "/smart-lighting" },
          ]
        }
      ]
    },
    {
      label: "资讯中心",
      children: [
        {
          items: [
            { label: "成功案例", href: "/info-center" },
          ]
        }
      ]
    },
    {
      label: "人才招聘",
      children: [
        {
          items: [
            { label: "招聘职位", href: "/recruitment" },
            { label: "人才理念", href: "/talent-philosophy" },
          ]
        }
      ]
    },
    {
      label: "关于我们",
      children: [
        {
          items: [
            { label: "公司简介", href: "/company-profile" },
            { label: "联系我们", href: "/contact-us" },
          ]
        }
      ]
    },
  ] as MenuItem[],

  // Hero区域配置
  hero: {
    title: "企业通信解决方案",
    subtitle: "为您的企业提供专业的通信系统",
    backgroundImage: "/hero-bg.jpg",
    ctaButton: {
      text: "了解更多",
      href: "#products",
    },
  },

  // 产品配置
  products: [
    {
      id: 1,
      name: "调度通信系统",
      description: "专业的集团调度通信解决方案",
      image: "/product-1.jpg",
      icon: "/icon-dispatch.svg",
      features: ["高效调度", "实时通信", "安全可靠"],
    },
    {
      id: 2,
      name: "视频会议系统",
      description: "远程视频会议与协作平台",
      image: "/product-2.jpg",
      icon: "/icon-video.svg",
      features: ["清晰画质", "多人会议", "屏幕共享"],
    },
    {
      id: 3,
      name: "公网对讲系统",
      description: "基于4G/5G的移动对讲服务",
      image: "/product-3.jpg",
      icon: "/icon-mobile.svg",
      features: ["移动便捷", "广覆盖", "低延迟"],
    },
    {
      id: 4,
      name: "融合通信平台",
      description: "统一的融合通信管理平台",
      image: "/product-4.jpg",
      icon: "/icon-integration.svg",
      features: ["集中管理", "易于集成", "可扩展"],
    },
  ],

  // 关于部分
  about: {
    title: "关于德视安",
    subtitle: "楼宇对讲智能化解决方案领导者",
    description:
      "德视安专注于楼宇对讲、智慧社区建设和物联网解决方案领域，为全球数千家房地产开发商、物业公司和集成商提供专业的产品和服务。致力于打造安全、便捷、智能的现代生活空间。",
    image: "/about-image.jpg",
    stats: [
      { label: "服务覆盖", value: "全球" },
      { label: "产品类型", value: "100+" },
      { label: "合作伙伴", value: "10000+" },
      { label: "用户规模", value: "1000万+" },
    ],
  },

  // 轮播图配置 - 与静态网站一致
  carousel: [
    {
      id: 1,
      image: "/images/banner1-1.jpg",
      title: "",
      subtitle: "",
      description: "",
    },
    {
      id: 2,
      image: "/images/banner2-1.jpg",
      title: "",
      subtitle: "",
      description: "",
    },
    {
      id: 3,
      image: "/images/banner3-1.jpg",
      title: "",
      subtitle: "",
      description: "",
    },
    {
      id: 4,
      image: "/images/banner4-1.jpg",
      title: "",
      subtitle: "",
      description: "",
    },
  ],
  
  // 解决方案配置 - 与静态网站一致
  solutions: [
    {
      id: 1,
      title: "智慧医院解决方案",
      description: "涵盖医护对讲、病房管理、排队叫号、信息发布等系统，提升医院管理效率和患者就医体验。",
      image: "/images/solution1-1.jpg",
      href: "/smart-hospital",
    },
    {
      id: 2,
      title: "智慧康养解决方案",
      description: "涵盖康养对讲、疗养管理、智能照护、信息发布等系统，提升康养机构管理效率和服务质量。",
      image: "/images/solution2-1.jpg",
      href: "/smart-healthcare",
    },
    {
      id: 3,
      title: "智能照明解决方案",
      description: "为各类场所提供专业的智能照明控制方案，包括场景控制、自动调节、节能环保等功能。",
      image: "/images/solution3-1.jpg",
      href: "/smart-lighting",
    },
  ],

  // 页脚配置 - 与静态网站一致
  footer: {
    companyInfo: {
      name: "德视安",
      description: "",
      productionCenter: "生产研发中心：广州市经济开发区蓝玉四街九号广州科技园",
      salesCenter: "销售服务中心：成都市成华区成华大道十里店路213号龙光世纪中心",
      phone: "028-85251272",
      phoneLabel: "服务中心电话",
    },
    copyright: "© 2025 成都德视安科技有限公司. 保留所有权利.",
  },
}

export type SiteConfig = typeof siteConfig
