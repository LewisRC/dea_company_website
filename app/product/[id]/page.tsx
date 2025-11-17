import { Metadata } from "next"
import { ProductDetailTemplate } from "@/components/templates/product-detail-template"
import { productDetailsData } from "@/config/product-details-data"
import { notFound } from "next/navigation"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = productDetailsData[params.id]
  
  if (!product) {
    return {
      title: "产品未找到 - 德视安",
    }
  }

  return {
    title: `${product.name} - ${product.category} - 德视安`,
    description: `德视安${product.name}，${product.category}产品详情介绍。`,
    keywords: `德视安,${product.name},${product.category}`,
  }
}

export default function ProductDetailPage({ params }: Props) {
  const product = productDetailsData[params.id]

  if (!product) {
    notFound()
  }

  return (
    <ProductDetailTemplate
      name={product.name}
      category={product.category}
      categoryLink={product.categoryLink}
      image={product.image}
      params={product.params}
    />
  )
}

// 生成静态路径
export async function generateStaticParams() {
  return Object.keys(productDetailsData).map((id) => ({
    id: id,
  }))
}

