#!/bin/bash

# 使用 PM2 启动生产服务器
# 使用方法: ./start-with-pm2.sh

echo "🚀 使用 PM2 启动德视安生产服务器..."
echo ""

# 检查 PM2 是否安装
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 未安装"
    echo "请运行: npm install -g pm2"
    exit 1
fi

# 检查 standalone 目录是否存在
if [ ! -d ".next/standalone" ]; then
  echo "❌ 错误: .next/standalone 目录不存在"
  echo "请先运行 'pnpm build' 构建项目"
  exit 1
fi

# 设置环境变量
export NODE_ENV=production
export PORT=3000
export HOSTNAME=0.0.0.0
export DATABASE_URL="file:./prisma/dev.db"

# 复制必要的文件到 standalone 目录
echo "📦 复制必要文件..."

# 复制 public 文件夹
if [ -d "public" ]; then
  cp -r public .next/standalone/ 2>/dev/null || true
  echo "✅ public 目录已复制"
fi

# 复制 .next/static 文件夹
if [ -d ".next/static" ]; then
  mkdir -p .next/standalone/.next
  cp -r .next/static .next/standalone/.next/ 2>/dev/null || true
  echo "✅ .next/static 目录已复制"
fi

# 复制 prisma 数据库文件
if [ -d "prisma" ]; then
  mkdir -p .next/standalone/prisma
  cp -r prisma/* .next/standalone/prisma/ 2>/dev/null || true
  echo "✅ prisma 目录已复制"
fi

# 复制 .env 文件（如果存在）
if [ -f ".env" ]; then
  cp .env .next/standalone/ 2>/dev/null || true
  echo "✅ .env 文件已复制"
fi

echo ""
echo "✅ 文件复制完成"
echo ""

# 检查是否已经在运行
if pm2 list | grep -q "deshian-website"; then
  echo "⚠️  检测到服务已在运行"
  echo ""
  read -p "是否要重启服务？(y/n) " -n 1 -r
  echo ""
  
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🔄 重启服务..."
    pm2 restart deshian-website
    echo "✅ 服务已重启"
  else
    echo "⏭️  跳过启动"
    exit 0
  fi
else
  echo "🚀 启动服务..."
  pm2 start ecosystem.production.config.js
  echo "✅ 服务已启动"
fi

echo ""
echo "📊 服务状态:"
pm2 status

echo ""
echo "💡 常用命令:"
echo "   pm2 logs deshian-website    # 查看日志"
echo "   pm2 restart deshian-website # 重启服务"
echo "   pm2 stop deshian-website    # 停止服务"
echo "   pm2 monit                   # 监控面板"
echo ""
echo "🔧 设置开机自启:"
echo "   pm2 startup                 # 配置开机启动"
echo "   pm2 save                    # 保存当前进程列表"
echo ""

