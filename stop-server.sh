#!/bin/bash

# 停止服务器脚本
# 使用方法: ./stop-server.sh

echo "⏹️  停止德视安服务器..."
echo ""

APP_NAME="deshian-website"

# 检查是否使用了 PM2
if command -v pm2 &> /dev/null; then
  if pm2 list | grep -q "$APP_NAME"; then
    echo "📦 检测到 PM2 进程"
    pm2 stop $APP_NAME
    echo "✅ PM2 服务已停止"
    
    read -p "是否要删除 PM2 进程？(y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
      pm2 delete $APP_NAME
      echo "✅ PM2 进程已删除"
    fi
  else
    echo "⚠️  未找到名为 $APP_NAME 的 PM2 进程"
  fi
fi

# 查找并停止所有 Node 进程
echo ""
echo "🔍 查找运行中的 Node 进程..."

# 查找所有 server.js 进程（包括 standalone 和根目录）
ALL_PIDS=$(pgrep -f "node.*server.js")

if [ -n "$ALL_PIDS" ]; then
  echo "找到以下 Node 进程:"
  ps aux | grep "node.*server.js" | grep -v grep
  echo ""
  
  read -p "是否要停止所有这些进程？(y/n) " -n 1 -r
  echo ""
  
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    for PID in $ALL_PIDS; do
      echo "停止进程 $PID..."
      
      # 优雅停止
      kill -15 $PID 2>/dev/null
      echo "  ✅ 已发送 SIGTERM 信号"
    done
    
    # 等待进程退出
    echo "⏳ 等待进程退出..."
    sleep 3
    
    # 检查是否还在运行
    REMAINING=$(pgrep -f "node.*server.js")
    if [ -n "$REMAINING" ]; then
      echo "⚠️  部分进程仍在运行，尝试强制停止..."
      for PID in $REMAINING; do
        kill -9 $PID 2>/dev/null
        echo "  ✅ 已强制停止进程 $PID (SIGKILL)"
      done
      
      # 再等待一下
      sleep 1
    fi
    
    # 最终检查
    FINAL_CHECK=$(pgrep -f "node.*server.js")
    if [ -z "$FINAL_CHECK" ]; then
      echo "✅ 所有 Node 进程已停止"
    else
      echo "⚠️  仍有进程未能停止:"
      ps aux | grep "node.*server.js" | grep -v grep
    fi
  else
    echo "⏭️  跳过停止"
    exit 0
  fi
else
  echo "⚠️  未找到运行中的 Node 服务器进程"
fi

# 检查端口占用
echo ""
echo "🌐 检查端口 3000..."

if command -v lsof &> /dev/null; then
  PORT_PIDS=$(lsof -ti :3000)
  
  if [ -n "$PORT_PIDS" ]; then
    echo "⚠️  端口 3000 仍被占用:"
    lsof -i :3000
    echo ""
    
    read -p "是否要释放端口 3000？(y/n) " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
      for PID in $PORT_PIDS; do
        kill -9 $PID 2>/dev/null
        echo "✅ 已释放端口（进程 $PID）"
      done
    fi
  else
    echo "✅ 端口 3000 未被占用"
  fi
else
  echo "⚠️  lsof 命令不可用，无法检查端口"
fi

echo ""
echo "================================"
echo "✅ 停止操作完成！"
echo ""
echo "💡 提示:"
echo "   使用 './start-with-pm2.sh' 重新启动服务"
echo "   使用 './manage-server.sh status' 查看状态"
echo ""

