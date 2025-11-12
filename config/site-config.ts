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

  // 颜色主题
  colors: {
    primary: "#FF6600", // 橙色主色（德视安品牌色）
    secondary: "#0f172a", // 深色
    accent: "#FF8833", // 橙色亮点
    background: "#ffffff",
    foreground: "#1f2937",
    muted: "#6b7280",
    border: "#e5e7eb",
  },

  // 导航菜单 - 德视安网站结构
  navigation: [
    { 
      label: "首页", 
      href: "/" 
    },
    {
      label: "关于德视安",
      children: [
        {
          items: [
            { label: "公司简介", href: "/about/company" },
            { label: "发展历程", href: "/about/history" },
            { label: "企业文化", href: "/about/culture" },
            { label: "荣誉资质", href: "/about/honors" },
            { label: "战略合作", href: "/about/partners" },
          ]
        }
      ]
    },
    {
      label: "产品中心",
      children: [
        {
          items: [
            { label: "数字医护对讲系统", href: "/products/digital-intercom" },
            { label: "二线制医护对讲系统", href: "/products/two-wire-intercom" },
            { label: "无线呼叫系统", href: "/products/wireless-call" },
            { label: "无线输液呼叫系统", href: "/products/wireless-infusion" },
            { label: "ICU探视对讲系统", href: "/products/icu-intercom" },
            { label: "数字时钟系统", href: "/products/digital-clock" },
            { label: "排队叫号系统", href: "/products/queue-system" },
            { label: "信息发布系统", href: "/products/info-display" },
            { label: "智慧康养系统", href: "/products/healthcare-system" },
            { label: "智能照明系统", href: "/products/smart-lighting" },
          ]
        }
      ]
    },
    {
      label: "解决方案",
      children: [
        {
          items: [
            { label: "智慧医院解决方案", href: "/solutions/hospital" },
            { label: "智慧康养解决方案", href: "/solutions/healthcare" },
            { label: "智能照明解决方案", href: "/solutions/lighting" },
          ]
        }
      ]
    },
    {
      label: "资讯中心",
      children: [
        {
          items: [
            { label: "资讯中心", href: "/news" },
          ]
        },
        {
          title: "视频中心",
          items: [
            { label: "宣传视频", href: "/news/videos/promo" },
            { label: "企业文化", href: "/news/videos/culture" },
          ]
        }
      ]
    },
    {
      label: "人才招聘",
      href: "/procurement"
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

  // 轮播图配置
  carousel: [
    {
      id: 1,
      image: "/banner/banner1.jpg",
      title: "匠心15年势不可挡",
      subtitle: "15 YEARS OF INGENUITY",
      description: "BE A TREND WHICH CANNOT BE HALTED",
    },
    {
      id: 2,
      image: "/banner/banner2.jpg",
      title: "德视安WITMED",
      subtitle: "智慧医院",
      description: "致力于满足医护人员、患者及医院管理层的多方需求",
    },
    {
      id: 3,
      image: "/banner/banner3.jpg",
      title: "德视安SSC",
      subtitle: "智慧养老",
      description: "助力家庭、社区及机构实现高效、安全的智慧化养老",
    },
    {
      id: 4,
      image: "/banner/banner4.jpg",
      title: "德视安IOT",
      subtitle: "SMART LIGHTING 智能照明",
      description: "DSA(KNX)智能照明系统依托KNX技术实现高可靠节能降本与环境优化管理",
    },
  ],

  // 页脚配置
  footer: {
    companyInfo: {
      name: "德视安",
      description: "楼宇对讲、智能家居",
      address: "中国 北京",
      zipCode: "100000",
      phone: "400-XXX-XXXX",
      phoneLabel: "客服电话",
    },
    links: [
      {
        title: "关于我们",
        items: [
          { label: "公司简介", href: "/about/company" },
          { label: "发展历程", href: "/about/history" },
          { label: "企业文化", href: "/about/culture" },
          { label: "品牌荣誉", href: "/about/honors" },
        ],
      },
      {
        title: "产品中心",
        items: [
          { label: "数字医护对讲系统", href: "/products/digital-intercom" },
          { label: "二线制医护对讲系统", href: "/products/two-wire-intercom" },
          { label: "无线呼叫系统", href: "/products/wireless-call" },
          { label: "ICU探视对讲系统", href: "/products/icu-intercom" },
          { label: "排队叫号系统", href: "/products/queue-system" },
          { label: "智慧康养系统", href: "/products/healthcare-system" },
        ],
      },
      {
        title: "解决方案",
        items: [
          { label: "智慧医院解决方案", href: "/solutions/hospital" },
          { label: "智慧康养解决方案", href: "/solutions/healthcare" },
          { label: "智能照明解决方案", href: "/solutions/lighting" },
        ],
      },
      {
        title: "资讯中心",
        items: [
          { label: "资讯中心", href: "/news" },
          { label: "视频中心", href: "/news/videos" },
        ],
      },
      {
        title: "招采信息",
        items: [
          { label: "招采信息", href: "/procurement" },
        ],
      },
    ],
    social: [
      { name: "微信", qrCode: "/placeholder.jpg" },
      { name: "抖音", qrCode: "/placeholder.jpg" },
    ],
    copyright: "All rights reserved. 德视安科技有限公司 版权所有",
    icp: "京ICP备XXXXXXXX号",
  },
}

export type SiteConfig = typeof siteConfig
