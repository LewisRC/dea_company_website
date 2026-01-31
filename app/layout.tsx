import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { I18nProvider } from "@/lib/i18n-context"
import { StructuredData } from "@/components/seo/structured-data"
import "./globals.css"

export const metadata: Metadata = {
  title: "德视安_德视安科技_成都德视安科技有限公司 - 智能化全场景解决方案提供商",
  description: "德视安科技（成都德视安科技有限公司）是领先的楼宇对讲、智能家居、医护对讲等智能设备研发制造企业。德视安专注于智慧社区、智慧医院、智慧建筑整体解决方案，为客户提供专业的智能化系统集成服务。",
  keywords: "德视安,德视安科技,成都德视安,成都德视安科技有限公司,楼宇对讲,智能家居,医护对讲,智慧社区,智慧医院,智慧建筑,智能门锁,可视对讲,数字对讲,无线呼叫,输液呼叫,ICU探视,排队叫号,信息发布,智慧养老,智慧照明",
  authors: [{ name: "成都德视安科技有限公司" }],
  creator: "成都德视安科技有限公司",
  publisher: "德视安科技",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.dsakj.com",
  },
  openGraph: {
    title: "德视安科技 - 智能化全场景解决方案提供商 | Deshian Technology",
    description: "德视安科技是领先的智能化系统解决方案提供商，专注于楼宇对讲、医护对讲、智慧社区等领域",
    type: "website",
    locale: "zh_CN",
    url: "https://www.dsakj.com",
    siteName: "德视安科技 Deshian Technology",
  },
  verification: {
    baidu: "codeva-NF31YjtjSB",
  },
  other: {
    "baidu-site-verification": "codeva-NF31YjtjSB",
    "company": "成都德视安科技有限公司",
    "location": "成都",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logo2-1.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font-sans antialiased`} style={{ margin: 0, padding: 0, width: '100%', overflowX: 'hidden' }}>
        <StructuredData />
        <I18nProvider>
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
