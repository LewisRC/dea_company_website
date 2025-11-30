# 阿里云构建问题修复指南

## 问题描述
本地 build 成功，但阿里云 pnpm build 失败，错误发生在 "Collecting page data" 阶段。

## 根本原因
1. Prisma schema 缺少数据库 URL 配置
2. 构建时需要 DATABASE_URL 环境变量
3. SQLite 数据库文件路径问题

## 解决方案

### 1. 在阿里云设置环境变量

在阿里云构建配置中添加以下环境变量：

```bash
DATABASE_URL="file:./prisma/dev.db"
NODE_ENV="production"
```

### 2. 确保数据库文件存在

在构建前运行：

```bash
# 生成 Prisma Client
pnpm prisma generate

# 如果需要数据库，创建并迁移
pnpm prisma migrate deploy
```

### 3. 修改构建脚本（推荐）

在 `package.json` 中更新构建脚本：

```json
{
  "scripts": {
    "build": "prisma generate && next build",
    "build:cloud": "prisma generate && next build"
  }
}
```

### 4. 如果不需要数据库功能

如果暂时不使用数据库功能，可以：

**选项 A**: 在构建时跳过 Prisma
```bash
# 设置环境变量
DATABASE_URL="file:./dev.db"
```

**选项 B**: 移除 Prisma 相关代码
- 删除 API routes 中的数据库调用
- 使用静态数据替代

### 5. 增加构建内存（如果是内存问题）

在阿里云构建配置中：

```bash
NODE_OPTIONS="--max-old-space-size=4096"
```

## 完整的阿里云构建命令

```bash
# 设置环境变量
export DATABASE_URL="file:./prisma/dev.db"
export NODE_ENV="production"
export NODE_OPTIONS="--max-old-space-size=4096"

# 安装依赖
pnpm install

# 生成 Prisma Client
pnpm prisma generate

# 构建
pnpm build
```

## 验证修复

本地测试：

```bash
# 清理缓存
rm -rf .next node_modules/.cache

# 设置环境变量
export DATABASE_URL="file:./prisma/dev.db"

# 重新构建
pnpm install
pnpm prisma generate
pnpm build
```

## 常见错误和解决方法

### 错误 1: "Environment variable not found: DATABASE_URL"
**解决**: 设置 DATABASE_URL 环境变量

### 错误 2: "Can't reach database server"
**解决**: 使用 `file:./prisma/dev.db` 作为 SQLite 路径

### 错误 3: "Out of memory"
**解决**: 增加 NODE_OPTIONS="--max-old-space-size=4096"

### 错误 4: "Prisma Client could not be generated"
**解决**: 在 build 前运行 `prisma generate`

