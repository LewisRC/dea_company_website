"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"
import { Lightbulb, Wand2, Clock, User, Smartphone, TrendingUp, CheckCircle } from "lucide-react"

export default function SmartLightingPage() {
  const features = [
    {
      icon: Lightbulb,
      title: "智能调光控制",
      description: "支持灯光的开关、亮度调节、色温调节等功能，根据不同场景和需求提供最佳照明效果，满足各种照明需求。"
    },
    {
      icon: Wand2,
      title: "场景模式设置",
      description: "预设多种照明场景模式，如工作模式、休闲模式、观影模式等，支持一键切换，提供个性化的照明体验。"
    },
    {
      icon: Clock,
      title: "定时控制",
      description: "支持照明设备的定时开关、亮度渐变等功能，实现照明的自动化管理，提高使用便利性和节能效果。"
    },
    {
      icon: User,
      title: "感应控制",
      description: "集成人体感应、光线感应等技术，实现照明的自动开关和调节，提高使用便利性和节能效果。"
    },
    {
      icon: Smartphone,
      title: "移动终端控制",
      description: "通过手机APP实现对照明设备的远程控制和管理，支持随时随地查看和控制照明状态。"
    },
    {
      icon: TrendingUp,
      title: "能耗监测分析",
      description: "实时监测和分析照明能耗数据，提供能耗统计和优化建议，帮助用户降低能耗和运营成本。"
    }
  ]

  const advantages = [
    {
      title: "提升照明品质",
      description: "专业的照明控制提供舒适、健康的光环境，满足不同场景的照明需求。"
    },
    {
      title: "提升使用便利性",
      description: "多种智能控制方式，简单直观的操作界面，提高照明使用的便利性。"
    },
    {
      title: "显著节能效果",
      description: "通过智能调光、感应控制等技术，实现照明能源的高效利用，降低能耗30%-70%。"
    },
    {
      title: "智能场景联动",
      description: "支持与其他智能系统的联动，实现照明与安防、环境等系统的协同工作。"
    },
    {
      title: "灵活可扩展",
      description: "模块化设计，支持系统的灵活扩展和升级，适应不同规模和需求的场所。"
    },
    {
      title: "专业定制服务",
      description: "根据不同场所和用户需求，提供专业的照明方案设计和定制服务。"
    }
  ]

  const applications = [
    { image: "/images/bo.jpeg", title: "商业办公" },
    { image: "/images/rm.jpeg", title: "酒店客房" },
    { image: "/images/smh.jpeg", title: "智能家居" },
    { image: "/images/pb.jpeg", title: "公共建筑" }
  ]

  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* 解决方案英雄区 */}
      <section className="solution-hero" style={{
        background: 'linear-gradient(135deg, #00cc66 0%, #006633 100%)',
        color: 'white',
        paddingTop: '0px',
        paddingBottom: '80px',
        textAlign: 'center',
        marginTop: '78px'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginTop: '0', marginBottom: '20px', fontWeight: 'bold' }}>智能照明解决方案</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>为各类场所提供专业的智能照明控制方案，包括场景控制、自动调节、节能环保等功能</p>
        </div>
      </section>

      {/* 解决方案内容 */}
      <section className="solution-content" style={{ padding: '60px 0' }}>
        <div className="container">
          {/* 解决方案概述 */}
          <div className="solution-overview flex flex-wrap justify-between items-center mb-[60px] gap-8">
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-[2rem] mb-[20px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>解决方案概述</h2>
              <p className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                德视安智能照明解决方案为各类场所提供专业的照明控制方案，通过智能调光、场景设置、自动感应等技术，实现照明的智能化管理，打造舒适、节能、高效的光环境。
              </p>
              <p className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                该解决方案采用先进的物联网、云计算、人工智能等技术，实现对照明设备的集中控制和管理，支持多种控制方式，包括手机APP、智能面板、语音控制等，满足不同场景的照明需求。
              </p>
            </div>
            <div className="flex-1 min-w-[300px]">
              <Image
                src="/images/solution3-1.jpg"
                alt="智能照明解决方案概述"
                width={600}
                height={400}
                className="w-full rounded-[8px]"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          {/* 核心功能 */}
          <div className="solution-features my-[60px]">
            <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>核心功能</h2>
            <div className="feature-grid grid gap-[30px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                    <Icon className="w-10 h-10 mb-[20px]" style={{ color: '#00cc66', fontSize: '2.5rem' }} />
                    <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{feature.title}</h3>
                    <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 解决方案优势 */}
      <section className="solution-advantages py-[60px]" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>解决方案优势</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="advantage-list list-none p-0">
                {advantages.slice(0, 3).map((advantage, index) => (
                  <li key={index} className="py-[15px] border-b flex items-start" style={{ borderColor: '#e0e0e0' }}>
                    <CheckCircle className="w-5 h-5 mr-[15px] mt-[5px] flex-shrink-0" style={{ color: '#00cc66' }} />
                    <div>
                      <strong style={{ color: siteConfig.colors.foreground }}>{advantage.title}</strong>
                      <p className="mt-[5px]" style={{ color: siteConfig.colors.textSecondary }}>{advantage.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="advantage-list list-none p-0">
                {advantages.slice(3, 6).map((advantage, index) => (
                  <li key={index} className="py-[15px] border-b flex items-start" style={{ borderColor: '#e0e0e0' }}>
                    <CheckCircle className="w-5 h-5 mr-[15px] mt-[5px] flex-shrink-0" style={{ color: '#00cc66' }} />
                    <div>
                      <strong style={{ color: siteConfig.colors.foreground }}>{advantage.title}</strong>
                      <p className="mt-[5px]" style={{ color: siteConfig.colors.textSecondary }}>{advantage.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 应用场景 */}
      <section className="solution-applications py-[60px]">
        <div className="container">
          <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>应用场景</h2>
          <div className="application-cases grid gap-[20px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {applications.map((app, index) => (
              <div key={index} className="case-item text-center">
                <Image
                  src={app.image}
                  alt={app.title}
                  width={300}
                  height={200}
                  className="w-full rounded-[8px] mb-[15px]"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <h3 style={{ color: siteConfig.colors.foreground }}>{app.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="solution-contact py-[60px] text-center" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <h2 className="mb-[20px]" style={{ color: '#333' }}>了解更多解决方案详情</h2>
          <p className="mb-[30px]" style={{ color: '#666' }}>如需了解更多关于德视安智能照明解决方案的详细信息，请联系我们的销售顾问。</p>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
