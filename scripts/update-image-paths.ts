import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🔄 更新图片路径...')

  // 更新轮播图
  await prisma.carousel.update({
    where: { id: 1 },
    data: {
      image: '/images/banner-CH/banner1-ch.jpg',
      imageEn: '/images/banner-EN/banner1-en.jpg'
    }
  })

  await prisma.carousel.update({
    where: { id: 2 },
    data: {
      image: '/images/banner-CH/banner2-ch.jpg',
      imageEn: '/images/banner-EN/banner2-en.jpg'
    }
  })

  await prisma.carousel.update({
    where: { id: 3 },
    data: {
      image: '/images/banner-CH/banner3-ch.jpg',
      imageEn: '/images/banner-EN/banner3-en.jpg'
    }
  })

  console.log('✅ 轮播图路径更新完成')

  // 更新案例
  await prisma.case.update({
    where: { id: 1 },
    data: {
      image: '/images/case/case1.jpg'
    }
  })

  await prisma.case.update({
    where: { id: 2 },
    data: {
      image: '/images/case/case2.jpg'
    }
  })

  await prisma.case.update({
    where: { id: 3 },
    data: {
      image: '/images/case/case3.jpg'
    }
  })

  console.log('✅ 案例图片路径更新完成')

  // 显示更新后的结果
  const carousels = await prisma.carousel.findMany()
  const cases = await prisma.case.findMany()

  console.log('\n📊 更新结果:')
  console.log('轮播图:')
  carousels.forEach(c => {
    console.log(`  ${c.id}. ${c.title}`)
    console.log(`     中文: ${c.image}`)
    console.log(`     英文: ${c.imageEn}`)
  })

  console.log('\n案例:')
  cases.forEach(c => {
    console.log(`  ${c.id}. ${c.title}`)
    console.log(`     图片: ${c.image}`)
  })

  console.log('\n✅ 所有图片路径已更新！')
}

main()
  .catch((e) => {
    console.error('❌ 更新失败:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

