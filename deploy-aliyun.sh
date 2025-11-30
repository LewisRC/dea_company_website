#!/bin/bash
# 阿里云部署构建脚本

set -e

echo "🚀 开始阿里云构建..."

# 1. 设置环境变量
echo "📝 设置环境变量..."
export DATABASE_URL="${DATABASE_URL:-file:./prisma/dev.db}"
export NODE_ENV="production"
export NODE_OPTIONS="--max-old-space-size=4096"
export PORT="${PORT:-80}"

echo "DATABASE_URL: $DATABASE_URL"
echo "PORT: $PORT"

# 2. 清理旧的构建文件（可选）
echo "🧹 清理旧的构建文件..."
rm -rf .next

# 3. 安装依赖
echo "📦 安装依赖..."
if command -v pnpm &> /dev/null; then
    pnpm install --frozen-lockfile
else
    npm ci
fi

# 4. 生成 Prisma Client
echo "🔧 生成 Prisma Client..."
if command -v pnpm &> /dev/null; then
    pnpm prisma generate
else
    npx prisma generate
fi

# 5. 构建项目
echo "🏗️  构建项目..."
if command -v pnpm &> /dev/null; then
    pnpm build
else
    npm run build
fi

echo "✅ 构建完成！"

# 6. 配置端口权限（如果需要）
if [ "$PORT" -lt 1024 ] && [ "$(id -u)" -ne 0 ]; then
    echo ""
    echo "⚠️  注意: 应用将在端口 $PORT 启动"
    echo "这是一个特权端口，启动时需要额外配置："
    echo ""
    echo "方案1 - 使用 setcap (推荐):"
    echo "  sudo setcap cap_net_bind_service=+ep \$(which node)"
    echo ""
    echo "方案2 - 使用 sudo 启动:"
    echo "  sudo pnpm start"
    echo ""
    echo "方案3 - 使用 Nginx 反向代理 (生产环境推荐):"
    echo "  配置 Nginx 监听80端口，转发到3000端口"
    echo "  详见: nginx.conf.example"
    echo ""
fi

