import { Metadata } from "next"
import { ProductDetailTemplate } from "@/components/templates/product-detail-template"
import { productDetailsData } from "@/config/product-details-data"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = productDetailsData[id]
  
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

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params
  const product = productDetailsData[id]

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

