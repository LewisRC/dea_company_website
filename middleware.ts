import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 🚨 紧急屏蔽：暂时禁用所有 admin 功能，防止安全漏洞被利用
  // 匹配所有 /admin 和 /api/admin 路径
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    // 返回 503 服务不可用
    return new NextResponse(
      JSON.stringify({
        error: 'Service Temporarily Unavailable',
        message: '管理功能暂时维护中，请稍后再试',
        code: 'ADMIN_DISABLED'
      }),
      {
        status: 503,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '3600' // 1小时后重试
        }
      }
    )
  }

  return NextResponse.next()
}

// 配置 middleware 匹配的路径
export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*'
  ]
}

