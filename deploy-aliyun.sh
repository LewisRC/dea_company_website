#!/bin/bash
# 阿里云部署构建脚本

set -e

echo "🚀 开始阿里云构建..."

# 1. 设置环境变量
echo "📝 设置环境变量..."
export DATABASE_URL="${DATABASE_URL:-file:./prisma/dev.db}"
export NODE_ENV="production"
export NODE_OPTIONS="--max-old-space-size=4096"

echo "DATABASE_URL: $DATABASE_URL"

# 2. 清理旧的构建文件（可选）
echo "🧹 清理旧的构建文件..."
rm -rf .next

# 3. 安装依赖
echo "📦 安装依赖..."
if command -v pnpm &> /dev/null; then
    pnpm install --frozen-lockfile
else
    npm ci
fi

# 4. 生成 Prisma Client
echo "🔧 生成 Prisma Client..."
if command -v pnpm &> /dev/null; then
    pnpm prisma generate
else
    npx prisma generate
fi

# 5. 构建项目
echo "🏗️  构建项目..."
if command -v pnpm &> /dev/null; then
    pnpm build
else
    npm run build
fi

echo "✅ 构建完成！"

