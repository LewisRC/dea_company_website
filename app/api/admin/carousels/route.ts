import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 获取所有轮播图
export async function GET() {
  try {
    const carousels = await prisma.carousel.findMany({
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

// 创建轮播图
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const carousel = await prisma.carousel.create({
      data: body
    })
    return NextResponse.json(carousel)
  } catch (error) {
    console.error('Failed to create carousel:', error)
    return NextResponse.json(
      { error: '创建轮播图失败' },
      { status: 500 }
    )
  }
}

