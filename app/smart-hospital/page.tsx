"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"
import { useI18n } from "@/lib/i18n-context"
import { MessageSquare, Phone, Wifi, Syringe, UserCog, Clock, Ticket, Megaphone, CheckCircle } from "lucide-react"
import { useEffect } from "react"

export default function SmartHospitalPage() {
  const { t } = useI18n()
  const features = [
    {
      icon: MessageSquare,
      titleKey: "smartHospital.feature1Title",
      descKey: "smartHospital.feature1Desc"
    },
    {
      icon: Phone,
      titleKey: "smartHospital.feature2Title",
      descKey: "smartHospital.feature2Desc"
    },
    {
      icon: Wifi,
      titleKey: "smartHospital.feature3Title",
      descKey: "smartHospital.feature3Desc"
    },
    {
      icon: Syringe,
      titleKey: "smartHospital.feature4Title",
      descKey: "smartHospital.feature4Desc"
    },
    {
      icon: UserCog,
      titleKey: "smartHospital.feature5Title",
      descKey: "smartHospital.feature5Desc"
    },
    {
      icon: Clock,
      titleKey: "smartHospital.feature6Title",
      descKey: "smartHospital.feature6Desc"
    },
    {
      icon: Ticket,
      titleKey: "smartHospital.feature7Title",
      descKey: "smartHospital.feature7Desc"
    },
    {
      icon: Megaphone,
      titleKey: "smartHospital.feature8Title",
      descKey: "smartHospital.feature8Desc"
    }
  ]

  const advantages = [
    {
      titleKey: "smartHospital.adv1Title",
      descKey: "smartHospital.adv1Desc"
    },
    {
      titleKey: "smartHospital.adv2Title",
      descKey: "smartHospital.adv2Desc"
    },
    {
      titleKey: "smartHospital.adv3Title",
      descKey: "smartHospital.adv3Desc"
    },
    {
      titleKey: "smartHospital.adv4Title",
      descKey: "smartHospital.adv4Desc"
    },
    {
      titleKey: "smartHospital.adv5Title",
      descKey: "smartHospital.adv5Desc"
    },
    {
      titleKey: "smartHospital.adv6Title",
      descKey: "smartHospital.adv6Desc"
    }
  ]

  const applications = [
    { image: "/images/solution/solution1/zh.jpeg", key: "smartHospital.app1" },
    { image: "/images/solution/solution1/zk.jpeg", key: "smartHospital.app2" },
    { image: "/images/solution/solution1/sq.jpeg", key: "smartHospital.app3" },
    { image: "/images/solution/solution1/kf.jpeg", key: "smartHospital.app4" }
  ]
  
  // 动态更新页面标题
  useEffect(() => {
    document.title = t('smartHospital.title') + " - 德视安"
  }, [t])

  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* 解决方案英雄区 */}
      <section className="solution-hero" style={{
        background: `linear-gradient(135deg, #0066cc 0%, #003366 100%),
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center',
        marginTop: '78px'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginTop: '0', marginBottom: '20px', fontWeight: 'bold' }}>{t('smartHospital.title')}</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>{t('smartHospital.hero')}</p>
        </div>
      </section>

      {/* 解决方案内容 */}
      <section className="solution-content" style={{ padding: '60px 0' }}>
        <div className="container">
          {/* 解决方案概述 */}
          <div className="solution-overview flex flex-wrap justify-between items-center mb-[60px] gap-8">
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-[2rem] mb-[20px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartHospital.overview')}</h2>
              <p className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                {t('smartHospital.overview1')}
              </p>
              <p className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                {t('smartHospital.overview2')}
              </p>
            </div>
            <div className="flex-1 min-w-[300px]">
              <Image
                src="/images/solution/solution1/solution1.jpg"
                alt="智慧医院解决方案概述"
                width={600}
                height={400}
                className="w-full rounded-[8px]"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', opacity: 1 }}
              />
            </div>
          </div>

          {/* 核心功能 */}
          <div className="solution-features my-[60px]">
            <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartHospital.features')}</h2>
            <div className="feature-grid grid gap-[30px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                    <Icon className="w-10 h-10 mb-[20px]" style={{ color: siteConfig.colors.primary }} />
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
          <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartHospital.advantages')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-list">
                <div className="py-[15px] border-b flex items-start" style={{ borderColor: '#e0e0e0' }}>
                  <CheckCircle className="w-5 h-5 mr-[15px] mt-[5px]" style={{ color: siteConfig.colors.primary }} />
                  <div>
                    <strong style={{ color: siteConfig.colors.foreground }}>{t(advantage.titleKey)}</strong>
                    <p className="mt-[5px]" style={{ color: siteConfig.colors.textSecondary }}>{t(advantage.descKey)}</p>
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
          <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartHospital.applications')}</h2>
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
          <h2 className="mb-[20px]" style={{ color: '#333' }}>{t('smartHospital.contactTitle')}</h2>
          <p className="mb-[30px]" style={{ color: '#666' }}>{t('smartHospital.contactDesc')}</p>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
