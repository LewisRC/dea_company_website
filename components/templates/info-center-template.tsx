"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { siteConfig } from "@/config/site-config"
import { useI18n } from "@/lib/i18n-context"
import { useState } from "react"
import { usePageTitle } from "@/hooks/use-page-title"
import Image from "next/image"

// 案例数据类型
interface CaseItem {
  id: number;
  title: string;
  location: string;
  system: string;
  category: string;
  image: string;
}

// 案例数据 - 中文
const caseData: CaseItem[] = [
  // 智慧医院案例 - 红色字体部分（第一页显示）
  {
    id: 1,
    title: "巴中市中医院",
    location: "四川.巴中",
    system: "医护对讲、信息发布",
    category: "hospital",
    image: "/images/info-center/yiyuan/case1.jpg"
  },
  {
    id: 2,
    title: "中国人民解放军902医院",
    location: "安徽.蚌埠",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case2.jpg"
  },
  {
    id: 3,
    title: "张北县妇幼保健院",
    location: "河北.张家口张北",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case3.jpg"
  },
  {
    id: 4,
    title: "凉州妇女儿童医院",
    location: "四川.凉山西昌",
    system: "医护对讲、探视对讲、手术对讲、排队叫号",
    category: "hospital",
    image: "/images/info-center/yiyuan/case4.jpg"
  },
  {
    id: 5,
    title: "绵竹县中医院",
    location: "四川.德阳绵竹",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case5.jpg"
  },
  {
    id: 6,
    title: "阿里人民医院",
    location: "西藏.阿里",
    system: "医护对讲、排队叫号、地图导航、信息发布",
    category: "hospital",
    image: "/images/info-center/yiyuan/case6.jpg"
  },
  // 智慧医院案例 - 第二页显示（按照用户提供的表格内容更新）
  {
    id: 7,
    title: "尼玛县人民医院",
    location: "西藏.那曲尼玛",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case1.jpg"
  },
  {
    id: 8,
    title: "长沙盈康肿瘤医院",
    location: "湖南.长沙",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case2.jpg"
  },
  {
    id: 9,
    title: "天山王方舱医院",
    location: "四川.凉山西昌",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case3.jpg"
  },
  {
    id: 10,
    title: "芒康县精神病福利院",
    location: "西藏.昌都芒康",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case4.jpg"
  },
  {
    id: 11,
    title: "卡孜乡卫生院",
    location: "西藏.日客则南木林",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case5.jpg"
  },
  {
    id: 12,
    title: "昌都病房医院",
    location: "西藏.昌都",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case6.jpg"
  },
  {
    id: 13,
    title: "中江县中医院",
    location: "四川.德阳中江",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case1.jpg"
  },
  {
    id: 14,
    title: "雅安中医院",
    location: "四川.雅安",
    system: "探视对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case2.jpg"
  },
  {
    id: 15,
    title: "乐至县中医院",
    location: "四川.资阳乐至",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case3.jpg"
  },
  // 智慧康养案例 - 第一页显示（前6个案例）
  {
    id: 16,
    title: "眉山东养护中心",
    location: "四川.眉山",
    system: "数字康养对讲",
    category: "elderly",
    image: "/images/info-center/kangyang/case7.jpg"
  },
  {
    id: 17,
    title: "梓潼县石牛区域养老服务中心",
    location: "四川.绵阳梓潼",
    system: "二线康养对讲",
    category: "elderly",
    image: "/images/info-center/kangyang/case8.jpg"
  },
  {
    id: 18,
    title: "万兴颐养园",
    location: "四川.成都武侯",
    system: "数字康养对讲",
    category: "elderly",
    image: "/images/info-center/kangyang/case9.jpg"
  },
  {
    id: 19,
    title: "宣汉养老中心",
    location: "四川.达州宣汉",
    system: "数字康养对讲+无线呼叫",
    category: "elderly",
    image: "/images/info-center/kangyang/case10.jpg"
  },
  {
    id: 20,
    title: "眉山万盛养护中心",
    location: "四川.眉山",
    system: "数字康养对讲+无线呼叫",
    category: "elderly",
    image: "/images/info-center/kangyang/case11.jpg"
  },
  {
    id: 21,
    title: "锦欣百花锦园康养社区",
    location: "四川.成都锦江",
    system: "数字康养对讲+无线呼叫",
    category: "elderly",
    image: "/images/info-center/kangyang/case12.jpg"
  },
  // 智慧康养案例 - 第二页显示（剩余案例）
  {
    id: 22,
    title: "三台朝方养老院",
    location: "四川.绵阳三台",
    system: "康养无线呼叫",
    category: "elderly",
    image: "/images/info-center/kangyang/case7.jpg"
  },
  {
    id: 23,
    title: "洪柳东综合体康养中心",
    location: "四川.成都锦江",
    system: "二线康养对讲",
    category: "elderly",
    image: "/images/info-center/kangyang/case8.jpg"
  },
  {
    id: 24,
    title: "古蔺养老院",
    location: "四川.泸州古蔺",
    system: "二线康养对讲",
    category: "elderly",
    image: "/images/info-center/kangyang/case9.jpg"
  },
  {
    id: 25,
    title: "眉山尚义养护中心",
    location: "四川.眉山",
    system: "数字康养对讲",
    category: "elderly",
    image: "/images/info-center/kangyang/case10.jpg"
  },
  // 智慧建筑案例 - 第一页显示（前6个案例）
  {
    id: 26,
    title: "青白江国际贸易产业园",
    location: "四川.成都青白江",
    system: "智能照明",
    category: "building",
    image: "/images/info-center/jianzhu/case13.jpg"
  },
  {
    id: 27,
    title: "AI数字创智元",
    location: "四川.成都金牛",
    system: "智能照明",
    category: "building",
    image: "/images/info-center/jianzhu/case14.jpg"
  },
  {
    id: 28,
    title: "柳城县市民健康服务中心",
    location: "广西.柳州柳城",
    system: "智能照明",
    category: "building",
    image: "/images/info-center/jianzhu/case15.jpg"
  },
  {
    id: 29,
    title: "瀛洲园酒店",
    location: "四川.凉山会理",
    system: "智能照明、酒店客控",
    category: "building",
    image: "/images/info-center/jianzhu/case16.jpg"
  },
  {
    id: 30,
    title: "融通科创基地",
    location: "四川.成都天府新区",
    system: "能源管理",
    category: "building",
    image: "/images/info-center/jianzhu/case17.jpg"
  },
  {
    id: 31,
    title: "电子科技大学海南陵水分校",
    location: "海南.陵水",
    system: "智能照明、能源管理",
    category: "building",
    image: "/images/info-center/jianzhu/case18.jpg"
  },
  // 智慧建筑案例 - 第二页显示（剩余案例）
  {
    id: 32,
    title: "吉泰锦江大厦",
    location: "四川.成都高新",
    system: "智能照明",
    category: "building",
    image: "/images/info-center/jianzhu/case13.jpg"
  },
  {
    id: 33,
    title: "五里梁创新科技孵化园",
    location: "四川.绵阳",
    system: "智能照明",
    category: "building",
    image: "/images/info-center/jianzhu/case14.jpg"
  },
  {
    id: 34,
    title: "三峡集团溪洛渡电站",
    location: "云南.昭通",
    system: "宿舍对讲",
    category: "building",
    image: "/images/info-center/jianzhu/case15.jpg"
  },
  // 智慧社区案例 - 第一页显示（前6个案例）
  {
    id: 35,
    title: "南山两河茗景",
    location: "四川.成都金牛",
    system: "智能家居",
    category: "community",
    image: "/images/info-center/shequ/case19.jpg"
  },
  {
    id: 36,
    title: "嘉和天悦尚嶺",
    location: "四川.南充西充",
    system: "楼宇对讲",
    category: "community",
    image: "/images/info-center/shequ/case20.jpg"
  },
  {
    id: 37,
    title: "中江御景湾",
    location: "四川.德阳中江",
    system: "楼宇对讲",
    category: "community",
    image: "/images/info-center/shequ/case21.jpg"
  },
  {
    id: 38,
    title: "成铁沙河澜庭",
    location: "四川.成都成华",
    system: "楼宇对讲",
    category: "community",
    image: "/images/info-center/shequ/case22.jpg"
  },
  {
    id: 39,
    title: "城投.艺墅语湖",
    location: "四川.成都龙泉",
    system: "楼宇对讲",
    category: "community",
    image: "/images/info-center/shequ/case23.jpg"
  },
  {
    id: 40,
    title: "人居.九林语凌云阁",
    location: "四川.成都锦江",
    system: "楼宇对讲、网络、监控门禁",
    category: "community",
    image: "/images/info-center/shequ/case24.jpg"
  },
  // 智慧社区案例 - 第二页显示（剩余案例）
  {
    id: 41,
    title: "南山凌峯",
    location: "四川.成都武侯",
    system: "智能家居、楼宇对讲、网络、监控门禁",
    category: "community",
    image: "/images/info-center/shequ/case19.jpg"
  },
  {
    id: 42,
    title: "南山御峯",
    location: "四川.成都武侯",
    system: "楼宇对讲、网络、监控门禁",
    category: "community",
    image: "/images/info-center/shequ/case20.jpg"
  },
  {
    id: 43,
    title: "雅安上城峰景",
    location: "四川.雅安",
    system: "楼宇对讲",
    category: "community",
    image: "/images/info-center/shequ/case21.jpg"
  },
  {
    id: 44,
    title: "交发.逸庭",
    location: "四川.绵阳",
    system: "楼宇对讲",
    category: "community",
    image: "/images/info-center/shequ/case22.jpg"
  },
  {
    id: 45,
    title: "钰景湾",
    location: "四川.成都都江堰",
    system: "楼宇对讲、网络、监控门禁",
    category: "community",
    image: "/images/info-center/shequ/case23.jpg"
  },
  {
    id: 46,
    title: "水磨江山",
    location: "四川.阿坝汶川",
    system: "楼宇对讲",
    category: "community",
    image: "/images/info-center/shequ/case24.jpg"
  },
  {
    id: 47,
    title: "云门集都",
    location: "四川.成都新都",
    system: "楼宇对讲、网络、监控门禁",
    category: "community",
    image: "/images/info-center/shequ/case19.jpg"
  },
  {
    id: 48,
    title: "蓝兴紫悦峰境",
    location: "四川.绵阳江油",
    system: "楼宇对讲",
    category: "community",
    image: "/images/info-center/shequ/case20.jpg"
  },
]

