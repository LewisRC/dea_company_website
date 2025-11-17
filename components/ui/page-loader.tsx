"use client"

import { useState, useEffect } from "react"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsFading(true)
    }, 800)

    const timer2 = setTimeout(() => {
      setIsLoading(false)
    }, 1300)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  if (!isLoading) return null

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-[9999] transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-[50px] h-[50px] border-[3px] border-[#f3f3f3] border-t-[#1e6bff] rounded-full animate-spin" />
      </div>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </>
  )
}

