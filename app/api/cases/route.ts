import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 获取所有启用的案例（公开API）
export async function GET() {
  try {
    const cases = await prisma.case.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' }
    })
    return NextResponse.json(cases)
  } catch (error) {
    console.error('Failed to fetch cases:', error)
    return NextResponse.json(
      { error: '获取案例失败' },
      { status: 500 }
    )
  }
}

