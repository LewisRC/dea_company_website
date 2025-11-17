"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { siteConfig } from "@/config/site-config"
import { Building2, Store, Phone } from "lucide-react"

export default function ContactUsPage() {
  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* 页面头部 */}
      <section className="contact-header text-center py-[60px]" style={{
        background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, #003366 100%)`,
        color: 'white',
        marginTop: '78px'
      }}>
        <div className="container">
          <h1 className="text-[3rem] font-bold mb-[20px]">联系我们</h1>
          <p className="text-[1.2rem] max-w-[800px] mx-auto">我们致力于通过统一的服务形象和整合的多渠道资源，为您提供便捷高效的服务</p>
        </div>
      </section>

      {/* 主要内容区域 */}
      <main>
        {/* 地图模块 */}
        <section className="map-section" style={{ height: '450px', width: '100%' }}>
          <div className="map-container w-full h-full">
            <iframe 
              src="https://api.map.baidu.com/marker?location=30.649596,104.136242&title=成都德视安科技有限公司&content=成都市成华区成华大道十里店路213号龙光世纪中心&output=html&coord_type=gcj02&src=webapp.baidu.openAPIdemo"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              title="公司地址地图"
            />
          </div>
        </section>

        {/* 联系信息模块 */}
        <section className="contact-info-section py-[60px]" style={{ backgroundColor: siteConfig.colors.backgroundLight }}>
          <div className="contact-info-container container">
            <div className="contact-info-grid grid gap-[30px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {/* 生产研发中心 */}
              <div className="contact-info-item p-[30px] bg-white rounded-[8px]" style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h3 className="text-[1.5rem] mb-[20px] font-semibold" style={{ color: siteConfig.colors.primary }}>生产研发中心</h3>
                <div className="contact-details">
                  <div className="contact-detail">
                    <p className="mb-[15px] flex items-start text-[16px]" style={{ color: siteConfig.colors.foreground }}>
                      <Building2 className="w-5 h-5 mr-[10px] mt-[5px]" style={{ color: siteConfig.colors.primary }} />
                      <span>广州市经济开发区蓝玉四街九号广州科技园</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* 销售服务中心 */}
              <div className="contact-info-item p-[30px] bg-white rounded-[8px]" style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h3 className="text-[1.5rem] mb-[20px] font-semibold" style={{ color: siteConfig.colors.primary }}>销售服务中心</h3>
                <div className="contact-details">
                  <div className="contact-detail">
                    <p className="mb-[15px] flex items-start text-[16px]" style={{ color: siteConfig.colors.foreground }}>
                      <Store className="w-5 h-5 mr-[10px] mt-[5px]" style={{ color: siteConfig.colors.primary }} />
                      <span>成都市成华区成华大道十里店路213号龙光世纪中心</span>
                    </p>
                  </div>
                  <div className="contact-detail">
                    <p className="mb-[15px] flex items-start text-[16px]" style={{ color: siteConfig.colors.foreground }}>
                      <Phone className="w-5 h-5 mr-[10px] mt-[5px]" style={{ color: siteConfig.colors.primary }} />
                      <span>028-85251272</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
