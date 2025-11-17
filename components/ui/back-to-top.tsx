"use client"

import { useState, useEffect } from "react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[30px] right-[30px] w-[50px] h-[50px] rounded-full border-none cursor-pointer flex items-center justify-center transition-all duration-300 z-[9999] ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      style={{
        backgroundColor: '#0066cc',
        color: 'white',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#00a8e8'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#0066cc'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
      aria-label="回到顶部"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>
    </button>
  )
}