// 案例数据 - 英文
const caseDataEn: CaseItem[] = [
  // 智慧医院案例 - 红色字体部分（第一页显示）
  {
    id: 1,
    title: "Bazhong Traditional Chinese Medicine Hospital",
    location: "Sichuan.Bazhong",
    system: "Medical Intercom, Information Release",
    category: "hospital",
    image: "/images/info-center/yiyuan/case1.jpg"
  },
  {
    id: 2,
    title: "PLA 902 Hospital",
    location: "Anhui.Bengbu",
    system: "Medical Intercom",
    category: "hospital",
    image: "/images/info-center/yiyuan/case2.jpg"
  },
  {
    id: 3,
    title: "Xichang Traditional Chinese Medicine Hospital",
    location: "Sichuan.Xichang",
    system: "Medical Intercom",
    category: "hospital",
    image: "/images/info-center/yiyuan/case3.jpg"
  },
  {
    id: 4,
    title: "Mangkang County People's Hospital",
    location: "Tibet.Changdu Mangkang",
    system: "Medical Intercom",
    category: "hospital",
    image: "/images/info-center/yiyuan/case4.jpg"
  },
  {
    id: 5,
    title: "Kazi Township Health Center",
    location: "Tibet.Shigatse Namling",
    system: "Medical Intercom",
    category: "hospital",
    image: "/images/info-center/yiyuan/case5.jpg"
  },
  {
    id: 6,
    title: "Changdu Ward Hospital",
    location: "Tibet.Changdu",
    system: "Medical Intercom",
    category: "hospital",
    image: "/images/info-center/yiyuan/case6.jpg"
  },
  {
    id: 7,
    title: "Zhongjiang County Traditional Chinese Medicine Hospital",
    location: "Sichuan.Deyang Zhongjiang",
    system: "Medical Intercom",
    category: "hospital",
    image: "/images/info-center/yiyuan/case1.jpg"
  },
  {
    id: 8,
    title: "Ya'an Traditional Chinese Medicine Hospital",
    location: "Sichuan.Ya'an",
    system: "Visit Intercom",
    category: "hospital",
    image: "/images/info-center/yiyuan/case2.jpg"
  },
  {
    id: 9,
    title: "Lezhi County Traditional Chinese Medicine Hospital",
    location: "Sichuan.Ziyang Lezhi",
    system: "Medical Intercom",
    category: "hospital",
    image: "/images/info-center/yiyuan/case3.jpg"
  },
  {
    id: 10,
    title: "Mangkang County People's Hospital",
    location: "Tibet.Changdu Mangkang",
    system: "Medical Intercom",
    category: "hospital",
    image: "/images/info-center/yiyuan/case4.jpg"
  },
  {
    id: 11,
    title: "Kazi Township Health Center",
    location: "Tibet.Shigatse Namling",
    system: "Medical Intercom",
    category: "hospital",
    image: "/images/info-center/yiyuan/case5.jpg"
  },
  {
    id: 12,
    title: "Changdu Ward Hospital",
    location: "Tibet.Changdu",
    system: "Medical Intercom",
    category: "hospital",
    image: "/images/info-center/yiyuan/case6.jpg"
  },
  {
    id: 13,
    title: "Zhongjiang County Traditional Chinese Medicine Hospital",
    location: "Sichuan.Deyang Zhongjiang",
    system: "Medical Intercom",
    category: "hospital",
    image: "/images/info-center/yiyuan/case1.jpg"
  },
  {
    id: 14,
    title: "Ya'an Traditional Chinese Medicine Hospital",
    location: "Sichuan.Ya'an",
    system: "Visit Intercom",
    category: "hospital",
    image: "/images/info-center/yiyuan/case2.jpg"
  },
  {
    id: 15,
    title: "Lezhi County Traditional Chinese Medicine Hospital",
    location: "Sichuan.Ziyang Lezhi",
    system: "Medical Intercom",
    category: "hospital",
    image: "/images/info-center/yiyuan/case3.jpg"
  },
  // 智慧康养案例 - 第一页显示（前6个案例）
  {
    id: 16,
    title: "Meishan Dongyang Care Center",
    location: "Sichuan.Meishan",
    system: "Digital Elderly Care Intercom",
    category: "elderly",
    image: "/images/info-center/kangyang/case7.jpg"
  },
  {
    id: 17,
    title: "Zitong County Shiniu Regional Elderly Service Center",
    location: "Sichuan.Mianyang Zitong",
    system: "Two-wire Elderly Care Intercom",
    category: "elderly",
    image: "/images/info-center/kangyang/case8.jpg"
  },
  {
    id: 18,
    title: "Wanxing Yiyang Garden",
    location: "Sichuan.Chengdu Wuhou",
    system: "Digital Elderly Care Intercom",
    category: "elderly",
    image: "/images/info-center/kangyang/case9.jpg"
  },
  {
    id: 19,
    title: "Xuanhan Elderly Care Center",
    location: "Sichuan.Dazhou Xuanhan",
    system: "Digital Elderly Care Intercom + Wireless Call",
    category: "elderly",
    image: "/images/info-center/kangyang/case10.jpg"
  },
  {
    id: 20,
    title: "Meishan Wansheng Care Center",
    location: "Sichuan.Meishan",
    system: "Digital Elderly Care Intercom + Wireless Call",
    category: "elderly",
    image: "/images/info-center/kangyang/case11.jpg"
  },
  {
    id: 21,
    title: "Jinxin Baihua Jinyuan Elderly Care Community",
    location: "Sichuan.Chengdu Jinjiang",
    system: "Digital Elderly Care Intercom + Wireless Call",
    category: "elderly",
    image: "/images/info-center/kangyang/case12.jpg"
  },
  {
    id: 22,
    title: "Santai Chaofang Nursing Home",
    location: "Sichuan.Mianyang Santai",
    system: "Elderly Care Wireless Call",
    category: "elderly",
    image: "/images/info-center/kangyang/case13.jpg"
  },
  {
    id: 23,
    title: "Tongan Town Health Center",
    location: "Sichuan.Chengdu Pujiang",
    system: "Elderly Care Wireless Call",
    category: "elderly",
    image: "/images/info-center/kangyang/case14.jpg"
  },
  {
    id: 24,
    title: "Pujiang County Elderly Care Center",
    location: "Sichuan.Chengdu Pujiang",
    system: "Elderly Care Intercom",
    category: "elderly",
    image: "/images/info-center/kangyang/case15.jpg"
  },
  {
    id: 25,
    title: "Fulin Elderly Care Center",
    location: "Sichuan.Chengdu Longquanyi",
    system: "Elderly Care Intercom",
    category: "elderly",
    image: "/images/info-center/kangyang/case16.jpg"
  },
  {
    id: 26,
    title: "Xinjin District Elderly Care Center",
    location: "Sichuan.Chengdu Xinjin",
    system: "Elderly Care Intercom",
    category: "elderly",
    image: "/images/info-center/kangyang/case17.jpg"
  },
  {
    id: 27,
    title: "Chongzhou City Elderly Care Center",
    location: "Sichuan.Chengdu Chongzhou",
    system: "Elderly Care Intercom",
    category: "elderly",
    image: "/images/info-center/kangyang/case18.jpg"
  },
  {
    id: 28,
    title: "Luojiang District Elderly Care Center",
    location: "Sichuan.Deyang Luojiang",
    system: "Elderly Care Intercom",
    category: "elderly",
    image: "/images/info-center/kangyang/case19.jpg"
  },
  {
    id: 29,
    title: "Meishan Dongyang Care Center",
    location: "Sichuan.Meishan",
    system: "Digital Elderly Care Intercom",
    category: "elderly",
    image: "/images/info-center/kangyang/case20.jpg"
  },
  // 智慧建筑案例 - 第一页显示（前6个案例）
  {
    id: 30,
    title: "Chengdu Dongda International",
    location: "Sichuan.Chengdu Jinjiang",
    system: "Building Intercom, Network, Monitoring Access Control",
    category: "building",
    image: "/images/info-center/jianzhu/case1.jpg"
  },
  {
    id: 31,
    title: "Ziyang Jincheng International",
    location: "Sichuan.Ziyang Yanjiang",
    system: "Building Intercom, Network, Monitoring",
    category: "building",
    image: "/images/info-center/jianzhu/case2.jpg"
  },
  {
    id: 32,
    title: "Bazhong Jinlong Hotel",
    location: "Sichuan.Bazhong",
    system: "Hotel Guest Room Control, Building Intercom",
    category: "building",
    image: "/images/info-center/jianzhu/case3.jpg"
  },
  {
    id: 33,
    title: "Leshan Fortune Center",
    location: "Sichuan.Leshan",
    system: "Building Intercom, Network, Monitoring",
    category: "building",
    image: "/images/info-center/jianzhu/case4.jpg"
  },
  {
    id: 34,
    title: "Guangyuan City Administrative Center",
    location: "Sichuan.Guangyuan",
    system: "Building Intercom, Network, Monitoring Access Control",
    category: "building",
    image: "/images/info-center/jianzhu/case5.jpg"
  },
  {
    id: 35,
    title: "Yuexi County Government Building",
    location: "Sichuan.Liangshan Yuexi",
    system: "Building Intercom, Network",
    category: "building",
    image: "/images/info-center/jianzhu/case6.jpg"
  },
  {
    id: 36,
    title: "Mianyang High-tech Zone Administrative Service Center",
    location: "Sichuan.Mianyang Fucheng",
    system: "Building Intercom, Network, Monitoring",
    category: "building",
    image: "/images/info-center/jianzhu/case7.jpg"
  },
  {
    id: 37,
    title: "Guangyuan Hongtai International",
    location: "Sichuan.Guangyuan Shizhong",
    system: "Building Intercom, Network, Monitoring",
    category: "building",
    image: "/images/info-center/jianzhu/case8.jpg"
  },
  {
    id: 38,
    title: "Sichuan Minzu College",
    location: "Sichuan.Kangding",
    system: "Campus Intercom, Network, Monitoring Access Control",
    category: "building",
    image: "/images/info-center/jianzhu/case9.jpg"
  },
  {
    id: 39,
    title: "Chengdu Polytechnic",
    location: "Sichuan.Chengdu",
    system: "Campus Intercom, Network, Monitoring",
    category: "building",
    image: "/images/info-center/jianzhu/case10.jpg"
  },
  {
    id: 40,
    title: "Chengdu Southwest Petroleum University",
    location: "Sichuan.Chengdu",
    system: "Campus Intercom, Network, Monitoring",
    category: "building",
    image: "/images/info-center/jianzhu/case11.jpg"
  },
  {
    id: 41,
    title: "Meishan Vocational and Technical College",
    location: "Sichuan.Meishan",
    system: "Campus Intercom, Network, Monitoring",
    category: "building",
    image: "/images/info-center/jianzhu/case12.jpg"
  },
  // 智慧社区案例 - 第一页显示（前6个案例）
  {
    id: 42,
    title: "Nanshan Lingfeng",
    location: "Sichuan.Chengdu Wuhou",
    system: "Smart Home, Building Intercom, Network, Monitoring Access Control",
    category: "community",
    image: "/images/info-center/shequ/case19.jpg"
  },
  {
    id: 43,
    title: "Nanshan Yufeng",
    location: "Sichuan.Chengdu Wuhou",
    system: "Building Intercom, Network, Monitoring Access Control",
    category: "community",
    image: "/images/info-center/shequ/case20.jpg"
  },
  {
    id: 44,
    title: "Ya'an Shangcheng Fengjing",
    location: "Sichuan.Ya'an",
    system: "Building Intercom",
    category: "community",
    image: "/images/info-center/shequ/case21.jpg"
  },
  {
    id: 45,
    title: "Jiaofa Yiting",
    location: "Sichuan.Mianyang",
    system: "Building Intercom",
    category: "community",
    image: "/images/info-center/shequ/case22.jpg"
  },
  {
    id: 46,
    title: "Yujing Bay",
    location: "Sichuan.Chengdu Dujiangyan",
    system: "Building Intercom, Network, Monitoring Access Control",
    category: "community",
    image: "/images/info-center/shequ/case23.jpg"
  },
  {
    id: 47,
    title: "Shuimo Jiangshan",
    location: "Sichuan.Aba Wenchuan",
    system: "Building Intercom",
    category: "community",
    image: "/images/info-center/shequ/case24.jpg"
  },
  {
    id: 47,
    title: "Yunmen Jidu",
    location: "Sichuan.Chengdu Xindu",
    system: "Building Intercom, Network, Monitoring Access Control",
    category: "community",
    image: "/images/info-center/shequ/case19.jpg"
  },
  {
    id: 48,
    title: "Lanxing Ziyue Fengjing",
    location: "Sichuan.Mianyang Jiangyou",
    system: "Building Intercom",
    category: "community",
    image: "/images/info-center/shequ/case20.jpg"
  },
]

