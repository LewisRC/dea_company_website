"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { siteConfig } from "@/config/site-config"
import Link from "next/link"
import { Briefcase } from "lucide-react"

export default function RecruitmentPage() {
  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* 页面头部 */}
      <section className="recruitment-banner text-center relative overflow-hidden" style={{
        background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, #003366 100%)`,
        color: 'white',
        paddingTop: '0px',
        paddingBottom: '100px',
        marginTop: '78px'
      }}>
        {/* 背景图片 */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url(/images/banner3-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div className="container relative">
          <h1 className="text-[3rem] font-bold mb-[20px]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', marginTop: '0' }}>招聘职位</h1>
          <p className="text-[1.2rem] max-w-[800px] mx-auto opacity-90">加入德视安，携手共创智能未来</p>
        </div>
      </section>

      {/* 主要内容区域 */}
      <main className="recruitment-content py-[80px]" style={{ backgroundColor: siteConfig.colors.backgroundLight }}>
        <div className="container">
          <section className="no-jobs-section text-center max-w-[800px] mx-auto bg-white p-[60px] rounded-[8px] relative overflow-hidden border border-[#eaeaea]" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            {/* 顶部蓝色线条 */}
            <div className="absolute top-0 left-0 right-0 h-[5px]" style={{
              background: 'linear-gradient(90deg, #0066cc, #003366)'
            }} />
            <div className="no-jobs-icon mb-[30px]">
              <Briefcase className="w-20 h-20 mx-auto" style={{ color: siteConfig.colors.primary }} />
            </div>
            <h2 className="text-[2rem] font-semibold mb-[20px]" style={{ color: siteConfig.colors.foreground }}>暂时没有开放的招聘岗位</h2>
            <p className="text-[16px] leading-[1.8] mb-[15px]" style={{ color: siteConfig.colors.textSecondary }}>
              感谢您对德视安科技的关注与支持。目前公司所有岗位人员配置已满，暂时没有新的招聘计划。我们正在稳步发展中，未来将根据业务拓展需求，适时开放新的职位空缺。
            </p>
            <p className="text-[16px] leading-[1.8] mb-[30px]" style={{ color: siteConfig.colors.textSecondary }}>
              如果您对我们的企业文化和发展前景感兴趣，欢迎随时关注我们的官网动态。我们期待与优秀的您在未来有机会共事，共同推动智能化医疗和智慧社区建设的发展。
            </p>
            
            <div className="keep-in-touch mt-[40px] p-[40px] rounded-[8px] border border-[#e3f2fd]" style={{ backgroundColor: '#f0f8ff' }}>
              <h3 className="text-[1.5rem] font-semibold mb-[15px]" style={{ color: siteConfig.colors.foreground }}>保持联系</h3>
              <p className="text-[16px]" style={{ color: siteConfig.colors.textSecondary }}>
                如需进一步了解公司情况，欢迎通过
                <Link href="/contact-us" className="mx-[5px] underline" style={{ color: siteConfig.colors.primary }}>
                  联系我们
                </Link>
                页面与我们取得联系。
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
