import { readFile } from 'fs/promises'
import crypto from 'crypto'

// 文件类型的魔术数字（文件头）
const FILE_SIGNATURES: Record<string, string[]> = {
  'image/jpeg': ['ffd8ffe0', 'ffd8ffe1', 'ffd8ffe2', 'ffd8ffe3', 'ffd8ffe8'],
  'image/png': ['89504e47'],
  'image/gif': ['47494638'],
  'image/webp': ['52494646'], // RIFF
}

// 允许的文件扩展名（白名单）
const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'webp']

// 危险的文件扩展名（黑名单）
const DANGEROUS_EXTENSIONS = [
  'php', 'phtml', 'php3', 'php4', 'php5', 'phps',
  'asp', 'aspx', 'jsp', 'jspx',
  'exe', 'bat', 'cmd', 'com', 'msi',
  'sh', 'bash', 'zsh',
  'js', 'jsx', 'ts', 'tsx', 'html', 'htm',
  'svg', 'xml', // SVG 可以包含 JavaScript
]

/**
 * 验证文件是否为真实图片（检查文件头）
 */
export async function validateImageFile(buffer: Buffer, mimeType: string): Promise<{ valid: boolean; error?: string }> {
  // 检查 MIME type
  if (!FILE_SIGNATURES[mimeType]) {
    return { valid: false, error: `不支持的文件类型: ${mimeType}` }
  }
  
  // 读取文件头（前8字节）
  const fileHeader = buffer.slice(0, 8).toString('hex')
  
  // 检查文件头是否匹配
  const signatures = FILE_SIGNATURES[mimeType]
  const isValid = signatures.some(sig => fileHeader.startsWith(sig))
  
  if (!isValid) {
    return { valid: false, error: '文件内容与声称的类型不匹配，可能是伪装文件' }
  }
  
  return { valid: true }
}

/**
 * 验证文件名是否安全
 */
export function validateFileName(filename: string): { valid: boolean; error?: string } {
  // 移除路径遍历字符
  if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
    return { valid: false, error: '文件名包含非法字符' }
  }
  
  // 检查是否有多个扩展名（双扩展名攻击）
  const parts = filename.toLowerCase().split('.')
  if (parts.length > 2) {
    // 检查是否包含危险扩展名
    for (let i = 0; i < parts.length - 1; i++) {
      if (DANGEROUS_EXTENSIONS.includes(parts[i])) {
        return { valid: false, error: `文件名包含危险扩展名: .${parts[i]}` }
      }
    }
  }
  
  // 提取扩展名
  const ext = parts[parts.length - 1].toLowerCase()
  
  // 检查扩展名白名单
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    return { valid: false, error: `不允许的文件扩展名: .${ext}` }
  }
  
  // 检查扩展名黑名单
  if (DANGEROUS_EXTENSIONS.includes(ext)) {
    return { valid: false, error: `危险的文件扩展名: .${ext}` }
  }
  
  return { valid: true }
}

/**
 * 生成安全的文件名
 */
export function generateSafeFileName(originalName: string): string {
  // 只保留扩展名，其他全部随机化
  const ext = originalName.split('.').pop()?.toLowerCase() || 'jpg'
  
  // 验证扩展名
  if (!ALLOWED_EXTENSIONS.includes(ext)) {
    throw new Error(`不允许的文件扩展名: .${ext}`)
  }
  
  // 生成随机文件名
  const timestamp = Date.now()
  const randomBytes = crypto.randomBytes(16).toString('hex')
  
  return `${timestamp}-${randomBytes}.${ext}`
}

/**
 * 验证文件大小
 */
export function validateFileSize(size: number, maxSizeInMB: number = 5): { valid: boolean; error?: string } {
  const maxBytes = maxSizeInMB * 1024 * 1024
  
  if (size > maxBytes) {
    return { valid: false, error: `文件大小超过限制 ${maxSizeInMB}MB` }
  }
  
  if (size === 0) {
    return { valid: false, error: '文件为空' }
  }
  
  return { valid: true }
}

/**
 * 完整的文件验证
 */
export async function validateUploadedFile(
  file: File,
  maxSizeInMB: number = 5
): Promise<{ valid: boolean; error?: string; safeFileName?: string }> {
  // 验证文件名
  const fileNameCheck = validateFileName(file.name)
  if (!fileNameCheck.valid) {
    return fileNameCheck
  }
  
  // 验证文件大小
  const sizeCheck = validateFileSize(file.size, maxSizeInMB)
  if (!sizeCheck.valid) {
    return sizeCheck
  }
  
  // 读取文件内容
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  
  // 验证文件头
  const contentCheck = await validateImageFile(buffer, file.type)
  if (!contentCheck.valid) {
    return contentCheck
  }
  
  // 生成安全的文件名
  const safeFileName = generateSafeFileName(file.name)
  
  return { valid: true, safeFileName }
}

