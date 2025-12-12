#!/bin/bash

# 初始化数据库脚本
# 使用方法: ./init-database.sh

echo "🗄️  初始化数据库..."
echo ""

# 检查数据库文件
if [ ! -f "prisma/dev.db" ]; then
  echo "⚠️  数据库文件不存在，将创建新数据库..."
  
  # 确保目录存在
  mkdir -p prisma
  
  # 推送 schema 到数据库
  echo "📦 创建数据库结构..."
  DATABASE_URL="file:./prisma/dev.db" pnpm prisma db push --accept-data-loss
else
  echo "✅ 数据库文件已存在"
fi

# 检查数据库中是否有数据
echo ""
echo "🔍 检查数据..."

# 使用 Prisma Studio 或者直接查询
echo "检查轮播图数量..."
CAROUSEL_COUNT=$(DATABASE_URL="file:./prisma/dev.db" npx tsx -e "
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
prisma.carousel.count().then(count => {
  console.log(count);
  prisma.\$disconnect();
});
" 2>/dev/null)

echo "检查案例数量..."
CASE_COUNT=$(DATABASE_URL="file:./prisma/dev.db" npx tsx -e "
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
prisma.case.count().then(count => {
  console.log(count);
  prisma.\$disconnect();
});
" 2>/dev/null)

echo "检查产品数量..."
PRODUCT_COUNT=$(DATABASE_URL="file:./prisma/dev.db" npx tsx -e "
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
prisma.product.count().then(count => {
  console.log(count);
  prisma.\$disconnect();
});
" 2>/dev/null)

echo ""
echo "📊 数据统计:"
echo "   轮播图: ${CAROUSEL_COUNT:-0} 个"
echo "   案例: ${CASE_COUNT:-0} 个"
echo "   产品: ${PRODUCT_COUNT:-0} 个"
echo ""

# 如果没有数据，询问是否导入
if [ "${CAROUSEL_COUNT:-0}" -eq 0 ] || [ "${CASE_COUNT:-0}" -eq 0 ] || [ "${PRODUCT_COUNT:-0}" -eq 0 ]; then
  echo "⚠️  数据库中缺少数据"
  echo ""
  read -p "是否要导入初始数据？(y/n) " -n 1 -r
  echo ""
  
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "📥 导入数据..."
    
    # 运行 seed 脚本
    DATABASE_URL="file:./prisma/dev.db" npx tsx scripts/seed-database.ts
    
    # 运行图片路径更新脚本
    echo ""
    echo "🖼️  更新图片路径..."
    DATABASE_URL="file:./prisma/dev.db" npx tsx scripts/update-image-paths.ts
    
    echo ""
    echo "✅ 数据导入完成！"
  else
    echo "⏭️  跳过数据导入"
  fi
else
  echo "✅ 数据库中已有数据"
fi

# 检查 standalone 目录中的数据库
echo ""
echo "🔄 检查 standalone 目录..."

if [ -d ".next/standalone" ]; then
  if [ ! -d ".next/standalone/prisma" ]; then
    echo "⚠️  standalone 中没有 prisma 目录"
    echo "📦 复制数据库到 standalone..."
    mkdir -p .next/standalone/prisma
    cp -r prisma/* .next/standalone/prisma/
    echo "✅ 数据库已复制"
  else
    echo "✅ standalone 中已有 prisma 目录"
    
    # 检查是否需要更新
    if [ prisma/dev.db -nt .next/standalone/prisma/dev.db ] 2>/dev/null; then
      echo "⚠️  源数据库比 standalone 中的新"
      read -p "是否要更新 standalone 中的数据库？(y/n) " -n 1 -r
      echo ""
      
      if [[ $REPLY =~ ^[Yy]$ ]]; then
        cp prisma/dev.db .next/standalone/prisma/dev.db
        echo "✅ 数据库已更新"
      fi
    fi
  fi
fi

echo ""
echo "================================"
echo "✅ 数据库初始化完成！"
echo ""
echo "💡 提示:"
echo "   如果服务器正在运行，需要重启以加载新数据:"
echo "   ./manage-server.sh restart"
echo ""

