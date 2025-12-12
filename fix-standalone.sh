#!/bin/bash

# 修复 standalone 目录文件缺失问题
# 使用方法: ./fix-standalone.sh

echo "🔧 修复 standalone 目录..."
echo ""

# 检查 standalone 目录
if [ ! -d ".next/standalone" ]; then
  echo "❌ .next/standalone 目录不存在"
  echo "请先运行: pnpm build"
  exit 1
fi

echo "✅ standalone 目录存在"
echo ""

# 复制 public 文件夹
echo "📦 复制 public 文件夹..."
if [ -d "public" ]; then
  rm -rf .next/standalone/public
  cp -r public .next/standalone/
  echo "✅ public 已复制 ($(du -sh public | cut -f1))"
else
  echo "⚠️  public 目录不存在"
fi

# 复制 .next/static 文件夹
echo "📦 复制 .next/static 文件夹..."
if [ -d ".next/static" ]; then
  mkdir -p .next/standalone/.next
  rm -rf .next/standalone/.next/static
  cp -r .next/static .next/standalone/.next/
  echo "✅ .next/static 已复制 ($(du -sh .next/static | cut -f1))"
else
  echo "⚠️  .next/static 目录不存在"
fi

# 复制 prisma 数据库
echo "📦 复制 prisma 数据库..."
if [ -d "prisma" ]; then
  mkdir -p .next/standalone/prisma
  cp -r prisma/* .next/standalone/prisma/
  echo "✅ prisma 已复制"
  
  if [ -f ".next/standalone/prisma/dev.db" ]; then
    db_size=$(du -h .next/standalone/prisma/dev.db | cut -f1)
    echo "   数据库大小: $db_size"
  fi
else
  echo "⚠️  prisma 目录不存在"
fi

# 复制 .env 文件
echo "📦 复制 .env 文件..."
if [ -f ".env" ]; then
  cp .env .next/standalone/
  echo "✅ .env 已复制"
  echo "   内容:"
  cat .env | sed 's/^/   /'
else
  echo "⚠️  .env 文件不存在"
  echo "创建默认 .env..."
  cat > .next/standalone/.env << 'EOF'
DATABASE_URL="file:./prisma/dev.db"
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
EOF
  echo "✅ 已创建默认 .env"
fi

# 检查目录结构
echo ""
echo "📊 standalone 目录结构:"
echo ""
ls -lh .next/standalone/ | grep -E "^d|server.js"
echo ""

# 验证关键文件
echo "🔍 验证关键文件..."
MISSING=0

if [ ! -f ".next/standalone/server.js" ]; then
  echo "❌ server.js 缺失"
  MISSING=1
else
  echo "✅ server.js 存在"
fi

if [ ! -d ".next/standalone/public" ]; then
  echo "❌ public 目录缺失"
  MISSING=1
else
  echo "✅ public 目录存在"
fi

if [ ! -d ".next/standalone/.next/static" ]; then
  echo "❌ .next/static 目录缺失"
  MISSING=1
else
  echo "✅ .next/static 目录存在"
fi

if [ ! -d ".next/standalone/prisma" ]; then
  echo "❌ prisma 目录缺失"
  MISSING=1
else
  echo "✅ prisma 目录存在"
fi

if [ ! -f ".next/standalone/.env" ]; then
  echo "⚠️  .env 文件缺失"
else
  echo "✅ .env 文件存在"
fi

echo ""
echo "================================"

if [ $MISSING -eq 0 ]; then
  echo "✅ 所有必要文件已准备就绪！"
  echo ""
  echo "💡 现在可以启动服务器："
  echo "   pm2 restart deshian-website"
  echo "   或"
  echo "   pm2 start ecosystem.production.config.js --env production"
else
  echo "⚠️  有文件缺失，请检查上面的输出"
  echo ""
  echo "💡 如果问题仍然存在："
  echo "   1. 重新构建: pnpm build"
  echo "   2. 再次运行: ./fix-standalone.sh"
fi

echo ""

