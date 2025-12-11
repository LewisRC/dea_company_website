#!/bin/bash

# 阿里云生产环境启动脚本
# 使用方法: ./start-production.sh

echo "🚀 启动德视安生产服务器..."

# 设置环境变量
export NODE_ENV=production
export PORT=3000
export HOSTNAME=0.0.0.0
export DATABASE_URL="file:./prisma/dev.db"

# 检查 standalone 目录是否存在
if [ ! -d ".next/standalone" ]; then
  echo "❌ 错误: .next/standalone 目录不存在"
  echo "请先运行 'pnpm build' 构建项目"
  exit 1
fi

# 复制必要的文件到 standalone 目录
echo "📦 复制必要文件..."

# 复制 public 文件夹
if [ -d "public" ]; then
  cp -r public .next/standalone/ 2>/dev/null || true
fi

# 复制 .next/static 文件夹
if [ -d ".next/static" ]; then
  mkdir -p .next/standalone/.next
  cp -r .next/static .next/standalone/.next/ 2>/dev/null || true
fi

# 复制 prisma 数据库文件
if [ -d "prisma" ]; then
  mkdir -p .next/standalone/prisma
  cp -r prisma/* .next/standalone/prisma/ 2>/dev/null || true
fi

# 复制 .env 文件（如果存在）
if [ -f ".env" ]; then
  cp .env .next/standalone/ 2>/dev/null || true
fi

echo "✅ 文件复制完成"
echo "📍 端口: $PORT"
echo "🗄️  数据库: $DATABASE_URL"
echo ""

# 启动服务器
cd .next/standalone
node server.js

