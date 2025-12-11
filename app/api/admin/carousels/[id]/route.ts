import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 更新轮播图
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const carousel = await prisma.carousel.update({
      where: { id: parseInt(params.id) },
      data: body
    })
    return NextResponse.json(carousel)
  } catch (error) {
    console.error('Failed to update carousel:', error)
    return NextResponse.json(
      { error: '更新轮播图失败' },
      { status: 500 }
    )
  }
}

// 删除轮播图
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.carousel.delete({
      where: { id: parseInt(params.id) }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete carousel:', error)
    return NextResponse.json(
      { error: '删除轮播图失败' },
      { status: 500 }
    )
  }
}

