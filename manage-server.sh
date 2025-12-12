#!/bin/bash

# 服务器管理脚本
# 使用方法: ./manage-server.sh [start|stop|restart|status|logs]

APP_NAME="deshian-website"

case "$1" in
  start)
    echo "🚀 启动服务..."
    ./start-with-pm2.sh
    ;;
    
  stop)
    echo "⏹️  停止服务..."
    pm2 stop $APP_NAME
    echo "✅ 服务已停止"
    ;;
    
  restart)
    echo "🔄 重启服务..."
    pm2 restart $APP_NAME
    echo "✅ 服务已重启"
    ;;
    
  status)
    echo "📊 服务状态:"
    pm2 status
    ;;
    
  logs)
    echo "📋 查看日志 (Ctrl+C 退出):"
    pm2 logs $APP_NAME
    ;;
    
  delete)
    echo "🗑️  删除服务..."
    pm2 delete $APP_NAME
    echo "✅ 服务已删除"
    ;;
    
  monit)
    echo "📊 监控面板 (按 q 退出):"
    pm2 monit
    ;;
    
  update)
    echo "🔄 更新并重启服务..."
    echo ""
    
    # 拉取最新代码
    echo "1️⃣  拉取代码..."
    git pull
    
    # 安装依赖
    echo "2️⃣  安装依赖..."
    pnpm install
    
    # 生成 Prisma Client
    echo "3️⃣  生成 Prisma Client..."
    pnpm prisma generate
    
    # 构建项目
    echo "4️⃣  构建项目..."
    pnpm build
    
    # 复制文件并重启
    echo "5️⃣  复制文件..."
    if [ -d ".next/standalone" ]; then
      cp -r public .next/standalone/ 2>/dev/null || true
      mkdir -p .next/standalone/.next
      cp -r .next/static .next/standalone/.next/ 2>/dev/null || true
      mkdir -p .next/standalone/prisma
      cp -r prisma/* .next/standalone/prisma/ 2>/dev/null || true
      cp .env .next/standalone/ 2>/dev/null || true
    fi
    
    # 重启服务
    echo "6️⃣  重启服务..."
    pm2 restart $APP_NAME
    
    echo ""
    echo "✅ 更新完成！"
    pm2 status
    ;;
    
  *)
    echo "📖 服务器管理脚本"
    echo ""
    echo "使用方法: ./manage-server.sh [命令]"
    echo ""
    echo "可用命令:"
    echo "  start    - 启动服务"
    echo "  stop     - 停止服务"
    echo "  restart  - 重启服务"
    echo "  status   - 查看状态"
    echo "  logs     - 查看日志"
    echo "  delete   - 删除服务"
    echo "  monit    - 监控面板"
    echo "  update   - 更新代码并重启"
    echo ""
    echo "示例:"
    echo "  ./manage-server.sh start"
    echo "  ./manage-server.sh status"
    echo "  ./manage-server.sh logs"
    echo ""
    exit 1
    ;;
esac

