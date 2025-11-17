"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { siteConfig } from "@/config/site-config"
import { Lightbulb, Users, GraduationCap, Scale } from "lucide-react"

export default function TalentPhilosophyPage() {
  const philosophyCards = [
    {
      icon: Lightbulb,
      title: "重视创新",
      description: "我们鼓励员工勇于创新，敢于突破，将创意转化为实际价值，为企业发展注入源源不断的活力。"
    },
    {
      icon: Users,
      title: "团队协作",
      description: "我们倡导开放协作的团队文化，相信集体的智慧大于个人，鼓励跨部门合作，共同成长。"
    },
    {
      icon: GraduationCap,
      title: "持续学习",
      description: "我们支持员工不断学习和成长，提供多样化的培训机会，助力员工提升专业技能和综合素养。"
    },
    {
      icon: Scale,
      title: "公平公正",
      description: "我们建立公平公正的人才选拔和晋升机制，让每位员工都能在平等的环境中展示自己的才能。"
    }
  ]

  const coreValues = [
    {
      title: "诚信",
      description: "诚实正直，言出必行，以诚信为本，建立互信关系"
    },
    {
      title: "责任",
      description: "勇于担当，主动作为，对工作负责，对团队负责"
    },
    {
      title: "专业",
      description: "精益求精，追求卓越，不断提升专业能力和服务水平"
    },
    {
      title: "创新",
      description: "突破常规，与时俱进，以创新思维推动企业发展"
    }
  ]

  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* 页面头部 */}
      <section className="philosophy-banner text-center relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #003366 0%, #0066cc 100%)',
        color: 'white',
        paddingTop: '0px',
        paddingBottom: '120px',
        marginTop: '78px'
      }}>
        {/* 背景图片 */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: 'url(/images/banner4-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div className="container relative">
          <h1 className="text-[3.2rem] font-bold mb-[25px]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', letterSpacing: '1px', marginTop: '0' }}>人才理念</h1>
          <p className="text-[1.3rem] max-w-[850px] mx-auto opacity-95 leading-[1.8]">以人为本，成就人才，共创未来</p>
        </div>
      </section>

      {/* 主要内容区域 */}
      <main className="philosophy-content py-[100px]" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <section className="philosophy-section bg-white rounded-[12px] p-[80px] relative overflow-hidden border border-[#eaeaea]" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            {/* 顶部蓝色细条 */}
            <div className="absolute top-0 left-0 right-0 h-[5px]" style={{ background: 'linear-gradient(90deg, #003366, #0066cc)' }} />
            {/* 人才观标题 */}
            <div className="philosophy-title text-center mb-[60px] relative">
              <h2 className="text-[2.2rem] font-bold mb-[20px]" style={{ color: '#003366' }}>我们的人才观</h2>
              <p className="text-[1.1rem] max-w-[800px] mx-auto" style={{ color: siteConfig.colors.textSecondary }}>
                德视安始终坚持以人为本的管理理念，尊重人才、培养人才、成就人才
              </p>
              {/* 下划线 */}
              <div className="w-[80px] h-[3px] mx-auto mt-[20px]" style={{ background: '#0066cc' }} />
            </div>
            
            {/* 人才理念卡片 */}
            <div className="philosophy-cards grid gap-[30px] mb-[80px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {philosophyCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <div key={index} className="philosophy-card rounded-[10px] text-center transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:border-[#0066cc] border border-[#eaeaea] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', padding: '40px 30px' }}>
                    {/* 顶部蓝色细条 */}
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, #0066cc, #003366)' }} />
                    <div className="card-icon mb-[25px]">
                      <Icon className="w-16 h-16 mx-auto" style={{ color: siteConfig.colors.primary }} />
                    </div>
                    <h3 className="text-[1.5rem] font-semibold mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{card.title}</h3>
                    <p className="text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>{card.description}</p>
                  </div>
                )
              })}
            </div>
            
            {/* 核心价值观 */}
            <div className="values-section mb-[60px]">
              <div className="values-title text-center mb-[40px]">
                <h3 className="text-[2rem] font-semibold" style={{ color: siteConfig.colors.foreground }}>核心价值观</h3>
              </div>
              
              <div className="values-list grid gap-[30px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                {coreValues.map((value, index) => (
                  <div key={index} className="value-item bg-white p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)' }}>
                    <h4 className="text-[1.3rem] font-semibold mb-[10px]" style={{ color: siteConfig.colors.primary }}>{value.title}</h4>
                    <p className="text-[15px] leading-[1.6]" style={{ color: siteConfig.colors.textSecondary }}>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 企业文化 */}
            <div className="culture-section mt-[80px] p-[60px] rounded-[10px] text-center border border-[#e3f2fd]" style={{ background: 'linear-gradient(135deg, #f0f8ff 0%, #ffffff 100%)' }}>
              <h3 className="text-[1.8rem] font-semibold mb-[25px]" style={{ color: '#003366' }}>企业文化</h3>
              <p className="text-[1.05rem] leading-[1.8] max-w-[800px] mx-auto" style={{ color: '#555' }}>
                德视安致力于打造积极向上、开放包容的企业文化，我们尊重每位员工的个性和想法，鼓励大家在工作中发挥创造力。我们相信，一个充满活力和凝聚力的团队，才能不断创造卓越的业绩，为客户提供更优质的产品和服务。在德视安，我们不仅关注企业的发展，更关注每位员工的成长和幸福，努力构建企业与员工共同发展的双赢格局。
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}

