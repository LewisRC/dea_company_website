import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('开始更新CMS数据...')

  // 1. 添加第5张轮播图
  console.log('\n添加第5张轮播图...')
  try {
    const carousel5 = await prisma.carousel.upsert({
      where: { id: 5 },
      update: {
        title: '智慧社区',
        titleEn: 'Smart Community',
        subtitle: '德视安智慧社区解决方案，打造安全、便捷、智能的现代社区生活环境',
        subtitleEn: 'Deshian Smart Community Solution',
        image: '/images/banner-CH/banner5-ch.jpg',
        imageEn: '/images/banner-EN/banner5-en.jpg',
        link: '/smart-community',
        order: 5,
        isActive: true
      },
      create: {
        id: 5,
        title: '智慧社区',
        titleEn: 'Smart Community',
        subtitle: '德视安智慧社区解决方案，打造安全、便捷、智能的现代社区生活环境',
        subtitleEn: 'Deshian Smart Community Solution',
        image: '/images/banner-CH/banner5-ch.jpg',
        imageEn: '/images/banner-EN/banner5-en.jpg',
        link: '/smart-community',
        order: 5,
        isActive: true
      }
    })
    console.log('✓ 第5张轮播图添加成功:', carousel5.title)
  } catch (error) {
    console.error('✗ 添加第5张轮播图失败:', error)
  }

  // 2. 更新4个案例
  console.log('\n更新案例数据...')
  
  const casesData = [
    {
      id: 1,
      title: '四川眉山岷东养护中心 - 智慧康养典范',
      titleEn: 'Sichuan Meishan Mindong Care Center - Smart Healthcare Model',
      description: '为四川眉山岷东养护中心构建"全时守护，智享康养"一体化解决方案，深度融合智能监测、健康管理与应急响应系统，覆盖生活照料、安全监护、健康关怀等场景，打造安全、舒适、智能的现代康养生活新标杆。',
      descriptionEn: 'Build an integrated "24/7 care, smart healthcare" solution for Mindong Care Center, deeply integrating intelligent monitoring, health management and emergency response systems.',
      image: '/images/case/case1.jpg',
      badge: null,
      badgeEn: null,
      tags: '["智慧康养", "智能监测", "安全监护", "健康管理", "应急响"]',
      tagsEn: '["Smart Healthcare", "Intelligent Monitoring", "Safety Care", "Health Management", "Emergency"]',
      order: 1,
      isActive: true
    },
    {
      id: 2,
      title: '绵竹中医院新院-智慧化升级项目',
      titleEn: 'Mianzhu TCM Hospital New Campus - Smart Upgrade Project',
      description: '全面部署智慧医院系统，实现中医特色诊疗智能化、医护协同高效化、物流配送自动化及患者服务全程数字化，显著提升医疗质量与运营效率。',
      descriptionEn: 'Comprehensive deployment of smart hospital systems, achieving intelligent TCM diagnosis, efficient medical collaboration, automated logistics and fully digitalized patient services.',
      image: '/images/case/case2.jpg',
      badge: null,
      badgeEn: null,
      tags: '["中医智能化", "医护对讲", "智能物流", "数字化服务"]',
      tagsEn: '["TCM Intelligence", "Medical Intercom", "Smart Logistics", "Digital Services"]',
      order: 2,
      isActive: true
    },
    {
      id: 3,
      title: '河北张北妇幼保健院 - 智慧新院基石',
      titleEn: 'Hebei Zhangbei Maternal and Child Health Hospital - Smart Foundation',
      description: '为张北妇幼保健院异地新建项目构建全院智慧化平台，融合前沿信息基础设施与妇幼专科业务，打造覆盖楼宇、病房及远程服务的整合方案，树立县域妇幼健康服务数字化新标杆。',
      descriptionEn: 'Build a hospital-wide smart platform for Zhangbei MCH Hospital new campus, integrating cutting-edge IT infrastructure with maternal and child health services.',
      image: '/images/case/case3.jpg',
      badge: null,
      badgeEn: null,
      tags: '["智慧妇幼", "新院建设", "专科信息化", "远程医疗", "智慧病房"]',
      tagsEn: '["Smart MCH", "New Campus", "Specialized IT", "Telemedicine", "Smart Ward"]',
      order: 3,
      isActive: true
    },
    {
      id: 4,
      title: '电子科技大学海南陵水分校 - 智慧校园标杆',
      titleEn: 'UESTC Hainan Lingshui Campus - Green Smart Campus Model',
      description: '为其打造智慧建筑整体方案，构建以智能运营中心为核心的智慧校园平台，深度融合BIM与物联网技术，实现安全、高效、绿色的校园管理与服务。',
      descriptionEn: 'Create a smart building solution, build a smart campus platform centered on intelligent operation center, deeply integrating BIM and IoT technology.',
      image: '/images/case/case4.jpg',
      badge: null,
      badgeEn: null,
      tags: '["智慧校园", "BIM融合", "绿色运营"]',
      tagsEn: '["Smart Campus", "BIM Integration", "Green Operation"]',
      order: 4,
      isActive: true
    }
  ]

  for (const caseData of casesData) {
    try {
      const result = await prisma.case.upsert({
        where: { id: caseData.id },
        update: caseData,
        create: caseData
      })
      console.log(`✓ 案例 ${caseData.id} 更新成功: ${result.title}`)
    } catch (error) {
      console.error(`✗ 案例 ${caseData.id} 更新失败:`, error)
    }
  }

  console.log('\n✅ CMS数据更新完成！')
}

main()
  .catch((e) => {
    console.error('❌ 更新失败:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

