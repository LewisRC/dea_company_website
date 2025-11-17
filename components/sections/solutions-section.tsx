"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site-config"

export function SolutionsSection() {
  const solutions = siteConfig.solutions || []
  const [hoveredBtn, setHoveredBtn] = useState<number | null>(null)

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: '#f9f9f9' }}
    >
      <div className="container mx-auto px-5">
        <h2 className="text-center mb-15 relative text-[#333333] text-[32px] font-semibold">
          解决方案
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div 
              key={solution.id}
              className="relative rounded-lg overflow-hidden h-[360px] cursor-pointer w-full m-0 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
            >
              <div className="w-full h-full">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                  style={{ transform: 'scale(1.05)' }}
                />
              </div>
              <div 
                className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center p-5 text-white opacity-100"
                style={{
                  backgroundColor: 'rgba(30, 110, 198, 0.7)'
                }}
              >
                <h3 className="text-2xl mb-4">{solution.title}</h3>
                <p className="text-[15px] leading-relaxed mb-5">
                  {solution.description}
                </p>
                <Link
                  href={solution.href}
                  className="inline-block px-5 py-2.5 text-white no-underline rounded transition-all duration-300 font-medium border-none cursor-pointer text-center"
                  style={{
                    backgroundColor: hoveredBtn === solution.id ? '#004d99' : '#0066cc',
                    transform: hoveredBtn === solution.id ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                  onMouseEnter={() => setHoveredBtn(solution.id)}
                  onMouseLeave={() => setHoveredBtn(null)}
                >
                  了解更多
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
