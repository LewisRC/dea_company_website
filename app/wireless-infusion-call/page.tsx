import { Metadata } from "next"
import { ProductPageTemplate } from "@/components/templates/product-page-template"
import { wirelessInfusionProducts } from "@/config/products-data"

export const metadata: Metadata = {
  title: "无线输液呼叫系统 - 德视安",
  description: "通过无线输液呼叫器、接收机与信号增强器组网，实现对输液状态的远程监控与及时告警。",
  keywords: "德视安,无线输液呼叫系统,输液监控,医院通讯",
}

export default function WirelessInfusionCallPage() {
  return (
    <ProductPageTemplate
      title="无线输液呼叫系统"
      description="通过无线输液呼叫器、接收机与信号增强器组网，结合手机端管理软件，实现对输液状态的远程监控与及时告警，提升输液安全与管理效率。"
      products={wirelessInfusionProducts}
    />
  )
}
