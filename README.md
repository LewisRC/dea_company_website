# 德视安科技有限公司官网

> 基于 Next.js 16 + React 19 + TypeScript 的现代化企业官网

[![Build Status](https://github.com/LewisRC/dea_company_website/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/LewisRC/dea_company_website/actions)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.17.0-brightgreen)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 📖 项目简介

成都德视安科技有限公司官方网站，提供智能医疗、智慧康养、智能照明等解决方案的展示与产品介绍。

**项目特点：**
- ✅ 基于 Next.js 16 App Router 架构
- ✅ 完全类型安全的 TypeScript 开发
- ✅ 响应式设计，支持移动端
- ✅ SEO 优化，支持静态生成
- ✅ 78 个产品详情页动态路由
- ✅ 组件化开发，易于维护
- ✅ 支持多种托管平台部署

## 🚀 快速开始

### 环境要求

- **Node.js**: >= 18.17.0（推荐 22.17.0）
- **npm**: >= 9.0.0
- **pnpm**: 推荐使用 pnpm（可选）

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 pnpm（推荐）
pnpm install
```

### 开发模式

```bash
npm run dev
# 或
pnpm dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm run start
```

### 代码检查

```bash
npm run lint
```

## 📁 项目结构

```
dea-company-website/
├── app/                          # Next.js App Router 页面
│   ├── layout.tsx               # 全局布局
│   ├── page.tsx                 # 首页
│   ├── product/[id]/            # 动态产品详情页
│   ├── smart-hospital/          # 智能医院解决方案
│   ├── smart-healthcare/        # 智慧康养解决方案
│   ├── smart-lighting/          # 智能照明解决方案
│   ├── info-center/             # 资讯中心
│   ├── recruitment/             # 人才招聘
│   ├── talent-philosophy/       # 人才理念
│   ├── contact-us/              # 联系我们
│   └── ...                      # 其他页面
│
├── components/                   # React 组件
│   ├── layout/                  # 布局组件
│   │   ├── header.tsx          # 页头
│   │   └── footer.tsx          # 页脚
│   ├── sections/                # 页面区块组件
│   │   ├── carousel-section.tsx
│   │   ├── solutions-section.tsx
│   │   └── ...
│   ├── templates/               # 页面模板
│   │   ├── product-page-template.tsx
│   │   ├── solution-page-template.tsx
│   │   └── product-detail-template.tsx
│   └── ui/                      # UI 基础组件
│       └── ...
│
├── config/                       # 配置文件
│   ├── site-config.ts           # 站点配置
│   ├── products-data.ts         # 产品数据
│   └── product-details-data.ts  # 产品详情数据
│
├── public/                       # 静态资源
│   ├── images/                  # 图片资源
│   └── ...
│
├── hooks/                        # 自定义 Hooks
├── lib/                          # 工具函数
├── .github/workflows/            # CI/CD 配置
├── Dockerfile                    # Docker 配置
├── docker-compose.yml            # Docker Compose 配置
├── vercel.json                   # Vercel 部署配置
├── netlify.toml                  # Netlify 部署配置
└── DEPLOYMENT.md                 # 详细部署指南
```

## 🌐 页面路由

### 主要页面

- `/` - 首页
- `/company-profile` - 公司简介
- `/info-center` - 资讯中心
- `/contact-us` - 联系我们
- `/recruitment` - 人才招聘
- `/talent-philosophy` - 人才理念

### 解决方案

- `/smart-hospital` - 智能医院
- `/smart-healthcare` - 智慧康养
- `/smart-lighting` - 智能照明

### 产品中心（14 个类别）

- `/digital-medical-intercom` - 数字化医疗对讲
- `/two-wire-medical-intercom` - 两线制医疗对讲
- `/wireless-call-system` - 无线呼叫系统
- `/wireless-infusion-call` - 无线输液呼叫
- `/icu-visit-intercom` - ICU 探视对讲
- `/digital-clock-system` - 数字时钟系统
- `/queuing-system` - 排队叫号系统
- `/info-display-system` - 信息发布系统
- `/smart-aging-system` - 智慧养老系统
- `/smart-lighting-system` - 智能照明系统
- 等等...

### 产品详情（78 个产品）

- `/product/1` - 产品 1 详情
- `/product/2` - 产品 2 详情
- ...
- `/product/78` - 产品 78 详情

## 🎨 技术栈

### 核心框架

- **Next.js 16.0** - React 全栈框架
- **React 19.2** - UI 库
- **TypeScript 5** - 类型安全

### UI 组件

- **Radix UI** - 无样式、可访问的组件
- **Tailwind CSS 4** - 实用工具优先的 CSS 框架
- **Lucide React** - 图标库

### 开发工具

- **ESLint** - 代码检查
- **PostCSS** - CSS 处理
- **pnpm** - 包管理器（推荐）

## 📦 部署

项目支持多种部署方式，详见 [DEPLOYMENT.md](./DEPLOYMENT.md)

### 部署检查清单

✅ **构建脚本**: `npm run build` ✓  
✅ **构建输出**: `.next` 目录（standalone 模式）✓  
✅ **CI/CD 配置**: GitHub Actions ✓  
✅ **Node.js 版本**: 配置在 `.nvmrc` 和 `package.json` ✓

### 快速部署

#### Vercel（一键部署）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/LewisRC/dea_company_website)

#### Netlify（一键部署）

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LewisRC/dea_company_website)

## 🔧 配置说明

### 环境变量

本项目为纯静态项目，无需额外环境变量配置。

如需添加环境变量，创建 `.env.local` 文件：

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

### Next.js 配置

主要配置在 `next.config.mjs`：

```javascript
{
  output: 'standalone',        // 独立模式，适合 Node.js 托管
  images: { unoptimized: true }, // 图片优化配置
  swcMinify: true,             // 启用 SWC 压缩
  compress: true               // 启用 gzip 压缩
}
```

## 📊 性能优化

- ✅ 静态生成（SSG）- 所有页面预渲染
- ✅ 动态路由 - 78 个产品页面按需生成
- ✅ 图片优化 - Next.js Image 组件
- ✅ 代码分割 - 自动按路由分割
- ✅ 树摇优化 - 移除未使用代码
- ✅ 压缩优化 - gzip/brotli 压缩

## 🧪 测试

```bash
# 运行 linter
npm run lint

# 本地测试生产构建
npm run build && npm run start
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📝 更新日志

查看 [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) 了解迁移详情。

### v1.0.0 (2025-11-17)

- ✅ 完成从静态 HTML 到 React 的 1:1 迁移
- ✅ 实现所有页面和功能
- ✅ 优化 SEO 和性能
- ✅ 配置多种托管平台支持

## 📞 联系我们

- **公司名称**: 成都德视安科技有限公司
- **官方网站**: [https://dea.com](https://dea.com)
- **客服热线**: 400-886-8899
- **邮箱**: info@dea.com

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

---

**维护者**: Lewis Liu  
**最后更新**: 2025-11-17
