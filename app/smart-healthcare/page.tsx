"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"
import { Heart, CheckCircle } from "lucide-react"

export default function SmartHealthcarePage() {
  const features = [
    {
      icon: Heart,
      title: "智慧康养系统",
      description: "德视安智慧康养系统整合了康养对讲、疗养管理、智能照护、信息发布、人员定位等多项功能，为康养机构提供全方位的智能化管理解决方案。系统采用先进的物联网、云计算和人工智能技术，实现康养服务的智能化、精细化和个性化，提升服务效率和老人体验。"
    }
  ]

  const advantages = [
    {
      title: "提升服务效率",
      description: "优化康养服务流程，提高护理人员工作效率，为老人提供更及时的服务。"
    },
    {
      title: "提升居住体验",
      description: "提供舒适的居住环境和智能照护服务，提升老人满意度和幸福感。"
    },
    {
      title: "保障老人安全",
      description: "实时监控和预警系统，及时发现和处理异常情况，保障老人安全。"
    },
    {
      title: "提高管理水平",
      description: "通过数据分析和可视化展示，为康养机构管理提供决策支持，提升管理精细化水平。"
    },
    {
      title: "系统集成度高",
      description: "支持与康养机构现有系统集成，实现数据共享和业务协同。"
    },
    {
      title: "扩展性强",
      description: "开放的系统架构，支持功能模块的灵活配置和扩展，满足不同场景的个性化需求。"
    }
  ]

  const applications = [
    { image: "/images/nh.jpeg", title: "养老院" },
    { image: "/images/irf.jpeg", title: "康复中心" },
    { image: "/images/src.jpeg", title: "老年公寓" },
    { image: "/images/cssc.jpeg", title: "社区养老服务中心" }
  ]

  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* 解决方案英雄区 */}
      <section className="solution-hero" style={{
        background: 'linear-gradient(135deg, #0099cc 0%, #006699 100%)',
        color: 'white',
        paddingTop: '0px',
        paddingBottom: '80px',
        textAlign: 'center',
        marginTop: '78px'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginTop: '0', marginBottom: '20px', fontWeight: 'bold' }}>智慧康养解决方案</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>德视安智慧康养系统集成 AlOT 技术通过智能设备实时监测健康数据、预警风险,结合居家安全防护(跌倒报警环境调控)与远程医疗，提供个性化健康管理方案，助力家庭、社区及机构实现高效、安全的智慧化养老。</p>
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
                德视安智慧康养解决方案通过整合康养对讲、疗养管理、智能照护、信息发布等系统，构建全方位的康养机构智能化管理平台，为康养机构提供高效、便捷、智能的信息化解决方案。
              </p>
              <p className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                该解决方案采用先进的物联网、云计算、大数据和人工智能技术，实现康养机构各系统间的互联互通和协同工作，提升康养机构管理效率，优化服务流程，改善老年人和康复者的体验。
              </p>
            </div>
            <div className="flex-1 min-w-[300px]">
              <Image
                src="/images/solution2-1.jpg"
                alt="智慧康养解决方案概述"
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
            <div className="feature-grid flex justify-center">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9', maxWidth: '500px' }}>
                    <Icon className="w-10 h-10 mb-[20px]" style={{ color: '#0099cc', fontSize: '2.5rem' }} />
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
                    <CheckCircle className="w-5 h-5 mr-[15px] mt-[5px] flex-shrink-0" style={{ color: '#0099cc' }} />
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
                    <CheckCircle className="w-5 h-5 mr-[15px] mt-[5px] flex-shrink-0" style={{ color: '#0099cc' }} />
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
          <p className="mb-[30px]" style={{ color: '#666' }}>如需了解更多关于德视安智慧康养解决方案的详细信息，请联系我们的销售顾问。</p>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
