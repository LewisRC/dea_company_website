"use client"

import { useEffect } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CarouselSection } from "@/components/sections/carousel-section"
import { SolutionsSection } from "@/components/sections/solutions-section"
import { BackToTop } from "@/components/ui/back-to-top"
import { PageLoader } from "@/components/ui/page-loader"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Home() {
  // 滚动动画
  useScrollAnimation()

  // 为 sections 添加滚动动画类
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      if (section.id !== 'hero-banner') {
        section.classList.add('animate-on-scroll')
      }
    })
  }, [])

  return (
    <>
      <PageLoader />
      <Header />
      <main className="w-full">
        <CarouselSection />
        <SolutionsSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
