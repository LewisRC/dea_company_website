"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"
import { useI18n } from "@/lib/i18n-context"
import { Heart, CheckCircle } from "lucide-react"
import { useEffect } from "react"

export default function SmartHealthcarePage() {
  const { t } = useI18n()
  
  const features = [
    {
      icon: Heart,
      titleKey: "smartHealthcare.feature1Title",
      descKey: "smartHealthcare.feature1Desc"
    }
  ]

  const advantages = [
    { titleKey: "smartHealthcare.adv1Title", descKey: "smartHealthcare.adv1Desc" },
    { titleKey: "smartHealthcare.adv2Title", descKey: "smartHealthcare.adv2Desc" },
    { titleKey: "smartHealthcare.adv3Title", descKey: "smartHealthcare.adv3Desc" },
    { titleKey: "smartHealthcare.adv4Title", descKey: "smartHealthcare.adv4Desc" },
    { titleKey: "smartHealthcare.adv5Title", descKey: "smartHealthcare.adv5Desc" },
    { titleKey: "smartHealthcare.adv6Title", descKey: "smartHealthcare.adv6Desc" }
  ]

  const applications = [
    { image: "/images/solution/solution2/yly.jpeg", key: "smartHealthcare.app1" },
    { image: "/images/solution/solution2/kfzx.jpeg", key: "smartHealthcare.app2" },
    { image: "/images/solution/solution2/lngy.jpeg", key: "smartHealthcare.app3" },
    { image: "/images/solution/solution2/sqylzx.jpeg", key: "smartHealthcare.app4" }
  ]
  
  useEffect(() => {
    document.title = t('smartHealthcare.title') + " - 德视安"
  }, [t])

  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* 解决方案英雄区 */}
      <section className="solution-hero" style={{
        background: `linear-gradient(135deg, #0099cc 0%, #006699 100%),
                    linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
        backgroundSize: '100% 100%, 30px 30px, 30px 30px',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center',
        marginTop: '78px'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginTop: '0', marginBottom: '20px', fontWeight: 'bold' }}>{t('smartHealthcare.title')}</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>{t('smartHealthcare.hero')}</p>
        </div>
      </section>

      {/* 解决方案内容 */}
      <section className="solution-content" style={{ padding: '60px 0' }}>
        <div className="container">
          {/* 解决方案概述 */}
          <div className="solution-overview flex flex-wrap justify-between items-center mb-[60px] gap-8">
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-[2rem] mb-[20px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartHealthcare.overview')}</h2>
              <p className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                {t('smartHealthcare.overview1')}
              </p>
              <p className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                {t('smartHealthcare.overview2')}
              </p>
            </div>
            <div className="flex-1 min-w-[300px]">
              <Image
                src="/images/solution/solution2/solution2.jpg"
                alt="智慧康养解决方案概述"
                width={600}
                height={400}
                className="w-full rounded-[8px]"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', opacity: 1 }}
              />
            </div>
          </div>

          {/* 核心功能 */}
          <div className="solution-features my-[60px]">
            <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartHealthcare.features')}</h2>
            <div className="feature-grid flex justify-center">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9', maxWidth: '500px' }}>
                    <Icon className="w-10 h-10 mb-[20px]" style={{ color: siteConfig.colors.primary, fontSize: '2.5rem' }} />
                    <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{t(feature.titleKey)}</h3>
                    <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{t(feature.descKey)}</p>
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
          <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartHealthcare.advantages')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="advantage-list list-none p-0">
                {advantages.slice(0, 3).map((advantage, index) => (
                  <li key={index} className="py-[15px] border-b flex items-start" style={{ borderColor: '#e0e0e0' }}>
                    <CheckCircle className="w-5 h-5 mr-[15px] mt-[5px] flex-shrink-0" style={{ color: siteConfig.colors.primary }} />
                    <div>
                      <strong style={{ color: siteConfig.colors.foreground }}>{t(advantage.titleKey)}</strong>
                      <p className="mt-[5px]" style={{ color: siteConfig.colors.textSecondary }}>{t(advantage.descKey)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="advantage-list list-none p-0">
                {advantages.slice(3, 6).map((advantage, index) => (
                  <li key={index} className="py-[15px] border-b flex items-start" style={{ borderColor: '#e0e0e0' }}>
                    <CheckCircle className="w-5 h-5 mr-[15px] mt-[5px] flex-shrink-0" style={{ color: siteConfig.colors.primary }} />
                    <div>
                      <strong style={{ color: siteConfig.colors.foreground }}>{t(advantage.titleKey)}</strong>
                      <p className="mt-[5px]" style={{ color: siteConfig.colors.textSecondary }}>{t(advantage.descKey)}</p>
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
          <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartHealthcare.applications')}</h2>
          <div className="application-cases grid gap-[20px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {applications.map((app, index) => (
              <div key={index} className="case-item text-center">
                <Image
                  src={app.image}
                  alt={t(app.key)}
                  width={300}
                  height={200}
                  className="w-full rounded-[8px] mb-[15px]"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <h3 style={{ color: siteConfig.colors.foreground, fontWeight: 'normal', fontFamily: '黑体' }}>{t(app.key)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="solution-contact py-[60px] text-center" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <h2 className="mb-[20px]" style={{ color: '#333' }}>{t('smartHealthcare.contactTitle')}</h2>
          <p className="mb-[30px]" style={{ color: '#666' }}>{t('smartHealthcare.contactDesc')}</p>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
