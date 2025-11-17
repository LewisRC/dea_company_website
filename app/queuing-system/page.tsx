import { Metadata } from "next"
import { ProductPageTemplate } from "@/components/templates/product-page-template"
import { queuingProducts } from "@/config/products-data"

export const metadata: Metadata = {
  title: "排队叫号系统 - 德视安",
  description: "通过智能排队管理，实现患者自助取号、叫号显示、语音播报等功能，优化就诊流程。",
  keywords: "德视安,排队叫号系统,智能排队,医院叫号",
}

export default function QueuingSystemPage() {
  return (
    <ProductPageTemplate
      title="排队叫号系统"
      description="通过智能排队管理，实现患者自助取号、叫号显示、语音播报等功能，优化就诊流程，减少患者等待时间，提升就医体验。"
      products={queuingProducts}
    />
  )
}
