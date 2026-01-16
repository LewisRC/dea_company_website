"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { useI18n } from "@/lib/i18n-context"
import Image from "next/image"

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
        <section className="py-16">
          <div className="container mx-auto px-5">
            <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
              <div className="flex-1">
                <h2>{t('smartCommunity.overview')}</h2>
                <p className="text-lg mb-4">{t('smartCommunity.overview1')}</p>
                <p className="text-lg">{t('smartCommunity.overview2')}</p>
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
            <div className="mt-16">
              <h2 className="text-center">{t('smartCommunity.features')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <i className="fas fa-door-open text-[2.5rem] text-[#0066cc] mb-5 block"></i>
                  <h3 className="text-xl font-semibold mb-3">{t('smartCommunity.feature1Title')}</h3>
                  <p>{t('smartCommunity.feature1Desc')}</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <i className="fas fa-video text-[2.5rem] text-[#0066cc] mb-5 block"></i>
                  <h3 className="text-xl font-semibold mb-3">{t('smartCommunity.feature2Title')}</h3>
                  <p>{t('smartCommunity.feature2Desc')}</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <i className="fas fa-home text-[2.5rem] text-[#0066cc] mb-5 block"></i>
                  <h3 className="text-xl font-semibold mb-3">{t('smartCommunity.feature3Title')}</h3>
                  <p>{t('smartCommunity.feature3Desc')}</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <i className="fas fa-shield-alt text-[2.5rem] text-[#0066cc] mb-5 block"></i>
                  <h3 className="text-xl font-semibold mb-3">{t('smartCommunity.feature4Title')}</h3>
                  <p>{t('smartCommunity.feature4Desc')}</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <i className="fas fa-car text-[2.5rem] text-[#0066cc] mb-5 block"></i>
                  <h3 className="text-xl font-semibold mb-3">{t('smartCommunity.feature5Title')}</h3>
                  <p>{t('smartCommunity.feature5Desc')}</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <i className="fas fa-bullhorn text-[2.5rem] text-[#0066cc] mb-5 block"></i>
                  <h3 className="text-xl font-semibold mb-3">{t('smartCommunity.feature6Title')}</h3>
                  <p>{t('smartCommunity.feature6Desc')}</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <i className="fas fa-bell text-[2.5rem] text-[#0066cc] mb-5 block"></i>
                  <h3 className="text-xl font-semibold mb-3">{t('smartCommunity.feature7Title')}</h3>
                  <p>{t('smartCommunity.feature7Desc')}</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <i className="fas fa-chart-line text-[2.5rem] text-[#0066cc] mb-5 block"></i>
                  <h3 className="text-xl font-semibold mb-3">{t('smartCommunity.feature8Title')}</h3>
                  <p>{t('smartCommunity.feature8Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16" style={{ backgroundColor: '#f9f9f9' }}>
          <div className="container mx-auto px-5">
            <h2 className="text-center">{t('smartCommunity.advantages')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-[#0066cc] mt-1"></i>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('smartCommunity.adv1Title')}</h3>
                    <p>{t('smartCommunity.adv1Desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-[#0066cc] mt-1"></i>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('smartCommunity.adv2Title')}</h3>
                    <p>{t('smartCommunity.adv2Desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-[#0066cc] mt-1"></i>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('smartCommunity.adv3Title')}</h3>
                    <p>{t('smartCommunity.adv3Desc')}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-[#0066cc] mt-1"></i>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('smartCommunity.adv4Title')}</h3>
                    <p>{t('smartCommunity.adv4Desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-[#0066cc] mt-1"></i>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('smartCommunity.adv5Title')}</h3>
                    <p>{t('smartCommunity.adv5Desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-[#0066cc] mt-1"></i>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('smartCommunity.adv6Title')}</h3>
                    <p>{t('smartCommunity.adv6Desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16">
          <div className="container mx-auto px-5">
            <h2 className="text-center">{t('smartCommunity.applications')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="text-center">
                <Image
                  src="/images/solution/solution3/gdzz.jpg"
                  alt={t('smartCommunity.app1')}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 style={{ color: '#333333', fontWeight: 'bold', fontFamily: '黑体' }}>{t('smartCommunity.app1')}</h3>
              </div>
              <div className="text-center">
                <Image
                  src="/images/solution/solution3/syzh.jpg"
                  alt={t('smartCommunity.app2')}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 style={{ color: '#333333', fontWeight: 'bold', fontFamily: '黑体' }}>{t('smartCommunity.app2')}</h3>
              </div>
              <div className="text-center">
                <Image
                  src="/images/solution/solution3/ljgz.jpg"
                  alt={t('smartCommunity.app3')}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 style={{ color: '#333333', fontWeight: 'bold', fontFamily: '黑体' }}>{t('smartCommunity.app3')}</h3>
              </div>
              <div className="text-center">
                <Image
                  src="/images/solution/solution3/cyyq.jpg"
                  alt={t('smartCommunity.app4')}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 style={{ color: '#333333', fontWeight: 'bold', fontFamily: '黑体' }}>{t('smartCommunity.app4')}</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 text-center" style={{ backgroundColor: '#f5f5f5' }}>
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

