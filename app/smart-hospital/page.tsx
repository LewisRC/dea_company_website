"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"
import { MessageSquare, Phone, Wifi, Syringe, UserCog, Clock, Ticket, Megaphone, CheckCircle } from "lucide-react"

export default function SmartHospitalPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "数字医护对讲系统",
      description: "基于IP网络，实现病床、医护站、移动终端间高清音视频对讲及信息联动，提升医护响应效率与服务质量。"
    },
    {
      icon: Phone,
      title: "二线医护对讲系统",
      description: "采用二线制总线设计，集成护士站、病房床头、卫生间与门灯等终端，实现病区全覆盖呼叫与对讲，布线简洁，稳定可靠。"
    },
    {
      icon: Wifi,
      title: "无线呼叫系统",
      description: "基于无线网络与云平台，集成语音、视频和数据通信，实现中心与终端间的远程呼叫与对讲，部署灵活，适用于多种智慧医护场景。"
    },
    {
      icon: Syringe,
      title: "无线输液呼叫系统",
      description: "通过无线输液呼叫器、接收机与信号增强器组网，结合手机端管理软件，实现对输液状态的远程监控与及时告警，提升输液安全与管理效率。"
    },
    {
      icon: UserCog,
      title: "手术/探视对讲系统",
      description: "专为手术室洁净区与外部隔离区设计，实现内外双向高清音视频通话与探视，在保障手术环境无菌的同时，确保沟通及时顺畅。"
    },
    {
      icon: Clock,
      title: "数字时钟系统",
      description: "确保多终端时间一致，集成校准/提醒/发布功能，优化时间管理效率。"
    },
    {
      icon: Ticket,
      title: "排队叫号系统",
      description: "通过智能排队管理，实现患者自助取号、叫号显示、语音播报等功能，优化就诊流程，减少患者等待时间，提升就医体验。"
    },
    {
      icon: Megaphone,
      title: "信息发布系统",
      description: "基于数字标牌技术，实现医院各类信息的实时发布与管理，包括就诊指引、公告通知、健康教育等内容，提升信息传播效率。"
    }
  ]

  const advantages = [
    {
      title: "提升医护响应效率",
      description: "通过数字医护对讲系统和无线呼叫系统，实现快速响应，缩短医护人员到达时间，提高急救成功率。"
    },
    {
      title: "保障医疗安全",
      description: "无线输液呼叫系统实时监控输液状态，及时告警，有效预防输液异常情况发生，提升患者安全保障。"
    },
    {
      title: "优化就诊流程",
      description: "排队叫号系统实现患者自助取号、智能分流，减少等待时间，提高就诊效率，改善就医体验。"
    },
    {
      title: "增强沟通协作",
      description: "手术/探视对讲系统和二线医护对讲系统确保医患沟通顺畅，医护团队协作高效，提升医疗服务质量。"
    },
    {
      title: "精准时间管理",
      description: "数字时钟系统确保医院各区域时间同步，配合提醒功能，优化医疗流程时间节点管理，提高工作效率。"
    },
    {
      title: "智能信息管理",
      description: "信息发布系统实现医院各类信息实时发布与管理，数据可视化平台为医院管理层提供决策支持。"
    }
  ]

  const applications = [
    { image: "/images/gh.jpeg", title: "综合医院" },
    { image: "/images/sh.jpeg", title: "专科医院" },
    { image: "/images/chc.jpeg", title: "社区医院" },
    { image: "/images/rehab.jpeg", title: "康复医院" }
  ]

  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* 解决方案英雄区 */}
      <section className="solution-hero" style={{
        background: 'linear-gradient(135deg, #0066cc 0%, #003366 100%)',
        color: 'white',
        paddingTop: '0px',
        paddingBottom: '80px',
        textAlign: 'center',
        marginTop: '78px'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginTop: '0', marginBottom: '20px', fontWeight: 'bold' }}>智慧医院解决方案</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>通过连接医院HIS系统，德视安提供了一套完整的智慧化解决方案。</p>
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
                德视安从医院顶层设计出发，以智慧病房为起点，全面推进智慧医业和建设，致力于满足医护人员、患及医院管理层的多方需求。
              </p>
              <p className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                该解决方案采用先进的物联网、云计算、大数据和人工智能技术，实现医院各系统间的互联互通和协同工作，提升医院管理效率，降低运营成本，增强医疗服务品质。
              </p>
            </div>
            <div className="flex-1 min-w-[300px]">
              <Image
                src="/images/solution1-1.jpg"
                alt="智慧医院解决方案概述"
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
                    <Icon className="w-10 h-10 mb-[20px]" style={{ color: siteConfig.colors.primary }} />
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
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-list">
                <div className="py-[15px] border-b flex items-start" style={{ borderColor: '#e0e0e0' }}>
                  <CheckCircle className="w-5 h-5 mr-[15px] mt-[5px]" style={{ color: siteConfig.colors.primary }} />
                  <div>
                    <strong style={{ color: siteConfig.colors.foreground }}>{advantage.title}</strong>
                    <p className="mt-[5px]" style={{ color: siteConfig.colors.textSecondary }}>{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
          <p className="mb-[30px]" style={{ color: '#666' }}>如需了解更多关于德视安智慧医院解决方案的详细信息，请联系我们的销售顾问。</p>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
