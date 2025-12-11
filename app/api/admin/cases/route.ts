import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 获取所有案例
export async function GET() {
  try {
    const cases = await prisma.case.findMany({
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

// 创建案例
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const caseItem = await prisma.case.create({
      data: body
    })
    return NextResponse.json(caseItem)
  } catch (error) {
    console.error('Failed to create case:', error)
    return NextResponse.json(
      { error: '创建案例失败' },
      { status: 500 }
    )
  }
}

