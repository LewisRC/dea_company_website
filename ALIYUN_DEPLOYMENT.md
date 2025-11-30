# 阿里云部署配置指南

## 问题现象
- ✅ 本地构建成功
- ❌ 阿里云 `pnpm build` 失败
- 错误发生在 "Collecting page data" 阶段

## 问题原因
1. Prisma 需要 `DATABASE_URL` 环境变量
2. 构建脚本没有生成 Prisma Client
3. 可能的内存限制问题

## 解决方案

### 方案一：使用自动化脚本（推荐）

#### 1. 在阿里云控制台配置环境变量

在阿里云的「构建配置」或「环境变量」中添加：

```
DATABASE_URL=file:./prisma/dev.db
NODE_ENV=production
NODE_OPTIONS=--max-old-space-size=4096
```

#### 2. 修改阿里云构建命令

将构建命令改为：

```bash
bash deploy-aliyun.sh
```

或者直接使用：

```bash
chmod +x deploy-aliyun.sh && ./deploy-aliyun.sh
```

### 方案二：手动配置构建命令

在阿里云控制台，将构建命令修改为：

```bash
export DATABASE_URL="file:./prisma/dev.db" && \
export NODE_OPTIONS="--max-old-space-size=4096" && \
pnpm install && \
pnpm prisma generate && \
pnpm build
```

### 方案三：使用 npm/yarn（如果阿里云不支持 pnpm）

```bash
export DATABASE_URL="file:./prisma/dev.db" && \
export NODE_OPTIONS="--max-old-space-size=4096" && \
npm ci && \
npx prisma generate && \
npm run build
```

## 阿里云控制台配置步骤

### 1. 设置环境变量

进入阿里云控制台 → 应用配置 → 环境变量，添加：

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `DATABASE_URL` | `file:./prisma/dev.db` | 数据库连接 |
| `NODE_ENV` | `production` | 生产环境 |
| `NODE_OPTIONS` | `--max-old-space-size=4096` | 增加内存限制 |

### 2. 配置构建命令

找到「构建命令」设置，修改为：

**使用 pnpm:**
```bash
pnpm install && pnpm prisma generate && pnpm build
```

**使用 npm:**
```bash
npm ci && npx prisma generate && npm run build
```

**使用脚本:**
```bash
bash deploy-aliyun.sh
```

### 3. 配置启动命令（如果需要）

```bash
pnpm start
```

或

```bash
npm start
```

## 验证和测试

### 本地测试构建脚本

```bash
# 清理环境
rm -rf .next node_modules/.cache

# 运行构建脚本
bash deploy-aliyun.sh
```

### 检查 Prisma 配置

```bash
# 查看 Prisma schema
cat prisma/schema.prisma

# 生成 Prisma Client
pnpm prisma generate

# 检查数据库
pnpm prisma db push
```

## 常见问题排查

### 问题 1: "Environment variable not found: DATABASE_URL"

**原因:** 缺少环境变量

**解决:**
```bash
export DATABASE_URL="file:./prisma/dev.db"
```

或在阿里云控制台添加环境变量。

### 问题 2: "Prisma Client could not be generated"

**原因:** 构建前没有运行 `prisma generate`

**解决:**
确保构建命令包含：
```bash
pnpm prisma generate
```

### 问题 3: "FATAL ERROR: Reached heap limit"

**原因:** 内存不足

**解决:**
设置环境变量：
```bash
export NODE_OPTIONS="--max-old-space-size=4096"
```

或在阿里云控制台增加实例内存。

### 问题 4: "Can't reach database server"

**原因:** SQLite 路径错误或文件不存在

**解决:**
使用相对路径：
```bash
DATABASE_URL="file:./prisma/dev.db"
```

并确保 `prisma/dev.db` 文件存在或在构建后创建。

### 问题 5: pnpm 命令不存在

**原因:** 阿里云环境没有安装 pnpm

**解决方案 A** - 安装 pnpm:
```bash
npm install -g pnpm && pnpm install && pnpm build
```

**解决方案 B** - 使用 npm:
```bash
npm ci && npx prisma generate && npm run build
```

## 项目已做的修改

已经进行了以下修改来解决构建问题：

### 1. ✅ 更新了 `prisma/schema.prisma`
```prisma
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")  // 添加了这行
}
```

### 2. ✅ 更新了 `package.json` 构建脚本
```json
{
  "scripts": {
    "build": "prisma generate && next build",
    "postinstall": "prisma generate"
  }
}
```

### 3. ✅ 优化了 `next.config.mjs`
- 添加了 `eslint.ignoreDuringBuilds`
- 添加了默认的 `DATABASE_URL` 环境变量
- 添加了包导入优化

### 4. ✅ 创建了部署脚本 `deploy-aliyun.sh`

## 推荐配置

### 最简单的配置

在阿里云控制台：

**环境变量:**
```
DATABASE_URL=file:./prisma/dev.db
```

**构建命令:**
```bash
pnpm install && pnpm build
```

因为 `package.json` 已经配置了 `postinstall` 钩子，会自动运行 `prisma generate`。

## 联系和支持

如果问题仍然存在，请检查：
1. 阿里云构建日志的完整错误信息
2. Node.js 版本（要求 >= 18.17.0）
3. 内存配置
4. 网络连接（如果有外部依赖）

提供完整的错误日志可以帮助更快定位问题。

