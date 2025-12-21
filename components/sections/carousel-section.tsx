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
        
        // 确保返回的是数组
        if (Array.isArray(data)) {
          setSlides(data)
        } else {
          console.error('API returned non-array data:', data)
          setSlides([])
        }
      } catch (error) {
        console.error('Failed to fetch carousels:', error)
        setSlides([])
      } finally {
        setLoading(false)
      }
    }
    fetchCarousels()
  }, [])
  
  const totalSlides = slides.length

  // Auto-play功能
  useEffect(() => {
    if (!isAutoPlay || totalSlides === 0) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // 5秒切换一次

    return () => clearInterval(interval)
  }, [isAutoPlay, totalSlides])

  if (loading || totalSlides === 0) {
    return (
      <div 
        className="w-full bg-gray-100" 
        style={{ 
          marginTop: '78px',
          height: '600px' // 固定高度
        }} 
      />
    )
  }

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
        marginTop: '78px', // 为固定导航栏留出空间
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container - 桌面端固定高度，移动端响应式 */}
      <div 
        className="relative w-full carousel-container" 
        style={{ 
          height: '600px' // 桌面端固定 600px
        }}
      >
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
                  style={{
                    objectPosition: 'center center', // 确保图片居中
                  }}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Carousel Dots - 响应式设计 */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 flex gap-2.5 z-20 carousel-dots"
        style={{
          bottom: '20px'
        }}
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
