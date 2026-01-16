"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { siteConfig } from "@/config/site-config"
import { useI18n } from "@/lib/i18n-context"
import { Lightbulb, Users, GraduationCap, Scale } from "lucide-react"
import { useEffect } from "react"

export default function TalentPhilosophyPage() {
  const { t, language } = useI18n()
  
  const philosophyCards = [
    { icon: Lightbulb, titleKey: "talentPhilosophy.innovation", descKey: "talentPhilosophy.innovationDesc" },
    { icon: Users, titleKey: "talentPhilosophy.teamwork", descKey: "talentPhilosophy.teamworkDesc" },
    { icon: GraduationCap, titleKey: "talentPhilosophy.learning", descKey: "talentPhilosophy.learningDesc" },
    { icon: Scale, titleKey: "talentPhilosophy.fairness", descKey: "talentPhilosophy.fairnessDesc" }
  ]

  const coreValues = [
    { titleKey: "talentPhilosophy.integrity", descKey: "talentPhilosophy.integrityDesc" },
    { titleKey: "talentPhilosophy.responsibility", descKey: "talentPhilosophy.responsibilityDesc" },
    { titleKey: "talentPhilosophy.professionalism", descKey: "talentPhilosophy.professionalismDesc" },
    { titleKey: "talentPhilosophy.innovationValue", descKey: "talentPhilosophy.innovationValueDesc" }
  ]
  
  useEffect(() => {
    document.title = t('talentPhilosophy.title') + " - 德视安"
  }, [t])

  return (
    <div className="relative min-h-screen">
      <Header />
      
      <section className="philosophy-banner text-center" style={{
        background: 'linear-gradient(135deg, #0066cc 0%, #003366 100%)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center',
        marginTop: '78px'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginTop: '0', marginBottom: '20px', fontWeight: 'bold' }}>
            {t('talentPhilosophy.title')}
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            {t('talentPhilosophy.subtitle')}
          </p>
        </div>
      </section>

      <main className="philosophy-content py-[100px]" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <section className="philosophy-section bg-white rounded-[12px] p-[80px] relative overflow-hidden border border-[#eaeaea]" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <div className="absolute top-0 left-0 right-0 h-[5px]" style={{ background: 'linear-gradient(90deg, #003366, #0066cc)' }} />
            <div className="philosophy-title text-center mb-[60px] relative">
              <h2 className="text-[2.2rem] font-bold mb-[20px]" style={{ color: '#003366' }}>
                {t('talentPhilosophy.ourTalentView')}
              </h2>
              <p className="text-[1.1rem] max-w-[800px] mx-auto" style={{ color: siteConfig.colors.textSecondary }}>
                {t('talentPhilosophy.ourTalentViewDesc')}
              </p>
              <div className="w-[80px] h-[3px] mx-auto mt-[20px]" style={{ background: '#0066cc' }} />
            </div>
            
            <div className="philosophy-cards grid gap-[30px] mb-[80px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {philosophyCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <div key={index} className="philosophy-card rounded-[10px] text-center transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:border-[#0066cc] border border-[#eaeaea] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', padding: '40px 30px' }}>
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, #0066cc, #003366)' }} />
                    <div className="card-icon mb-[25px]">
                      <Icon className="w-16 h-16 mx-auto" style={{ color: siteConfig.colors.primary }} />
                    </div>
                    <h3 className="text-[1.5rem] font-semibold mb-[15px]" style={{ color: siteConfig.colors.foreground }}>
                      {t(card.titleKey)}
                    </h3>
                    <p className="text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                      {t(card.descKey)}
                    </p>
                  </div>
                )
              })}
            </div>
            
            <div className="values-section mb-[60px]">
              <div className="values-title text-center mb-[40px]">
                <h3 className="text-[2rem] font-semibold" style={{ color: siteConfig.colors.foreground }}>
                  {t('talentPhilosophy.coreValues')}
                </h3>
              </div>
              
              <div className="values-list grid gap-[30px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                {coreValues.map((value, index) => (
                  <div key={index} className="value-item bg-white p-[30px] rounded-[8px] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]" style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)' }}>
                    <h4 className="text-[1.3rem] font-semibold mb-[10px]" style={{ color: siteConfig.colors.primary }}>
                      {t(value.titleKey)}
                    </h4>
                    <p className="text-[15px] leading-[1.6]" style={{ color: siteConfig.colors.textSecondary }}>
                      {t(value.descKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="culture-section mt-[80px] p-[60px] rounded-[10px] text-center border border-[#e3f2fd]" style={{ background: 'linear-gradient(135deg, #f0f8ff 0%, #ffffff 100%)' }}>
              <h3 className="text-[1.8rem] font-semibold mb-[25px]" style={{ color: '#003366' }}>
                {t('talentPhilosophy.culture')}
              </h3>
              <p className="text-[1.05rem] leading-[1.8] max-w-[800px] mx-auto" style={{ color: '#555' }}>
                {t('talentPhilosophy.cultureDesc')}
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
