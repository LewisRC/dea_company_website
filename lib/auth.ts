import { NextRequest } from 'next/server'
import crypto from 'crypto'

// 安全的密码哈希（生产环境应该用 bcrypt）
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || hashPassword('Dsa@2025#Admin!')

// 会话密钥（应该存储在环境变量中）
const SESSION_SECRET = process.env.SESSION_SECRET || 'change-this-in-production-' + crypto.randomBytes(32).toString('hex')

// 简单的密码哈希函数
export function hashPassword(password: string): string {
  return crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(password)
    .digest('hex')
}

// 验证密码
export function verifyPassword(password: string, hash: string): boolean {
  const passwordHash = hashPassword(password)
  return crypto.timingSafeEqual(
    Buffer.from(passwordHash),
    Buffer.from(hash)
  )
}

// 生成安全的会话 token
export function generateSessionToken(username: string): string {
  const payload = {
    username,
    timestamp: Date.now(),
    random: crypto.randomBytes(16).toString('hex')
  }
  const token = Buffer.from(JSON.stringify(payload)).toString('base64')
  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(token)
    .digest('hex')
  
  return `${token}.${signature}`
}

// 验证会话 token
export function verifySessionToken(token: string): { valid: boolean; username?: string } {
  try {
    const [payload, signature] = token.split('.')
    
    // 验证签名
    const expectedSignature = crypto
      .createHmac('sha256', SESSION_SECRET)
      .update(payload)
      .digest('hex')
    
    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
      return { valid: false }
    }
    
    // 解析 payload
    const data = JSON.parse(Buffer.from(payload, 'base64').toString())
    
    // 检查 token 是否过期（24小时）
    const tokenAge = Date.now() - data.timestamp
    if (tokenAge > 24 * 60 * 60 * 1000) {
      return { valid: false }
    }
    
    return { valid: true, username: data.username }
  } catch (error) {
    return { valid: false }
  }
}

// API 路由认证中间件
export function requireAuth(request: NextRequest): { authenticated: boolean; username?: string; error?: string } {
  // 从 Authorization header 获取 token
  const authHeader = request.headers.get('authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { authenticated: false, error: 'Missing authorization token' }
  }
  
  const token = authHeader.substring(7)
  const { valid, username } = verifySessionToken(token)
  
  if (!valid) {
    return { authenticated: false, error: 'Invalid or expired token' }
  }
  
  return { authenticated: true, username }
}

// 管理员登录验证
export function authenticateAdmin(username: string, password: string): { success: boolean; token?: string; error?: string } {
  if (username !== ADMIN_USERNAME) {
    return { success: false, error: 'Invalid credentials' }
  }
  
  if (!verifyPassword(password, ADMIN_PASSWORD_HASH)) {
    return { success: false, error: 'Invalid credentials' }
  }
  
  const token = generateSessionToken(username)
  return { success: true, token }
}

