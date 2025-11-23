import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

type Props = {
  params: Promise<{ id: string }>
}

// GET /api/admin/products/:id - 获取单个产品
export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) }
    })

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}

// PUT /api/admin/products/:id - 更新产品
export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params
    const body = await request.json()
    const { name, category, image, href } = body

    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { name, category, image, href }
    })

    return NextResponse.json(product)
  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    )
  }
}

// DELETE /api/admin/products/:id - 删除产品
export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params
    await prisma.product.delete({
      where: { id: parseInt(id) }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    )
  }
}

