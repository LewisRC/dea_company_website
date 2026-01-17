"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { useI18n } from "@/lib/i18n-context"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"
import { CheckCircle } from "lucide-react"

export default function SmartBuildingPage() {
  const { t } = useI18n()

  return (
    <>
      <Header />
      <main className="w-full" style={{ marginTop: '78px' }}>
        {/* Hero Section */}
        <section className="relative w-full" style={{ 
          background: `linear-gradient(135deg, #0066cc 0%, #003366 100%),
                      linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 30px 30px, 30px 30px',
          padding: '80px 0',
          color: 'white',
          textAlign: 'center'
        }}>
          <div className="container mx-auto px-5">
            <h1 style={{ fontSize: '3rem', marginTop: '0', marginBottom: '20px', fontWeight: 'bold' }}>{t('smartBuilding.title')}</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>{t('smartBuilding.hero')}</p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-[60px]">
          <div className="container mx-auto px-5">
            <div className="flex flex-col md:flex-row items-center gap-10 mb-[60px]">
              <div className="flex-1">
                <h2 className="text-[2rem] mb-[20px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartBuilding.overview')}</h2>
                <p className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                  {t('smartBuilding.overview1')}
                </p>
                <p className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                  {t('smartBuilding.overview2')}
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/images/solution/solution4/solution4.jpg"
                  alt={t('smartBuilding.title')}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                  style={{ opacity: 1 }}
                />
              </div>
            </div>

            {/* Features */}
            <div className="mt-[60px]">
              <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartBuilding.features')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                <div className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                  <i className="fas fa-lightbulb mb-[20px] block" style={{ color: siteConfig.colors.primary, fontSize: '2.5rem' }}></i>
                  <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{t('smartBuilding.feature1Title')}</h3>
                  <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{t('smartBuilding.feature1Desc')}</p>
                </div>
                <div className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                  <i className="fas fa-bolt mb-[20px] block" style={{ color: siteConfig.colors.primary, fontSize: '2.5rem' }}></i>
                  <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{t('smartBuilding.feature2Title')}</h3>
                  <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{t('smartBuilding.feature2Desc')}</p>
                </div>
                <div className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                  <i className="fas fa-building mb-[20px] block" style={{ color: siteConfig.colors.primary, fontSize: '2.5rem' }}></i>
                  <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{t('smartBuilding.feature3Title')}</h3>
                  <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{t('smartBuilding.feature3Desc')}</p>
                </div>
                <div className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                  <i className="fas fa-hotel mb-[20px] block" style={{ color: siteConfig.colors.primary, fontSize: '2.5rem' }}></i>
                  <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{t('smartBuilding.feature4Title')}</h3>
                  <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{t('smartBuilding.feature4Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-[60px]" style={{ backgroundColor: '#f9f9f9' }}>
          <div className="container">
            <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartBuilding.advantages')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="advantage-list list-none p-0">
                {[1, 2, 3].map((index) => (
                  <li key={index} className="py-[15px] border-b flex items-start" style={{ borderColor: '#e0e0e0' }}>
                    <CheckCircle className="w-5 h-5 mr-[15px] mt-[5px] flex-shrink-0" style={{ color: siteConfig.colors.primary }} />
                    <div>
                      <strong style={{ color: siteConfig.colors.foreground }}>{t(`smartBuilding.adv${index}Title`)}</strong>
                      <p className="mt-[5px]" style={{ color: siteConfig.colors.textSecondary }}>{t(`smartBuilding.adv${index}Desc`)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="advantage-list list-none p-0">
                {[4, 5, 6].map((index) => (
                  <li key={index} className="py-[15px] border-b flex items-start" style={{ borderColor: '#e0e0e0' }}>
                    <CheckCircle className="w-5 h-5 mr-[15px] mt-[5px] flex-shrink-0" style={{ color: siteConfig.colors.primary }} />
                    <div>
                      <strong style={{ color: siteConfig.colors.foreground }}>{t(`smartBuilding.adv${index}Title`)}</strong>
                      <p className="mt-[5px]" style={{ color: siteConfig.colors.textSecondary }}>{t(`smartBuilding.adv${index}Desc`)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-[60px]">
          <div className="container mx-auto px-5">
            <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartBuilding.applications')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="text-center">
                <Image
                  src="/images/solution/solution4/bg.jpg"
                  alt={t('smartBuilding.app1')}
                  width={300}
                  height={200}
                  className="rounded-[8px] mb-[15px] w-full"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <h3 style={{ color: siteConfig.colors.foreground, fontWeight: 'normal' }}>{t('smartBuilding.app1')}</h3>
              </div>
              <div className="text-center">
                <Image
                  src="/images/solution/solution4/sy.jpg"
                  alt={t('smartBuilding.app2')}
                  width={300}
                  height={200}
                  className="rounded-[8px] mb-[15px] w-full"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <h3 style={{ color: siteConfig.colors.foreground, fontWeight: 'normal' }}>{t('smartBuilding.app2')}</h3>
              </div>
              <div className="text-center">
                <Image
                  src="/images/solution/solution4/wl.jpg"
                  alt={t('smartBuilding.app3')}
                  width={300}
                  height={200}
                  className="rounded-[8px] mb-[15px] w-full"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <h3 style={{ color: siteConfig.colors.foreground, fontWeight: 'normal' }}>{t('smartBuilding.app3')}</h3>
              </div>
              <div className="text-center">
                <Image
                  src="/images/solution/solution4/jt.jpg"
                  alt={t('smartBuilding.app4')}
                  width={300}
                  height={200}
                  className="rounded-[8px] mb-[15px] w-full"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <h3 style={{ color: siteConfig.colors.foreground, fontWeight: 'normal' }}>{t('smartBuilding.app4')}</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-[60px] text-center" style={{ backgroundColor: '#f5f5f5' }}>
          <div className="container mx-auto px-5">
            <h2 className="mb-[20px]" style={{ color: '#333' }}>{t('smartBuilding.contactTitle')}</h2>
            <p className="mb-[30px]" style={{ color: '#666' }}>{t('smartBuilding.contactDesc')}</p>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

