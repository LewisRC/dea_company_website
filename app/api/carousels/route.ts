import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 获取所有启用的轮播图（公开API）
export async function GET() {
  try {
    const carousels = await prisma.carousel.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' }
    })
    return NextResponse.json(carousels)
  } catch (error) {
    console.error('Failed to fetch carousels:', error)
    return NextResponse.json(
      { error: '获取轮播图失败' },
      { status: 500 }
    )
  }
}

