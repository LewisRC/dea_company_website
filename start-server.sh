#!/bin/bash
# 生产环境启动脚本 - 默认3000端口

set -e

# 默认端口为3000
export PORT=${PORT:-3000}
export NODE_ENV=${NODE_ENV:-production}
export HOSTNAME=${HOSTNAME:-0.0.0.0}

echo "🚀 启动应用服务器..."
echo "📍 端口: $PORT"
echo "🌐 主机: $HOSTNAME"
echo "⚙️  环境: $NODE_ENV"

# 检查端口是否需要 sudo 权限（1024以下的端口）
if [ $PORT -lt 1024 ]; then
  echo "⚠️  注意：端口 $PORT 需要 root 权限"
  
  # 检查是否有 sudo 权限
  if command -v sudo &> /dev/null; then
    echo "使用 sudo 启动..."
    sudo -E npm start
  else
    echo "❌ 错误：端口 $PORT 需要 root 权限，但 sudo 不可用"
    echo "请使用以下方式之一："
    echo "  1. 使用 root 用户运行"
    echo "  2. 配置端口转发（推荐）"
    echo "  3. 使用其他端口：PORT=3000 ./start-server.sh"
    exit 1
  fi
else
  # 普通端口，直接启动
  npm start
fi
