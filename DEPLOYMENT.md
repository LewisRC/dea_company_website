# 部署指南

本文档说明如何在各种托管平台上部署德视安公司网站。

## 📋 部署前检查清单

✅ Node.js 版本：>= 18.17.0（推荐 22.17.0）  
✅ 构建脚本：`npm run build`  
✅ 构建输出：`.next` 目录（standalone模式）  
✅ CI/CD 配置：`.github/workflows/ci.yml`  
✅ 环境变量：无需额外配置（纯静态项目）

## 🚀 托管平台部署

### 1. Vercel（推荐）

Vercel 是 Next.js 的官方托管平台，部署最简单。

#### 方法一：GitHub 集成（推荐）

1. 访问 [Vercel](https://vercel.com)
2. 点击 "Import Project"
3. 选择你的 GitHub 仓库：`LewisRC/dea_company_website`
4. Vercel 会自动检测 Next.js 项目
5. 点击 "Deploy" - 完成！

#### 方法二：命令行部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel

# 生产部署
vercel --prod
```

#### 配置文件

项目已包含 `vercel.json` 配置文件。

**构建设置：**
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Node.js Version: 22.x

### 2. Netlify

#### 方法一：GitHub 集成

1. 访问 [Netlify](https://netlify.com)
2. 点击 "Add new site" → "Import an existing project"
3. 选择 GitHub 并授权
4. 选择仓库：`LewisRC/dea_company_website`
5. 配置构建设置：
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 22.17.0
6. 点击 "Deploy site"

#### 方法二：命令行部署

```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 登录
netlify login

# 部署
netlify deploy

# 生产部署
netlify deploy --prod
```

#### 配置文件

项目已包含 `netlify.toml` 配置文件。

**需要安装 Next.js 插件：**

```bash
npm install --save-dev @netlify/plugin-nextjs
```

### 3. 腾讯云 / 阿里云 / 华为云（云服务器）

#### 步骤：

1. **准备服务器**
   ```bash
   # 更新系统
   sudo apt update && sudo apt upgrade -y
   
   # 安装 Node.js（使用 nvm）
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   source ~/.bashrc
   nvm install 22.17.0
   nvm use 22.17.0
   ```

2. **克隆项目**
   ```bash
   git clone https://github.com/LewisRC/dea_company_website.git
   cd dea_company_website
   ```

3. **安装依赖**
   ```bash
   npm install
   ```

4. **构建项目**
   ```bash
   npm run build
   ```

5. **启动服务**
   ```bash
   # 开发模式
   npm run dev
   
   # 生产模式
   npm run start
   ```

6. **使用 PM2 保持运行**
   ```bash
   # 安装 PM2
   npm install -g pm2
   
   # 启动应用
   pm2 start npm --name "dea-website" -- start
   
   # 设置开机自启
   pm2 startup
   pm2 save
   
   # 查看状态
   pm2 status
   pm2 logs dea-website
   ```

7. **配置 Nginx 反向代理**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### 4. Docker 部署

#### Dockerfile（已优化）

```dockerfile
FROM node:22.17.0-alpine AS base

# 安装依赖
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# 构建应用
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 生产运行
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### 使用 Docker Compose

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

#### 部署命令

```bash
# 构建镜像
docker build -t dea-website .

# 运行容器
docker run -d -p 3000:3000 --name dea-website dea-website

# 使用 Docker Compose
docker-compose up -d
```

## 🔧 环境变量配置

本项目为纯静态项目，无需额外环境变量。

如果将来需要添加环境变量，创建 `.env.local` 文件：

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://dea.com
```

## 📊 构建验证

部署前验证构建：

```bash
# 清理之前的构建
rm -rf .next

# 执行构建
npm run build

# 检查构建输出
ls -la .next

# 本地测试生产构建
npm run start
```

## 🎯 性能优化建议

1. **启用 CDN**：将 `public` 目录的静态资源托管到 CDN
2. **图片优化**：已配置 Next.js Image 优化
3. **代码分割**：Next.js 自动处理
4. **缓存策略**：配置 HTTP 缓存头
5. **压缩**：已启用 gzip/brotli 压缩

## 📈 监控和分析

推荐集成：
- **Vercel Analytics**：已集成（`@vercel/analytics`）
- **Google Analytics**：可选
- **Sentry**：错误监控（可选）

## 🔐 安全建议

1. 定期更新依赖：`npm audit fix`
2. 使用 HTTPS（所有托管平台都免费提供）
3. 配置安全响应头
4. 启用 CORS 策略（如需要）

## 📞 技术支持

如有问题，请查看：
- [Next.js 部署文档](https://nextjs.org/docs/deployment)
- [Vercel 文档](https://vercel.com/docs)
- [Netlify 文档](https://docs.netlify.com)

---

**最后更新**：2025-11-17  
**维护者**：Lewis Liu

