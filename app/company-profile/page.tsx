"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { useI18n } from "@/lib/i18n-context"
import { useEffect } from "react"
import { Building, Target, Lightbulb, Shield, Headset, Award, Globe, CheckCircle } from "lucide-react"
import { siteConfig } from "@/config/site-config"
import Image from "next/image"

export default function CompanyProfilePage() {
  const { t } = useI18n()
  
  useEffect(() => {
    document.title = t('companyProfile.title') + " - 德视安"
  }, [t])

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
                  致力于为客户提供卓越的产品与服务
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-5">

            {/* 关于我们部分 */}
            <div className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-[#0066cc] mr-4" />
                <h2 className="text-2xl font-semibold text-[#003366]">关于我们</h2>
              </div>
              <div className="space-y-4 text-[#666666] leading-relaxed">
                <p>成都德视安科技有限公司，自2010年创立以来，承载着雄厚完善的产业基础。</p>
                <p>2020年，公司以创新之姿，推出了自主研发的DSA德视安产品，将业务版图扩展至智慧医院、智慧社区、智慧建筑、智慧酒店、智慧养老以及智能安防等多个领域。历经十余年的市场深耕，我们精心培养了一支专业化的核心研发团队，积累了丰富的市场经验。</p>
                <p>目前，公司已与国内外众多知名企业建立了深厚的协作关系。展望未来，我们将继续秉持"以客户为中心"的服务理念，坚持自主研发与高端战略合作并行，致力于为客户提供卓越的产品与服务，矢志成为技术领先、服务一流的行业翘楚。</p>
              </div>
            </div>

            {/* 我们的愿景部分 */}
            <div className="max-w-4xl mx-auto mb-16 bg-[#f0f8ff] p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-[#0066cc] mr-4" />
                <h2 className="text-2xl font-semibold text-[#003366]">我们的愿景</h2>
              </div>
              <div className="space-y-4 text-[#666666] leading-relaxed">
                <p>成为技术领先、服务一流的行业翘楚，致力于为客户提供卓越的产品与服务，推动智能化领域的发展与创新。</p>
                <p>我们始终坚持技术创新，以客户需求为导向，不断提升产品性能和服务质量，为构建更加智能、便捷、安全的生活环境贡献力量。</p>
              </div>
            </div>

            {/* 核心优势部分 */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-semibold text-[#003366] mb-3">核心优势</h2>
                <p className="text-[#666666]">我们的核心竞争力源于技术创新与专业服务的完美结合</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0066cc]">
                  <div className="flex items-start">
                    <Lightbulb className="w-6 h-6 text-[#0066cc] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">技术创新</h3>
                      <p className="text-[#666666]">持续投入研发，掌握核心技术，产品性能行业领先</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0066cc]">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-[#0066cc] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">品质保证</h3>
                      <p className="text-[#666666]">严格的质量管理体系，确保每一件产品都符合高标准</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0066cc]">
                  <div className="flex items-start">
                    <Headset className="w-6 h-6 text-[#0066cc] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">专业服务</h3>
                      <p className="text-[#666666]">完善的售前、售中、售后服务体系，让客户无后顾之忧</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0066cc]">
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-[#0066cc] mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-[#003366] mb-2">行业经验</h3>
                      <p className="text-[#666666]">多年行业深耕，丰富的项目经验，值得信赖的合作伙伴</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 企业荣誉部分 */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-semibold text-[#003366] mb-3">企业荣誉</h2>
                <p className="text-[#666666]">我们的努力与成就得到了行业的认可</p>
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
