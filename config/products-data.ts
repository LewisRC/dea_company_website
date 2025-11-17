// 产品数据配置
export interface ProductItem {
  id: number;
  name: string;
  image: string;
  href: string;
}

// 数字医护对讲系统产品
export const digitalMedicalProducts: ProductItem[] = [
  { id: 1, name: "10.1寸护士站管理机", image: "/images/medical/product1.jpg", href: "/product/1" },
  { id: 2, name: "15.6寸护士站管理机", image: "/images/medical/product2.jpg", href: "/product/2" },
  { id: 3, name: "网络多媒体控制器", image: "/images/medical/product3.jpg", href: "/product/3" },
  { id: 4, name: "55寸护士站交互大屏", image: "/images/medical/product4.jpg", href: "/product/4" },
  { id: 5, name: "走廊显示屏(LED)", image: "/images/medical/product5.jpg", href: "/product/5" },
  { id: 6, name: "走廊显示屏(液晶)", image: "/images/medical/product6.jpg", href: "/product/6" },
  { id: 7, name: "7寸病区门口机", image: "/images/medical/product7.jpg", href: "/product/7" },
  { id: 8, name: "10.1寸房间门口机(横)", image: "/images/medical/product8.jpg", href: "/product/8" },
  { id: 9, name: "7寸智能交互床头屏", image: "/images/medical/product9.jpg", href: "/product/9" },
  { id: 10, name: "10.1寸智能交互床头屏", image: "/images/medical/product10.jpg", href: "/product/10" },
  { id: 11, name: "10.1寸病房智能门口机(竖)", image: "/images/medical/product11.jpg", href: "/product/11" },
  { id: 12, name: "15.6寸病房智能门口机", image: "/images/medical/product12.jpg", href: "/product/12" },
  { id: 13, name: "床头分机(无屏)", image: "/images/medical/product13.jpg", href: "/product/13" },
  { id: 14, name: "卫生间紧急呼叫器", image: "/images/medical/product14.jpg", href: "/product/14" },
];

// 二线制医护对讲系统产品
export const twoWireMedicalProducts: ProductItem[] = [
  { id: 15, name: "床头分机", image: "/images/two-wire-medical/product15.jpg", href: "/product/15" },
  { id: 16, name: "厕所按钮", image: "/images/two-wire-medical/product16.jpg", href: "/product/16" },
  { id: 17, name: "门灯", image: "/images/two-wire-medical/product17.jpg", href: "/product/17" },
  { id: 18, name: "走廊显示屏", image: "/images/two-wire-medical/product18.jpg", href: "/product/18" },
  { id: 19, name: "信息管理主机", image: "/images/two-wire-medical/product19.jpg", href: "/product/19" },
  { id: 20, name: "网络多媒体控制器", image: "/images/two-wire-medical/product20.jpg", href: "/product/20" },
];

// 无线呼叫系统产品
export const wirelessCallProducts: ProductItem[] = [
  { id: 21, name: "无线呼叫器（床头）", image: "/images/wireless-call/product21.jpg", href: "/product/21" },
  { id: 22, name: "无线呼叫器（拉绳）", image: "/images/wireless-call/product22.jpg", href: "/product/22" },
  { id: 23, name: "门灯（无线语音报警）", image: "/images/wireless-call/product23.jpg", href: "/product/23" },
  { id: 24, name: "无线发射主机", image: "/images/wireless-call/product24.jpg", href: "/product/24" },
  { id: 25, name: "无线联动主机", image: "/images/wireless-call/product25.jpg", href: "/product/25" },
  { id: 26, name: "走廊显示屏（无线）", image: "/images/wireless-call/product26.jpg", href: "/product/26" },
  { id: 27, name: "数字显示屏（无线）", image: "/images/wireless-call/product27.jpg", href: "/product/27" },
  { id: 28, name: "无线接收手表", image: "/images/wireless-call/product28.jpg", href: "/product/28" },
  { id: 29, name: "无线增压器", image: "/images/wireless-call/product29.jpg", href: "/product/29" },
  { id: 30, name: "床头分机（4G款基础版）", image: "/images/wireless-call/product30.jpg", href: "/product/30" },
  { id: 31, name: "信息管理主机（4G款）", image: "/images/wireless-call/product31.jpg", href: "/product/31" },
];

// 无线输液呼叫系统产品
export const wirelessInfusionProducts: ProductItem[] = [
  { id: 44, name: "无线输液呼叫器", image: "/images/wireless-infusion-call/product44.jpg", href: "/product/44" },
  { id: 45, name: "无线输液接收主机", image: "/images/wireless-infusion-call/product45.jpg", href: "/product/45" },
];

