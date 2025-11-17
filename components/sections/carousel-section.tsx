"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"

export function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const slides = siteConfig.carousel
  const totalSlides = slides.length

  // Auto-play功能
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // 5秒切换一次

    return () => clearInterval(interval)
  }, [isAutoPlay, totalSlides])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 3000)
  }

  const handleMouseEnter = () => {
    setIsAutoPlay(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlay(true)
  }

  return (
    <section 
      id="hero-banner"
      className="relative w-full overflow-hidden bg-black"
      style={{
        marginTop: '78px', // 为固定导航栏留出空间（与header高度一致）
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container - 使用固定高度确保完整显示 */}
      <div className="relative w-full" style={{ height: '600px' }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-[2]' : 'opacity-0 z-0'
            }`}
            style={{
              pointerEvents: index === currentSlide ? 'auto' : 'none'
            }}
          >
            <div className="w-full h-full overflow-hidden relative">
              <Image
                src={slide.image}
                alt={`德视安轮播图${index + 1}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Dots */}
      <div 
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`转到第 ${index + 1} 张`}
          />
        ))}
      </div>
    </section>
  )
}
