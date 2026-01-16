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
  const { t, language } = useI18n()
  
  useEffect(() => {
    document.title = t('recruitment.positions') + " - 德视安"
  }, [t])
  
  return (
    <div className="relative min-h-screen">
      <Header />
      
      <section className="recruitment-banner text-center" style={{
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
          <h1 style={{ fontSize: '3rem', marginTop: '0', marginBottom: '20px', fontWeight: 'bold' }}>{t('recruitment.title')}</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>{t('recruitment.joinUs')}</p>
        </div>
      </section>

      <main className="recruitment-content py-[80px]" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="recruitment-container max-w-[1200px] mx-auto px-5">
          <section className="no-jobs-section bg-white rounded-[12px] p-[60px] text-center relative overflow-hidden border border-[#eaeaea]" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <div className="absolute top-0 left-0 right-0 h-[5px]" style={{
              background: 'linear-gradient(90deg, #0066cc, #003366)'
            }} />
            <div className="no-jobs-icon mb-[30px]">
              <Briefcase className="w-16 h-16 mx-auto opacity-80" style={{ color: siteConfig.colors.primary }} />
            </div>
            <h2 className="text-[2rem] font-semibold mb-[20px]" style={{ color: '#333' }}>
              {t('recruitment.noPositions')}
            </h2>
            <p className="text-[1.1rem] leading-[1.8] mb-[30px] max-w-[800px] mx-auto" style={{ color: '#666' }}>
              {t('recruitment.noPositionsDesc1')}
            </p>
            <p className="text-[1.1rem] leading-[1.8] mb-[30px] max-w-[800px] mx-auto" style={{ color: '#666' }}>
              {t('recruitment.noPositionsDesc2')}
            </p>
            
            <div className="keep-in-touch mt-[40px] p-[40px] rounded-[8px] border border-[#e3f2fd]" style={{ backgroundColor: '#f0f8ff' }}>
              <h3 className="text-[1.5rem] font-semibold mb-[20px]" style={{ color: siteConfig.colors.primary }}>
                {t('recruitment.stayConnected')}
              </h3>
              <p className="text-[1.1rem] m-0" style={{ color: '#666' }}>
                {t('recruitment.stayConnectedDesc')}
                <Link href="/contact-us" className="underline" style={{ color: siteConfig.colors.primary }}>
                  {t('recruitment.contactLink')}
                </Link>
                {t('recruitment.stayConnectedDesc2')}
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
