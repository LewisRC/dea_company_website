/**
 * 输入清理和验证库 - 防止 XSS、SQL注入等攻击
 */

// 危险的HTML标签和属性
const DANGEROUS_PATTERNS = [
  /<script[^>]*>.*?<\/script>/gi,
  /<iframe[^>]*>.*?<\/iframe>/gi,
  /<object[^>]*>.*?<\/object>/gi,
  /<embed[^>]*>/gi,
  /on\w+\s*=\s*["'][^"']*["']/gi, // 事件处理器 onclick, onerror等
  /javascript:/gi,
  /data:text\/html/gi,
  /<link[^>]*>/gi,
  /<style[^>]*>.*?<\/style>/gi,
]

/**
 * 清理HTML，移除潜在的XSS代码
 */
export function sanitizeHTML(input: string): string {
  if (typeof input !== 'string') return ''
  
  let cleaned = input
  
  // 移除危险模式
  DANGEROUS_PATTERNS.forEach(pattern => {
    cleaned = cleaned.replace(pattern, '')
  })
  
  // HTML实体编码
  cleaned = cleaned
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
  
  return cleaned
}

/**
 * 验证和清理URL
 */
export function sanitizeURL(url: string): { valid: boolean; cleaned?: string; error?: string } {
  if (typeof url !== 'string') {
    return { valid: false, error: 'URL必须是字符串' }
  }
  
  // 移除javascript:和data:协议
  if (url.match(/^(javascript|data|vbscript|file):/i)) {
    return { valid: false, error: '不允许的URL协议' }
  }
  
  // 只允许 http, https, 或相对路径
  if (url && !url.match(/^(https?:\/\/|\/)/)) {
    return { valid: false, error: 'URL格式不正确' }
  }
  
  return { valid: true, cleaned: url }
}

/**
 * 验证数字ID
 */
export function validateID(id: string | number): { valid: boolean; id?: number; error?: string } {
  const numId = typeof id === 'string' ? parseInt(id, 10) : id
  
  if (isNaN(numId) || numId <= 0 || !Number.isInteger(numId)) {
    return { valid: false, error: '无效的ID' }
  }
  
  return { valid: true, id: numId }
}

/**
 * 清理字符串（移除控制字符）
 */
export function sanitizeString(input: string, maxLength: number = 1000): string {
  if (typeof input !== 'string') return ''
  
  // 移除控制字符（除了常见的空白字符）
  let cleaned = input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
  
  // 限制长度
  if (cleaned.length > maxLength) {
    cleaned = cleaned.substring(0, maxLength)
  }
  
  // 移除首尾空白
  return cleaned.trim()
}

/**
 * 验证和清理产品数据
 */
export interface ProductInput {
  name: string
  nameEn?: string
  category: string
  categoryEn?: string
  description?: string
  descriptionEn?: string
  image: string
  href: string
}

export function sanitizeProductInput(input: any): { valid: boolean; data?: ProductInput; errors?: string[] } {
  const errors: string[] = []
  
  if (!input || typeof input !== 'object') {
    return { valid: false, errors: ['输入数据无效'] }
  }
  
  // 验证必填字段
  if (!input.name || typeof input.name !== 'string') {
    errors.push('产品名称是必填项')
  }
  if (!input.category || typeof input.category !== 'string') {
    errors.push('产品类别是必填项')
  }
  if (!input.image || typeof input.image !== 'string') {
    errors.push('产品图片是必填项')
  }
  if (!input.href || typeof input.href !== 'string') {
    errors.push('产品链接是必填项')
  }
  
  if (errors.length > 0) {
    return { valid: false, errors }
  }
  
  // 清理数据
  const sanitized: ProductInput = {
    name: sanitizeString(input.name, 200),
    category: sanitizeString(input.category, 100),
    image: sanitizeString(input.image, 500),
    href: sanitizeString(input.href, 500),
  }
  
  // 可选字段
  if (input.nameEn) {
    sanitized.nameEn = sanitizeString(input.nameEn, 200)
  }
  if (input.categoryEn) {
    sanitized.categoryEn = sanitizeString(input.categoryEn, 100)
  }
  if (input.description) {
    sanitized.description = sanitizeString(input.description, 2000)
  }
  if (input.descriptionEn) {
    sanitized.descriptionEn = sanitizeString(input.descriptionEn, 2000)
  }
  
  // 验证URL
  const imageCheck = sanitizeURL(sanitized.image)
  if (!imageCheck.valid) {
    errors.push(`图片URL无效: ${imageCheck.error}`)
  }
  
  const hrefCheck = sanitizeURL(sanitized.href)
  if (!hrefCheck.valid) {
    errors.push(`链接URL无效: ${hrefCheck.error}`)
  }
  
  if (errors.length > 0) {
    return { valid: false, errors }
  }
  
  return { valid: true, data: sanitized }
}

