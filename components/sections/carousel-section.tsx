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
  imageMobile: string | null
  imageMobileEn: string | null
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
  const [isMobile, setIsMobile] = useState(false)
  
  // 检测屏幕尺寸
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // 从API加载轮播图数据
  useEffect(() => {
    const fetchCarousels = async () => {
      try {
        const response = await fetch('/api/carousels')
        const data = await response.json()
        setSlides(data)
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
        className="w-full bg-white" 
        style={{ 
          height: '250px' // 增加移动端高度，确保图片显示完整
        }} 
      >
        <style jsx>{`
          @media (min-width: 640px) {
            div {
              height: 350px !important;
            }
          }
          @media (min-width: 768px) {
            div {
              height: 450px !important;
            }
          }
          @media (min-width: 1024px) {
            div {
              height: 550px !important;
            }
          }
          @media (min-width: 1280px) {
            div {
              height: 650px !important;
            }
          }
        `}</style>
      </div>
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
      className="overflow-hidden"
      style={{
        backgroundColor: '#ffffff',
        margin: '0 calc(-50vw + 50%)',
        padding: 0,
        width: '100vw',
        position: 'relative',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container - 响应式高度 */}
      <div 
        className="w-full carousel-container overflow-hidden" 
        style={{ 
          height: '250px', // 增加移动端高度，确保图片显示完整
          position: 'relative',
          padding: 0,
          margin: 0
        }}
      >
        <style jsx>{`
          @media (min-width: 640px) {
            .carousel-container {
              height: 350px !important;
            }
          }
          @media (min-width: 768px) {
            .carousel-container {
              height: 450px !important;
            }
          }
          @media (min-width: 1024px) {
            .carousel-container {
              height: 550px !important;
            }
          }
          @media (min-width: 1280px) {
            .carousel-container {
              height: 650px !important;
            }
          }
        `}</style>
        {slides.map((slide, index) => {
          // 智能选择图片：考虑移动端/桌面端和语言
          let imageUrl = slide.image
          
          if (isMobile) {
            // 移动端优先使用移动端图片
            if (language === 'en' && slide.imageMobileEn) {
              imageUrl = slide.imageMobileEn
            } else if (slide.imageMobile) {
              imageUrl = slide.imageMobile
            } else if (language === 'en' && slide.imageEn) {
              // 如果没有移动端图片，回退到桌面端图片
              imageUrl = slide.imageEn
            }
          } else {
            // 桌面端使用桌面端图片
            if (language === 'en' && slide.imageEn) {
              imageUrl = slide.imageEn
            }
          }
          
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
                  className="object-contain"
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
            aria-label={language === 'zh' ? `转到第 ${index + 1} 张` : `Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
