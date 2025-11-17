import { Metadata } from "next"
import { ProductPageTemplate } from "@/components/templates/product-page-template"
import { smartAgingProducts } from "@/config/products-data"

export const metadata: Metadata = {
  title: "智慧康养系统 - 德视安",
  description: "涵盖康养对讲、疗养管理、智能照护、信息发布等系统，提升康养机构管理效率和服务质量。",
  keywords: "德视安,智慧康养系统,康养对讲,养老系统",
}

export default function SmartAgingSystemPage() {
  return (
    <ProductPageTemplate
      title="智慧康养系统"
      description="涵盖康养对讲、疗养管理、智能照护、信息发布等系统，提升康养机构管理效率和服务质量。"
      products={smartAgingProducts}
    />
  )
}
