// 产品详情数据
export const productDetailsData: Record<string, {
  name: string;
  category: string;
  categoryLink: string;
  image: string;
  params: Array<{ label: string; value: string }>;
}> = {
  // 数字医护对讲系统产品
  'product1': {
    name: '10.1寸护士站管理机',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product1.jpg',
    params: [
      { label: '屏幕尺寸', value: '10.1英寸IPS触摸屏' },
      { label: '分辨率', value: '1280×800' },
      { label: '处理器', value: '四核ARM Cortex-A17' },
      { label: '内存', value: '2GB DDR3' },
      { label: '存储', value: '8GB eMMC' },
      { label: '网络', value: '10/100M自适应以太网' },
      { label: '电源', value: 'DC 12V' },
    ]
  },
  'product2': {
    name: '15.6寸护士站管理机',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product2.jpg',
    params: [
      { label: '屏幕尺寸', value: '15.6英寸IPS触摸屏' },
      { label: '分辨率', value: '1920×1080' },
      { label: '处理器', value: '四核ARM Cortex-A17' },
      { label: '内存', value: '2GB DDR3' },
      { label: '存储', value: '8GB eMMC' },
      { label: '网络', value: '10/100M自适应以太网' },
      { label: '电源', value: 'DC 12V' },
    ]
  },
  'product3': {
    name: '病床分机',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product3.jpg',
    params: [
      { label: '屏幕尺寸', value: '7英寸IPS触摸屏' },
      { label: '分辨率', value: '1024×600' },
      { label: '摄像头', value: '200万像素' },
      { label: '麦克风', value: '内置高灵敏度麦克风' },
      { label: '扬声器', value: '内置2W扬声器' },
      { label: '网络', value: '10/100M自适应以太网' },
      { label: '电源', value: 'POE供电' },
    ]
  },
  'product4': {
    name: '走廊显示屏',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product4.jpg',
    params: [
      { label: '屏幕尺寸', value: '10.1英寸IPS显示屏' },
      { label: '分辨率', value: '1280×800' },
      { label: '显示内容', value: '病房信息、呼叫状态' },
      { label: '网络', value: '10/100M自适应以太网' },
      { label: '安装方式', value: '壁挂式' },
      { label: '电源', value: 'DC 12V' },
    ]
  },
  'product5': {
    name: '门口机',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product5.jpg',
    params: [
      { label: '屏幕尺寸', value: '7英寸IPS触摸屏' },
      { label: '分辨率', value: '1024×600' },
      { label: '摄像头', value: '200万像素广角摄像头' },
      { label: '麦克风', value: '内置降噪麦克风' },
      { label: '扬声器', value: '内置3W扬声器' },
      { label: '网络', value: '10/100M自适应以太网' },
      { label: '电源', value: 'POE供电' },
      { label: '防护等级', value: 'IP54' },
    ]
  },
  'product6': {
    name: '医生手持终端',
    category: '数字医护对讲系统',
    categoryLink: '/digital-medical-intercom',
    image: '/images/medical/product6.jpg',
    params: [
      { label: '屏幕尺寸', value: '5英寸触摸屏' },
      { label: '分辨率', value: '1280×720' },
      { label: '操作系统', value: 'Android 9.0' },
      { label: '网络', value: 'WiFi 802.11 a/b/g/n/ac' },
      { label: '电池', value: '3000mAh锂电池' },
      { label: '续航时间', value: '8小时' },
      { label: '充电方式', value: 'Type-C快充' },
    ]
  },

  // 二线制医护对讲系统产品
  'two-wire-product1': {
    name: '护士站主机',
    category: '二线制医护对讲系统',
    categoryLink: '/two-wire-medical-intercom',
    image: '/images/two-wire-medical/product1.jpg',
    params: [
      { label: '屏幕尺寸', value: '10.1英寸触摸屏' },
      { label: '接入容量', value: '最多64个分机' },
      { label: '通话方式', value: '双向对讲' },
      { label: '显示功能', value: '呼叫信息、时间、房号' },
      { label: '音频', value: '内置扬声器和麦克风' },
      { label: '安装方式', value: '台式/壁挂' },
      { label: '电源', value: 'DC 24V' },
    ]
  },
  'two-wire-product2': {
    name: '病房分机',
    category: '二线制医护对讲系统',
    categoryLink: '/two-wire-medical-intercom',
    image: '/images/two-wire-medical/product2.jpg',
    params: [
      { label: '显示屏', value: '3.5英寸LCD屏' },
      { label: '呼叫按键', value: '紧急呼叫、普通呼叫' },
      { label: '音频', value: '内置扬声器和麦克风' },
      { label: '指示灯', value: 'LED状态指示' },
      { label: '安装方式', value: '壁挂式' },
      { label: '电源', value: '总线供电' },
    ]
  },
  'two-wire-product3': {
    name: '卫生间防水分机',
    category: '二线制医护对讲系统',
    categoryLink: '/two-wire-medical-intercom',
    image: '/images/two-wire-medical/product3.jpg',
    params: [
      { label: '呼叫按键', value: '防水紧急按钮' },
      { label: '指示灯', value: 'LED状态指示' },
      { label: '防护等级', value: 'IP65' },
      { label: '材质', value: '防水ABS塑料' },
      { label: '安装方式', value: '壁挂式' },
      { label: '电源', value: '总线供电' },
    ]
  },
  'two-wire-product4': {
    name: '门口机',
    category: '二线制医护对讲系统',
    categoryLink: '/two-wire-medical-intercom',
    image: '/images/two-wire-medical/product4.jpg',
    params: [
      { label: '显示屏', value: '2.8英寸LCD屏' },
      { label: '门铃按键', value: '触摸式按键' },
      { label: '显示内容', value: '房间号、呼叫状态' },
      { label: '指示灯', value: 'RGB三色灯' },
      { label: '安装方式', value: '嵌入式/壁挂式' },
      { label: '电源', value: '总线供电' },
    ]
  },

  // 无线呼叫系统产品
  'wireless-product1': {
    name: '无线主机',
    category: '无线呼叫系统',
    categoryLink: '/wireless-call-system',
    image: '/images/wireless-call/product1.jpg',
    params: [
      { label: '屏幕尺寸', value: '7英寸触摸屏' },
      { label: '接收频率', value: '433MHz' },
      { label: '接收距离', value: '100米（开阔地）' },
      { label: '接入容量', value: '最多999个呼叫器' },
      { label: '显示内容', value: '呼叫信息、时间' },
      { label: '提示方式', value: '声音+屏幕显示' },
      { label: '电源', value: 'DC 5V USB供电' },
    ]
  },
  'wireless-product2': {
    name: '无线呼叫器',
    category: '无线呼叫系统',
    categoryLink: '/wireless-call-system',
    image: '/images/wireless-call/product2.jpg',
    params: [
      { label: '按键数量', value: '单键/三键可选' },
      { label: '发射频率', value: '433MHz' },
      { label: '发射距离', value: '100米（开阔地）' },
      { label: '电池类型', value: 'CR2032纽扣电池' },
      { label: '电池寿命', value: '1-2年' },
      { label: '防护等级', value: 'IP54' },
      { label: '安装方式', value: '壁挂/台式' },
    ]
  },
  'wireless-product3': {
    name: '手表接收器',
    category: '无线呼叫系统',
    categoryLink: '/wireless-call-system',
    image: '/images/wireless-call/product3.jpg',
    params: [
      { label: '屏幕尺寸', value: '1.3英寸OLED屏' },
      { label: '接收频率', value: '433MHz' },
      { label: '接收距离', value: '80米（开阔地）' },
      { label: '提示方式', value: '振动+屏幕+声音' },
      { label: '电池容量', value: '300mAh' },
      { label: '续航时间', value: '7天' },
      { label: '充电方式', value: '磁吸充电' },
      { label: '防水等级', value: 'IP67' },
    ]
  },

  // 为所有其他产品ID创建基本数据（使用ID作为key）
  ...Array.from({ length: 78 }, (_, i) => i + 1).reduce((acc, id) => {
    // 跳过已经定义的产品
    if (['product1', 'product2', 'product3', 'two-wire-product1', 'two-wire-product2', 'two-wire-product3', 'two-wire-product4', 'wireless-product1', 'wireless-product2', 'wireless-product3'].includes(`${id}`)) {
      return acc;
    }
    
    // 根据ID范围确定产品类别
    let category = '';
    let categoryLink = '';
    let imageFolder = '';
    
    if (id <= 14) {
      category = '数字医护对讲系统';
      categoryLink = '/digital-medical-intercom';
      imageFolder = 'medical';
    } else if (id <= 20) {
      category = '二线制医护对讲系统';
      categoryLink = '/two-wire-medical-intercom';
      imageFolder = 'two-wire-medical';
    } else if (id <= 31) {
      category = '无线呼叫系统';
      categoryLink = '/wireless-call-system';
      imageFolder = 'wireless-call';
    } else if (id <= 45) {
      category = '无线输液呼叫系统';
      categoryLink = '/wireless-infusion-call';
      imageFolder = 'wireless-infusion-call';
    } else if (id <= 49) {
      category = 'ICU探视对讲系统';
      categoryLink = '/icu-visit-intercom';
      imageFolder = 'icu-visit';
    } else if (id <= 54) {
      category = '数字时钟系统';
      categoryLink = '/digital-clock-system';
      imageFolder = 'digital-clock';
    } else if (id <= 60) {
      category = '排队叫号系统';
      categoryLink = '/queuing-system';
      imageFolder = 'queuing';
    } else if (id <= 62) {
      category = '信息发布系统';
      categoryLink = '/info-display-system';
      imageFolder = 'info-display';
    } else if (id <= 70) {
      category = '智慧康养系统';
      categoryLink = '/smart-aging-system';
      imageFolder = 'smart-aging';
    } else {
      category = '智能照明系统';
      categoryLink = '/smart-lighting-system';
      imageFolder = 'smart-lighting';
    }
    
    acc[String(id)] = {
      name: `产品${id}`,
      category,
      categoryLink,
      image: `/images/${imageFolder}/product${id}.jpg`,
      params: [
        { label: '产品型号', value: `DSA-${String(id).padStart(3, '0')}` },
        { label: '产品类别', value: category },
        { label: '产品状态', value: '在售' },
      ]
    };
    
    return acc;
  }, {} as typeof productDetailsData),
}
