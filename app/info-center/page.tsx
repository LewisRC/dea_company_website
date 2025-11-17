"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { siteConfig } from "@/config/site-config"
import Image from "next/image"

export default function InfoCenterPage() {
  const cases = [
    {
      id: 1,
      title: "眉山东坡耘心养老项目",
      description: "德视安智慧康养解决方案助力东坡区耘心养老项目实现全面智能化，构建了完善的养老服务体系。",
      image: "/images/case/case1.jpg",
      badge: "智慧康养",
      tags: ["智慧康养", "呼叫系统", "智能安防"]
    },
    {
      id: 2,
      title: "凉山彝族自治州智能安防项目",
      description: "德视安智能安防/管控设备在凉山彝族自治州的紧急部署，20天完成安装调试，展现高效服务能力。",
      image: "/images/case/case2.jpg",
      badge: "智能安防",
      tags: ["智能安防", "紧急部署", "管控系统"]
    },
    {
      id: 3,
      title: "成都三甲医院智慧医疗系统",
      description: "为成都某三甲医院提供全套数字医护对讲系统解决方案，提升医疗服务效率和患者体验。",
      image: "/images/case/case3.jpg",
      badge: "智慧医疗",
      tags: ["智慧医疗", "医护对讲", "医院信息化"]
    }
  ]

  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* 页面头部 */}
      <section className="info-center-header text-center" style={{
        background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, #003366 100%)`,
        color: 'white',
        paddingTop: '0px',
        paddingBottom: '80px',
        marginTop: '78px'
      }}>
        <div className="container">
          <h1 className="text-[3rem] font-bold mb-[20px]" style={{ marginTop: '0' }}>经典成功案例</h1>
          <p className="text-[1.2rem] max-w-[800px] mx-auto">探索德视安科技在智慧康养、智能客控领域的标杆项目，见证我们的专业实力</p>
        </div>
      </section>

      {/* 主要内容区域 */}
      <main className="py-[80px]" style={{ backgroundColor: siteConfig.colors.backgroundLight }}>
        <div className="container">
          <div className="case-grid grid gap-[30px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {cases.map((caseItem) => (
              <div key={caseItem.id} className="case-card bg-white rounded-[8px] overflow-hidden transition-all duration-300 hover:-translate-y-[15px] hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                <div className="case-image relative" style={{ height: '200px' }}>
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-[1.15] hover:rotate-[2deg]"
                  />
                  <div className="case-badge absolute top-[15px] right-[15px] px-[15px] py-[5px] rounded-[4px] text-[14px] font-semibold" style={{
                    backgroundColor: siteConfig.colors.primary,
                    color: 'white'
                  }}>
                    {caseItem.badge}
                  </div>
                </div>
                <div className="case-content p-[30px] text-center">
                  <h3 className="text-[1.5rem] font-semibold mb-[15px]" style={{ color: '#333' }}>{caseItem.title}</h3>
                  <p className="text-[16px] leading-[1.8] mb-[20px]" style={{ color: '#666' }}>{caseItem.description}</p>
                  
                  <div className="case-tags flex flex-wrap gap-[12px] justify-center">
                    {caseItem.tags.map((tag, index) => (
                      <span key={index} className="case-tag px-[15px] py-[5px] rounded-[25px] text-[14px] font-semibold" style={{
                        backgroundColor: 'rgba(0, 102, 204, 0.08)',
                        color: siteConfig.colors.primary
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
