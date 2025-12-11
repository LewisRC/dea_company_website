"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n-context"

type Carousel = {
  id: number
  title: string
  titleEn: string | null
  subtitle: string | null
  subtitleEn: string | null
  image: string
  imageEn: string | null
  link: string | null
  order: number
  isActive: boolean
}

export function CarouselSection() {
  const { language } = useI18n()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [slides, setSlides] = useState<Carousel[]>([])
  const [loading, setLoading] = useState(true)
  
  // 从 API 获取轮播图数据
  useEffect(() => {
    async function fetchCarousels() {
      try {
        const res = await fetch('/api/carousels')
        const data = await res.json()
        setSlides(data)
      } catch (error) {
        console.error('Failed to fetch carousels:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchCarousels()
  }, [])
  
  const totalSlides = slides.length

  if (loading || totalSlides === 0) {
    return <div className="w-full h-[600px] bg-gray-100" style={{ marginTop: '78px' }} />
  }

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
        {slides.map((slide, index) => {
          // 根据语言选择图片：优先使用对应语言的图片，如果没有则使用默认图片
          const imageUrl = language === 'en' && slide.imageEn 
            ? slide.imageEn 
            : slide.image
          
          return (
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
                  src={imageUrl}
                  alt={language === 'en' && slide.titleEn ? slide.titleEn : slide.title}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
            </div>
          )
        })}
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