// ICU探视对讲系统产品
export const icuVisitProducts: ProductItem[] = [
  { id: 46, name: "ICU门口探视对讲主机", image: "/images/icu-visit/product46.jpg", href: "/product/46" },
  { id: 47, name: "ICU病床分机", image: "/images/icu-visit/product47.jpg", href: "/product/47" },
  { id: 48, name: "ICU探视分机", image: "/images/icu-visit/product48.jpg", href: "/product/48" },
  { id: 49, name: "ICU管理主机", image: "/images/icu-visit/product49.jpg", href: "/product/49" },
];

// 数字时钟系统产品
export const digitalClockProducts: ProductItem[] = [
  { id: 50, name: "数字时钟（双面）", image: "/images/digital-clock/product50.jpg", href: "/product/50" },
  { id: 51, name: "数字时钟（单面）", image: "/images/digital-clock/product51.jpg", href: "/product/51" },
  { id: 52, name: "母钟主机", image: "/images/digital-clock/product52.jpg", href: "/product/52" },
  { id: 53, name: "LED数字时钟", image: "/images/digital-clock/product53.jpg", href: "/product/53" },
  { id: 54, name: "液晶数字时钟", image: "/images/digital-clock/product54.jpg", href: "/product/54" },
];

// 排队叫号系统产品
export const queuingProducts: ProductItem[] = [
  { id: 55, name: "叫号主机", image: "/images/queuing/product55.jpg", href: "/product/55" },
  { id: 56, name: "综合显示屏", image: "/images/queuing/product56.jpg", href: "/product/56" },
  { id: 57, name: "窗口显示屏", image: "/images/queuing/product57.jpg", href: "/product/57" },
  { id: 58, name: "评价器", image: "/images/queuing/product58.jpg", href: "/product/58" },
  { id: 59, name: "取号机", image: "/images/queuing/product59.jpg", href: "/product/59" },
  { id: 60, name: "呼叫器", image: "/images/queuing/product60.jpg", href: "/product/60" },
];

// 信息发布系统产品
export const infoDisplayProducts: ProductItem[] = [
  { id: 61, name: "信息发布服务器", image: "/images/info-display/product61.jpg", href: "/product/61" },
  { id: 62, name: "信息发布终端", image: "/images/info-display/product62.jpg", href: "/product/62" },
];

// 智慧康养系统产品
export const smartAgingProducts: ProductItem[] = [
  { id: 63, name: "康养管理主机", image: "/images/smart-aging/product63.jpg", href: "/product/63" },
  { id: 64, name: "康养门口机", image: "/images/smart-aging/product64.jpg", href: "/product/64" },
  { id: 65, name: "康养床头机", image: "/images/smart-aging/product65.jpg", href: "/product/65" },
  { id: 66, name: "康养走廊屏", image: "/images/smart-aging/product66.jpg", href: "/product/66" },
  { id: 67, name: "康养呼叫器", image: "/images/smart-aging/product67.jpg", href: "/product/67" },
  { id: 68, name: "康养拉绳", image: "/images/smart-aging/product68.jpg", href: "/product/68" },
  { id: 69, name: "康养门灯", image: "/images/smart-aging/product69.jpg", href: "/product/69" },
  { id: 70, name: "康养管理软件", image: "/images/smart-aging/product70.jpg", href: "/product/70" },
];

// 智能照明系统产品
export const smartLightingProducts: ProductItem[] = [
  { id: 71, name: "智能照明主机", image: "/images/smart-lighting/product71.jpg", href: "/product/71" },
  { id: 72, name: "智能调光面板", image: "/images/smart-lighting/product72.jpg", href: "/product/72" },
  { id: 73, name: "智能开关面板", image: "/images/smart-lighting/product73.jpg", href: "/product/73" },
  { id: 74, name: "智能窗帘控制器", image: "/images/smart-lighting/product74.jpg", href: "/product/74" },
  { id: 75, name: "智能传感器", image: "/images/smart-lighting/product75.jpg", href: "/product/75" },
  { id: 76, name: "智能网关", image: "/images/smart-lighting/product76.jpg", href: "/product/76" },
  { id: 77, name: "智能照明软件", image: "/images/smart-lighting/product77.jpg", href: "/product/77" },
  { id: 78, name: "智能照明配件", image: "/images/smart-lighting/product78.jpg", href: "/product/78" },
];

