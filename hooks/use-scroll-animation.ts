"use client"

import { useEffect } from "react"

export function useScrollAnimation() {
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll')
      
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('fade-in')
        }
      })
    }

    // 初始检查
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

