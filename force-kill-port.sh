#!/bin/bash

# 超强力端口清理脚本
# 使用方法: ./force-kill-port.sh [端口号]

PORT=${1:-3000}

echo "🔥 强力清理端口 $PORT..."
echo ""

# 方法 1: 使用 fuser
echo "方法 1: 使用 fuser..."
if command -v fuser &> /dev/null; then
  fuser -k ${PORT}/tcp 2>/dev/null
  if [ $? -eq 0 ]; then
    echo "✅ fuser 已执行"
  else
    echo "⚠️  fuser 未找到占用进程"
  fi
else
  echo "⚠️  fuser 命令不可用"
fi

sleep 1

# 方法 2: 使用 lsof
echo ""
echo "方法 2: 使用 lsof..."
if command -v lsof &> /dev/null; then
  PIDS=$(lsof -ti :${PORT} 2>/dev/null)
  
  if [ -n "$PIDS" ]; then
    echo "找到进程: $PIDS"
    for PID in $PIDS; do
      echo "  停止进程 $PID..."
      kill -9 $PID 2>/dev/null
    done
    echo "✅ lsof 方法已执行"
  else
    echo "⚠️  lsof 未找到占用进程"
  fi
else
  echo "⚠️  lsof 命令不可用"
fi

sleep 1

# 方法 3: 使用 netstat 和 awk
echo ""
echo "方法 3: 使用 netstat..."
if command -v netstat &> /dev/null; then
  # 查找监听该端口的进程
  PIDS=$(netstat -tlnp 2>/dev/null | grep ":${PORT} " | awk '{print $7}' | cut -d'/' -f1 | grep -v "-" | sort -u)
  
  if [ -n "$PIDS" ]; then
    echo "找到进程: $PIDS"
    for PID in $PIDS; do
      if [ "$PID" != "" ] && [ "$PID" != "-" ]; then
        echo "  停止进程 $PID..."
        kill -9 $PID 2>/dev/null
      fi
    done
    echo "✅ netstat 方法已执行"
  else
    echo "⚠️  netstat 未找到占用进程"
  fi
else
  echo "⚠️  netstat 命令不可用"
fi

sleep 1

# 方法 4: 使用 ss
echo ""
echo "方法 4: 使用 ss..."
if command -v ss &> /dev/null; then
  PIDS=$(ss -tlnp 2>/dev/null | grep ":${PORT}" | sed 's/.*pid=\([0-9]*\).*/\1/' | sort -u)
  
  if [ -n "$PIDS" ]; then
    echo "找到进程: $PIDS"
    for PID in $PIDS; do
      if [ "$PID" != "" ]; then
        echo "  停止进程 $PID..."
        kill -9 $PID 2>/dev/null
      fi
    done
    echo "✅ ss 方法已执行"
  else
    echo "⚠️  ss 未找到占用进程"
  fi
else
  echo "⚠️  ss 命令不可用"
fi

sleep 1

# 方法 5: 暴力停止所有 Node 进程
echo ""
echo "方法 5: 停止所有 Node 进程..."
read -p "是否要停止所有 Node 进程？(y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
  NODE_PIDS=$(pgrep -f "node")
  
  if [ -n "$NODE_PIDS" ]; then
    echo "找到 Node 进程:"
    ps aux | grep node | grep -v grep
    echo ""
    
    for PID in $NODE_PIDS; do
      echo "  停止 Node 进程 $PID..."
      kill -9 $PID 2>/dev/null
    done
    echo "✅ 所有 Node 进程已停止"
  else
    echo "⚠️  未找到 Node 进程"
  fi
fi

# 最终验证
echo ""
echo "================================"
echo "🔍 验证端口状态..."
echo ""

if command -v lsof &> /dev/null; then
  REMAINING=$(lsof -i :${PORT} 2>/dev/null)
  if [ -z "$REMAINING" ]; then
    echo "✅ 端口 $PORT 已完全释放！"
  else
    echo "⚠️  端口 $PORT 仍被占用:"
    lsof -i :${PORT}
  fi
elif command -v netstat &> /dev/null; then
  REMAINING=$(netstat -tlnp 2>/dev/null | grep ":${PORT} ")
  if [ -z "$REMAINING" ]; then
    echo "✅ 端口 $PORT 已完全释放！"
  else
    echo "⚠️  端口 $PORT 仍被占用:"
    netstat -tlnp | grep ":${PORT}"
  fi
else
  echo "⚠️  无法验证端口状态"
fi

echo ""
echo "💡 如果端口仍被占用，可以尝试："
echo "   1. sudo ./force-kill-port.sh $PORT"
echo "   2. reboot（重启服务器）"
echo ""

