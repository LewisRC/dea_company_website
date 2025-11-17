"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site-config"
import { ChevronLeft } from "lucide-react"

interface ProductParam {
  label: string;
  value: string;
}

interface ProductDetailProps {
  name: string;
  category: string;
  categoryLink: string;
  image: string;
  params: ProductParam[];
}

export function ProductDetailTemplate({ 
  name, 
  category, 
  categoryLink, 
  image, 
  params 
}: ProductDetailProps) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="product-detail-page pt-[120px] pb-[80px]" style={{ backgroundColor: siteConfig.colors.backgroundLight }}>
        <div className="container">
          {/* 返回按钮 */}
          <div className="back-button mb-[30px] inline-block">
            <Link 
              href={categoryLink}
              className="flex items-center no-underline transition-colors duration-300 hover:text-[var(--primary-color)]"
              style={{ color: siteConfig.colors.foreground, fontSize: '16px' }}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              返回产品列表
            </Link>
          </div>

          {/* 产品详情容器 */}
          <div className="product-detail-container bg-white rounded-[8px] p-[40px]" style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            {/* 产品标题区域 */}
            <div className="product-title-section pb-[20px] mb-[40px]" style={{ borderBottom: `1px solid ${siteConfig.colors.border}` }}>
              <h1 className="text-[28px] mb-[10px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>
                {name}
              </h1>
              <div className="product-breadcrumb text-[14px]" style={{ color: siteConfig.colors.textSecondary }}>
                <Link href="/" className="no-underline transition-colors duration-300" style={{ color: siteConfig.colors.textSecondary }}>
                  首页
                </Link>
                {' > '}
                <Link href={categoryLink} className="no-underline transition-colors duration-300" style={{ color: siteConfig.colors.textSecondary }}>
                  {category}
                </Link>
                {' > '}
                <span>{name}</span>
              </div>
            </div>

            {/* 产品内容区 */}
            <div className="product-content flex gap-[50px] mb-[50px] flex-wrap lg:flex-nowrap">
              {/* 产品图片区 */}
              <div className="product-image-section flex-1 bg-[#f9f9f9] rounded-[8px] p-[30px] flex items-center justify-center min-h-[400px]">
                <Image
                  src={image}
                  alt={name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="max-w-full"
                  style={{ 
                    width: 'auto',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* 产品信息区 */}
              <div className="product-info-section flex-1">
                {/* 产品参数 */}
                <div className="product-params bg-[#f9f9f9] rounded-[8px] p-[30px]">
                  <h3 className="text-[18px] mb-[20px]" style={{ color: siteConfig.colors.foreground, fontWeight: 500 }}>
                    产品参数
                  </h3>
                  <ul className="param-list list-none p-0 m-0">
                    {params.map((param, index) => (
                      <li 
                        key={index} 
                        className="param-item flex py-[12px]"
                        style={{ 
                          borderBottom: index === params.length - 1 ? 'none' : '1px solid #e0e0e0'
                        }}
                      >
                        <div className="param-label flex-[0_0_120px]" style={{ fontWeight: 500, color: siteConfig.colors.foreground }}>
                          {param.label}
                        </div>
                        <div className="param-value flex-1" style={{ color: siteConfig.colors.textSecondary }}>
                          {param.value}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

