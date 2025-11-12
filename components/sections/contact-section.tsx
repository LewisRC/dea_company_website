"use client"

import { siteConfig } from "@/config/site-config"

export function ContactSection() {
  const { colors } = siteConfig

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">获取演示</h2>
          <p className="text-gray-300">联系我们了解如何为您的企业提升通信效率</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="您的名字"
              className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2"
              style={{ focusRingColor: colors.primary }}
            />
            <input
              type="email"
              placeholder="您的邮箱"
              className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2"
              style={{ focusRingColor: colors.primary }}
            />
          </div>

          <input
            type="text"
            placeholder="公司名称"
            className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2"
            style={{ focusRingColor: colors.primary }}
          />

          <textarea
            placeholder="您的需求描述"
            rows={4}
            className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2"
            style={{ focusRingColor: colors.primary }}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: colors.primary }}
          >
            提交申请
          </button>
        </form>
      </div>
    </section>
  )
}
