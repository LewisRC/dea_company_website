"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { siteConfig } from "@/config/site-config"
import { useI18n } from "@/lib/i18n-context"
import Image from "next/image"
import { useEffect, useState } from "react"

type Case = {
  id: number
  title: string
  titleEn: string | null
  description: string
  descriptionEn: string | null
  image: string
  badge: string | null
  badgeEn: string | null
  tags: string | null
  tagsEn: string | null
  order: number
  isActive: boolean
}

export default function InfoCenterPage() {
  const { t, language } = useI18n()
  const [cases, setCases] = useState<Case[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    document.title = t('news.title') + " - 德视安"
  }, [t])
  
  // 从 API 获取案例数据
  useEffect(() => {
    async function fetchCases() {
      try {
        const res = await fetch('/api/cases')
        const data = await res.json()
        setCases(data)
      } catch (error) {
        console.error('Failed to fetch cases:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchCases()
  }, [])

  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* 页面头部 */}
      <section className="info-center-header text-center" style={{
        background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, #003366 100%)`,
        color: 'white',
        paddingTop: '0px',
        paddingBottom: '80px',
        marginTop: '78px'
      }}>
        <div className="container">
          <h1 className="text-[3rem] font-bold mb-[20px]" style={{ marginTop: '0' }}>{t('news.title')}</h1>
          <p className="text-[1.2rem] max-w-[800px] mx-auto">{t('news.subtitle')}</p>
        </div>
      </section>

      {/* 主要内容区域 */}
      <main className="py-[80px]" style={{ backgroundColor: siteConfig.colors.backgroundLight }}>
        <div className="container">
          {loading ? (
            <div className="text-center text-gray-500">加载中...</div>
          ) : cases.length === 0 ? (
            <div className="text-center text-gray-500">暂无案例</div>
          ) : (
            <div className="case-grid grid gap-[30px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {cases.map((caseItem) => {
                // 根据语言选择显示内容
                const title = language === 'en' && caseItem.titleEn ? caseItem.titleEn : caseItem.title
                const description = language === 'en' && caseItem.descriptionEn ? caseItem.descriptionEn : caseItem.description
                const badge = language === 'en' && caseItem.badgeEn ? caseItem.badgeEn : caseItem.badge
                const tagsStr = language === 'en' && caseItem.tagsEn ? caseItem.tagsEn : caseItem.tags
                const tags = tagsStr ? JSON.parse(tagsStr) : []
                
                return (
                  <div key={caseItem.id} className="case-card bg-white rounded-[8px] overflow-hidden transition-all duration-300 hover:-translate-y-[15px] hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                    <div className="case-image relative" style={{ height: '200px' }}>
                      <Image
                        src={caseItem.image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-[1.15] hover:rotate-[2deg]"
                      />
                      {badge && (
                        <div className="case-badge absolute top-[15px] right-[15px] px-[15px] py-[5px] rounded-[4px] text-[14px] font-semibold" style={{
                          backgroundColor: siteConfig.colors.primary,
                          color: 'white'
                        }}>
                          {badge}
                        </div>
                      )}
                    </div>
                    <div className="case-content p-[30px] text-center">
                      <h3 className="text-[1.5rem] font-semibold mb-[15px]" style={{ color: '#333' }}>{title}</h3>
                      <p className="text-[16px] leading-[1.8] mb-[20px]" style={{ color: '#666' }}>{description}</p>
                      
                      {tags.length > 0 && (
                        <div className="case-tags flex flex-wrap gap-[12px] justify-center">
                          {tags.map((tag: string, index: number) => (
                            <span key={index} className="case-tag px-[15px] py-[5px] rounded-[25px] text-[14px] font-semibold" style={{
                              backgroundColor: 'rgba(0, 102, 204, 0.08)',
                              color: siteConfig.colors.primary
                            }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
