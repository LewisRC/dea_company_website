import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dsakj.com'
  const lastModified = new Date()

  // 主要页面
  const mainPages = [
    '',
    '/company-profile',
    '/contact-us',
    '/recruitment',
    '/talent-philosophy',
  ]

  // 解决方案页面
  const solutionPages = [
    '/smart-community',
    '/smart-healthcare',
    '/smart-hospital',
    '/smart-building',
  ]

  // 产品页面
  const productPages = [
    '/digital-medical-intercom',
    '/two-wire-medical-intercom',
    '/wireless-call-system',
    '/wireless-infusion-call',
    '/icu-visit-intercom',
    '/digital-clock-system',
    '/queuing-system',
    '/info-display-system',
    '/smart-aging-system',
    '/smart-lighting-system',
  ]

  // 信息中心
  const infoPages = [
    '/info-center',
  ]

  const allPages = [
    ...mainPages,
    ...solutionPages,
    ...productPages,
    ...infoPages,
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}
