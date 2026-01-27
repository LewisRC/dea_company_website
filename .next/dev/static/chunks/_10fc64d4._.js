(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/config/site-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 这个文件包含所有可替换的内容，便于维护和更新
__turbopack_context__.s([
    "getNavigationConfig",
    ()=>getNavigationConfig,
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    // 基础信息
    siteName: "德视安",
    siteDescription: "楼宇对讲、智能家居",
    logo: "/logo.jpg",
    logoLight: "/logo-light.svg",
    logoDark: "/logo-dark.svg",
    // 颜色主题 - 与静态网站保持一致
    colors: {
        primary: "#0066cc",
        primaryDark: "#004d99",
        primaryLight: "#3399ff",
        secondary: "#00a8e8",
        accent: "#ff6b35",
        headerBg: "#051b33",
        background: "#ffffff",
        backgroundLight: "#f9f9f9",
        backgroundGray: "#f5f5f5",
        foreground: "#333333",
        textSecondary: "#666666",
        textLight: "#999999",
        border: "#e0e0e0"
    },
    // 导航菜单 - React 标准路由（中文）
    navigation: [],
    // Hero区域配置
    hero: {
        title: "企业通信解决方案",
        subtitle: "为您的企业提供专业的通信系统",
        backgroundImage: "/hero-bg.jpg",
        ctaButton: {
            text: "了解更多",
            href: "#products"
        }
    },
    // 产品配置
    products: [
        {
            id: 1,
            name: "调度通信系统",
            description: "专业的集团调度通信解决方案",
            image: "/product-1.jpg",
            icon: "/icon-dispatch.svg",
            features: [
                "高效调度",
                "实时通信",
                "安全可靠"
            ]
        },
        {
            id: 2,
            name: "视频会议系统",
            description: "远程视频会议与协作平台",
            image: "/product-2.jpg",
            icon: "/icon-video.svg",
            features: [
                "清晰画质",
                "多人会议",
                "屏幕共享"
            ]
        },
        {
            id: 3,
            name: "公网对讲系统",
            description: "基于4G/5G的移动对讲服务",
            image: "/product-3.jpg",
            icon: "/icon-mobile.svg",
            features: [
                "移动便捷",
                "广覆盖",
                "低延迟"
            ]
        },
        {
            id: 4,
            name: "融合通信平台",
            description: "统一的融合通信管理平台",
            image: "/product-4.jpg",
            icon: "/icon-integration.svg",
            features: [
                "集中管理",
                "易于集成",
                "可扩展"
            ]
        }
    ],
    // 关于部分
    about: {
        title: "关于德视安",
        subtitle: "楼宇对讲智能化解决方案领导者",
        description: "德视安专注于楼宇对讲、智慧社区建设和物联网解决方案领域，为全球数千家房地产开发商、物业公司和集成商提供专业的产品和服务。致力于打造安全、便捷、智能的现代生活空间。",
        image: "/about-image.jpg",
        stats: [
            {
                label: "服务覆盖",
                value: "全球"
            },
            {
                label: "产品类型",
                value: "100+"
            },
            {
                label: "合作伙伴",
                value: "10000+"
            },
            {
                label: "用户规模",
                value: "1000万+"
            }
        ]
    },
    // 轮播图配置 - 与静态网站一致
    carousel: [
        {
            id: 1,
            image: "/images/banner-CH/banner1-ch.jpg",
            imageEn: "/images/banner-EN/banner1-en.jpg",
            title: "",
            titleEn: "",
            subtitle: "",
            subtitleEn: "",
            description: ""
        },
        {
            id: 2,
            image: "/images/banner-CH/banner2-ch.jpg",
            imageEn: "/images/banner-EN/banner2-en.jpg",
            title: "",
            titleEn: "",
            subtitle: "",
            subtitleEn: "",
            description: ""
        },
        {
            id: 3,
            image: "/images/banner-CH/banner3-ch.jpg",
            imageEn: "/images/banner-EN/banner3-en.jpg",
            title: "",
            titleEn: "",
            subtitle: "",
            subtitleEn: "",
            description: ""
        },
        {
            id: 4,
            image: "/images/banner-CH/banner4-ch.jpg",
            imageEn: "/images/banner-EN/banner4-en.jpg",
            title: "",
            titleEn: "",
            subtitle: "",
            subtitleEn: "",
            description: ""
        },
        {
            id: 5,
            image: "/images/banner-CH/banner5-ch.jpg",
            imageEn: "/images/banner-EN/banner5-en.jpg",
            title: "",
            titleEn: "",
            subtitle: "",
            subtitleEn: "",
            description: ""
        }
    ],
    // 解决方案配置 - 与静态网站一致
    solutions: [
        {
            id: 1,
            title: "智慧医院解决方案",
            description: "涵盖医护对讲、病房管理、排队叫号、信息发布等系统，提升医院管理效率和患者就医体验。",
            image: "/images/solution-d/solution1.webp",
            imageMobile: "/images/solution-m/solution1-m.webp",
            href: "/smart-hospital"
        },
        {
            id: 2,
            title: "智慧康养解决方案",
            description: "涵盖康养对讲、疗养管理、智能照护、信息发布等系统，提升康养机构管理效率和服务质量。",
            image: "/images/solution-d/solution2.webp",
            imageMobile: "/images/solution-m/solution2-m.webp",
            href: "/smart-healthcare"
        },
        {
            id: 3,
            title: "智慧社区解决方案",
            description: "打造安全、便捷、智能的现代社区生活环境，实现社区各系统间的互联互通和协同工作。",
            image: "/images/solution-d/solution3.webp",
            imageMobile: "/images/solution-m/solution3-m.webp",
            href: "/smart-community"
        },
        {
            id: 4,
            title: "智慧建筑解决方案",
            description: "整合智能照明、能源管理、楼宇自控、酒店客控等系统，打造高效、节能、舒适的智慧建筑。",
            image: "/images/solution-d/solution4.webp",
            imageMobile: "/images/solution-m/solution4-m.webp",
            href: "/smart-building"
        }
    ],
    // 页脚配置 - 与静态网站一致
    footer: {
        companyInfo: {
            name: "德视安",
            description: "",
            productionCenter: "生产研发中心：广州市经济开发区蓝玉四街九号广州科技园",
            salesCenter: "销售服务中心：成都市成华区成华大道十里店路213号龙光世纪中心",
            phone: "028-85251272",
            phoneLabel: "服务中心电话"
        },
        copyright: "© 2025 成都德视安科技有限公司. 保留所有权利."
    }
};
function getNavigationConfig(lang = 'zh') {
    if (lang === 'en') {
        return [
            {
                label: "Home",
                href: "/"
            },
            {
                label: "Products",
                children: [
                    {
                        items: [
                            {
                                label: "Digital Medical Intercom System",
                                href: "/digital-medical-intercom"
                            },
                            {
                                label: "Two-Wire Medical Intercom System",
                                href: "/two-wire-medical-intercom"
                            },
                            {
                                label: "Wireless Call System",
                                href: "/wireless-call-system"
                            },
                            {
                                label: "Wireless Infusion Call System",
                                href: "/wireless-infusion-call"
                            },
                            {
                                label: "ICU Visit Intercom System",
                                href: "/icu-visit-intercom"
                            },
                            {
                                label: "Digital Clock System",
                                href: "/digital-clock-system"
                            },
                            {
                                label: "Queuing System",
                                href: "/queuing-system"
                            },
                            {
                                label: "Information Display System",
                                href: "/info-display-system"
                            },
                            {
                                label: "Smart Aging Care System",
                                href: "/smart-aging-system"
                            },
                            {
                                label: "Smart Lighting System",
                                href: "/smart-lighting-system"
                            }
                        ]
                    }
                ]
            },
            {
                label: "Solutions",
                children: [
                    {
                        items: [
                            {
                                label: "Smart Hospital",
                                href: "/smart-hospital"
                            },
                            {
                                label: "Smart Healthcare",
                                href: "/smart-healthcare"
                            },
                            {
                                label: "Smart Community",
                                href: "/smart-community"
                            },
                            {
                                label: "Smart Building",
                                href: "/smart-building"
                            }
                        ]
                    }
                ]
            },
            {
                label: "News",
                children: [
                    {
                        items: [
                            {
                                label: "Success Cases",
                                href: "/info-center"
                            }
                        ]
                    }
                ]
            },
            {
                label: "Careers",
                children: [
                    {
                        items: [
                            {
                                label: "Positions",
                                href: "/recruitment"
                            },
                            {
                                label: "Talent Philosophy",
                                href: "/talent-philosophy"
                            }
                        ]
                    }
                ]
            },
            {
                label: "About",
                children: [
                    {
                        items: [
                            {
                                label: "Company Profile",
                                href: "/company-profile"
                            },
                            {
                                label: "Contact Us",
                                href: "/contact-us"
                            }
                        ]
                    }
                ]
            }
        ];
    }
    // 中文导航
    return [
        {
            label: "首页",
            href: "/"
        },
        {
            label: "产品中心",
            children: [
                {
                    items: [
                        {
                            label: "数字医护对讲系统",
                            href: "/digital-medical-intercom"
                        },
                        {
                            label: "二线制医护对讲系统",
                            href: "/two-wire-medical-intercom"
                        },
                        {
                            label: "无线呼叫系统",
                            href: "/wireless-call-system"
                        },
                        {
                            label: "无线输液呼叫系统",
                            href: "/wireless-infusion-call"
                        },
                        {
                            label: "ICU探视对讲系统",
                            href: "/icu-visit-intercom"
                        },
                        {
                            label: "数字时钟系统",
                            href: "/digital-clock-system"
                        },
                        {
                            label: "排队叫号系统",
                            href: "/queuing-system"
                        },
                        {
                            label: "信息发布系统",
                            href: "/info-display-system"
                        },
                        {
                            label: "智慧康养系统",
                            href: "/smart-aging-system"
                        },
                        {
                            label: "智能照明系统",
                            href: "/smart-lighting-system"
                        }
                    ]
                }
            ]
        },
        {
            label: "解决方案",
            children: [
                {
                    items: [
                        {
                            label: "智慧医院",
                            href: "/smart-hospital"
                        },
                        {
                            label: "智慧康养",
                            href: "/smart-healthcare"
                        },
                        {
                            label: "智慧社区",
                            href: "/smart-community"
                        },
                        {
                            label: "智慧建筑",
                            href: "/smart-building"
                        }
                    ]
                }
            ]
        },
        {
            label: "资讯中心",
            children: [
                {
                    items: [
                        {
                            label: "成功案例",
                            href: "/info-center"
                        }
                    ]
                }
            ]
        },
        {
            label: "人才招聘",
            children: [
                {
                    items: [
                        {
                            label: "招聘职位",
                            href: "/recruitment"
                        },
                        {
                            label: "人才理念",
                            href: "/talent-philosophy"
                        }
                    ]
                }
            ]
        },
        {
            label: "关于我们",
            children: [
                {
                    items: [
                        {
                            label: "公司简介",
                            href: "/company-profile"
                        },
                        {
                            label: "联系我们",
                            href: "/contact-us"
                        }
                    ]
                }
            ]
        }
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/config/product-details-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 产品详情数据 - 完全匹配HTML项目
__turbopack_context__.s([
    "productDetailsData",
    ()=>productDetailsData
]);
const productDetailsData = {
    // 数字医护对讲系统产品 (1-14)
    '1': {
        name: '10.1寸护士站管理机',
        category: '数字医护对讲系统',
        categoryLink: '/digital-medical-intercom',
        image: '/images/medical/product1.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '356×210×31.8mm'
            },
            {
                label: '屏幕尺寸',
                value: '10.1寸IPS高清屏'
            },
            {
                label: '分辨率',
                value: '1280×800'
            }
        ]
    },
    '2': {
        name: '15.6寸护士站管理机',
        category: '数字医护对讲系统',
        categoryLink: '/digital-medical-intercom',
        image: '/images/medical/product2.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '375×245×22mm'
            },
            {
                label: '屏幕尺寸',
                value: '15.6寸IPS高清屏'
            },
            {
                label: '分辨率',
                value: '1920×1080'
            }
        ]
    },
    '3': {
        name: '网络多媒体控制器',
        category: '数字医护对讲系统',
        categoryLink: '/digital-medical-intercom',
        image: '/images/medical/product3.jpg',
        params: [
            {
                label: 'CPU',
                value: 'RK3128四核'
            },
            {
                label: '内存',
                value: '1GB'
            },
            {
                label: '存储',
                value: '8GB,TF卡可扩展32GB'
            }
        ]
    },
    '4': {
        name: '55寸护士站交互大屏',
        category: '数字医护对讲系统',
        categoryLink: '/digital-medical-intercom',
        image: '/images/medical/product4.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '1309×780×72mm'
            },
            {
                label: '分辨率',
                value: '1920×1080'
            }
        ]
    },
    '5': {
        name: '走廊显示屏(LED)',
        category: '数字医护对讲系统',
        categoryLink: '/digital-medical-intercom',
        image: '/images/medical/product5.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '852×186×49.5mm'
            },
            {
                label: 'LED亮度',
                value: '≥900cd/m²'
            },
            {
                label: '分辨率',
                value: '128×64'
            }
        ]
    },
    '6': {
        name: '走廊显示屏(液晶)',
        category: '数字医护对讲系统',
        categoryLink: '/digital-medical-intercom',
        image: '/images/medical/product6.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '852×186×49.5mm'
            },
            {
                label: 'LED亮度',
                value: '≥900cd/m²'
            },
            {
                label: '分辨率',
                value: '128×64'
            }
        ]
    },
    '7': {
        name: '7寸病区门口机',
        category: '数字医护对讲系统',
        categoryLink: '/digital-medical-intercom',
        image: '/images/medical/product7.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '148.5×363×47mm'
            },
            {
                label: '屏幕尺寸',
                value: '7寸电容触摸屏'
            },
            {
                label: '分辨率',
                value: '600×1024'
            }
        ]
    },
    '8': {
        name: '10.1寸房间门口机(横)',
        category: '数字医护对讲系统',
        categoryLink: '/digital-medical-intercom',
        image: '/images/medical/product8.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '267×240×22mm'
            },
            {
                label: '屏幕尺寸',
                value: '10.1寸电容触摸屏'
            },
            {
                label: '分辨率',
                value: '1024×600'
            }
        ]
    },
    '9': {
        name: '7寸智能交互床头屏',
        category: '数字医护对讲系统',
        categoryLink: '/digital-medical-intercom',
        image: '/images/medical/product9.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '215.1×151×103mm'
            },
            {
                label: '屏幕尺寸',
                value: '7寸电容触摸屏'
            },
            {
                label: '分辨率',
                value: '204×600'
            }
        ]
    },
    '10': {
        name: '10.1寸智能交互床头屏',
        category: '数字医护对讲系统',
        categoryLink: '/digital-medical-intercom',
        image: '/images/medical/product10.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '265×165×22mm'
            },
            {
                label: '屏幕尺寸',
                value: '10.1寸触摸屏'
            },
            {
                label: '分辨率',
                value: '1280×800'
            }
        ]
    },
    '11': {
        name: '10.1寸病房智能门口机(竖)',
        category: '数字医护对讲系统',
        categoryLink: '/digital-medical-intercom',
        image: '/images/medical/product11.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '165×265×22mm'
            },
            {
                label: '屏幕尺寸',
                value: '10.1寸触摸屏'
            },
            {
                label: '分辨率',
                value: '800×1280'
            }
        ]
    },
    '12': {
        name: '15.6寸病房智能门口机',
        category: '数字医护对讲系统',
        categoryLink: '/digital-medical-intercom',
        image: '/images/medical/product12.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '245×375×22mm'
            },
            {
                label: '屏幕尺寸',
                value: '15.6寸触摸屏'
            },
            {
                label: '分辨率',
                value: '1080×1920'
            }
        ]
    },
    '13': {
        name: '床头分机(无屏)',
        category: '数字医护对讲系统',
        categoryLink: '/digital-medical-intercom',
        image: '/images/medical/product13.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '138×90×12mm'
            },
            {
                label: '供电方式',
                value: '支持PoE供电和独立供电'
            }
        ]
    },
    '14': {
        name: '卫生间紧急呼叫器',
        category: '数字医护对讲系统',
        categoryLink: '/digital-medical-intercom',
        image: '/images/medical/product14.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '96×65×30mm'
            },
            {
                label: '供电方式',
                value: '电池'
            }
        ]
    },
    // 二线制医护对讲系统产品 (15-20)
    '15': {
        name: '床头分机',
        category: '二线制医护对讲系统',
        categoryLink: '/two-wire-medical-intercom',
        image: '/images/two-wire-medical/product15.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '145×89×15mm'
            },
            {
                label: '供电方式',
                value: '二芯供电'
            }
        ]
    },
    '16': {
        name: '厕所按钮',
        category: '二线制医护对讲系统',
        categoryLink: '/two-wire-medical-intercom',
        image: '/images/two-wire-medical/product16.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '86×86×32mm'
            },
            {
                label: '供电方式',
                value: '二芯供电'
            }
        ]
    },
    '17': {
        name: '门灯',
        category: '二线制医护对讲系统',
        categoryLink: '/two-wire-medical-intercom',
        image: '/images/two-wire-medical/product17.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '97.5×85.5×41mm'
            },
            {
                label: '供电方式',
                value: '二芯供电'
            }
        ]
    },
    '18': {
        name: '走廊显示屏',
        category: '二线制医护对讲系统',
        categoryLink: '/two-wire-medical-intercom',
        image: '/images/two-wire-medical/product18.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '800×200×45mm'
            },
            {
                label: '供电方式',
                value: '单独供电'
            }
        ]
    },
    '19': {
        name: '信息管理主机',
        category: '二线制医护对讲系统',
        categoryLink: '/two-wire-medical-intercom',
        image: '/images/two-wire-medical/product19.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '300×240×45mm'
            },
            {
                label: '传输方式',
                value: '网线和二芯线传输'
            },
            {
                label: '供电方式',
                value: '220V市电'
            }
        ]
    },
    '20': {
        name: '网络多媒体控制器',
        category: '二线制医护对讲系统',
        categoryLink: '/two-wire-medical-intercom',
        image: '/images/two-wire-medical/product20.jpg',
        params: [
            {
                label: 'CPU',
                value: 'intel四核'
            },
            {
                label: '内存/存储',
                value: '4GB/32GB'
            },
            {
                label: '电源',
                value: 'AC 220V输入'
            }
        ]
    },
    // 无线呼叫系统产品 (21-43) - 注意：HTML中ID是33-43，但图片命名是product21-31
    '21': {
        name: '无线呼叫器（床头）',
        category: '无线呼叫系统',
        categoryLink: '/wireless-call-system',
        image: '/images/wireless-call/product21.jpg',
        params: [
            {
                label: '调制方式',
                value: 'FM调频'
            },
            {
                label: '发射功率',
                value: '12毫瓦'
            },
            {
                label: '收发频率',
                value: '315.6MHz'
            }
        ]
    },
    '22': {
        name: '无线呼叫器（拉绳）',
        category: '无线呼叫系统',
        categoryLink: '/wireless-call-system',
        image: '/images/wireless-call/product22.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '95×65×3mm'
            },
            {
                label: '调制方式',
                value: 'FSK调频'
            },
            {
                label: '收发频率',
                value: '315.6MHz'
            }
        ]
    },
    '23': {
        name: '门灯（无线语音报警）',
        category: '无线呼叫系统',
        categoryLink: '/wireless-call-system',
        image: '/images/wireless-call/product23.jpg',
        params: [
            {
                label: '接收频率',
                value: '430.225MHz'
            },
            {
                label: '解码方式',
                value: 'POCSAG'
            },
            {
                label: '供电方式',
                value: '220V交流电源'
            }
        ]
    },
    '24': {
        name: '无线发射主机',
        category: '无线呼叫系统',
        categoryLink: '/wireless-call-system',
        image: '/images/wireless-call/product24.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '250×250×60mm'
            },
            {
                label: '接收频率',
                value: '315.600MHz'
            },
            {
                label: '发射频率',
                value: '430.225MHz'
            }
        ]
    },
    '25': {
        name: '无线联动主机',
        category: '无线呼叫系统',
        categoryLink: '/wireless-call-system',
        image: '/images/wireless-call/product25.jpg',
        params: [
            {
                label: '通信方式',
                value: 'USB通讯'
            },
            {
                label: '接收频率',
                value: '315.6MHz'
            },
            {
                label: '接收灵敏度',
                value: '-115dBm'
            }
        ]
    },
    '26': {
        name: '走廊显示屏（无线）',
        category: '无线呼叫系统',
        categoryLink: '/wireless-call-system',
        image: '/images/wireless-call/product26.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '800×200×45mm'
            },
            {
                label: '供电方式',
                value: '单独供电'
            }
        ]
    },
    '27': {
        name: '数字显示屏（无线）',
        category: '无线呼叫系统',
        categoryLink: '/wireless-call-system',
        image: '/images/wireless-call/product27.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '279×209×25mm'
            },
            {
                label: '工作频率',
                value: '315.6MHz'
            }
        ]
    },
    '28': {
        name: '无线接收手表',
        category: '无线呼叫系统',
        categoryLink: '/wireless-call-system',
        image: '/images/wireless-call/product28.jpg',
        params: [
            {
                label: '显示屏',
                value: '蓝色OLED'
            },
            {
                label: '分辨率',
                value: '128×64'
            }
        ]
    },
    '29': {
        name: '无线增压器',
        category: '无线呼叫系统',
        categoryLink: '/wireless-call-system',
        image: '/images/wireless-call/product29.jpg',
        params: [
            {
                label: '发射功率',
                value: '≤27dB'
            },
            {
                label: '接收灵敏度',
                value: '优于-107dBm'
            },
            {
                label: '供电电压',
                value: 'DC12V'
            }
        ]
    },
    '30': {
        name: '床头分机（4G款基础版）',
        category: '无线呼叫系统',
        categoryLink: '/wireless-call-system',
        image: '/images/wireless-call/product30.jpg',
        params: [
            {
                label: '供电方式',
                value: '适配器供电'
            }
        ]
    },
    '31': {
        name: '信息管理主机（4G款）',
        category: '无线呼叫系统',
        categoryLink: '/wireless-call-system',
        image: '/images/wireless-call/product31.jpg',
        params: [
            {
                label: '供电方式',
                value: '适配器供电'
            }
        ]
    },
    // 无线输液呼叫系统产品 (44-45)
    '44': {
        name: '无线呼叫器',
        category: '无线输液呼叫系统',
        categoryLink: '/wireless-infusion-call',
        image: '/images/wireless-infusion-call/product44.jpg',
        params: [
            {
                label: '供电方式',
                value: '可充锂电池'
            }
        ]
    },
    '45': {
        name: '无线接收机',
        category: '无线输液呼叫系统',
        categoryLink: '/wireless-infusion-call',
        image: '/images/wireless-infusion-call/product45.jpg',
        params: [
            {
                label: '发射功率',
                value: '≤27Db'
            },
            {
                label: '接收灵敏度',
                value: '优于-107DBM'
            },
            {
                label: '供电电压',
                value: 'DC12V'
            }
        ]
    },
    // ICU探视对讲系统产品 (46-49)
    '46': {
        name: '15.6寸床头分机(病床探视)',
        category: 'ICU探视对讲系统',
        categoryLink: '/icu-visit-intercom',
        image: '/images/icu-visit/product46.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '375×245×22mm'
            },
            {
                label: '屏幕尺寸',
                value: '15.6寸触摸屏'
            },
            {
                label: '分辨率',
                value: '1920×1080'
            }
        ]
    },
    '47': {
        name: '10.1寸床头分机(病床探视)',
        category: 'ICU探视对讲系统',
        categoryLink: '/icu-visit-intercom',
        image: '/images/icu-visit/product47.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '265×165×22mm'
            },
            {
                label: '屏幕尺寸',
                value: '10.1寸触摸屏'
            },
            {
                label: '分辨率',
                value: '1280×800'
            }
        ]
    },
    '48': {
        name: '支臂',
        category: 'ICU探视对讲系统',
        categoryLink: '/icu-visit-intercom',
        image: '/images/icu-visit/product48.jpg',
        params: [
            {
                label: '臂长',
                value: '1080mm'
            },
            {
                label: '升降幅度',
                value: '上10mm下365mm'
            },
            {
                label: '连接杆',
                value: '365°转动'
            }
        ]
    },
    '49': {
        name: '探视推车',
        category: 'ICU探视对讲系统',
        categoryLink: '/icu-visit-intercom',
        image: '/images/icu-visit/product49.jpg',
        params: [
            {
                label: '篮筐尺寸',
                value: '88×155×170mm'
            },
            {
                label: '台面尺寸',
                value: '460×490mm'
            },
            {
                label: '底座尺寸',
                value: '492×525mm'
            }
        ]
    },
    // 数字时钟系统产品 (50-54)
    '50': {
        name: 'NTP电子时钟(单面)',
        category: '数字时钟系统',
        categoryLink: '/digital-clock-system',
        image: '/images/digital-clock/product50.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '86×65mm'
            },
            {
                label: '产品寿命',
                value: '≥10W小时'
            },
            {
                label: '供电方式',
                value: '220v供电NTP校时'
            }
        ]
    },
    '51': {
        name: 'NTP电子时钟(双面)',
        category: '数字时钟系统',
        categoryLink: '/digital-clock-system',
        image: '/images/digital-clock/product51.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '86×65mm'
            },
            {
                label: '产品寿命',
                value: '≥10W小时'
            },
            {
                label: '供电方式',
                value: '220v供电NTP校时'
            }
        ]
    },
    '52': {
        name: 'NTP电子时钟(单面)',
        category: '数字时钟系统',
        categoryLink: '/digital-clock-system',
        image: '/images/digital-clock/product52.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '86×65mm'
            },
            {
                label: '产品寿命',
                value: '≥10W小时'
            },
            {
                label: '供电方式',
                value: '220v供电NTP校时'
            }
        ]
    },
    '53': {
        name: 'NTP电子时钟(双面)',
        category: '数字时钟系统',
        categoryLink: '/digital-clock-system',
        image: '/images/digital-clock/product53.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '86×65mm'
            },
            {
                label: '产品寿命',
                value: '≥10W小时'
            },
            {
                label: '供电方式',
                value: '220v供电NTP校时'
            }
        ]
    },
    '54': {
        name: 'NTP时间服务器中心母钟',
        category: '数字时钟系统',
        categoryLink: '/digital-clock-system',
        image: '/images/digital-clock/product54.jpg',
        params: [
            {
                label: '用户容量',
                value: '支持数万台客户端'
            },
            {
                label: 'NTP请求量',
                value: '8000次/秒'
            },
            {
                label: '网口',
                value: 'RJ45，1路'
            }
        ]
    },
    // 排队叫号系统产品 (55-60)
    '55': {
        name: '19寸智能一体机',
        category: '排队叫号系统',
        categoryLink: '/queuing-system',
        image: '/images/queuing/product55.jpg',
        params: [
            {
                label: '安装方式',
                value: '医生诊室门口壁挂式'
            },
            {
                label: '传输方式',
                value: '局域网传输'
            },
            {
                label: '分辨率',
                value: '1920×1080'
            }
        ]
    },
    '56': {
        name: '32寸智能一体机',
        category: '排队叫号系统',
        categoryLink: '/queuing-system',
        image: '/images/queuing/product56.jpg',
        params: [
            {
                label: '安装方式',
                value: '医生诊室门口壁挂式'
            },
            {
                label: '传输方式',
                value: '局域网传输'
            },
            {
                label: '分辨率',
                value: '1920×1080'
            }
        ]
    },
    '57': {
        name: '22寸智能一体机（取号/触摸屏）',
        category: '排队叫号系统',
        categoryLink: '/queuing-system',
        image: '/images/queuing/product57.jpg',
        params: [
            {
                label: '安装方式',
                value: '落地式'
            },
            {
                label: '传输方式',
                value: '局域网传输'
            },
            {
                label: '分辨率',
                value: '1920×1080'
            }
        ]
    },
    '58': {
        name: '22寸智能一体机（打印/触摸屏）',
        category: '排队叫号系统',
        categoryLink: '/queuing-system',
        image: '/images/queuing/product58.jpg',
        params: [
            {
                label: '安装方式',
                value: '落地式'
            },
            {
                label: '传输方式',
                value: '局域网传输'
            },
            {
                label: '分辨率',
                value: '1920×1080'
            }
        ]
    },
    '59': {
        name: '10寸呼叫机（触摸屏）',
        category: '排队叫号系统',
        categoryLink: '/queuing-system',
        image: '/images/queuing/product59.jpg',
        params: [
            {
                label: '安装方式',
                value: '桌面式'
            },
            {
                label: '传输方式',
                value: '局域网传输'
            },
            {
                label: '分辨率',
                value: '1280×800'
            }
        ]
    },
    '60': {
        name: '窗口对讲呼叫机',
        category: '排队叫号系统',
        categoryLink: '/queuing-system',
        image: '/images/queuing/product60.jpg',
        params: [
            {
                label: '控制方式',
                value: '双通道自动控制'
            },
            {
                label: '录音方式',
                value: '全双工录音'
            }
        ]
    },
    // 信息发布系统产品 (61-62)
    '61': {
        name: '43寸智能一体机(立式)',
        category: '信息发布系统',
        categoryLink: '/info-display-system',
        image: '/images/info-display/product61.jpg',
        params: [
            {
                label: '安装方式',
                value: '落地式'
            },
            {
                label: '传输方式',
                value: '局域网传输'
            },
            {
                label: '分辨率',
                value: '1920×1080'
            }
        ]
    },
    '62': {
        name: '43寸智能一体机(卧式)',
        category: '信息发布系统',
        categoryLink: '/info-display-system',
        image: '/images/info-display/product62.jpg',
        params: [
            {
                label: '安装方式',
                value: '卧式'
            },
            {
                label: '传输方式',
                value: '局域网传输'
            },
            {
                label: '分辨率',
                value: '1920×1080'
            }
        ]
    },
    // 智慧康养系统产品 (63-70)
    '63': {
        name: '定位胸牌',
        category: '智慧康养系统',
        categoryLink: '/smart-aging-system',
        image: '/images/smart-aging/product63.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '61×11×106mm'
            },
            {
                label: '通讯方式',
                value: 'Cat.1通讯'
            },
            {
                label: '待机时长',
                value: '5天'
            }
        ]
    },
    '64': {
        name: '智能手环',
        category: '智慧康养系统',
        categoryLink: '/smart-aging-system',
        image: '/images/smart-aging/product64.jpg',
        params: [
            {
                label: '屏幕尺寸',
                value: '1.59英寸/1.83英寸'
            },
            {
                label: '待机时长',
                value: '7-9天'
            },
            {
                label: '通话时长',
                value: '7-9小时'
            }
        ]
    },
    '65': {
        name: '毫米跌倒雷达波',
        category: '智慧康养系统',
        categoryLink: '/smart-aging-system',
        image: '/images/smart-aging/product65.jpg',
        params: [
            {
                label: '产品尺寸',
                value: 'φ70×29mm'
            },
            {
                label: '通讯方式',
                value: '4G Cat.1通讯'
            },
            {
                label: '探测角度',
                value: '100°Az/100°El'
            }
        ]
    },
    '66': {
        name: '智能睡眠监测垫',
        category: '智慧康养系统',
        categoryLink: '/smart-aging-system',
        image: '/images/smart-aging/product66.jpg',
        params: [
            {
                label: '过压保护',
                value: '支持'
            },
            {
                label: '静电保护',
                value: '支持'
            },
            {
                label: '防尘防水',
                value: '不支持'
            }
        ]
    },
    '67': {
        name: 'AI语音紧急呼叫按钮',
        category: '智慧康养系统',
        categoryLink: '/smart-aging-system',
        image: '/images/smart-aging/product67.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '93×93×28mm'
            },
            {
                label: '通讯方式',
                value: 'Cat.1通讯'
            },
            {
                label: '外部供电',
                value: 'DC 5V/2A'
            }
        ]
    },
    '68': {
        name: '便携式检测一体机',
        category: '智慧康养系统',
        categoryLink: '/smart-aging-system',
        image: '/images/smart-aging/product68.jpg',
        params: [
            {
                label: '产品配置',
                value: '10.1寸健康一体机'
            },
            {
                label: '处理器',
                value: '高通八核64位'
            },
            {
                label: '可移动性',
                value: '便携式手提/背包设计'
            }
        ]
    },
    '69': {
        name: '水浸探测器',
        category: '智慧康养系统',
        categoryLink: '/smart-aging-system',
        image: '/images/smart-aging/product69.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '105×39.5×23mm'
            },
            {
                label: '感应距离',
                value: '20mm'
            },
            {
                label: '探头线长',
                value: '1米'
            }
        ]
    },
    '70': {
        name: '家用可燃气体探测器',
        category: '智慧康养系统',
        categoryLink: '/smart-aging-system',
        image: '/images/smart-aging/product70.jpg',
        params: [
            {
                label: '产品尺寸',
                value: 'φ104×31.7mm'
            },
            {
                label: '探测气体',
                value: '天然气（CH4）'
            },
            {
                label: '报警浓度',
                value: '8LEL±3LEL'
            }
        ]
    },
    // 智能照明系统产品 (71-78)
    '71': {
        name: 'KNX开关执行器',
        category: '智能照明系统',
        categoryLink: '/smart-lighting-system',
        image: '/images/smart-lighting/product71.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '72x90x63mm(4P)'
            },
            {
                label: '总线电压',
                value: '21-30V DC'
            },
            {
                label: '额定输出',
                value: '4路16A/20A'
            }
        ]
    },
    '72': {
        name: 'KNX开关执行器',
        category: '智能照明系统',
        categoryLink: '/smart-lighting-system',
        image: '/images/smart-lighting/product72.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '145x90x63mm(8P)'
            },
            {
                label: '总线电压',
                value: '21-30V DC'
            },
            {
                label: '额定输出',
                value: '8路16A/20A'
            }
        ]
    },
    '73': {
        name: 'KNX开关执行器',
        category: '智能照明系统',
        categoryLink: '/smart-lighting-system',
        image: '/images/smart-lighting/product73.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '218x90x63mm(12P)'
            },
            {
                label: '总线电压',
                value: '21-30V DC'
            },
            {
                label: '额定输出',
                value: '12路16A/20A'
            }
        ]
    },
    '74': {
        name: 'KNX总线电源(960MA)',
        category: '智能照明系统',
        categoryLink: '/smart-lighting-system',
        image: '/images/smart-lighting/product74.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '72x90x62mm(4P)'
            },
            {
                label: '输入电压',
                value: '200-240VAC'
            },
            {
                label: 'KNX/EIB输出',
                value: '29V DC'
            }
        ]
    },
    '75': {
        name: 'KNX智能面板(6键金属拉丝/喷砂可选)',
        category: '智能照明系统',
        categoryLink: '/smart-lighting-system',
        image: '/images/smart-lighting/product75.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '86x86x33mm'
            },
            {
                label: '总线电压',
                value: '21-30V DC'
            },
            {
                label: '总线功率',
                value: '<360mW'
            }
        ]
    },
    '76': {
        name: 'KNX传感器(移动/照度二合一)',
        category: '智能照明系统',
        categoryLink: '/smart-lighting-system',
        image: '/images/smart-lighting/product76.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '98.5x39.5(φ80mm)'
            },
            {
                label: '总线电压',
                value: '21-30V DC'
            },
            {
                label: '总线功率',
                value: '<360mW'
            }
        ]
    },
    '77': {
        name: 'KNX智能屏(4寸触摸屏)',
        category: '智能照明系统',
        categoryLink: '/smart-lighting-system',
        image: '/images/smart-lighting/product77.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '86x101.3x32.2mm'
            },
            {
                label: '总线电压',
                value: '21-30V DC'
            },
            {
                label: '总线功率',
                value: '<150mW'
            }
        ]
    },
    '78': {
        name: 'KNXIP接口网关',
        category: '智能照明系统',
        categoryLink: '/smart-lighting-system',
        image: '/images/smart-lighting/product78.jpg',
        params: [
            {
                label: '产品尺寸',
                value: '36x90x64mm(2P)'
            },
            {
                label: '总线电压',
                value: '21-30V DC'
            },
            {
                label: '总线功率',
                value: '<470mW'
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/config/product-names-i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 产品名称国际化映射
__turbopack_context__.s([
    "getCategoryName",
    ()=>getCategoryName,
    "getProductName",
    ()=>getProductName,
    "productCategoriesI18n",
    ()=>productCategoriesI18n,
    "productNamesI18n",
    ()=>productNamesI18n
]);
const productNamesI18n = {
    '10.1寸护士站管理机': {
        zh: '10.1寸护士站管理机',
        en: '10.1" Nurse Station Manager'
    },
    '15.6寸护士站管理机': {
        zh: '15.6寸护士站管理机',
        en: '15.6" Nurse Station Manager'
    },
    '网络多媒体控制器': {
        zh: '网络多媒体控制器',
        en: 'Network Multimedia Controller'
    },
    '55寸护士站交互大屏': {
        zh: '55寸护士站交互大屏',
        en: '55" Nurse Station Interactive Display'
    },
    '走廊显示屏(LED)': {
        zh: '走廊显示屏(LED)',
        en: 'Corridor Display (LED)'
    },
    '走廊显示屏(液晶)': {
        zh: '走廊显示屏(液晶)',
        en: 'Corridor Display (LCD)'
    },
    '7寸病区门口机': {
        zh: '7寸病区门口机',
        en: '7" Ward Door Station'
    },
    '10.1寸房间门口机(横)': {
        zh: '10.1寸房间门口机(横)',
        en: '10.1" Room Door Station (Horizontal)'
    },
    '7寸智能交互床头屏': {
        zh: '7寸智能交互床头屏',
        en: '7" Smart Interactive Bedside Screen'
    },
    '10.1寸智能交互床头屏': {
        zh: '10.1寸智能交互床头屏',
        en: '10.1" Smart Interactive Bedside Screen'
    },
    '10.1寸病房智能门口机(竖)': {
        zh: '10.1寸病房智能门口机(竖)',
        en: '10.1" Ward Door Station (Vertical)'
    },
    '15.6寸病房智能门口机': {
        zh: '15.6寸病房智能门口机',
        en: '15.6" Ward Smart Door Station'
    },
    '床头分机(无屏)': {
        zh: '床头分机(无屏)',
        en: 'Bedside Extension (No Screen)'
    },
    '卫生间紧急呼叫器': {
        zh: '卫生间紧急呼叫器',
        en: 'Bathroom Emergency Call Button'
    },
    '床头分机': {
        zh: '床头分机',
        en: 'Bedside Extension'
    },
    '厕所按钮': {
        zh: '厕所按钮',
        en: 'Toilet Call Button'
    },
    '门灯': {
        zh: '门灯',
        en: 'Door Light'
    },
    '走廊显示屏': {
        zh: '走廊显示屏',
        en: 'Corridor Display'
    },
    '信息管理主机': {
        zh: '信息管理主机',
        en: 'Information Management Host'
    },
    '无线呼叫器（床头）': {
        zh: '无线呼叫器（床头）',
        en: 'Wireless Call Button (Bedside)'
    },
    '无线呼叫器（拉绳）': {
        zh: '无线呼叫器（拉绳）',
        en: 'Wireless Call Button (Pull Cord)'
    },
    '门灯（无线语音报警）': {
        zh: '门灯（无线语音报警）',
        en: 'Door Light (Wireless Voice Alarm)'
    },
    '无线发射主机': {
        zh: '无线发射主机',
        en: 'Wireless Transmitter Host'
    },
    '无线联动主机': {
        zh: '无线联动主机',
        en: 'Wireless Linkage Host'
    },
    '走廊显示屏（无线）': {
        zh: '走廊显示屏（无线）',
        en: 'Corridor Display (Wireless)'
    },
    '数字显示屏（无线）': {
        zh: '数字显示屏（无线）',
        en: 'Digital Display (Wireless)'
    },
    '无线接收手表': {
        zh: '无线接收手表',
        en: 'Wireless Receiver Watch'
    },
    '无线增压器': {
        zh: '无线增压器',
        en: 'Wireless Signal Booster'
    },
    '床头分机（4G款基础版）': {
        zh: '床头分机（4G款基础版）',
        en: 'Bedside Extension (4G Basic)'
    },
    '信息管理主机（4G款）': {
        zh: '信息管理主机（4G款）',
        en: 'Information Management Host (4G)'
    },
    '无线呼叫器': {
        zh: '无线呼叫器',
        en: 'Wireless Call Button'
    },
    '无线接收机': {
        zh: '无线接收机',
        en: 'Wireless Receiver'
    },
    '15.6寸床头分机(病床探视)': {
        zh: '15.6寸床头分机(病床探视)',
        en: '15.6" Bedside Extension (Bedside Visit)'
    },
    '10.1寸床头分机(病床探视)': {
        zh: '10.1寸床头分机(病床探视)',
        en: '10.1" Bedside Extension (Bedside Visit)'
    },
    '支臂': {
        zh: '支臂',
        en: 'Support Arm'
    },
    '探视推车': {
        zh: '探视推车',
        en: 'Visit Cart'
    },
    'NTP电子时钟(单面)': {
        zh: 'NTP电子时钟(单面)',
        en: 'NTP Electronic Clock (Single-sided)'
    },
    'NTP电子时钟(双面)': {
        zh: 'NTP电子时钟(双面)',
        en: 'NTP Electronic Clock (Double-sided)'
    },
    'NTP时间服务器中心母钟': {
        zh: 'NTP时间服务器中心母钟',
        en: 'NTP Time Server Center Master Clock'
    },
    '19寸智能一体机': {
        zh: '19寸智能一体机',
        en: '19" Smart All-in-One'
    },
    '32寸智能一体机': {
        zh: '32寸智能一体机',
        en: '32" Smart All-in-One'
    },
    '22寸智能一体机（取号/触摸屏）': {
        zh: '22寸智能一体机（取号/触摸屏）',
        en: '22" Smart All-in-One (Number Dispenser/Touchscreen)'
    },
    '22寸智能一体机（打印/触摸屏）': {
        zh: '22寸智能一体机（打印/触摸屏）',
        en: '22" Smart All-in-One (Printer/Touchscreen)'
    },
    '10寸呼叫机（触摸屏）': {
        zh: '10寸呼叫机（触摸屏）',
        en: '10" Call Machine (Touchscreen)'
    },
    '窗口对讲呼叫机': {
        zh: '窗口对讲呼叫机',
        en: 'Window Intercom Call Machine'
    },
    '43寸智能一体机(立式)': {
        zh: '43寸智能一体机(立式)',
        en: '43" Smart All-in-One (Vertical)'
    },
    '43寸智能一体机(卧式)': {
        zh: '43寸智能一体机(卧式)',
        en: '43" Smart All-in-One (Horizontal)'
    },
    '定位胸牌': {
        zh: '定位胸牌',
        en: 'Positioning Badge'
    },
    '智能手环': {
        zh: '智能手环',
        en: 'Smart Bracelet'
    },
    '毫米跌倒雷达波': {
        zh: '毫米跌倒雷达波',
        en: 'Millimeter Wave Fall Detection Radar'
    },
    '智能睡眠监测垫': {
        zh: '智能睡眠监测垫',
        en: 'Smart Sleep Monitoring Pad'
    },
    'AI语音紧急呼叫按钮': {
        zh: 'AI语音紧急呼叫按钮',
        en: 'AI Voice Emergency Call Button'
    },
    '便携式检测一体机': {
        zh: '便携式检测一体机',
        en: 'Portable Detection All-in-One'
    },
    '水浸探测器': {
        zh: '水浸探测器',
        en: 'Water Leak Detector'
    },
    '家用可燃气体探测器': {
        zh: '家用可燃气体探测器',
        en: 'Home Combustible Gas Detector'
    },
    'KNX开关执行器': {
        zh: 'KNX开关执行器',
        en: 'KNX Switch Actuator'
    },
    'KNX总线电源(960MA)': {
        zh: 'KNX总线电源(960MA)',
        en: 'KNX Bus Power Supply (960MA)'
    },
    'KNX智能面板(6键金属拉丝/喷砂可选)': {
        zh: 'KNX智能面板(6键金属拉丝/喷砂可选)',
        en: 'KNX Smart Panel (6-key Brushed/Sandblasted Metal)'
    },
    'KNX传感器(移动/照度二合一)': {
        zh: 'KNX传感器(移动/照度二合一)',
        en: 'KNX Sensor (Motion/Light 2-in-1)'
    },
    'KNX智能屏(4寸触摸屏)': {
        zh: 'KNX智能屏(4寸触摸屏)',
        en: 'KNX Smart Screen (4" Touchscreen)'
    },
    'KNXIP接口网关': {
        zh: 'KNXIP接口网关',
        en: 'KNX IP Interface Gateway'
    }
};
const productCategoriesI18n = {
    '数字医护对讲系统': {
        zh: '数字医护对讲系统',
        en: 'Digital Medical Intercom System'
    },
    '医护对讲系统': {
        zh: '医护对讲系统',
        en: 'Medical Intercom System'
    },
    '无线呼叫系统': {
        zh: '无线呼叫系统',
        en: 'Wireless Call System'
    },
    '无线输液呼叫系统': {
        zh: '无线输液呼叫系统',
        en: 'Wireless Infusion Call System'
    },
    'ICU探视对讲系统': {
        zh: 'ICU探视对讲系统',
        en: 'ICU Visit Intercom System'
    },
    '数字时钟系统': {
        zh: '数字时钟系统',
        en: 'Digital Clock System'
    },
    '排队叫号系统': {
        zh: '排队叫号系统',
        en: 'Queuing System'
    },
    '信息发布系统': {
        zh: '信息发布系统',
        en: 'Information Display System'
    },
    '智慧康养系统': {
        zh: '智慧康养系统',
        en: 'Smart Aging Care System'
    },
    '智能照明系统': {
        zh: '智能照明系统',
        en: 'Smart Lighting System'
    }
};
function getProductName(name, language) {
    const translation = productNamesI18n[name];
    if (!translation) return name;
    return language === 'en' ? translation.en : translation.zh;
}
function getCategoryName(category, language) {
    const translation = productCategoriesI18n[category];
    if (!translation) return category;
    return language === 'en' ? translation.en : translation.zh;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/site-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$product$2d$details$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/product-details-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$product$2d$names$2d$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/product-names-i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Header() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredMenu, setHoveredMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredDropdownItem, setHoveredDropdownItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openMobileMenu, setOpenMobileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { language, setLanguage, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    // 滚动处理
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    // Header 滚动效果
                    if (window.scrollY > 50) {
                        setIsScrolled(true);
                    } else {
                        setIsScrolled(false);
                    }
                    // 导航高亮
                    const sections = document.querySelectorAll('section[id]');
                    let current = "";
                    sections.forEach({
                        "Header.useEffect.handleScroll": (section)=>{
                            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - 100;
                            const sectionHeight = section.clientHeight;
                            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                                current = section.getAttribute('id') || "";
                            }
                        }
                    }["Header.useEffect.handleScroll"]);
                    setActiveSection(current);
                }
            }["Header.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener('scroll', handleScroll);
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    // 获取当前语言的导航配置
    const navigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigationConfig"])(language);
    // 平滑滚动
    const handleSmoothScroll = (e, href)=>{
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            if (!targetId) return;
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                // 关闭移动端菜单
                setIsMenuOpen(false);
                setOpenMobileMenu(null);
                // 添加滚动动画
                setTimeout(()=>{
                    targetElement.classList.add('scroll-animation');
                }, 100);
            }
        }
    };
    // 响应式处理
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleResize = {
                "Header.useEffect.handleResize": ()=>{
                    if (window.innerWidth > 768) {
                        setIsMenuOpen(false);
                        setOpenMobileMenu(null);
                    }
                }
            }["Header.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "Header.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    // 点击外部关闭搜索框
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleClickOutside = {
                "Header.useEffect.handleClickOutside": (e)=>{
                    const target = e.target;
                    if (isSearchOpen && !target.closest('.search-container')) {
                        setIsSearchOpen(false);
                        setSearchQuery('');
                    }
                }
            }["Header.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "Header.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        isSearchOpen
    ]);
    // 移动端菜单切换
    const toggleMobileMenu = (label)=>{
        setOpenMobileMenu(openMobileMenu === label ? null : label);
    };
    // 简单搜索功能 - 搜索所有产品
    const searchResults = searchQuery.trim() ? Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$product$2d$details$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productDetailsData"]).map(([id, product])=>({
            id,
            name: product.name,
            translatedName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$product$2d$names$2d$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductName"])(product.name, language),
            category: product.category,
            href: `/product/${id}`
        })).filter((product)=>{
        const query = searchQuery.toLowerCase();
        return product.name.toLowerCase().includes(query) || product.translatedName.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
    }).slice(0, 8) // 最多显示8个结果
     : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            backgroundColor: '#051b33'
        },
        className: "jsx-3cc03aa0ceaae566" + " " + `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3cc03aa0ceaae566" + " " + "container mx-auto px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3cc03aa0ceaae566" + " " + "flex items-center justify-between h-[78px] relative px-4 max-[1200px]:px-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginLeft: '-40px',
                                    marginRight: language === 'en' ? '-100px' : 'auto'
                                },
                                className: "jsx-3cc03aa0ceaae566" + " " + "flex items-center flex-shrink-0 logo-container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:opacity-80 transition-opacity",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: language === 'en' ? '/images/logo/logo-EN.png' : '/images/logo/logo-CN.png',
                                        alt: language === 'en' ? 'Deshian' : '德视安',
                                        width: 224,
                                        height: 56,
                                        className: "object-contain align-middle",
                                        style: {
                                            maxHeight: '56px',
                                            maxWidth: '224px',
                                            width: 'auto',
                                            height: 'auto'
                                        },
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/header.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/header.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/header.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                style: {
                                    margin: '0 20px'
                                },
                                className: "jsx-3cc03aa0ceaae566" + " " + "hidden min-[1200px]:flex flex-1 justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "jsx-3cc03aa0ceaae566" + " " + "flex items-center gap-[15px] m-0 p-0 list-none whitespace-nowrap flex-nowrap",
                                    children: navigation.map((item)=>{
                                        const isActive = item.href && (item.href === '/' && activeSection === '' || item.href === `#${activeSection}`);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            onMouseEnter: ()=>setHoveredMenu(item.label),
                                            onMouseLeave: ()=>setHoveredMenu(null),
                                            className: "jsx-3cc03aa0ceaae566" + " " + "relative",
                                            children: [
                                                item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    onClick: (e)=>handleSmoothScroll(e, item.href),
                                                    className: `flex items-center px-[15px] py-[10px] text-white font-medium no-underline transition-colors duration-300 relative ${isActive ? 'text-[#0066cc]' : 'hover:text-[#0066cc]'}`,
                                                    style: {
                                                        fontSize: language === 'en' ? '20px' : '16px'
                                                    },
                                                    children: [
                                                        item.label,
                                                        item.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            style: {
                                                                transform: hoveredMenu === item.label ? 'rotate(180deg)' : 'rotate(0deg)'
                                                            },
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            className: "jsx-3cc03aa0ceaae566" + " " + "ml-[5px] w-3 h-3 transition-transform duration-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                                className: "jsx-3cc03aa0ceaae566"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/header.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/header.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 27
                                                        }, this),
                                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: 'calc(100% - 30px)'
                                                            },
                                                            className: "jsx-3cc03aa0ceaae566" + " " + "absolute left-[15px] bottom-0 h-[2px] bg-[#0066cc]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/header.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/header.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    style: {
                                                        fontSize: language === 'en' ? '20px' : '16px'
                                                    },
                                                    className: "jsx-3cc03aa0ceaae566" + " " + "flex items-center px-[15px] py-[10px] text-white font-medium transition-colors duration-300 relative hover:text-[#0066cc] bg-transparent border-none cursor-pointer",
                                                    children: [
                                                        item.label,
                                                        item.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            style: {
                                                                transform: hoveredMenu === item.label ? 'rotate(180deg)' : 'rotate(0deg)'
                                                            },
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            className: "jsx-3cc03aa0ceaae566" + " " + "ml-[5px] w-3 h-3 transition-transform duration-300",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                                className: "jsx-3cc03aa0ceaae566"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/header.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/header.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/header.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 23
                                                }, this),
                                                item.children && hoveredMenu === item.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        opacity: 1,
                                                        visibility: 'visible',
                                                        transform: 'translateY(0)',
                                                        transition: 'all 0.3s ease'
                                                    },
                                                    className: "jsx-3cc03aa0ceaae566" + " " + "absolute left-0 top-full pt-2 min-w-[250px] z-[1001]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            maxHeight: '400px',
                                                            overflowY: 'auto'
                                                        },
                                                        className: "jsx-3cc03aa0ceaae566" + " " + "bg-white rounded shadow-lg border border-[#e0e0e0] py-0 px-0",
                                                        children: item.children.map((group, groupIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-3cc03aa0ceaae566",
                                                                children: [
                                                                    group.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-3cc03aa0ceaae566" + " " + "px-5 py-2 text-xs font-semibold text-gray-500 uppercase",
                                                                        children: group.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layout/header.tsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    group.items.map((subItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: subItem.href,
                                                                            onClick: (e)=>handleSmoothScroll(e, subItem.href),
                                                                            className: "block px-5 py-3 text-[14px] text-black no-underline font-normal transition-all duration-300 border-b border-[#e0e0e0] last:border-b-0 hover:text-[#0066cc] relative",
                                                                            style: {
                                                                                paddingLeft: '20px',
                                                                                transform: hoveredDropdownItem === subItem.href ? 'translateY(2px)' : 'translateY(0)'
                                                                            },
                                                                            onMouseEnter: ()=>setHoveredDropdownItem(subItem.href),
                                                                            onMouseLeave: ()=>setHoveredDropdownItem(null),
                                                                            children: [
                                                                                subItem.label,
                                                                                hoveredDropdownItem === subItem.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "jsx-3cc03aa0ceaae566" + " " + "absolute left-0 top-0 bottom-0 w-[4px] h-full bg-[#0066cc] z-[1]"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layout/header.tsx",
                                                                                    lineNumber: 274,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, subItem.href, true, {
                                                                            fileName: "[project]/components/layout/header.tsx",
                                                                            lineNumber: 260,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                ]
                                                            }, groupIndex, true, {
                                                                fileName: "[project]/components/layout/header.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 29
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/header.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/header.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, item.label, true, {
                                            fileName: "[project]/components/layout/header.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/header.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/header.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3cc03aa0ceaae566" + " " + "hidden min-[1200px]:block mr-[15px] relative search-container",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: {
                                            fontSize: '20px',
                                            transform: 'scale(1.7)'
                                        },
                                        "aria-label": t('common.search'),
                                        onClick: ()=>setIsSearchOpen(!isSearchOpen),
                                        className: "jsx-3cc03aa0ceaae566" + " " + "p-2.5 bg-transparent border-none cursor-pointer text-white transition-all duration-300 hover:text-[#0066cc]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            className: "jsx-3cc03aa0ceaae566" + " " + "w-4 h-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                                                className: "jsx-3cc03aa0ceaae566"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/header.tsx",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/header.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/header.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this),
                                    isSearchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                                        },
                                        className: "jsx-3cc03aa0ceaae566" + " " + "absolute right-0 mt-2 w-[400px] bg-white rounded-lg shadow-xl z-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3cc03aa0ceaae566" + " " + "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: t('common.search') + '...',
                                                    value: searchQuery,
                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                    autoFocus: true,
                                                    className: "jsx-3cc03aa0ceaae566" + " " + "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0066cc]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/header.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/header.tsx",
                                                lineNumber: 310,
                                                columnNumber: 17
                                            }, this),
                                            searchQuery.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3cc03aa0ceaae566" + " " + "max-h-[400px] overflow-y-auto",
                                                children: searchResults.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-3cc03aa0ceaae566" + " " + "py-2",
                                                    children: searchResults.map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: result.href,
                                                            onClick: ()=>{
                                                                setIsSearchOpen(false);
                                                                setSearchQuery('');
                                                            },
                                                            className: "block px-4 py-3 hover:bg-gray-100 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-3cc03aa0ceaae566" + " " + "text-sm font-medium text-gray-900",
                                                                    children: result.translatedName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/header.tsx",
                                                                    lineNumber: 335,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-3cc03aa0ceaae566" + " " + "text-xs text-gray-500 mt-1",
                                                                    children: result.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/header.tsx",
                                                                    lineNumber: 338,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, result.id, true, {
                                                            fileName: "[project]/components/layout/header.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/header.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-3cc03aa0ceaae566" + " " + "px-4 py-8 text-center text-gray-500",
                                                    children: t('common.noResults') || '没有找到结果'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/header.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/header.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this),
                                            !searchQuery.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3cc03aa0ceaae566" + " " + "px-4 py-8 text-center text-gray-400 text-sm",
                                                children: t('common.searchPlaceholder') || '输入关键词搜索产品...'
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/header.tsx",
                                                lineNumber: 353,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/header.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/header.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3cc03aa0ceaae566" + " " + "hidden min-[1200px]:flex items-center ml-[15px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLanguage('zh'),
                                        style: {
                                            padding: '5px 4px',
                                            fontSize: language === 'zh' ? '18px' : '21px'
                                        },
                                        className: "jsx-3cc03aa0ceaae566" + " " + `inline-block bg-transparent border-none cursor-pointer no-underline font-medium transition-colors duration-300 hover:text-[#0066cc] ${language === 'zh' ? 'text-[#0066cc]' : 'text-white'}`,
                                        children: "中文"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/header.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            margin: '0 2px',
                                            fontSize: language === 'zh' ? '18px' : '21px'
                                        },
                                        className: "jsx-3cc03aa0ceaae566" + " " + "text-white",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/header.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setLanguage('en'),
                                        style: {
                                            padding: '5px 4px',
                                            fontSize: language === 'zh' ? '18px' : '21px'
                                        },
                                        className: "jsx-3cc03aa0ceaae566" + " " + `inline-block bg-transparent border-none cursor-pointer no-underline font-medium transition-colors duration-300 hover:text-[#0066cc] ${language === 'en' ? 'text-[#0066cc]' : 'text-white'}`,
                                        children: "EN"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/header.tsx",
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/header.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                "aria-label": "菜单",
                                style: {
                                    position: 'relative'
                                },
                                className: "jsx-3cc03aa0ceaae566" + " " + `block p-2.5 bg-transparent border-none outline-none cursor-pointer z-[1002] ${isMenuOpen ? 'active' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-3cc03aa0ceaae566" + " " + `block w-[25px] h-[3px] my-[5px] mx-auto bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/header.tsx",
                                        lineNumber: 391,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-3cc03aa0ceaae566" + " " + `block w-[25px] h-[3px] my-[5px] mx-auto bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/header.tsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-3cc03aa0ceaae566" + " " + `block w-[25px] h-[3px] my-[5px] mx-auto bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/header.tsx",
                                        lineNumber: 393,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/header.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/header.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3cc03aa0ceaae566" + " " + "max-[1200px]:block hidden fixed left-0 top-[78px] w-4/5 h-screen bg-white shadow-sm z-[1001] overflow-y-auto pt-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "jsx-3cc03aa0ceaae566",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "jsx-3cc03aa0ceaae566" + " " + "flex flex-col w-full m-0 p-0 list-none",
                                    children: navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "jsx-3cc03aa0ceaae566" + " " + "m-0 border-b border-[#e0e0e0]",
                                            children: item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                onClick: (e)=>{
                                                    handleSmoothScroll(e, item.href);
                                                    setIsMenuOpen(false);
                                                },
                                                className: "block py-4 px-0 text-black no-underline text-center",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/header.tsx",
                                                lineNumber: 405,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>toggleMobileMenu(item.label),
                                                        className: "jsx-3cc03aa0ceaae566" + " " + "w-full py-4 px-0 text-black bg-transparent border-none cursor-pointer text-center flex items-center justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-3cc03aa0ceaae566",
                                                                children: item.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/header.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                style: {
                                                                    transform: openMobileMenu === item.label ? 'rotate(180deg)' : 'rotate(0deg)'
                                                                },
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                className: "jsx-3cc03aa0ceaae566" + " " + "ml-2 w-4 h-4 transition-transform duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                                    className: "jsx-3cc03aa0ceaae566"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/header.tsx",
                                                                    lineNumber: 428,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/header.tsx",
                                                                lineNumber: 422,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/layout/header.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 25
                                                    }, this),
                                                    openMobileMenu === item.label && item.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3cc03aa0ceaae566" + " " + "block w-full min-w-full p-0 m-0 bg-white border border-[#e0e0e0] shadow-sm",
                                                        children: item.children.map((group, groupIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-3cc03aa0ceaae566",
                                                                children: [
                                                                    group.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-3cc03aa0ceaae566" + " " + "px-4 py-2 text-xs font-semibold text-gray-500 uppercase",
                                                                        children: group.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layout/header.tsx",
                                                                        lineNumber: 436,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    group.items.map((subItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: subItem.href,
                                                                            onClick: (e)=>{
                                                                                handleSmoothScroll(e, subItem.href);
                                                                                setIsMenuOpen(false);
                                                                                setOpenMobileMenu(null);
                                                                            },
                                                                            className: "block px-4 py-3 text-[14px] text-black no-underline border-b border-[#e0e0e0] hover:text-[#ff6b35] hover:bg-[#f5f5f5] relative",
                                                                            children: [
                                                                                subItem.label,
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "jsx-3cc03aa0ceaae566" + " " + "absolute right-4 top-1/2 -translate-y-1/2 text-black text-xs font-bold",
                                                                                    children: '>'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/layout/header.tsx",
                                                                                    lineNumber: 452,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, subItem.href, true, {
                                                                            fileName: "[project]/components/layout/header.tsx",
                                                                            lineNumber: 441,
                                                                            columnNumber: 35
                                                                        }, this))
                                                                ]
                                                            }, groupIndex, true, {
                                                                fileName: "[project]/components/layout/header.tsx",
                                                                lineNumber: 434,
                                                                columnNumber: 31
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/header.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, item.label, false, {
                                            fileName: "[project]/components/layout/header.tsx",
                                            lineNumber: 403,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/header.tsx",
                                    lineNumber: 401,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3cc03aa0ceaae566" + " " + "flex items-center justify-center py-6 border-t border-[#e0e0e0] mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setLanguage('zh');
                                                setIsMenuOpen(false);
                                            },
                                            className: "jsx-3cc03aa0ceaae566" + " " + `px-4 py-2 text-base font-medium transition-colors duration-300 ${language === 'zh' ? 'text-[#0066cc]' : 'text-gray-600'}`,
                                            children: "中文"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/header.tsx",
                                            lineNumber: 467,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3cc03aa0ceaae566" + " " + "text-gray-400 mx-2",
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/header.tsx",
                                            lineNumber: 478,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setLanguage('en');
                                                setIsMenuOpen(false);
                                            },
                                            className: "jsx-3cc03aa0ceaae566" + " " + `px-4 py-2 text-base font-medium transition-colors duration-300 ${language === 'en' ? 'text-[#0066cc]' : 'text-gray-600'}`,
                                            children: "EN"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/header.tsx",
                                            lineNumber: 479,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/header.tsx",
                                    lineNumber: 466,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/header.tsx",
                            lineNumber: 400,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/header.tsx",
                        lineNumber: 399,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/header.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "3cc03aa0ceaae566",
                children: ".scroll-animation{animation:.5s pulse}@keyframes pulse{0%{transform:scale(1)}50%{transform:scale(1.02)}to{transform:scale(1)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/header.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_s(Header, "bVlsovzGqiRqXUw7j58IvlGLJOg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/site-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Footer() {
    _s();
    const { companyInfo, copyright } = __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].footer;
    const { t, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative overflow-hidden text-white pt-12 pb-5",
        style: {
            backgroundColor: '#051b33'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-[3px]",
                style: {
                    background: 'linear-gradient(90deg, #0066cc, #00a8e8)'
                }
            }, void 0, false, {
                fileName: "[project]/components/layout/footer.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-white text-xl mb-5 pb-2.5 font-semibold relative",
                            children: [
                                t('common.contactUs'),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute bottom-0 left-0 w-[50px] h-[3px]",
                                    style: {
                                        backgroundColor: '#0066cc'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/footer.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 flex items-start text-sm leading-relaxed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 mr-3 mt-0.5 flex-shrink-0",
                                            style: {
                                                color: '#0066cc'
                                            },
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/footer.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/footer.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        t('footer.productionCenter')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 flex items-start text-sm leading-relaxed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 mr-3 mt-0.5 flex-shrink-0",
                                            style: {
                                                color: '#0066cc'
                                            },
                                            fill: "currentColor",
                                            viewBox: "0  0 20 20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/footer.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/footer.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        t('footer.salesCenter')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 flex items-start text-sm leading-relaxed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 mr-3 mt-0.5 flex-shrink-0",
                                            style: {
                                                color: '#0066cc'
                                            },
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/footer.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/footer.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        t('footer.phone'),
                                        language === 'zh' ? '：' : ':',
                                        " ",
                                        companyInfo.phone
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/footer.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/footer.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/footer.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/footer.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mt-10 pt-5 min-h-[80px] flex items-center justify-center",
                style: {
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-[13px] text-gray-400 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "m-0",
                            children: [
                                t('footer.copyright'),
                                " ",
                                t('footer.allRightsReserved')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/footer.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        language === 'zh' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "m-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://beian.miit.gov.cn/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-gray-400 hover:text-white transition-colors duration-300",
                                children: t('footer.icpNumber')
                            }, void 0, false, {
                                fileName: "[project]/components/layout/footer.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/footer.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/footer.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/footer.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/footer.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Footer, "t5dlNeYFVJWhLlLy3xB1IAoIKPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/back-to-top.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackToTop",
    ()=>BackToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BackToTop() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackToTop.useEffect": ()=>{
            const handleScroll = {
                "BackToTop.useEffect.handleScroll": ()=>{
                    if (window.scrollY > 50) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                }
            }["BackToTop.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "BackToTop.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["BackToTop.useEffect"];
        }
    }["BackToTop.useEffect"], []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: scrollToTop,
        className: `fixed bottom-[30px] right-[30px] w-[50px] h-[50px] rounded-full border-none cursor-pointer flex items-center justify-center transition-all duration-300 z-[9999] ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`,
        style: {
            backgroundColor: '#0066cc',
            color: 'white',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
        },
        onMouseEnter: (e)=>{
            e.currentTarget.style.backgroundColor = '#00a8e8';
            e.currentTarget.style.transform = 'translateY(-3px)';
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.backgroundColor = '#0066cc';
            e.currentTarget.style.transform = 'translateY(0)';
        },
        "aria-label": t('common.backToTop'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "[project]/components/ui/back-to-top.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/back-to-top.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/back-to-top.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(BackToTop, "CIv8RSLniwuHPxS2hPNUPQMAegA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = BackToTop;
var _c;
__turbopack_context__.k.register(_c, "BackToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-page-title.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePageTitle",
    ()=>usePageTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n-context.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function usePageTitle(titles) {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePageTitle.useEffect": ()=>{
            const title = language === 'en' ? titles.en : titles.zh;
            document.title = title;
        }
    }["usePageTitle.useEffect"], [
        language,
        titles.en,
        titles.zh
    ]);
}
_s(usePageTitle, "7toFWyOUkIiQc1OazChaBBQD/6w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/smart-community/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmartCommunityPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$back$2d$to$2d$top$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/back-to-top.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$page$2d$title$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-page-title.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/site-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function SmartCommunityPage() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    // 动态页面标题
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$page$2d$title$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageTitle"])({
        zh: '智慧社区解决方案 - 德视安科技',
        en: 'Smart Community Solution - Deshian Technology'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/app/smart-community/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "w-full",
                style: {
                    marginTop: '78px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative w-full",
                        style: {
                            background: `linear-gradient(135deg, #0066cc 0%, #003366 100%),
                      linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
                            backgroundSize: '100% 100%, 30px 30px, 30px 30px',
                            padding: '80px 0',
                            color: 'white',
                            textAlign: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontSize: '3rem',
                                        marginTop: '0',
                                        marginBottom: '20px',
                                        fontWeight: 'bold'
                                    },
                                    children: t('smartCommunity.title')
                                }, void 0, false, {
                                    fileName: "[project]/app/smart-community/page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '1.2rem',
                                        maxWidth: '800px',
                                        margin: '0 auto'
                                    },
                                    children: t('smartCommunity.hero')
                                }, void 0, false, {
                                    fileName: "[project]/app/smart-community/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/smart-community/page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/smart-community/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-[60px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row items-center gap-10 mb-[60px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-[2rem] mb-[20px]",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground,
                                                        fontWeight: 600
                                                    },
                                                    children: t('smartCommunity.overview')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-[15px] text-[16px] leading-[1.8]",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.textSecondary
                                                    },
                                                    children: t('smartCommunity.overview1')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-[15px] text-[16px] leading-[1.8]",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.textSecondary
                                                    },
                                                    children: t('smartCommunity.overview2')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/smart-community/page.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/solution/solution3/solution3.webp",
                                                alt: t('smartCommunity.title'),
                                                width: 600,
                                                height: 400,
                                                className: "rounded-lg shadow-lg w-full",
                                                style: {
                                                    opacity: 0.7
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/smart-community/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/smart-community/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/smart-community/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-[60px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-center text-[2rem] mb-[40px]",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground,
                                                fontWeight: 600
                                            },
                                            children: t('smartCommunity.features')
                                        }, void 0, false, {
                                            fileName: "[project]/app/smart-community/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]",
                                                    style: {
                                                        backgroundColor: '#f9f9f9'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-door-open mb-[20px] block",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.primary,
                                                                fontSize: '2.5rem'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-[1.5rem] mb-[15px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground
                                                            },
                                                            children: t('smartCommunity.feature1Title')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.textSecondary,
                                                                lineHeight: '1.6'
                                                            },
                                                            children: t('smartCommunity.feature1Desc')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]",
                                                    style: {
                                                        backgroundColor: '#f9f9f9'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-video mb-[20px] block",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.primary,
                                                                fontSize: '2.5rem'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-[1.5rem] mb-[15px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground
                                                            },
                                                            children: t('smartCommunity.feature2Title')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.textSecondary,
                                                                lineHeight: '1.6'
                                                            },
                                                            children: t('smartCommunity.feature2Desc')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]",
                                                    style: {
                                                        backgroundColor: '#f9f9f9'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-home mb-[20px] block",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.primary,
                                                                fontSize: '2.5rem'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-[1.5rem] mb-[15px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground
                                                            },
                                                            children: t('smartCommunity.feature3Title')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.textSecondary,
                                                                lineHeight: '1.6'
                                                            },
                                                            children: t('smartCommunity.feature3Desc')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]",
                                                    style: {
                                                        backgroundColor: '#f9f9f9'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-shield-alt mb-[20px] block",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.primary,
                                                                fontSize: '2.5rem'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-[1.5rem] mb-[15px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground
                                                            },
                                                            children: t('smartCommunity.feature4Title')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.textSecondary,
                                                                lineHeight: '1.6'
                                                            },
                                                            children: t('smartCommunity.feature4Desc')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]",
                                                    style: {
                                                        backgroundColor: '#f9f9f9'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-car mb-[20px] block",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.primary,
                                                                fontSize: '2.5rem'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-[1.5rem] mb-[15px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground
                                                            },
                                                            children: t('smartCommunity.feature5Title')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.textSecondary,
                                                                lineHeight: '1.6'
                                                            },
                                                            children: t('smartCommunity.feature5Desc')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]",
                                                    style: {
                                                        backgroundColor: '#f9f9f9'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-bullhorn mb-[20px] block",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.primary,
                                                                fontSize: '2.5rem'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-[1.5rem] mb-[15px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground
                                                            },
                                                            children: t('smartCommunity.feature6Title')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.textSecondary,
                                                                lineHeight: '1.6'
                                                            },
                                                            children: t('smartCommunity.feature6Desc')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]",
                                                    style: {
                                                        backgroundColor: '#f9f9f9'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-bell mb-[20px] block",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.primary,
                                                                fontSize: '2.5rem'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-[1.5rem] mb-[15px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground
                                                            },
                                                            children: t('smartCommunity.feature7Title')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.textSecondary,
                                                                lineHeight: '1.6'
                                                            },
                                                            children: t('smartCommunity.feature7Desc')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]",
                                                    style: {
                                                        backgroundColor: '#f9f9f9'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-chart-line mb-[20px] block",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.primary,
                                                                fontSize: '2.5rem'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-[1.5rem] mb-[15px]",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground
                                                            },
                                                            children: t('smartCommunity.feature8Title')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.textSecondary,
                                                                lineHeight: '1.6'
                                                            },
                                                            children: t('smartCommunity.feature8Desc')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/smart-community/page.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/smart-community/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/smart-community/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/smart-community/page.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/smart-community/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-[60px]",
                        style: {
                            backgroundColor: '#f9f9f9'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-center text-[2rem] mb-[40px]",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground,
                                        fontWeight: 600
                                    },
                                    children: t('smartCommunity.advantages')
                                }, void 0, false, {
                                    fileName: "[project]/app/smart-community/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "advantage-list list-none p-0 flex-grow",
                                                children: [
                                                    1,
                                                    2,
                                                    3
                                                ].map((index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "py-[15px] border-b flex items-start",
                                                        style: {
                                                            borderColor: '#e0e0e0'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                className: "w-5 h-5 mr-[15px] mt-[5px] flex-shrink-0",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.primary
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/smart-community/page.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    flex: 1
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        style: {
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground
                                                                        },
                                                                        children: t(`smartCommunity.adv${index}Title`)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/smart-community/page.tsx",
                                                                        lineNumber: 126,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-[5px]",
                                                                        style: {
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.textSecondary
                                                                        },
                                                                        children: t(`smartCommunity.adv${index}Desc`)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/smart-community/page.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/smart-community/page.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/smart-community/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/smart-community/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/smart-community/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "advantage-list list-none p-0 flex-grow",
                                                children: [
                                                    4,
                                                    5,
                                                    6
                                                ].map((index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "py-[15px] border-b flex items-start",
                                                        style: {
                                                            borderColor: '#e0e0e0'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                className: "w-5 h-5 mr-[15px] mt-[5px] flex-shrink-0",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.primary
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/smart-community/page.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    flex: 1
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        style: {
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground
                                                                        },
                                                                        children: t(`smartCommunity.adv${index}Title`)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/smart-community/page.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-[5px]",
                                                                        style: {
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.textSecondary
                                                                        },
                                                                        children: t(`smartCommunity.adv${index}Desc`)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/smart-community/page.tsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/smart-community/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/smart-community/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/smart-community/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/smart-community/page.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/smart-community/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/smart-community/page.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/smart-community/page.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-[60px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-center text-[2rem] mb-[40px]",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground,
                                        fontWeight: 600
                                    },
                                    children: t('smartCommunity.applications')
                                }, void 0, false, {
                                    fileName: "[project]/app/smart-community/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/solution/solution3/gdzz.jpg",
                                                    alt: t('smartCommunity.app1'),
                                                    width: 300,
                                                    height: 200,
                                                    className: "rounded-[8px] mb-[15px] w-full",
                                                    style: {
                                                        height: '200px',
                                                        objectFit: 'cover'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground,
                                                        fontWeight: 'normal'
                                                    },
                                                    children: t('smartCommunity.app1')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/smart-community/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/solution/solution3/syzh.jpg",
                                                    alt: t('smartCommunity.app2'),
                                                    width: 300,
                                                    height: 200,
                                                    className: "rounded-[8px] mb-[15px] w-full",
                                                    style: {
                                                        height: '200px',
                                                        objectFit: 'cover'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground,
                                                        fontWeight: 'normal'
                                                    },
                                                    children: t('smartCommunity.app2')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/smart-community/page.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/solution/solution3/ljgz.jpg",
                                                    alt: t('smartCommunity.app3'),
                                                    width: 300,
                                                    height: 200,
                                                    className: "rounded-[8px] mb-[15px] w-full",
                                                    style: {
                                                        height: '200px',
                                                        objectFit: 'cover'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground,
                                                        fontWeight: 'normal'
                                                    },
                                                    children: t('smartCommunity.app3')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/smart-community/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/solution/solution3/cyyq.jpg",
                                                    alt: t('smartCommunity.app4'),
                                                    width: 300,
                                                    height: 200,
                                                    className: "rounded-[8px] mb-[15px] w-full",
                                                    style: {
                                                        height: '200px',
                                                        objectFit: 'cover'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].colors.foreground,
                                                        fontWeight: 'normal'
                                                    },
                                                    children: t('smartCommunity.app4')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/smart-community/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/smart-community/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/smart-community/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/smart-community/page.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/smart-community/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-[60px] text-center",
                        style: {
                            backgroundColor: '#f5f5f5'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-[20px]",
                                    style: {
                                        color: '#333'
                                    },
                                    children: t('smartCommunity.contactTitle')
                                }, void 0, false, {
                                    fileName: "[project]/app/smart-community/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-[30px]",
                                    style: {
                                        color: '#666'
                                    },
                                    children: t('smartCommunity.contactDesc')
                                }, void 0, false, {
                                    fileName: "[project]/app/smart-community/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/smart-community/page.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/smart-community/page.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/smart-community/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/app/smart-community/page.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$back$2d$to$2d$top$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackToTop"], {}, void 0, false, {
                fileName: "[project]/app/smart-community/page.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SmartCommunityPage, "tZj7ioJ9H74hQz6mcW6norbdGUQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$page$2d$title$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageTitle"]
    ];
});
_c = SmartCommunityPage;
var _c;
__turbopack_context__.k.register(_c, "SmartCommunityPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_10fc64d4._.js.map