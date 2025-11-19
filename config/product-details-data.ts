// 产品详情数据 - 完全匹配HTML项目
export const productDetailsData: Record<string, {
  name: string;
  category: string;
  categoryLink: string;
  image: string;
  params: Array<{ label: string; value: string }>;
}> = {
  // 数字医护对讲系统产品 (1-14)
  '1': {
    name: '10.1寸护士站管理机',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product1.jpg',
    params: [
      { label: '产品尺寸', value: '356×210×31.8mm' },
      { label: '屏幕尺寸', value: '10.1寸IPS高清屏' },
      { label: '分辨率', value: '1280×800' },
    ]
  },
  '2': {
    name: '15.6寸护士站管理机',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product2.jpg',
    params: [
      { label: '产品尺寸', value: '375×245×22mm' },
      { label: '屏幕尺寸', value: '15.6寸IPS高清屏' },
      { label: '分辨率', value: '1920×1080' },
    ]
  },
  '3': {
    name: '网络多媒体控制器',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product3.jpg',
    params: [
      { label: 'CPU', value: 'RK3128四核' },
      { label: '内存', value: '1GB' },
      { label: '存储', value: '8GB,TF卡可扩展32GB' },
    ]
  },
  '4': {
    name: '55寸护士站交互大屏',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product4.jpg',
    params: [
      { label: '产品尺寸', value: '1309×780×72mm' },
      { label: '分辨率', value: '1920×1080' },
    ]
  },
  '5': {
    name: '走廊显示屏(LED)',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product5.jpg',
    params: [
      { label: '产品尺寸', value: '852×186×49.5mm' },
      { label: 'LED亮度', value: '≥900cd/m²' },
      { label: '分辨率', value: '128×64' },
    ]
  },
  '6': {
    name: '走廊显示屏(液晶)',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product6.jpg',
    params: [
      { label: '产品尺寸', value: '852×186×49.5mm' },
      { label: 'LED亮度', value: '≥900cd/m²' },
      { label: '分辨率', value: '128×64' },
    ]
  },
  '7': {
    name: '7寸病区门口机',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product7.jpg',
    params: [
      { label: '产品尺寸', value: '148.5×363×47mm' },
      { label: '屏幕尺寸', value: '7寸电容触摸屏' },
      { label: '分辨率', value: '600×1024' },
    ]
  },
  '8': {
    name: '10.1寸房间门口机(横)',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product8.jpg',
    params: [
      { label: '产品尺寸', value: '267×240×22mm' },
      { label: '屏幕尺寸', value: '10.1寸电容触摸屏' },
      { label: '分辨率', value: '1024×600' },
    ]
  },
  '9': {
    name: '7寸智能交互床头屏',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product9.jpg',
    params: [
      { label: '产品尺寸', value: '215.1×151×103mm' },
      { label: '屏幕尺寸', value: '7寸电容触摸屏' },
      { label: '分辨率', value: '204×600' },
    ]
  },
  '10': {
    name: '10.1寸智能交互床头屏',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product10.jpg',
    params: [
      { label: '产品尺寸', value: '265×165×22mm' },
      { label: '屏幕尺寸', value: '10.1寸触摸屏' },
      { label: '分辨率', value: '1280×800' },
    ]
  },
  '11': {
    name: '10.1寸病房智能门口机(竖)',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product11.jpg',
    params: [
      { label: '产品尺寸', value: '165×265×22mm' },
      { label: '屏幕尺寸', value: '10.1寸触摸屏' },
      { label: '分辨率', value: '800×1280' },
    ]
  },
  '12': {
    name: '15.6寸病房智能门口机',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product12.jpg',
    params: [
      { label: '产品尺寸', value: '245×375×22mm' },
      { label: '屏幕尺寸', value: '15.6寸触摸屏' },
      { label: '分辨率', value: '1080×1920' },
    ]
  },
  '13': {
    name: '床头分机(无屏)',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product13.jpg',
    params: [
      { label: '产品尺寸', value: '138×90×12mm' },
      { label: '供电方式', value: '支持PoE供电和独立供电' },
    ]
  },
  '14': {
    name: '卫生间紧急呼叫器',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product14.jpg',
    params: [
      { label: '产品尺寸', value: '96×65×30mm' },
      { label: '供电方式', value: '电池' },
    ]
  },

  // 二线制医护对讲系统产品 (15-20)
  '15': {
    name: '床头分机',
    category: '二线制医护对讲系统',
    categoryLink: '/two-wire-medical-intercom',
    image: '/images/two-wire-medical/product15.jpg',
    params: [
      { label: '产品尺寸', value: '145×89×15mm' },
      { label: '供电方式', value: '二芯供电' },
    ]
  },
  '16': {
    name: '厕所按钮',
    category: '二线制医护对讲系统',
    categoryLink: '/two-wire-medical-intercom',
    image: '/images/two-wire-medical/product16.jpg',
    params: [
      { label: '产品尺寸', value: '86×86×32mm' },
      { label: '供电方式', value: '二芯供电' },
    ]
  },
  '17': {
    name: '门灯',
    category: '二线制医护对讲系统',
    categoryLink: '/two-wire-medical-intercom',
    image: '/images/two-wire-medical/product17.jpg',
    params: [
      { label: '产品尺寸', value: '97.5×85.5×41mm' },
      { label: '供电方式', value: '二芯供电' },
    ]
  },
  '18': {
    name: '走廊显示屏',
    category: '二线制医护对讲系统',
    categoryLink: '/two-wire-medical-intercom',
    image: '/images/two-wire-medical/product18.jpg',
    params: [
      { label: '产品尺寸', value: '800×200×45mm' },
      { label: '供电方式', value: '单独供电' },
    ]
  },
  '19': {
    name: '信息管理主机',
    category: '二线制医护对讲系统',
    categoryLink: '/two-wire-medical-intercom',
    image: '/images/two-wire-medical/product19.jpg',
    params: [
      { label: '产品尺寸', value: '300×240×45mm' },
      { label: '传输方式', value: '网线和二芯线传输' },
      { label: '供电方式', value: '220V市电' },
    ]
  },
  '20': {
    name: '网络多媒体控制器',
    category: '二线制医护对讲系统',
    categoryLink: '/two-wire-medical-intercom',
    image: '/images/two-wire-medical/product20.jpg',
    params: [
      { label: 'CPU', value: 'intel四核' },
      { label: '内存/存储', value: '4GB/32GB' },
      { label: '电源', value: 'AC 220V输入' },
    ]
  },

  // 无线呼叫系统产品 (21-43) - 注意：HTML中ID是33-43，但图片命名是product21-31
  '21': {
    name: '无线呼叫器（床头）',
    category: '无线呼叫系统',
    categoryLink: '/wireless-call-system',
    image: '/images/wireless-call/product21.jpg',
    params: [
      { label: '调制方式', value: 'FM调频' },
      { label: '发射功率', value: '12毫瓦' },
      { label: '收发频率', value: '315.6MHz' },
    ]
  },
  '22': {
    name: '无线呼叫器（拉绳）',
    category: '无线呼叫系统',
    categoryLink: '/wireless-call-system',
    image: '/images/wireless-call/product22.jpg',
    params: [
      { label: '产品尺寸', value: '95×65×3mm' },
      { label: '调制方式', value: 'FSK调频' },
      { label: '收发频率', value: '315.6MHz' },
    ]
  },
  '23': {
    name: '门灯（无线语音报警）',
    category: '无线呼叫系统',
    categoryLink: '/wireless-call-system',
    image: '/images/wireless-call/product23.jpg',
    params: [
      { label: '接收频率', value: '430.225MHz' },
      { label: '解码方式', value: 'POCSAG' },
      { label: '供电方式', value: '220V交流电源' },
    ]
  },
  '24': {
    name: '无线发射主机',
    category: '无线呼叫系统',
    categoryLink: '/wireless-call-system',
    image: '/images/wireless-call/product24.jpg',
    params: [
      { label: '产品尺寸', value: '250×250×60mm' },
      { label: '接收频率', value: '315.600MHz' },
      { label: '发射频率', value: '430.225MHz' },
    ]
  },
  '25': {
    name: '无线联动主机',
    category: '无线呼叫系统',
    categoryLink: '/wireless-call-system',
    image: '/images/wireless-call/product25.jpg',
    params: [
      { label: '通信方式', value: 'USB通讯' },
      { label: '接收频率', value: '315.6MHz' },
      { label: '接收灵敏度', value: '-115dBm' },
    ]
  },
  '26': {
    name: '走廊显示屏（无线）',
    category: '无线呼叫系统',
    categoryLink: '/wireless-call-system',
    image: '/images/wireless-call/product26.jpg',
    params: [
      { label: '产品尺寸', value: '800×200×45mm' },
      { label: '供电方式', value: '单独供电' },
    ]
  },
  '27': {
    name: '数字显示屏（无线）',
    category: '无线呼叫系统',
    categoryLink: '/wireless-call-system',
    image: '/images/wireless-call/product27.jpg',
    params: [
      { label: '产品尺寸', value: '279×209×25mm' },
      { label: '工作频率', value: '315.6MHz' },
    ]
  },
  '28': {
    name: '无线接收手表',
    category: '无线呼叫系统',
    categoryLink: '/wireless-call-system',
    image: '/images/wireless-call/product28.jpg',
    params: [
      { label: '显示屏', value: '蓝色OLED' },
      { label: '分辨率', value: '128×64' },
    ]
  },
  '29': {
    name: '无线增压器',
    category: '无线呼叫系统',
    categoryLink: '/wireless-call-system',
    image: '/images/wireless-call/product29.jpg',
    params: [
      { label: '发射功率', value: '≤27dB' },
      { label: '接收灵敏度', value: '优于-107dBm' },
      { label: '供电电压', value: 'DC12V' },
    ]
  },
  '30': {
    name: '床头分机（4G款基础版）',
    category: '无线呼叫系统',
    categoryLink: '/wireless-call-system',
    image: '/images/wireless-call/product30.jpg',
    params: [
      { label: '供电方式', value: '适配器供电' },
    ]
  },
  '31': {
    name: '信息管理主机（4G款）',
    category: '无线呼叫系统',
    categoryLink: '/wireless-call-system',
    image: '/images/wireless-call/product31.jpg',
    params: [
      { label: '供电方式', value: '适配器供电' },
    ]
  },

  // 无线输液呼叫系统产品 (44-45)
  '44': {
    name: '无线呼叫器',
    category: '无线输液呼叫系统',
    categoryLink: '/wireless-infusion-call',
    image: '/images/wireless-infusion-call/product44.jpg',
    params: [
      { label: '供电方式', value: '可充锂电池' },
    ]
  },
  '45': {
    name: '无线接收机',
    category: '无线输液呼叫系统',
    categoryLink: '/wireless-infusion-call',
    image: '/images/wireless-infusion-call/product45.jpg',
    params: [
      { label: '发射功率', value: '≤27Db' },
      { label: '接收灵敏度', value: '优于-107DBM' },
      { label: '供电电压', value: 'DC12V' },
    ]
  },

  // ICU探视对讲系统产品 (46-49)
  '46': {
    name: '15.6寸床头分机(病床探视)',
    category: 'ICU探视对讲系统',
    categoryLink: '/icu-visit-intercom',
    image: '/images/icu-visit/product46.jpg',
    params: [
      { label: '产品尺寸', value: '375×245×22mm' },
      { label: '屏幕尺寸', value: '15.6寸触摸屏' },
      { label: '分辨率', value: '1920×1080' },
    ]
  },
  '47': {
    name: '10.1寸床头分机(病床探视)',
    category: 'ICU探视对讲系统',
    categoryLink: '/icu-visit-intercom',
    image: '/images/icu-visit/product47.jpg',
    params: [
      { label: '产品尺寸', value: '265×165×22mm' },
      { label: '屏幕尺寸', value: '10.1寸触摸屏' },
      { label: '分辨率', value: '1280×800' },
    ]
  },
  '48': {
    name: '支臂',
    category: 'ICU探视对讲系统',
    categoryLink: '/icu-visit-intercom',
    image: '/images/icu-visit/product48.jpg',
    params: [
      { label: '臂长', value: '1080mm' },
      { label: '升降幅度', value: '上10mm下365mm' },
      { label: '连接杆', value: '365°转动' },
    ]
  },
  '49': {
    name: '探视推车',
    category: 'ICU探视对讲系统',
    categoryLink: '/icu-visit-intercom',
    image: '/images/icu-visit/product49.jpg',
    params: [
      { label: '篮筐尺寸', value: '88×155×170mm' },
      { label: '台面尺寸', value: '460×490mm' },
      { label: '底座尺寸', value: '492×525mm' },
    ]
  },

  // 数字时钟系统产品 (50-54)
  '50': {
    name: 'NTP电子时钟(单面)',
    category: '数字时钟系统',
    categoryLink: '/digital-clock-system',
    image: '/images/digital-clock/product50.jpg',
    params: [
      { label: '产品尺寸', value: '86×65mm' },
      { label: '产品寿命', value: '≥10W小时' },
      { label: '供电方式', value: '220v供电NTP校时' },
    ]
  },
  '51': {
    name: 'NTP电子时钟(双面)',
    category: '数字时钟系统',
    categoryLink: '/digital-clock-system',
    image: '/images/digital-clock/product51.jpg',
    params: [
      { label: '产品尺寸', value: '86×65mm' },
      { label: '产品寿命', value: '≥10W小时' },
      { label: '供电方式', value: '220v供电NTP校时' },
    ]
  },
  '52': {
    name: 'NTP电子时钟(单面)',
    category: '数字时钟系统',
    categoryLink: '/digital-clock-system',
    image: '/images/digital-clock/product52.jpg',
    params: [
      { label: '产品尺寸', value: '86×65mm' },
      { label: '产品寿命', value: '≥10W小时' },
      { label: '供电方式', value: '220v供电NTP校时' },
    ]
  },
  '53': {
    name: 'NTP电子时钟(双面)',
    category: '数字时钟系统',
    categoryLink: '/digital-clock-system',
    image: '/images/digital-clock/product53.jpg',
    params: [
      { label: '产品尺寸', value: '86×65mm' },
      { label: '产品寿命', value: '≥10W小时' },
      { label: '供电方式', value: '220v供电NTP校时' },
    ]
  },
  '54': {
    name: 'NTP时间服务器中心母钟',
    category: '数字时钟系统',
    categoryLink: '/digital-clock-system',
    image: '/images/digital-clock/product54.jpg',
    params: [
      { label: '用户容量', value: '支持数万台客户端' },
      { label: 'NTP请求量', value: '8000次/秒' },
      { label: '网口', value: 'RJ45，1路' },
    ]
  },

  // 排队叫号系统产品 (55-60)
  '55': {
    name: '19寸智能一体机',
    category: '排队叫号系统',
    categoryLink: '/queuing-system',
    image: '/images/queuing/product55.jpg',
    params: [
      { label: '安装方式', value: '医生诊室门口壁挂式' },
      { label: '传输方式', value: '局域网传输' },
      { label: '分辨率', value: '1920×1080' },
    ]
  },
  '56': {
    name: '32寸智能一体机',
    category: '排队叫号系统',
    categoryLink: '/queuing-system',
    image: '/images/queuing/product56.jpg',
    params: [
      { label: '安装方式', value: '医生诊室门口壁挂式' },
      { label: '传输方式', value: '局域网传输' },
      { label: '分辨率', value: '1920×1080' },
    ]
  },
  '57': {
    name: '22寸智能一体机（取号/触摸屏）',
    category: '排队叫号系统',
    categoryLink: '/queuing-system',
    image: '/images/queuing/product57.jpg',
    params: [
      { label: '安装方式', value: '落地式' },
      { label: '传输方式', value: '局域网传输' },
      { label: '分辨率', value: '1920×1080' },
    ]
  },
  '58': {
    name: '22寸智能一体机（打印/触摸屏）',
    category: '排队叫号系统',
    categoryLink: '/queuing-system',
    image: '/images/queuing/product58.jpg',
    params: [
      { label: '安装方式', value: '落地式' },
      { label: '传输方式', value: '局域网传输' },
      { label: '分辨率', value: '1920×1080' },
    ]
  },
  '59': {
    name: '10寸呼叫机（触摸屏）',
    category: '排队叫号系统',
    categoryLink: '/queuing-system',
    image: '/images/queuing/product59.jpg',
    params: [
      { label: '安装方式', value: '桌面式' },
      { label: '传输方式', value: '局域网传输' },
      { label: '分辨率', value: '1280×800' },
    ]
  },
  '60': {
    name: '窗口对讲呼叫机',
    category: '排队叫号系统',
    categoryLink: '/queuing-system',
    image: '/images/queuing/product60.jpg',
    params: [
      { label: '控制方式', value: '双通道自动控制' },
      { label: '录音方式', value: '全双工录音' },
    ]
  },

  // 信息发布系统产品 (61-62)
  '61': {
    name: '43寸智能一体机(立式)',
    category: '信息发布系统',
    categoryLink: '/info-display-system',
    image: '/images/info-display/product61.jpg',
    params: [
      { label: '安装方式', value: '落地式' },
      { label: '传输方式', value: '局域网传输' },
      { label: '分辨率', value: '1920×1080' },
    ]
  },
  '62': {
    name: '43寸智能一体机(卧式)',
    category: '信息发布系统',
    categoryLink: '/info-display-system',
    image: '/images/info-display/product62.jpg',
    params: [
      { label: '安装方式', value: '卧式' },
      { label: '传输方式', value: '局域网传输' },
      { label: '分辨率', value: '1920×1080' },
    ]
  },

  // 智慧康养系统产品 (63-70)
  '63': {
    name: '定位胸牌',
    category: '智慧康养系统',
    categoryLink: '/smart-aging-system',
    image: '/images/smart-aging/product63.jpg',
    params: [
      { label: '产品尺寸', value: '61×11×106mm' },
      { label: '通讯方式', value: 'Cat.1通讯' },
      { label: '待机时长', value: '5天' },
    ]
  },
  '64': {
    name: '智能手环',
    category: '智慧康养系统',
    categoryLink: '/smart-aging-system',
    image: '/images/smart-aging/product64.jpg',
    params: [
      { label: '屏幕尺寸', value: '1.59英寸/1.83英寸' },
      { label: '待机时长', value: '7-9天' },
      { label: '通话时长', value: '7-9小时' },
    ]
  },
  '65': {
    name: '毫米跌倒雷达波',
    category: '智慧康养系统',
    categoryLink: '/smart-aging-system',
    image: '/images/smart-aging/product65.jpg',
    params: [
      { label: '产品尺寸', value: 'φ70×29mm' },
      { label: '通讯方式', value: '4G Cat.1通讯' },
      { label: '探测角度', value: '100°Az/100°El' },
    ]
  },
  '66': {
    name: '智能睡眠监测垫',
    category: '智慧康养系统',
    categoryLink: '/smart-aging-system',
    image: '/images/smart-aging/product66.jpg',
    params: [
      { label: '过压保护', value: '支持' },
      { label: '静电保护', value: '支持' },
      { label: '防尘防水', value: '不支持' },
    ]
  },
  '67': {
    name: 'AI语音紧急呼叫按钮',
    category: '智慧康养系统',
    categoryLink: '/smart-aging-system',
    image: '/images/smart-aging/product67.jpg',
    params: [
      { label: '产品尺寸', value: '93×93×28mm' },
      { label: '通讯方式', value: 'Cat.1通讯' },
      { label: '外部供电', value: 'DC 5V/2A' },
    ]
  },
  '68': {
    name: '便携式检测一体机',
    category: '智慧康养系统',
    categoryLink: '/smart-aging-system',
    image: '/images/smart-aging/product68.jpg',
    params: [
      { label: '产品配置', value: '10.1寸健康一体机' },
      { label: '处理器', value: '高通八核64位' },
      { label: '可移动性', value: '便携式手提/背包设计' },
    ]
  },
  '69': {
    name: '水浸探测器',
    category: '智慧康养系统',
    categoryLink: '/smart-aging-system',
    image: '/images/smart-aging/product69.jpg',
    params: [
      { label: '产品尺寸', value: '105×39.5×23mm' },
      { label: '感应距离', value: '20mm' },
      { label: '探头线长', value: '1米' },
    ]
  },
  '70': {
    name: '家用可燃气体探测器',
    category: '智慧康养系统',
    categoryLink: '/smart-aging-system',
    image: '/images/smart-aging/product70.jpg',
    params: [
      { label: '产品尺寸', value: 'φ104×31.7mm' },
      { label: '探测气体', value: '天然气（CH4）' },
      { label: '报警浓度', value: '8LEL±3LEL' },
    ]
  },

  // 智能照明系统产品 (71-78)
  '71': {
    name: 'KNX开关执行器',
    category: '智能照明系统',
    categoryLink: '/smart-lighting-system',
    image: '/images/smart-lighting/product71.jpg',
    params: [
      { label: '产品尺寸', value: '72x90x63mm(4P)' },
      { label: '总线电压', value: '21-30V DC' },
      { label: '额定输出', value: '4路16A/20A' },
    ]
  },
  '72': {
    name: 'KNX开关执行器',
    category: '智能照明系统',
    categoryLink: '/smart-lighting-system',
    image: '/images/smart-lighting/product72.jpg',
    params: [
      { label: '产品尺寸', value: '145x90x63mm(8P)' },
      { label: '总线电压', value: '21-30V DC' },
      { label: '额定输出', value: '8路16A/20A' },
    ]
  },
  '73': {
    name: 'KNX开关执行器',
    category: '智能照明系统',
    categoryLink: '/smart-lighting-system',
    image: '/images/smart-lighting/product73.jpg',
    params: [
      { label: '产品尺寸', value: '218x90x63mm(12P)' },
      { label: '总线电压', value: '21-30V DC' },
      { label: '额定输出', value: '12路16A/20A' },
    ]
  },
  '74': {
    name: 'KNX总线电源(960MA)',
    category: '智能照明系统',
    categoryLink: '/smart-lighting-system',
    image: '/images/smart-lighting/product74.jpg',
    params: [
      { label: '产品尺寸', value: '72x90x62mm(4P)' },
      { label: '输入电压', value: '200-240VAC' },
      { label: 'KNX/EIB输出', value: '29V DC' },
    ]
  },
  '75': {
    name: 'KNX智能面板(6键金属拉丝/喷砂可选)',
    category: '智能照明系统',
    categoryLink: '/smart-lighting-system',
    image: '/images/smart-lighting/product75.jpg',
    params: [
      { label: '产品尺寸', value: '86x86x33mm' },
      { label: '总线电压', value: '21-30V DC' },
      { label: '总线功率', value: '<360mW' },
    ]
  },
  '76': {
    name: 'KNX传感器(移动/照度二合一)',
    category: '智能照明系统',
    categoryLink: '/smart-lighting-system',
    image: '/images/smart-lighting/product76.jpg',
    params: [
      { label: '产品尺寸', value: '98.5x39.5(φ80mm)' },
      { label: '总线电压', value: '21-30V DC' },
      { label: '总线功率', value: '<360mW' },
    ]
  },
  '77': {
    name: 'KNX智能屏(4寸触摸屏)',
    category: '智能照明系统',
    categoryLink: '/smart-lighting-system',
    image: '/images/smart-lighting/product77.jpg',
    params: [
      { label: '产品尺寸', value: '86x101.3x32.2mm' },
      { label: '总线电压', value: '21-30V DC' },
      { label: '总线功率', value: '<150mW' },
    ]
  },
  '78': {
    name: 'KNXIP接口网关',
    category: '智能照明系统',
    categoryLink: '/smart-lighting-system',
    image: '/images/smart-lighting/product78.jpg',
    params: [
      { label: '产品尺寸', value: '36x90x64mm(2P)' },
      { label: '总线电压', value: '21-30V DC' },
      { label: '总线功率', value: '<470mW' },
    ]
  },
};
