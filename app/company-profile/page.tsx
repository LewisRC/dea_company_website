"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { useI18n } from "@/lib/i18n-context"
import { useEffect } from "react"

export default function CompanyProfilePage() {
  const { t } = useI18n()
  
  useEffect(() => {
    document.title = t('companyProfile.title') + " - 德视安"
  }, [t])

  return (
    <>
      <Header />
      <main className="w-full pt-20">
        <section className="py-20 bg-[#f9f9f9]">
          <div className="container mx-auto px-5">
            <div className="text-center mb-15">
              <h1 className="text-4xl font-semibold text-[#333333] mb-5">
                {t('companyProfile.title')}
              </h1>
              <p className="text-base text-[#666666] max-w-3xl mx-auto leading-relaxed mb-10">
                {t('companyProfile.companyName')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">{t('companyProfile.companyOverview')}</h2>
                <p className="text-[#666666] leading-relaxed mb-4">
                  {t('companyProfile.overview1')}
                </p>
                <p className="text-[#666666] leading-relaxed">
                  {t('companyProfile.overview2')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">{t('companyProfile.coreAdvantages')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-[#0066cc] mb-2">{t('companyProfile.techInnovation')}</h3>
                    <p className="text-[#666666]">{t('companyProfile.techInnovationDesc')}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0066cc] mb-2">{t('companyProfile.qualityAssurance')}</h3>
                    <p className="text-[#666666]">{t('companyProfile.qualityAssuranceDesc')}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0066cc] mb-2">{t('companyProfile.professionalService')}</h3>
                    <p className="text-[#666666]">{t('companyProfile.professionalServiceDesc')}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0066cc] mb-2">{t('companyProfile.industryExperience')}</h3>
                    <p className="text-[#666666]">{t('companyProfile.industryExperienceDesc')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">{t('companyProfile.honors')}</h2>
                <ul className="space-y-2 text-[#666666]">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#0066cc] rounded-full mt-2 mr-3"></span>
                    <span>{t('companyProfile.honor1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#0066cc] rounded-full mt-2 mr-3"></span>
                    <span>{t('companyProfile.honor2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#0066cc] rounded-full mt-2 mr-3"></span>
                    <span>{t('companyProfile.honor3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#0066cc] rounded-full mt-2 mr-3"></span>
                    <span>{t('companyProfile.honor4')}</span>
                  </li>
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
