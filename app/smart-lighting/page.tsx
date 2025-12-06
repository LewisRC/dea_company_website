"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"
import { useI18n } from "@/lib/i18n-context"
import { Lightbulb, Wand2, Clock, User, Smartphone, TrendingUp, CheckCircle } from "lucide-react"
import { useEffect } from "react"

export default function SmartLightingPage() {
  const { t } = useI18n()
  
  const features = [
    { icon: Lightbulb, titleKey: "smartLighting.feature1Title", descKey: "smartLighting.feature1Desc" },
    { icon: Wand2, titleKey: "smartLighting.feature2Title", descKey: "smartLighting.feature2Desc" },
    { icon: Clock, titleKey: "smartLighting.feature3Title", descKey: "smartLighting.feature3Desc" },
    { icon: User, titleKey: "smartLighting.feature4Title", descKey: "smartLighting.feature4Desc" },
    { icon: Smartphone, titleKey: "smartLighting.feature5Title", descKey: "smartLighting.feature5Desc" },
    { icon: TrendingUp, titleKey: "smartLighting.feature6Title", descKey: "smartLighting.feature6Desc" }
  ]

  const advantages = [
    { titleKey: "smartLighting.adv1Title", descKey: "smartLighting.adv1Desc" },
    { titleKey: "smartLighting.adv2Title", descKey: "smartLighting.adv2Desc" },
    { titleKey: "smartLighting.adv3Title", descKey: "smartLighting.adv3Desc" },
    { titleKey: "smartLighting.adv4Title", descKey: "smartLighting.adv4Desc" },
    { titleKey: "smartLighting.adv5Title", descKey: "smartLighting.adv5Desc" },
    { titleKey: "smartLighting.adv6Title", descKey: "smartLighting.adv6Desc" }
  ]

  const applications = [
    { image: "/images/bo.jpeg", key: "smartLighting.app1" },
    { image: "/images/rm.jpeg", key: "smartLighting.app2" },
    { image: "/images/smh.jpeg", key: "smartLighting.app3" },
    { image: "/images/pb.jpeg", key: "smartLighting.app4" }
  ]
  
  useEffect(() => {
    document.title = t('smartLighting.title') + " - 德视安"
  }, [t])

  return (
    <div className="relative min-h-screen">
      <Header />
      
      <section className="solution-hero" style={{
        background: 'linear-gradient(135deg, #00cc66 0%, #006633 100%)',
        color: 'white',
        paddingTop: '0px',
        paddingBottom: '80px',
        textAlign: 'center',
        marginTop: '78px'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginTop: '0', marginBottom: '20px', fontWeight: 'bold' }}>{t('smartLighting.title')}</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>{t('smartLighting.hero')}</p>
        </div>
      </section>

      <section className="solution-content" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="solution-overview flex flex-wrap justify-between items-center mb-[60px] gap-8">
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-[2rem] mb-[20px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartLighting.overview')}</h2>
              <p className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                {t('smartLighting.overview1')}
              </p>
              <p className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                {t('smartLighting.overview2')}
              </p>
            </div>
            <div className="flex-1 min-w-[300px]">
              <Image
                src="/images/solution3-1.jpg"
                alt={t('smartLighting.title')}
                width={600}
                height={400}
                className="w-full rounded-[8px]"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          <div className="solution-features my-[60px]">
            <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartLighting.features')}</h2>
            <div className="feature-grid grid gap-[30px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                    <Icon className="w-10 h-10 mb-[20px]" style={{ color: '#00cc66', fontSize: '2.5rem' }} />
                    <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{t(feature.titleKey)}</h3>
                    <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{t(feature.descKey)}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="solution-advantages py-[60px]" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartLighting.advantages')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="advantage-list list-none p-0">
                {advantages.slice(0, 3).map((advantage, index) => (
                  <li key={index} className="py-[15px] border-b flex items-start" style={{ borderColor: '#e0e0e0' }}>
                    <CheckCircle className="w-5 h-5 mr-[15px] mt-[5px] flex-shrink-0" style={{ color: '#00cc66' }} />
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
                    <CheckCircle className="w-5 h-5 mr-[15px] mt-[5px] flex-shrink-0" style={{ color: '#00cc66' }} />
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

      <section className="solution-applications py-[60px]">
        <div className="container">
          <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartLighting.applications')}</h2>
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
                <h3 style={{ color: siteConfig.colors.foreground }}>{t(app.key)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-contact py-[60px] text-center" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container">
          <h2 className="mb-[20px]" style={{ color: '#333' }}>{t('smartLighting.contactTitle')}</h2>
          <p className="mb-[30px]" style={{ color: '#666' }}>{t('smartLighting.contactDesc')}</p>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
