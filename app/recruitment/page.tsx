"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { siteConfig } from "@/config/site-config"
import { useI18n } from "@/lib/i18n-context"
import Link from "next/link"
import { Briefcase } from "lucide-react"
import { useEffect } from "react"

export default function RecruitmentPage() {
  const { t } = useI18n()
  
  useEffect(() => {
    document.title = t('recruitment.positions') + " - 德视安"
  }, [t])
  
  return (
    <div className="relative min-h-screen">
      <Header />
      
      <section className="recruitment-banner text-center relative overflow-hidden" style={{
        background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, #003366 100%)`,
        color: 'white',
        paddingTop: '0px',
        paddingBottom: '100px',
        marginTop: '78px'
      }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url(/images/banner3-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div className="container relative">
          <h1 className="text-[3rem] font-bold mb-[20px]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', marginTop: '0' }}>{t('recruitment.positions')}</h1>
          <p className="text-[1.2rem] max-w-[800px] mx-auto opacity-90">{t('recruitment.joinUs')}</p>
        </div>
      </section>

      <main className="recruitment-content py-[80px]" style={{ backgroundColor: siteConfig.colors.backgroundLight }}>
        <div className="container">
          <section className="no-jobs-section text-center max-w-[800px] mx-auto bg-white p-[60px] rounded-[8px] relative overflow-hidden border border-[#eaeaea]" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <div className="absolute top-0 left-0 right-0 h-[5px]" style={{
              background: 'linear-gradient(90deg, #0066cc, #003366)'
            }} />
            <div className="no-jobs-icon mb-[30px]">
              <Briefcase className="w-20 h-20 mx-auto" style={{ color: siteConfig.colors.primary }} />
            </div>
            <h2 className="text-[2rem] font-semibold mb-[20px]" style={{ color: siteConfig.colors.foreground }}>
              {t('recruitment.title')}
            </h2>
            <p className="text-[16px] leading-[1.8] mb-[15px]" style={{ color: siteConfig.colors.textSecondary }}>
              {t('recruitment.philosophyDesc')}
            </p>
            
            <div className="keep-in-touch mt-[40px] p-[40px] rounded-[8px] border border-[#e3f2fd]" style={{ backgroundColor: '#f0f8ff' }}>
              <h3 className="text-[1.5rem] font-semibold mb-[15px]" style={{ color: siteConfig.colors.foreground }}>
                {t('common.contactUs')}
              </h3>
              <p className="text-[16px]" style={{ color: siteConfig.colors.textSecondary }}>
                <Link href="/contact-us" className="mx-[5px] underline" style={{ color: siteConfig.colors.primary }}>
                  {t('common.contactUs')}
                </Link>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
