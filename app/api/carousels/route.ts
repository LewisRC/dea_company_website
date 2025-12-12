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
    // 返回空数组而不是错误对象，避免前端 map 报错
    return NextResponse.json([])
  }
}

