import { Metadata } from "next"
import { ProductPageTemplate } from "@/components/templates/product-page-template"
import { wirelessCallProducts } from "@/config/products-data"

export const metadata: Metadata = {
  title: "无线呼叫系统 - 德视安",
  description: "免布线、灵活可扩展，实时响应提升服务效率与质量，优化医患通信体验。",
  keywords: "德视安,无线呼叫系统,医院通讯,无线对讲",
}

export default function WirelessCallSystemPage() {
  return (
    <ProductPageTemplate
      title="无线呼叫系统"
      description="免布线、灵活可扩展，实时响应提升服务效率与质量，优化医患通信体验。"
      products={wirelessCallProducts}
    />
  )
}
