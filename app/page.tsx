"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CarouselSection } from "@/components/sections/carousel-section"
import { SolutionsSection } from "@/components/sections/solutions-section"
import { BackToTop } from "@/components/ui/back-to-top"
import { PageLoader } from "@/components/ui/page-loader"
import { usePageTitle } from "@/hooks/use-page-title"

export default function Home() {
  // 动态页面标题
  usePageTitle({
    zh: 'DSA德视安 - 智能化全场景解决方案提供商',
    en: 'DSA Deshian - Intelligent Solution Provider'
  })

  return (
    <>
      <PageLoader />
      <Header />
      <main className="w-full" style={{ margin: 0, padding: 0, maxWidth: '100%' }}>
        <CarouselSection />
        <SolutionsSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
