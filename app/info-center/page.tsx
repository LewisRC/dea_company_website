"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { siteConfig } from "@/config/site-config"
import { useI18n } from "@/lib/i18n-context"
import Image from "next/image"
import { useEffect } from "react"

export default function InfoCenterPage() {
  const { t } = useI18n()
  
  useEffect(() => {
    document.title = t('news.title') + " - 德视安"
  }, [t])
  
  const cases = [
    {
      id: 1,
      titleKey: "news.case1Title",
      descKey: "news.case1Desc",
      image: "/images/case/case1.jpg",
      badgeKey: "news.case1Badge",
      tagsKeys: ["news.case1Tag1", "news.case1Tag2", "news.case1Tag3"]
    },
    {
      id: 2,
      titleKey: "news.case2Title",
      descKey: "news.case2Desc",
      image: "/images/case/case2.jpg",
      badgeKey: "news.case2Badge",
      tagsKeys: ["news.case2Tag1", "news.case2Tag2", "news.case2Tag3"]
    },
    {
      id: 3,
      titleKey: "news.case3Title",
      descKey: "news.case3Desc",
      image: "/images/case/case3.jpg",
      badgeKey: "news.case3Badge",
      tagsKeys: ["news.case3Tag1", "news.case3Tag2", "news.case3Tag3"]
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
          <h1 className="text-[3rem] font-bold mb-[20px]" style={{ marginTop: '0' }}>{t('news.title')}</h1>
          <p className="text-[1.2rem] max-w-[800px] mx-auto">{t('news.subtitle')}</p>
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
                    alt={t(caseItem.titleKey)}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-[1.15] hover:rotate-[2deg]"
                  />
                  <div className="case-badge absolute top-[15px] right-[15px] px-[15px] py-[5px] rounded-[4px] text-[14px] font-semibold" style={{
                    backgroundColor: siteConfig.colors.primary,
                    color: 'white'
                  }}>
                    {t(caseItem.badgeKey)}
                  </div>
                </div>
                <div className="case-content p-[30px] text-center">
                  <h3 className="text-[1.5rem] font-semibold mb-[15px]" style={{ color: '#333' }}>{t(caseItem.titleKey)}</h3>
                  <p className="text-[16px] leading-[1.8] mb-[20px]" style={{ color: '#666' }}>{t(caseItem.descKey)}</p>
                  
                  <div className="case-tags flex flex-wrap gap-[12px] justify-center">
                    {caseItem.tagsKeys.map((tagKey, index) => (
                      <span key={index} className="case-tag px-[15px] py-[5px] rounded-[25px] text-[14px] font-semibold" style={{
                        backgroundColor: 'rgba(0, 102, 204, 0.08)',
                        color: siteConfig.colors.primary
                      }}>
                        {t(tagKey)}
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
