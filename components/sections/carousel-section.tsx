"use client"

import { useState, useEffect } from "react"
import type React from "react"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"

export function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const slides = siteConfig.carousel
  const totalSlides = slides.length

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlay, totalSlides])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 3000)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 3000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 3000)
  }

  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-black" id="carousel">
      {/* 轮播图容器 */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`w-full h-full ${index === currentSlide ? "animate-zoom-out" : ""}`}>
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover object-center"
                priority={index === currentSlide}
                sizes="100vw"
              />
            </div>
            {/* 半透明黑色遮罩 */}
            <div className="absolute inset-0 bg-black/20" />
            
            {/* 了解更多按钮 - 右侧定位 */}
            <div className="absolute bottom-16 md:bottom-32 right-4 md:right-12 lg:right-126 z-10">
              <button
                className={`px-6 py-2.5 md:px-8 md:py-3 border-2 border-white/80 text-white text-sm md:text-base font-semibold rounded-full bg-white/5 transition-all duration-300 transform hover:scale-105 ${
                  index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(37, 90, 168, 0.4)'
                  e.currentTarget.style.borderColor = 'rgba(37, 90, 168, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)'
                }}
              >
                了解更多
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-8 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:scale-110"
        aria-label="上一张"
      >
        <Image 
          src="/left_arrow.jpg" 
          alt="上一张" 
          width={40} 
          height={40}
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:scale-110"
        aria-label="下一张"
      >
        <Image 
          src="/right_arrow.jpg" 
          alt="下一张" 
          width={40} 
          height={40}
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </button>

      {/* 底部指示器 */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide ? "w-10 h-2 bg-cyan-400" : "w-2 h-2 bg-white/50"
            }`}
            aria-label={`转到第 ${index + 1} 张`}
          />
        ))}
      </div>

      <div className="absolute top-4 md:top-8 right-4 md:right-8 z-20 text-white text-sm">
        <span className="text-cyan-400 font-bold">{currentSlide + 1}</span>
        <span className="text-white/70"> / {totalSlides}</span>
      </div>
    </section>
  )
}
