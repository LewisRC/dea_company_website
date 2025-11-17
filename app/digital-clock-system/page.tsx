import { Metadata } from "next"
import { ProductPageTemplate } from "@/components/templates/product-page-template"
import { digitalClockProducts } from "@/config/products-data"

export const metadata: Metadata = {
  title: "数字时钟系统 - 德视安",
  description: "确保多终端时间一致，集成校准/提醒/发布功能，优化时间管理效率。",
  keywords: "德视安,数字时钟系统,时间同步,医院时钟",
}

export default function DigitalClockSystemPage() {
  return (
    <ProductPageTemplate
      title="数字时钟系统"
      description="确保多终端时间一致，集成校准/提醒/发布功能，优化时间管理效率。"
      products={digitalClockProducts}
    />
  )
}
