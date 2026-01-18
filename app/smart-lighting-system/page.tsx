import { Metadata } from "next"
import { ProductPageTemplate } from "@/components/templates/product-page-template"
import { smartLightingProducts } from "@/config/products-data"

export const metadata: Metadata = {
  title: "智能照明系统 - 德视安",
  description: "为各类场所提供专业的智能照明控制方案，包括场景控制、自动调节、节能环保等功能。",
  keywords: "德视安,智能照明系统,照明控制,智能家居",
}

export default function SmartLightingSystemPage() {
  return (
    <ProductPageTemplate
      titleKey="products.smartLightingSystem"
      descriptionKey="products.smartLightingSystemDesc"
      products={smartLightingProducts}
      pageTitleZh="智能照明系统 - 德视安科技"
      pageTitleEn="Smart Lighting System - Deshian Technology"
    />
  )
}