/**
 * 验证和清理轮播图数据
 */
export interface CarouselInput {
  title: string
  titleEn?: string
  subtitle?: string
  subtitleEn?: string
  image: string
  imageEn?: string
  link?: string
  order: number
  isActive: boolean
}

export function sanitizeCarouselInput(input: any): { valid: boolean; data?: CarouselInput; errors?: string[] } {
  const errors: string[] = []
  
  if (!input || typeof input !== 'object') {
    return { valid: false, errors: ['输入数据无效'] }
  }
  
  // 验证必填字段
  if (!input.title || typeof input.title !== 'string') {
    errors.push('标题是必填项')
  }
  if (!input.image || typeof input.image !== 'string') {
    errors.push('图片是必填项')
  }
  
  if (errors.length > 0) {
    return { valid: false, errors }
  }
  
  // 清理数据
  const sanitized: CarouselInput = {
    title: sanitizeString(input.title, 200),
    image: sanitizeString(input.image, 500),
    order: typeof input.order === 'number' ? input.order : 0,
    isActive: Boolean(input.isActive),
  }
  
  // 可选字段
  if (input.titleEn) sanitized.titleEn = sanitizeString(input.titleEn, 200)
  if (input.subtitle) sanitized.subtitle = sanitizeString(input.subtitle, 500)
  if (input.subtitleEn) sanitized.subtitleEn = sanitizeString(input.subtitleEn, 500)
  if (input.imageEn) sanitized.imageEn = sanitizeString(input.imageEn, 500)
  if (input.link) sanitized.link = sanitizeString(input.link, 500)
  
  // 验证URLs
  const imageCheck = sanitizeURL(sanitized.image)
  if (!imageCheck.valid) {
    errors.push(`图片URL无效: ${imageCheck.error}`)
  }
  
  if (errors.length > 0) {
    return { valid: false, errors }
  }
  
  return { valid: true, data: sanitized }
}

/**
 * 验证和清理案例数据
 */
export interface CaseInput {
  title: string
  titleEn?: string
  description: string
  descriptionEn?: string
  image: string
  badge: string
  badgeEn?: string
  tags: string
  tagsEn?: string
  order: number
  isActive: boolean
}

export function sanitizeCaseInput(input: any): { valid: boolean; data?: CaseInput; errors?: string[] } {
  const errors: string[] = []
  
  if (!input || typeof input !== 'object') {
    return { valid: false, errors: ['输入数据无效'] }
  }
  
  // 验证必填字段
  if (!input.title || typeof input.title !== 'string') {
    errors.push('标题是必填项')
  }
  if (!input.description || typeof input.description !== 'string') {
    errors.push('描述是必填项')
  }
  if (!input.image || typeof input.image !== 'string') {
    errors.push('图片是必填项')
  }
  if (!input.badge || typeof input.badge !== 'string') {
    errors.push('徽章是必填项')
  }
  if (!input.tags || typeof input.tags !== 'string') {
    errors.push('标签是必填项')
  }
  
  if (errors.length > 0) {
    return { valid: false, errors }
  }
  
  // 清理数据
  const sanitized: CaseInput = {
    title: sanitizeString(input.title, 200),
    description: sanitizeString(input.description, 2000),
    image: sanitizeString(input.image, 500),
    badge: sanitizeString(input.badge, 100),
    tags: sanitizeString(input.tags, 500),
    order: typeof input.order === 'number' ? input.order : 0,
    isActive: Boolean(input.isActive),
  }
  
  // 可选字段
  if (input.titleEn) sanitized.titleEn = sanitizeString(input.titleEn, 200)
  if (input.descriptionEn) sanitized.descriptionEn = sanitizeString(input.descriptionEn, 2000)
  if (input.badgeEn) sanitized.badgeEn = sanitizeString(input.badgeEn, 100)
  if (input.tagsEn) sanitized.tagsEn = sanitizeString(input.tagsEn, 500)
  
  // 验证URL
  const imageCheck = sanitizeURL(sanitized.image)
  if (!imageCheck.valid) {
    errors.push(`图片URL无效: ${imageCheck.error}`)
  }
  
  if (errors.length > 0) {
    return { valid: false, errors }
  }
  
  return { valid: true, data: sanitized }
}

