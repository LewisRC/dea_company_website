"use client"

import { siteConfig } from "@/config/site-config"

export function HeroSection() {
  const { hero, colors } = siteConfig

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('${hero.backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 深色遮罩 */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 内容 */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{hero.title}</h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-100 text-balance">{hero.subtitle}</p>
        <a
          href={hero.ctaButton.href}
          className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-transform hover:scale-105"
          style={{ backgroundColor: colors.primary }}
        >
          {hero.ctaButton.text}
        </a>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
