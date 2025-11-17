"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, type IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface FeatureItem {
  icon: IconDefinition;
  title: string;
  description: string;
}

interface AdvantageItem {
  title: string;
  description: string;
}

interface ApplicationCase {
  image: string;
  title: string;
}

interface SolutionPageTemplateProps {
  title: string;
  subtitle: string;
  overviewTitle: string;
  overviewContent: string[];
  overviewImage: string;
  features: FeatureItem[];
  advantages: AdvantageItem[];
  applications: ApplicationCase[];
}

export function SolutionPageTemplate({
  title,
  subtitle,
  overviewTitle,
  overviewContent,
  overviewImage,
  features,
  advantages,
  applications
}: SolutionPageTemplateProps) {
  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* 解决方案英雄区 */}
      <section className="solution-hero" style={{
        background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, #003366 100%)`,
        color: 'white',
        padding: '80px 0',
        textAlign: 'center',
        marginTop: '78px'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>{title}</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>{subtitle}</p>
        </div>
      </section>

      {/* 解决方案内容 */}
      <section className="solution-content" style={{ padding: '60px 0' }}>
        <div className="container">
          {/* 解决方案概述 */}
          <div className="solution-overview flex flex-wrap justify-between items-center mb-[60px] gap-8">
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-[2rem] mb-[20px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{overviewTitle}</h2>
              {overviewContent.map((paragraph, index) => (
                <p key={index} className="mb-[15px] text-[16px] leading-[1.8]" style={{ color: siteConfig.colors.textSecondary }}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex-1 min-w-[300px]">
              <Image
                src={overviewImage}
                alt={overviewTitle}
                width={600}
                height={400}
                className="w-full rounded-[8px]"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>

          {/* 核心功能 */}
          <div className="solution-features my-[60px]">
            <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>核心功能</h2>
            <div className="feature-grid grid gap-[30px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {features.map((feature, index) => (
                <div key={index} className="feature-item p-[30px] rounded-[8px] transition-all duration-300" style={{ backgroundColor: '#f9f9f9' }}>
                  <FontAwesomeIcon icon={feature.icon} className="text-[2.5rem] mb-[20px]" style={{ color: siteConfig.colors.primary }} />
                  <h3 className="text-[1.5rem] mb-[15px]" style={{ color: siteConfig.colors.foreground }}>{feature.title}</h3>
                  <p style={{ color: siteConfig.colors.textSecondary, lineHeight: '1.6' }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 解决方案优势 */}
      <section className="solution-advantages py-[60px]" style={{ backgroundColor: '#f0f7ff' }}>
        <div className="container">
          <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>解决方案优势</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <ul key={index} className="advantage-list list-none p-0">
                <li className="py-[15px] border-b flex items-start" style={{ borderColor: '#e0e0e0' }}>
                  <FontAwesomeIcon icon={faCheckCircle} className="mr-[15px] mt-[5px]" style={{ color: siteConfig.colors.primary }} />
                  <div>
                    <strong style={{ color: siteConfig.colors.foreground }}>{advantage.title}</strong>
                    <p className="mt-[5px]" style={{ color: siteConfig.colors.textSecondary }}>{advantage.description}</p>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* 应用场景 */}
      <section className="solution-applications py-[60px]">
        <div className="container">
          <h2 className="text-center text-[2rem] mb-[40px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>应用场景</h2>
          <div className="application-cases grid gap-[20px]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {applications.map((app, index) => (
              <div key={index} className="case-item text-center">
                <Image
                  src={app.image}
                  alt={app.title}
                  width={300}
                  height={200}
                  className="w-full rounded-[8px] mb-[15px]"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <h3 style={{ color: siteConfig.colors.foreground }}>{app.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="solution-contact py-[60px] text-center" style={{ backgroundColor: siteConfig.colors.primary, color: 'white' }}>
        <div className="container">
          <h2 className="mb-[20px]">了解更多解决方案详情</h2>
          <p className="mb-[30px]" style={{ color: 'black' }}>如需了解更多关于德视安{title}的详细信息，请联系我们的销售顾问。</p>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}

