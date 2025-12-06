#!/bin/bash
# 停止占用指定端口的进程
# 使用方法: ./kill-port.sh [端口号]
# 例如: ./kill-port.sh 3000

PORT=${1:-3000}

echo "🔍 查找占用端口 $PORT 的进程..."

PIDS=$(lsof -ti:$PORT 2>/dev/null)

if [ -z "$PIDS" ]; then
  echo "✅ 端口 $PORT 未被占用"
  exit 0
fi

echo "📋 找到以下进程："
for PID in $PIDS; do
  ps -p $PID -o pid,comm,args 2>/dev/null
done

echo ""
read -p "❓ 是否停止这些进程? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
  for PID in $PIDS; do
    kill -9 $PID 2>/dev/null && echo "✅ 已停止进程 $PID"
  done
  echo "🎉 端口 $PORT 已释放！"
else
  echo "❌ 已取消"
  exit 1
fi

