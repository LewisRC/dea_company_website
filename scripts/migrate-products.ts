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

const categoryMap: Record<string, string> = {
  digitalMedical: '数字医护对讲系统',
  twoWireMedical: '二线制医护对讲系统',
  wirelessCall: '无线呼叫系统',
  wirelessInfusion: '无线输液呼叫',
  icuVisit: 'ICU探视对讲',
  digitalClock: '数字时钟系统',
  queuing: '排队叫号系统',
  infoDisplay: '信息发布系统',
  smartAging: '智慧康养系统',
  smartLighting: '智能照明系统'
}

async function main() {
  console.log('开始迁移产品数据...')

  // 清空现有产品
  await prisma.product.deleteMany({})
  console.log('已清空现有产品')

  const allProducts = [
    { products: digitalMedicalProducts, category: categoryMap.digitalMedical },
    { products: twoWireMedicalProducts, category: categoryMap.twoWireMedical },
    { products: wirelessCallProducts, category: categoryMap.wirelessCall },
    { products: wirelessInfusionProducts, category: categoryMap.wirelessInfusion },
    { products: icuVisitProducts, category: categoryMap.icuVisit },
    { products: digitalClockProducts, category: categoryMap.digitalClock },
    { products: queuingProducts, category: categoryMap.queuing },
    { products: infoDisplayProducts, category: categoryMap.infoDisplay },
    { products: smartAgingProducts, category: categoryMap.smartAging },
    { products: smartLightingProducts, category: categoryMap.smartLighting }
  ]

  let totalCount = 0

  for (const { products, category } of allProducts) {
    for (const product of products) {
      await prisma.product.create({
        data: {
          name: product.name,
          category: category,
          image: product.image,
          href: product.href
        }
      })
      totalCount++
    }
    console.log(`已导入 ${category}: ${products.length} 个产品`)
  }

  console.log(`\n✅ 迁移完成！总共导入 ${totalCount} 个产品`)
}

main()
  .catch((e) => {
    console.error('迁移失败:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

