"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { siteConfig } from "@/config/site-config"
import { useI18n } from "@/lib/i18n-context"
import { Building2, Store, Phone } from "lucide-react"
import { useEffect } from "react"

export default function ContactUsPage() {
  const { t } = useI18n()
  
  useEffect(() => {
    document.title = t('contactUs.title') + " - 德视安"
  }, [t])
  
  return (
    <div className="relative min-h-screen">
      <Header />
      
      <section className="contact-header py-[60px] px-5" style={{
        backgroundColor: '#f5f5f5',
        marginTop: '78px'
      }}>
        <div className="container mx-auto">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: '600', color: '#0066cc' }}>{t('contactUs.title')}</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '800px', color: '#666666' }}>{t('contactUs.getInTouch')}</p>
        </div>
      </section>

      <main>
        <section className="map-section" style={{ height: '450px', padding: '0 5%' }}>
          <div className="map-container mx-auto" style={{ width: '80%', height: '100%' }}>
            <iframe 
              src="https://api.map.baidu.com/marker?location=30.649596,104.136242&title=成都德视安科技有限公司&content=成都市成华区成华大道十里店路213号龙光世纪中心&output=html&coord_type=gcj02&src=webapp.baidu.openAPIdemo"
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              title={t('contactUs.title')}
            />
          </div>
        </section>

        <section className="contact-info-section py-[60px]" style={{ backgroundColor: siteConfig.colors.backgroundLight }}>
          <div className="contact-info-container container">
            <div className="contact-info-grid grid gap-[30px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div className="contact-info-item p-[30px] bg-white rounded-[8px]" style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h3 className="text-[1.5rem] mb-[20px] font-semibold" style={{ color: siteConfig.colors.primary }}>{t('footer.productionCenter').split('：')[0]}</h3>
                <div className="contact-details">
                  <div className="contact-detail">
                    <p className="mb-[15px] flex items-start text-[16px]" style={{ color: siteConfig.colors.foreground }}>
                      <Building2 className="w-5 h-5 mr-[10px] mt-[5px]" style={{ color: siteConfig.colors.primary }} />
                      <span>{t('footer.productionCenter').split('：')[1]}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-info-item p-[30px] bg-white rounded-[8px]" style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h3 className="text-[1.5rem] mb-[20px] font-semibold" style={{ color: siteConfig.colors.primary }}>{t('footer.salesCenter').split('：')[0]}</h3>
                <div className="contact-details">
                  <div className="contact-detail">
                    <p className="mb-[15px] flex items-start text-[16px]" style={{ color: siteConfig.colors.foreground }}>
                      <Store className="w-5 h-5 mr-[10px] mt-[5px]" style={{ color: siteConfig.colors.primary }} />
                      <span>{t('footer.salesCenter').split('：')[1]}</span>
                    </p>
                  </div>
                  <div className="contact-detail">
                    <p className="mb-[15px] flex items-start text-[16px]" style={{ color: siteConfig.colors.foreground }}>
                      <Phone className="w-5 h-5 mr-[10px] mt-[5px]" style={{ color: siteConfig.colors.primary }} />
                      <span>{t('footer.phone')}: 028-85251272</span>
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
