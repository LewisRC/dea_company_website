"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { useI18n } from "@/lib/i18n-context"
import { usePageTitle } from "@/hooks/use-page-title"
import { Building, Target, Lightbulb, Shield, Headset, Award, Globe, CheckCircle } from "lucide-react"
import { siteConfig } from "@/config/site-config"
import Image from "next/image"

export default function CompanyProfilePage() {
  const { t } = useI18n()
  
  // 动态页面标题
  usePageTitle({
    zh: '公司简介 - 德视安科技',
    en: 'Company Profile - Deshian Technology'
  })

  return (
    <>
      <Header />
      <main className="w-full">
        <section className="bg-white">
          {/* 大气图片横幅 */}
          <div className="w-full mb-16 relative overflow-hidden h-[400px] md:h-[500px]">
            <Image
              src="/images/company-profile/P-10.jpg"
              alt={t('companyProfile.title')}
              fill
              className="object-cover"
              style={{ filter: 'brightness(0.9)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,51,102,0.8)] to-[rgba(0,102,204,0.5)] flex items-center">
              <div className="container mx-auto px-5">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {t('companyProfile.companyName')}
                </h1>
                <p className="text-lg md:text-xl text-white opacity-90 max-w-2xl">
                  {t('companyProfile.bannerSubtitle')}
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-5">

            {/* 关于我们部分 */}
            <div className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-[#0066cc] mr-4" />
                <h2 className="text-2xl font-semibold text-[#003366]">{t('companyProfile.companyOverview')}</h2>
              </div>
              <div className="space-y-4 text-[#666666] leading-relaxed">
                <p>{t('companyProfile.overview1')}</p>
                <p>{t('companyProfile.overview2')}</p>
              </div>
            </div>

            {/* 我们的愿景部分 */}
            <div className="max-w-4xl mx-auto mb-16 bg-[#f0f8ff] p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-[#0066cc] mr-4" />
                <h2 className="text-2xl font-semibold text-[#003366]">{t('companyProfile.ourVision')}</h2>
              </div>
              <div className="space-y-4 text-[#666666] leading-relaxed">
                <p>{t('companyProfile.vision1')}</p>
                <p>{t('companyProfile.vision2')}</p>
              </div>
            </div>

            {/* 核心优势部分 */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-semibold text-[#003366] mb-3">{t('companyProfile.coreAdvantages')}</h2>
                <p className="text-[#666666]">{t('companyProfile.coreAdvantagesDesc')}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0066cc]">
                  <div className="flex items-start">
                    <Lightbulb className="w-6 h-6 text-[#0066cc] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">{t('companyProfile.techInnovation')}</h3>
                      <p className="text-[#666666]">{t('companyProfile.techInnovationDesc')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0066cc]">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-[#0066cc] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">{t('companyProfile.qualityAssurance')}</h3>
                      <p className="text-[#666666]">{t('companyProfile.qualityAssuranceDesc')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0066cc]">
                  <div className="flex items-start">
                    <Headset className="w-6 h-6 text-[#0066cc] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">{t('companyProfile.professionalService')}</h3>
                      <p className="text-[#666666]">{t('companyProfile.professionalServiceDesc')}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0066cc]">
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-[#0066cc] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">{t('companyProfile.industryExperience')}</h3>
                      <p className="text-[#666666]">{t('companyProfile.industryExperienceDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 企业荣誉部分 */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-semibold text-[#003366] mb-3">{t('companyProfile.honors')}</h2>
                <p className="text-[#666666]">{t('companyProfile.honorsDesc')}</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <ul className="space-y-4">
                  {[t('companyProfile.honor1'), t('companyProfile.honor2'), t('companyProfile.honor3'), t('companyProfile.honor4')].map((honor, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#0066cc] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-[#666666]">{honor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
