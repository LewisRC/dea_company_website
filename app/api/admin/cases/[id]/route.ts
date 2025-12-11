import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 更新案例
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const caseItem = await prisma.case.update({
      where: { id: parseInt(params.id) },
      data: body
    })
    return NextResponse.json(caseItem)
  } catch (error) {
    console.error('Failed to update case:', error)
    return NextResponse.json(
      { error: '更新案例失败' },
      { status: 500 }
    )
  }
}

// 删除案例
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.case.delete({
      where: { id: parseInt(params.id) }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete case:', error)
    return NextResponse.json(
      { error: '删除案例失败' },
      { status: 500 }
    )
  }
}

