import { PrismaClient } from '@prisma/client'
import {
  digitalMedicalProducts,
  twoWireMedicalProducts,
  wirelessCallProducts,
  wirelessInfusionProducts,
  icuVisitProducts,
  digitalClockProducts,
  queuingProducts,
  infoDisplayProducts,
  smartAgingProducts,
  smartLightingProducts
} from '../config/products-data'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 开始导入数据...')

  // 定义产品分类映射
  const productCategories = [
    { products: digitalMedicalProducts, category: '数字医护对讲系统', categoryEn: 'Digital Medical Intercom' },
    { products: twoWireMedicalProducts, category: '二线制医护对讲系统', categoryEn: 'Two-Wire Medical Intercom' },
    { products: wirelessCallProducts, category: '无线呼叫系统', categoryEn: 'Wireless Call System' },
    { products: wirelessInfusionProducts, category: '无线输液呼叫系统', categoryEn: 'Wireless Infusion Call' },
    { products: icuVisitProducts, category: 'ICU探视对讲系统', categoryEn: 'ICU Visit Intercom' },
    { products: digitalClockProducts, category: '数字时钟系统', categoryEn: 'Digital Clock System' },
    { products: queuingProducts, category: '排队叫号系统', categoryEn: 'Queuing System' },
    { products: infoDisplayProducts, category: '信息发布系统', categoryEn: 'Info Display System' },
    { products: smartAgingProducts, category: '智慧康养系统', categoryEn: 'Smart Aging System' },
    { products: smartLightingProducts, category: '智能照明系统', categoryEn: 'Smart Lighting System' }
  ]

  // 导入产品
  let totalProducts = 0
  for (const { products, category, categoryEn } of productCategories) {
    console.log(`📦 导入 ${category}: ${products.length} 个产品...`)
    for (const product of products) {
      await prisma.product.create({
        data: {
          name: product.name,
          nameEn: '', // 需要后台手动填写
          category: category,
          categoryEn: categoryEn,
          image: product.image,
          href: product.href,
          description: '',
          descriptionEn: ''
        }
      })
      totalProducts++
    }
  }
  console.log(`✅ 产品导入完成，共 ${totalProducts} 个产品`)

  // 创建示例轮播图
  console.log('🎠 创建示例轮播图...')
  await prisma.carousel.createMany({
    data: [
      {
        title: '智慧医院解决方案',
        titleEn: 'Smart Hospital Solutions',
        subtitle: '为医院提供专业的数字化对讲系统',
        subtitleEn: 'Professional digital intercom system for hospitals',
        image: '/images/banner/banner1.png',
        imageEn: '/images/banner/banner1-EN.png',
        link: '/smart-hospital',
        order: 1,
        isActive: true
      },
      {
        title: '智慧康养解决方案',
        titleEn: 'Smart Elderly Care Solutions',
        subtitle: '打造安全、便捷的智慧养老环境',
        subtitleEn: 'Create a safe and convenient smart elderly care environment',
        image: '/images/banner/banner2.png',
        imageEn: '/images/banner/banner2-EN.png',
        link: '/smart-aging-system',
        order: 2,
        isActive: true
      },
      {
        title: '智能照明解决方案',
        titleEn: 'Smart Lighting Solutions',
        subtitle: '节能环保的智能照明控制系统',
        subtitleEn: 'Energy-efficient smart lighting control system',
        image: '/images/banner/banner3.png',
        imageEn: '/images/banner/banner3-EN.png',
        link: '/smart-lighting',
        order: 3,
        isActive: true
      }
    ]
  })
  console.log('✅ 轮播图创建完成')

  // 创建示例案例
  console.log('📰 创建示例案例...')
  await prisma.case.createMany({
    data: [
      {
        title: '某三甲医院数字化对讲系统',
        titleEn: 'Digital Intercom System for a Grade-A Hospital',
        description: '为某大型三甲医院部署了全套数字化医护对讲系统，覆盖门诊、住院部、ICU等区域，显著提升了医护工作效率。',
        descriptionEn: 'Deployed a complete digital medical intercom system for a large Grade-A hospital, covering outpatient, inpatient, ICU and other areas, significantly improving medical staff efficiency.',
        image: '/images/cases/hospital-case.jpg',
        badge: '经典案例',
        badgeEn: 'Classic Case',
        tags: JSON.stringify(['医院', '数字对讲', '智慧医疗']),
        tagsEn: JSON.stringify(['Hospital', 'Digital Intercom', 'Smart Healthcare']),
        order: 1,
        isActive: true
      },
      {
        title: '养老院智慧康养系统',
        titleEn: 'Smart Elderly Care System for Nursing Home',
        description: '为某大型养老机构打造的智慧康养解决方案，实现了紧急呼叫、健康监测、生活服务等功能的智能化管理。',
        descriptionEn: 'Smart elderly care solution for a large nursing institution, implementing intelligent management of emergency calls, health monitoring, and life services.',
        image: '/images/cases/elderly-care-case.jpg',
        badge: '推荐案例',
        badgeEn: 'Featured Case',
        tags: JSON.stringify(['养老院', '智慧康养', '呼叫系统']),
        tagsEn: JSON.stringify(['Nursing Home', 'Smart Care', 'Call System']),
        order: 2,
        isActive: true
      },
      {
        title: '商业综合体智能照明系统',
        titleEn: 'Smart Lighting System for Commercial Complex',
        description: '为某大型商业综合体提供智能照明解决方案，实现节能减排的同时，提升了顾客购物体验。',
        descriptionEn: 'Smart lighting solution for a large commercial complex, achieving energy saving and emission reduction while enhancing customer shopping experience.',
        image: '/images/cases/lighting-case.jpg',
        badge: '新案例',
        badgeEn: 'New Case',
        tags: JSON.stringify(['商业', '智能照明', '节能']),
        tagsEn: JSON.stringify(['Commercial', 'Smart Lighting', 'Energy Saving']),
        order: 3,
        isActive: true
      }
    ]
  })
  console.log('✅ 案例创建完成')

  // 统计数据
  const productCount = await prisma.product.count()
  const carouselCount = await prisma.carousel.count()
  const caseCount = await prisma.case.count()

  console.log('\n📊 数据导入统计:')
  console.log(`   产品: ${productCount} 个`)
  console.log(`   轮播图: ${carouselCount} 个`)
  console.log(`   案例: ${caseCount} 个`)
  console.log('\n🎉 数据导入完成！')
}

main()
  .catch((e) => {
    console.error('❌ 数据导入失败:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

