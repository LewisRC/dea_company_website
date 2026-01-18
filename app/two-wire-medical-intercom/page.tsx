import { Metadata } from "next"
import { ProductPageTemplate } from "@/components/templates/product-page-template"
import { twoWireMedicalProducts } from "@/config/products-data"

export const metadata: Metadata = {
  title: "二线制医护对讲系统 - 德视安",
  description: "德视安二线制医护对讲系统采用成熟稳定的二线制技术，为医院提供经济实用的病房通讯解决方案。",
  keywords: "德视安,二线制医护对讲系统,医院通讯,病房对讲",
}

export default function TwoWireMedicalIntercomPage() {
  return (
    <ProductPageTemplate
      titleKey="products.twoWireMedicalIntercom"
      descriptionKey="products.twoWireMedicalIntercomDesc"
      products={twoWireMedicalProducts}
      pageTitleZh="二线制医护对讲系统 - 德视安科技"
      pageTitleEn="Two-Wire Medical Intercom System - Deshian Technology"
    />
  )
}
