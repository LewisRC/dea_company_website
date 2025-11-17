import { Metadata } from "next"
import { ProductPageTemplate } from "@/components/templates/product-page-template"
import { infoDisplayProducts } from "@/config/products-data"

export const metadata: Metadata = {
  title: "信息发布系统 - 德视安",
  description: "基于数字标牌技术，实现医院各类信息的实时发布与管理，提升信息传播效率。",
  keywords: "德视安,信息发布系统,数字标牌,信息管理",
}

export default function InfoDisplaySystemPage() {
  return (
    <ProductPageTemplate
      title="信息发布系统"
      description="基于数字标牌技术，实现医院各类信息的实时发布与管理，包括就诊指引、公告通知、健康教育等内容，提升信息传播效率。"
      products={infoDisplayProducts}
    />
  )
}
