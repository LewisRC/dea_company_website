"use client"

export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "成都德视安科技有限公司",
    "alternateName": ["DSA", "DSA德视安", "德视安", "德视安科技", "Deshian", "Deshian Technology", "DSA Deshian"],
    "url": "https://www.dsakj.com",
    "logo": "https://www.dsakj.com/images/logo2-1.png",
    "description": "DSA德视安科技是领先的智能化系统解决方案提供商，专注于楼宇对讲、医护对讲、智慧社区等领域",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "成都",
      "addressRegion": "四川省",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Chinese", "English"]
    },
    "sameAs": [
      "https://www.dsakj.com"
    ]
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DSA德视安科技",
    "alternateName": ["DSA", "DSA德视安", "德视安", "德视安科技"],
    "url": "https://www.dsakj.com",
    "description": "DSA德视安科技官方网站 - 智能化全场景解决方案提供商",
    "inLanguage": "zh-CN",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.dsakj.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首页",
        "item": "https://www.dsakj.com"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  )
}
