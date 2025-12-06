"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { getProductName } from "@/config/product-names-i18n"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site-config"
import { useI18n } from "@/lib/i18n-context"

interface ProductItem {
  id: number;
  name: string;
  image: string;
  href: string;
}

interface ProductPageTemplateProps {
  titleKey: string;
  descriptionKey: string;
  products: ProductItem[];
}

export function ProductPageTemplate({ titleKey, descriptionKey, products }: ProductPageTemplateProps) {
  const { t } = useI18n()
  
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="w-full product-category-page pt-[120px] pb-[80px]" style={{ backgroundColor: siteConfig.colors.backgroundLight }}>
        <div className="container">
          {/* 页面标题 */}
          <div className="product-header text-center mb-[60px]">
            <h1 className="text-[36px] mb-[20px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>{t(titleKey)}</h1>
            <p className="text-[16px] leading-[1.8] max-w-[800px] mx-auto" style={{ color: siteConfig.colors.textSecondary }}>{t(descriptionKey)}</p>
          </div>

          {/* 产品网格 */}
          <div className="product-grid grid gap-[30px] mt-[40px]" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {products.map((product) => {
              const translatedName = getProductName(product.name, language)
              return (
                <div key={product.id} className="product-item bg-white rounded-[8px] overflow-hidden transition-all duration-300 ease-out" style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                  <Link href={product.href} className="block">
                    <div className="product-image relative overflow-hidden bg-white flex items-center justify-center" style={{ paddingTop: '75%' }}>
                      <Image
                        src={product.image}
                        alt={translatedName}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="absolute object-contain"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '60%',
                          height: '60%'
                        }}
                      />
                    </div>
                    <div className="product-info p-[20px] text-center">
                      <h3 className="product-name text-[18px] mb-[15px]" style={{ color: siteConfig.colors.foreground, fontWeight: 500 }}>{translatedName}</h3>
                      <span className="product-btn inline-block px-[20px] py-[8px] text-white rounded-[4px] text-[14px] transition-colors duration-300" style={{ backgroundColor: siteConfig.colors.primary }}>
                        {t('common.viewDetails')}
                      </span>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
