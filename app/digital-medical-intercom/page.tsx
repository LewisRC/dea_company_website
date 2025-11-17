import { Metadata } from "next"
import { ProductPageTemplate } from "@/components/templates/product-page-template"
import { digitalMedicalProducts } from "@/config/products-data"

export const metadata: Metadata = {
  title: "数字医护对讲系统 - 德视安",
  description: "德视安数字医护对讲系统，提供高质量的医院病房通讯解决方案，提升医护效率和患者体验。",
  keywords: "德视安,数字医护对讲系统,医院通讯,病房对讲,医护呼叫",
}

export default function DigitalMedicalIntercomPage() {
  return (
    <ProductPageTemplate
      title="数字医护对讲系统"
      description="德视安数字医护对讲系统，提供高质量的医院病房通讯解决方案，提升医护效率和患者体验。"
      products={digitalMedicalProducts}
    />
  )
}
