import { Metadata } from "next"
import { ProductPageTemplate } from "@/components/templates/product-page-template"
import { icuVisitProducts } from "@/config/products-data"

export const metadata: Metadata = {
  title: "ICU探视对讲系统 - 德视安",
  description: "专为手术室洁净区与外部隔离区设计，实现内外双向高清音视频通话与探视。",
  keywords: "德视安,ICU探视对讲系统,手术室对讲,ICU通讯",
}

export default function IcuVisitIntercomPage() {
  return (
    <ProductPageTemplate
      titleKey="products.icuVisitIntercom"
      descriptionKey="products.icuVisitIntercomDesc"
      products={icuVisitProducts}
      pageTitleZh="ICU探视对讲系统 - 德视安科技"
      pageTitleEn="ICU Visit Intercom System - Deshian Technology"
    />
  )
}
