"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n-context"
import { siteConfig } from "@/config/site-config"

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
  
  // 直接使用默认配置的轮播图数据
  useEffect(() => {
    try {
      // 使用默认配置
      setSlides(siteConfig.carousel.map((item, index) => ({
        id: index + 1,
        title: item.title || '',
        titleEn: item.titleEn || '',
        subtitle: item.subtitle || '',
        subtitleEn: item.subtitleEn || '',
        image: item.image,
        imageEn: item.imageEn || '',
        link: '',
        order: index + 1,
        isActive: true
      })))
    } catch (error) {
      console.error('Failed to use default carousels:', error)
      setSlides([])
    } finally {
      setLoading(false)
    }
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
      className="w-screen overflow-hidden"
      style={{
        marginTop: '78px',
        backgroundColor: '#000',
        marginLeft: 0,
        marginRight: 0,
        position: 'relative',
        left: 0,
        right: 0,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container */}
      <div 
        className="w-full carousel-container" 
        style={{ 
          height: '600px',
          position: 'relative',
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
                pointerEvents: index === currentSlide ? 'auto' : 'none',
              }}
            >
              <div className="w-full h-full relative">
                <Image
                  src={imageUrl}
                  alt={language === 'en' && slide.titleEn ? slide.titleEn : slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
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
