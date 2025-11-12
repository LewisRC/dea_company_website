"use client"

import { siteConfig } from "@/config/site-config"

export function AboutSection() {
  const { about, colors } = siteConfig

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div>
            <h2 className="text-4xl font-bold mb-4">{about.title}</h2>
            <p className="text-gray-600 text-lg mb-6">{about.description}</p>

            {/* 统计数据 */}
            <div className="grid grid-cols-2 gap-6">
              {about.stats.map((stat) => (
                <div key={stat.label} className="border-l-4 pl-4" style={{ borderColor: colors.primary }}>
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧图片 */}
          <div
            className="w-full h-96 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url('${about.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  )
}