export function InfoCenterPageTemplate() {
  const { t, language } = useI18n()
  
  // 动态页面标题
  usePageTitle({
    zh: '成功案例 - 德视安科技',
    en: 'Success Cases - Deshian Technology'
  })
  
  const [activeFilter, setActiveFilter] = useState<string>("hospital")
  // 为每个标签单独跟踪分页状态
  const [currentPages, setCurrentPages] = useState<Record<string, number>>({
    hospital: 1,
    elderly: 1,
    building: 1,
    community: 1
  })
  
  // 根据当前语言选择案例数据
  const currentCaseData = language === "en" ? caseDataEn : caseData
  
  // 根据当前筛选条件获取案例
  const getFilteredCases = () => {
    if (activeFilter === "all") {
      return currentCaseData
    } else {
      return currentCaseData.filter(item => item.category === activeFilter)
    }
  }
  
  // 获取当前页面的案例
  const getCurrentPageCases = () => {
    const cases = getFilteredCases()
    const currentPage = currentPages[activeFilter] || 1
    if (currentPage === 1) {
      return cases.slice(0, 6)
    } else {
      return cases.slice(6)
    }
  }
  
  // 筛选案例
  const handleFilter = (category: string) => {
    setActiveFilter(category)
    // 确保切换分类时，如果该分类没有分页状态，则设置为1
    if (!currentPages[category]) {
      setCurrentPages(prev => ({ ...prev, [category]: 1 }))
    }
  }
  
  // 切换页面
  const handlePageChange = (page: number) => {
    setCurrentPages(prev => ({
      ...prev,
      [activeFilter]: page
    }))
  }

  return (
      <div className="relative min-h-screen">
        <Header />
        <main className="w-full">
          {/* 自定义样式 */}
          <style jsx global>{`
            /* 桌面端：卡片悬停效果 */
            .case-card {
              cursor: pointer;
            }
            
            @media (min-width: 768px) {
              .case-card:hover {
                transform: translateY(-15px) scale(1.02);
                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
              }
              
              .case-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 6px;
                background: linear-gradient(90deg, #0066cc, #00a8e8);
                opacity: 0;
                transition: opacity 0.3s ease;
              }
              
              .case-card:hover::before {
                opacity: 1;
              }
              
              .case-card:hover .case-image img {
                transform: scale(1.15) rotate(2deg);
              }
              
              /* 桌面端网格布局 */
              .cases-grid {
                grid-template-columns: repeat(3, 1fr) !important;
                gap: 60px !important;
                margin-top: 80px !important;
              }
              
              .cases-grid-page2 {
                grid-template-columns: repeat(3, 1fr) !important;
                gap: 60px !important;
                margin-top: 80px !important;
              }
            }
            
            /* 移动端：简化悬停效果和网格布局 */
            @media (max-width: 767px) {
              .case-card:active {
                transform: scale(0.98);
              }
              
              .cases-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 20px !important;
              }
              
              .cases-grid-page2 {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 15px !important;
              }
            }
            
            .case-card:hover .case-system {
              color: #0066cc !important;
              font-weight: 600 !important;
            }
          `}</style>
          
          {/* 页面头部 */}
          <section className="cases-hero" style={{
          background: "linear-gradient(90deg, #004a99 0%, #051b33 100%)",
          color: "white",
          padding: "80px 0",
          textAlign: "center",
          marginTop: "78px"
        }}>
          <div className="container">
            <h1 style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "white",
              marginBottom: "20px"
            }}>
              {t("news.title")}
            </h1>
            <p style={{
              fontSize: "1.25rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "800px",
              margin: "0 auto"
            }}>
              {t("news.subtitle")}
            </p>
          </div>
        </section>

        {/* 案例筛选和展示 */}
        <section className="cases-section" style={{
          padding: "60px 0",
          backgroundColor: "white"
        }}>
          <div className="container">
            {/* 筛选按钮 */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
              marginBottom: "40px"
            }}>
              <button
                onClick={() => handleFilter("hospital")}
                style={{
                  padding: "10px 20px",
                  minWidth: "140px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: activeFilter === "hospital" ? siteConfig.colors.primary : "white",
                  color: activeFilter === "hospital" ? "white" : siteConfig.colors.foreground,
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease"
                }}
              >
                {t("solutions.smartHospital")}
              </button>
              <button
                onClick={() => handleFilter("elderly")}
                style={{
                  padding: "10px 20px",
                  minWidth: "140px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: activeFilter === "elderly" ? siteConfig.colors.primary : "white",
                  color: activeFilter === "elderly" ? "white" : siteConfig.colors.foreground,
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease"
                }}
              >
                {t("solutions.smartHealthcare")}
              </button>
              <button
                onClick={() => handleFilter("building")}
                style={{
                  padding: "10px 20px",
                  minWidth: "140px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: activeFilter === "building" ? siteConfig.colors.primary : "white",
                  color: activeFilter === "building" ? "white" : siteConfig.colors.foreground,
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease"
                }}
              >
                {t("solutions.smartBuilding")}
              </button>
              <button
                onClick={() => handleFilter("community")}
                style={{
                  padding: "10px 20px",
                  minWidth: "140px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: activeFilter === "community" ? siteConfig.colors.primary : "white",
                  color: activeFilter === "community" ? "white" : siteConfig.colors.foreground,
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease"
                }}
              >
                {t("solutions.smartCommunity")}
              </button>
            </div>

            {/* 案例列表 */}
            <div style={{
              maxWidth: "1200px",
              margin: "0 auto"
            }}>
              {getFilteredCases().length > 0 ? (
                <>
                  {/* 第一页样式 - 带图片和悬停效果 */}
                  {currentPages[activeFilter] === 1 && (
                    <div className="cases-grid" style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                      gap: "30px",
                      marginTop: "40px",
                      marginBottom: "60px"
                    }}>
                      {getCurrentPageCases().map((caseItem) => (
                        <div
                          key={caseItem.id}
                          className="case-card"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                            transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            position: "relative",
                            border: "none"
                          }}
                        >
                          <div className="case-image" style={{ 
                            height: "200px",
                            overflow: "hidden", 
                            position: "relative" 
                          }}>
                            <Image 
                              src={caseItem.image} 
                              alt={caseItem.title} 
                              width={400} 
                              height={200} 
                              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                              style={{ transition: "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }}
                            />
                          </div>
                          <div className="case-content" style={{ 
                            padding: "15px 20px"
                          }}>
                            <h3 style={{ 
                              fontSize: "1rem",
                              color: "#051b33",
                              marginBottom: "8px",
                              fontWeight: 700,
                              lineHeight: "1.4"
                            }}>{caseItem.title}</h3>
                            <p style={{ 
                              color: "#555",
                              lineHeight: "1.5",
                              marginBottom: "8px",
                              fontSize: "0.85rem"
                            }}>{caseItem.location}</p>
                            <p className="case-system" style={{ 
                              color: "#555",
                              opacity: 1,
                              fontSize: "0.85rem",
                              lineHeight: "1.5"
                            }}>{caseItem.system}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* 第二页样式 - 纯文字卡片 */}
                  {currentPages[activeFilter] === 2 && (
                    <div className="cases-grid-page2" style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                      gap: "20px",
                      marginTop: "40px",
                      marginBottom: "60px"
                    }}>
                      {getCurrentPageCases().map((caseItem) => (
                        <div
                          key={caseItem.id}
                          className="case-card"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                            transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            position: "relative",
                            border: "none",
                            padding: "20px"
                          }}
                        >
                          <h3 style={{ 
                            fontSize: "1rem",
                            color: "#051b33",
                            marginBottom: "8px",
                            fontWeight: 700,
                            lineHeight: "1.4"
                          }}>{caseItem.title}</h3>
                          <p style={{ 
                            color: "#555",
                            lineHeight: "1.5",
                            marginBottom: "6px",
                            fontSize: "0.85rem"
                          }}>{caseItem.location}</p>
                          <p className="case-system" style={{ 
                            color: "#555",
                            opacity: 1,
                            fontSize: "0.85rem",
                            lineHeight: "1.5"
                          }}>{caseItem.system}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* 分页导航 */}
                  {getFilteredCases().length > 6 && (
                    <div style={{
                      textAlign: "center",
                      margin: "40px 0"
                    }}>
                      <button
                        onClick={() => handlePageChange(1)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "black",
                          cursor: "pointer",
                          fontSize: "0.9rem",
                          textDecoration: "none",
                          margin: "0 5px",
                          transition: "color 0.3s ease"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#0066cc"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "black"}
                      >
                        {t("common.previousPage")}&lt;
                      </button>
                      <span style={{
                        fontSize: "0.9rem",
                        margin: "0 10px"
                      }}>
                        {currentPages[activeFilter]}
                      </span>
                      <button
                        onClick={() => handlePageChange(2)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "black",
                          cursor: "pointer",
                          fontSize: "0.9rem",
                          textDecoration: "none",
                          margin: "0 5px",
                          transition: "color 0.3s ease"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#0066cc"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "black"}
                      >
                        {t("common.nextPage")}&gt;
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "60px 20px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px"
                }}>
                  <p style={{
                    fontSize: "1.2rem",
                    color: siteConfig.colors.textSecondary
                  }}>
                    {t("common.noResults")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

