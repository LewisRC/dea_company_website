import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/config/site-config"
import "./globals.css"

export const metadata: Metadata = {
  title: "德视安 - 楼宇对讲、智能家居解决方案提供商",
  description: "德视安是领先的楼宇对讲、智能家居及医护对讲等智能设备的研发设计、生产制造和销售企业，专注于为智慧社区和智慧医院提供整体解决方案",
  keywords: "德视安,楼宇对讲,智能家居,医护对讲,新风系统,智慧通行,智能门锁,智慧社区,智慧医院",
  authors: [{ name: "成都德视安科技有限公司" }],
  robots: "index, follow",
  openGraph: {
    title: "德视安 - 楼宇对讲、智能家居解决方案提供商",
    description: "德视安是领先的楼宇对讲、智能家居及医护对讲等智能设备的研发设计、生产制造和销售企业",
    type: "website",
    locale: "zh_CN",
    siteName: "德视安",
  },
  icons: {
    icon: [
      {
        url: "/images/logo2-1.png",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
