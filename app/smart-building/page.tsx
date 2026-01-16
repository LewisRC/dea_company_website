"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { useI18n } from "@/lib/i18n-context"
import Image from "next/image"

export default function SmartBuildingPage() {
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
            <h1 className="text-5xl font-bold mb-5">{t('smartBuilding.title')}</h1>
            <p className="text-xl max-w-3xl mx-auto">{t('smartBuilding.hero')}</p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-5">
            <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
              <div className="flex-1">
                <h2>{t('smartBuilding.overview')}</h2>
                <p className="text-lg mb-4">{t('smartBuilding.overview1')}</p>
                <p className="text-lg">{t('smartBuilding.overview2')}</p>
              </div>
              <div className="flex-1">
                <Image
                  src="/images/solution4-1.jpg"
                  alt={t('smartBuilding.title')}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                  style={{ opacity: 1 }}
                />
              </div>
            </div>

            {/* Features */}
            <div className="mt-16">
              <h2 className="text-center">{t('smartBuilding.features')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <i className="fas fa-lightbulb text-[2.5rem] text-[#0066cc] mb-5 block"></i>
                  <h3 className="text-xl font-semibold mb-3">{t('smartBuilding.feature1Title')}</h3>
                  <p>{t('smartBuilding.feature1Desc')}</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <i className="fas fa-bolt text-[2.5rem] text-[#0066cc] mb-5 block"></i>
                  <h3 className="text-xl font-semibold mb-3">{t('smartBuilding.feature2Title')}</h3>
                  <p>{t('smartBuilding.feature2Desc')}</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <i className="fas fa-building text-[2.5rem] text-[#0066cc] mb-5 block"></i>
                  <h3 className="text-xl font-semibold mb-3">{t('smartBuilding.feature3Title')}</h3>
                  <p>{t('smartBuilding.feature3Desc')}</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                  <i className="fas fa-hotel text-[2.5rem] text-[#0066cc] mb-5 block"></i>
                  <h3 className="text-xl font-semibold mb-3">{t('smartBuilding.feature4Title')}</h3>
                  <p>{t('smartBuilding.feature4Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16" style={{ backgroundColor: '#f9f9f9' }}>
          <div className="container mx-auto px-5">
            <h2 className="text-center">{t('smartBuilding.advantages')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-[#0066cc] mt-1"></i>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('smartBuilding.adv1Title')}</h3>
                    <p>{t('smartBuilding.adv1Desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-[#0066cc] mt-1"></i>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('smartBuilding.adv2Title')}</h3>
                    <p>{t('smartBuilding.adv2Desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-[#0066cc] mt-1"></i>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('smartBuilding.adv3Title')}</h3>
                    <p>{t('smartBuilding.adv3Desc')}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-[#0066cc] mt-1"></i>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('smartBuilding.adv4Title')}</h3>
                    <p>{t('smartBuilding.adv4Desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-[#0066cc] mt-1"></i>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('smartBuilding.adv5Title')}</h3>
                    <p>{t('smartBuilding.adv5Desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="fas fa-check-circle text-[#0066cc] mt-1"></i>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t('smartBuilding.adv6Title')}</h3>
                    <p>{t('smartBuilding.adv6Desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16">
          <div className="container mx-auto px-5">
            <h2 className="text-center">{t('smartBuilding.applications')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="text-center">
                <Image
                  src="/images/gh.jpeg"
                  alt={t('smartBuilding.app1')}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 style={{ color: '#333333', fontWeight: 'bold', fontFamily: '黑体' }}>{t('smartBuilding.app1')}</h3>
              </div>
              <div className="text-center">
                <Image
                  src="/images/sh.jpeg"
                  alt={t('smartBuilding.app2')}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 style={{ color: '#333333', fontWeight: 'bold', fontFamily: '黑体' }}>{t('smartBuilding.app2')}</h3>
              </div>
              <div className="text-center">
                <Image
                  src="/images/cssc.jpeg"
                  alt={t('smartBuilding.app3')}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 style={{ color: '#333333', fontWeight: 'bold', fontFamily: '黑体' }}>{t('smartBuilding.app3')}</h3>
              </div>
              <div className="text-center">
                <Image
                  src="/images/nh.jpeg"
                  alt={t('smartBuilding.app4')}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 style={{ color: '#333333', fontWeight: 'bold', fontFamily: '黑体' }}>{t('smartBuilding.app4')}</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 text-center" style={{ backgroundColor: '#f5f5f5' }}>
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

