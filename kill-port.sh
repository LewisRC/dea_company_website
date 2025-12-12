#!/bin/bash

# 强制清理端口脚本
# 使用方法: ./kill-port.sh [端口号]
# 示例: ./kill-port.sh 3000

PORT=${1:-3000}

echo "🔍 检查端口 $PORT..."
echo ""

# 查找占用端口的进程
if command -v lsof &> /dev/null; then
  PIDS=$(lsof -ti :$PORT)
  
  if [ -z "$PIDS" ]; then
    echo "✅ 端口 $PORT 未被占用"
    exit 0
  fi
  
  echo "找到以下进程占用端口 $PORT:"
  lsof -i :$PORT
  echo ""
  
  for PID in $PIDS; do
    echo "进程详情:"
    ps -p $PID -o pid,cmd
    echo ""
    
    echo "⚠️  准备停止进程 $PID..."
    
    # 优雅停止
    kill -15 $PID 2>/dev/null
    echo "✅ 已发送 SIGTERM 信号 (优雅停止)"
    
    # 等待 2 秒
    sleep 2
    
    # 检查进程是否还在
    if ps -p $PID > /dev/null 2>&1; then
      echo "⚠️  进程仍在运行，尝试强制停止..."
      kill -9 $PID 2>/dev/null
      echo "✅ 已发送 SIGKILL 信号 (强制停止)"
      sleep 1
    fi
    
    # 最终检查
    if ps -p $PID > /dev/null 2>&1; then
      echo "❌ 无法停止进程 $PID"
    else
      echo "✅ 进程 $PID 已停止"
    fi
    echo ""
  done
  
elif command -v netstat &> /dev/null; then
  # 使用 netstat（备用方案）
  echo "使用 netstat 查找进程..."
  PIDS=$(netstat -tlnp 2>/dev/null | grep ":$PORT " | awk '{print $7}' | cut -d'/' -f1)
  
  if [ -z "$PIDS" ]; then
    echo "✅ 端口 $PORT 未被占用"
    exit 0
  fi
  
  for PID in $PIDS; do
    echo "停止进程 $PID..."
    kill -9 $PID 2>/dev/null
    echo "✅ 已停止"
  done
  
else
  echo "❌ 系统中没有 lsof 或 netstat 命令"
  echo "请手动查找并停止占用端口的进程"
  exit 1
fi

# 再次检查端口
echo "🔄 再次检查端口 $PORT..."
sleep 1

if command -v lsof &> /dev/null; then
  REMAINING=$(lsof -ti :$PORT)
  
  if [ -z "$REMAINING" ]; then
    echo "✅ 端口 $PORT 已释放！"
  else
    echo "⚠️  端口 $PORT 仍被占用:"
    lsof -i :$PORT
    echo ""
    echo "💡 建议："
    echo "   1. 检查是否有权限停止该进程"
    echo "   2. 尝试使用 sudo: sudo ./kill-port.sh $PORT"
    echo "   3. 或者使用其他端口"
  fi
else
  echo "✅ 操作完成"
fi

echo ""
echo "================================"
echo "💡 提示："
echo "   如果问题仍然存在，可以："
echo "   1. 重启服务器"
echo "   2. 使用其他端口（修改 .env 中的 PORT）"
echo "   3. 检查是否有其他程序占用该端口"
echo ""
