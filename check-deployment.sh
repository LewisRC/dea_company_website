#!/bin/bash

# 部署状态检查脚本
echo "🔍 检查部署状态..."
echo ""

# 检查是否已构建
if [ -d ".next/standalone" ]; then
  echo "✅ standalone 目录存在"
else
  echo "❌ standalone 目录不存在 - 需要运行 'pnpm build'"
  exit 1
fi

# 检查必要文件是否已复制
echo ""
echo "📦 检查必要文件..."

if [ -d ".next/standalone/public" ]; then
  echo "✅ public 目录已复制"
else
  echo "⚠️  public 目录未复制"
fi

if [ -d ".next/standalone/.next/static" ]; then
  echo "✅ .next/static 目录已复制"
else
  echo "⚠️  .next/static 目录未复制"
fi

if [ -d ".next/standalone/prisma" ]; then
  echo "✅ prisma 目录已复制"
else
  echo "⚠️  prisma 目录未复制"
fi

# 检查环境变量
echo ""
echo "🔧 检查环境变量..."

if [ -f ".env" ]; then
  echo "✅ .env 文件存在"
  
  if grep -q "DATABASE_URL" .env; then
    echo "✅ DATABASE_URL 已设置"
  else
    echo "⚠️  DATABASE_URL 未设置"
  fi
  
  if grep -q "HOSTNAME" .env; then
    echo "✅ HOSTNAME 已设置"
  else
    echo "⚠️  HOSTNAME 未设置（建议设置为 0.0.0.0）"
  fi
else
  echo "⚠️  .env 文件不存在"
fi

# 检查数据库文件
echo ""
echo "🗄️  检查数据库..."

if [ -f "prisma/dev.db" ]; then
  echo "✅ 数据库文件存在"
  
  # 检查数据库大小
  db_size=$(du -h prisma/dev.db | cut -f1)
  echo "   数据库大小: $db_size"
else
  echo "⚠️  数据库文件不存在"
fi

# 检查是否有运行的进程
echo ""
echo "🔄 检查运行进程..."

if pgrep -f "node.*server.js" > /dev/null; then
  echo "✅ Node 进程正在运行"
  echo "   进程列表:"
  ps aux | grep "node.*server.js" | grep -v grep
else
  echo "⚠️  没有检测到运行的 Node 进程"
fi

# 检查端口占用
echo ""
echo "🌐 检查端口..."

if command -v lsof &> /dev/null; then
  if lsof -i :3000 &> /dev/null; then
    echo "✅ 端口 3000 正在使用"
    lsof -i :3000
  else
    echo "⚠️  端口 3000 未被占用"
  fi
else
  echo "⚠️  lsof 命令不可用，无法检查端口"
fi

# 总结
echo ""
echo "================================"
echo "📊 部署建议:"
echo ""

if [ ! -d ".next/standalone" ]; then
  echo "1. 运行 'pnpm build' 构建项目"
fi

if [ ! -d ".next/standalone/public" ] || [ ! -d ".next/standalone/.next/static" ] || [ ! -d ".next/standalone/prisma" ]; then
  echo "2. 运行 './start-production.sh' 复制必要文件并启动"
  echo "   或者使用 'pm2 start ecosystem.production.config.js'"
fi

if [ ! -f ".env" ]; then
  echo "3. 创建 .env 文件，设置 DATABASE_URL 和 HOSTNAME"
fi

echo ""
echo "✅ 正确的启动方式:"
echo "   ./start-production.sh"
echo "   或"
echo "   pm2 start ecosystem.production.config.js"
echo ""
echo "❌ 不要使用:"
echo "   pnpm start"
echo "   next start"
echo ""

