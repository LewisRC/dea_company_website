"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { useI18n } from "@/lib/i18n-context"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"
import { CheckCircle } from "lucide-react"

export default function SmartCommunityPage() {
  const { t } = useI18n()

  return (
    <>
      <Header />
      <main className="w-full" style={{ marginTop: '78px' }}>
        {/* Hero Section */}
        <section className="relative w-full" style={{ 
          background: 'linear-gradient(135deg, #0066cc 0%, #003366 100%)',
          padding: '80px 0',
          color: 'white'
        }}>
          <div className="container mx-auto px-5 text-center">
            <h1 className="text-5xl font-bold mb-5">{t('smartCommunity.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">{t('smartCommunity.hero')}</p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-[60px]">
          <div className="container mx-auto px-5">
            <div className="flex flex-col md:flex-row items-center gap-10 mb-[60px]">
              <div className="flex-1">
                <h2 className="text-[2rem] mb-[20px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartCommunity.overview')}</h2>
                <p className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                  {t('smartCommunity.overview1')}
                </p>
                <p className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                  {t('smartCommunity.overview2')}
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/images/solution/solution3/solution3.jpg"
                  alt={t('smartCommunity.title')}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                  style={{ opacity: 1 }}
                />
              </div>
            </div>

            {/* Features */}
            <div className="mt-[60px]">
              <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartCommunity.features')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                <div className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                  <i className="fas fa-door-open mb-[20px] block" style={{ color: siteConfig.colors.primary, fontSize: '2.5rem' }}></i>
                  <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{t('smartCommunity.feature1Title')}</h3>
                  <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{t('smartCommunity.feature1Desc')}</p>
                </div>
                <div className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                  <i className="fas fa-video mb-[20px] block" style={{ color: siteConfig.colors.primary, fontSize: '2.5rem' }}></i>
                  <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{t('smartCommunity.feature2Title')}</h3>
                  <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{t('smartCommunity.feature2Desc')}</p>
                </div>
                <div className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                  <i className="fas fa-home mb-[20px] block" style={{ color: siteConfig.colors.primary, fontSize: '2.5rem' }}></i>
                  <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{t('smartCommunity.feature3Title')}</h3>
                  <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{t('smartCommunity.feature3Desc')}</p>
                </div>
                <div className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                  <i className="fas fa-shield-alt mb-[20px] block" style={{ color: siteConfig.colors.primary, fontSize: '2.5rem' }}></i>
                  <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{t('smartCommunity.feature4Title')}</h3>
                  <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{t('smartCommunity.feature4Desc')}</p>
                </div>
                <div className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                  <i className="fas fa-car mb-[20px] block" style={{ color: siteConfig.colors.primary, fontSize: '2.5rem' }}></i>
                  <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{t('smartCommunity.feature5Title')}</h3>
                  <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{t('smartCommunity.feature5Desc')}</p>
                </div>
                <div className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                  <i className="fas fa-bullhorn mb-[20px] block" style={{ color: siteConfig.colors.primary, fontSize: '2.5rem' }}></i>
                  <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{t('smartCommunity.feature6Title')}</h3>
                  <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{t('smartCommunity.feature6Desc')}</p>
                </div>
                <div className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                  <i className="fas fa-bell mb-[20px] block" style={{ color: siteConfig.colors.primary, fontSize: '2.5rem' }}></i>
                  <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{t('smartCommunity.feature7Title')}</h3>
                  <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{t('smartCommunity.feature7Desc')}</p>
                </div>
                <div className="feature-item p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ backgroundColor: '#f9f9f9' }}>
                  <i className="fas fa-chart-line mb-[20px] block" style={{ color: siteConfig.colors.primary, fontSize: '2.5rem' }}></i>
                  <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{t('smartCommunity.feature8Title')}</h3>
                  <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{t('smartCommunity.feature8Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-[60px]" style={{ backgroundColor: '#f9f9f9' }}>
          <div className="container mx-auto px-5">
            <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartCommunity.advantages')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div>
                {[1, 2, 3].map((index) => (
                  <div key={index} className="advantage-list">
                    <div className="py-[15px] border-b flex items-start" style={{ borderColor: '#e0e0e0' }}>
                      <CheckCircle className="w-5 h-5 mr-[15px] mt-[5px]" style={{ color: siteConfig.colors.primary }} />
                      <div>
                        <strong style={{ color: siteConfig.colors.foreground }}>{t(`smartCommunity.adv${index}Title`)}</strong>
                        <p className="mt-[5px]" style={{ color: siteConfig.colors.textSecondary }}>{t(`smartCommunity.adv${index}Desc`)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {[4, 5, 6].map((index) => (
                  <div key={index} className="advantage-list">
                    <div className="py-[15px] border-b flex items-start" style={{ borderColor: '#e0e0e0' }}>
                      <CheckCircle className="w-5 h-5 mr-[15px] mt-[5px]" style={{ color: siteConfig.colors.primary }} />
                      <div>
                        <strong style={{ color: siteConfig.colors.foreground }}>{t(`smartCommunity.adv${index}Title`)}</strong>
                        <p className="mt-[5px]" style={{ color: siteConfig.colors.textSecondary }}>{t(`smartCommunity.adv${index}Desc`)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-[60px]">
          <div className="container mx-auto px-5">
            <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t('smartCommunity.applications')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="text-center">
                <Image
                  src="/images/solution/solution3/gdzz.jpg"
                  alt={t('smartCommunity.app1')}
                  width={300}
                  height={200}
                  className="rounded-[8px] mb-[15px] w-full"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <h3 style={{ color: siteConfig.colors.foreground, fontWeight: 'normal', fontFamily: '黑体' }}>{t('smartCommunity.app1')}</h3>
              </div>
              <div className="text-center">
                <Image
                  src="/images/solution/solution3/syzh.jpg"
                  alt={t('smartCommunity.app2')}
                  width={300}
                  height={200}
                  className="rounded-[8px] mb-[15px] w-full"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <h3 style={{ color: siteConfig.colors.foreground, fontWeight: 'normal', fontFamily: '黑体' }}>{t('smartCommunity.app2')}</h3>
              </div>
              <div className="text-center">
                <Image
                  src="/images/solution/solution3/ljgz.jpg"
                  alt={t('smartCommunity.app3')}
                  width={300}
                  height={200}
                  className="rounded-[8px] mb-[15px] w-full"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <h3 style={{ color: siteConfig.colors.foreground, fontWeight: 'normal', fontFamily: '黑体' }}>{t('smartCommunity.app3')}</h3>
              </div>
              <div className="text-center">
                <Image
                  src="/images/solution/solution3/cyyq.jpg"
                  alt={t('smartCommunity.app4')}
                  width={300}
                  height={200}
                  className="rounded-[8px] mb-[15px] w-full"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <h3 style={{ color: siteConfig.colors.foreground, fontWeight: 'normal', fontFamily: '黑体' }}>{t('smartCommunity.app4')}</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-[60px] text-center" style={{ backgroundColor: '#f5f5f5' }}>
          <div className="container mx-auto px-5">
            <h2 className="mb-[20px]" style={{ color: '#333' }}>{t('smartCommunity.contactTitle')}</h2>
            <p className="mb-[30px]" style={{ color: '#666' }}>{t('smartCommunity.contactDesc')}</p>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

