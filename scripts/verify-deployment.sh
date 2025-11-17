#!/bin/bash

# 部署验证脚本
# 用于在部署前检查项目配置是否正确

set -e

echo "🔍 开始验证部署配置..."
echo ""

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查 Node.js 版本
echo "📦 检查 Node.js 版本..."
NODE_VERSION=$(node -v)
echo "   当前版本: $NODE_VERSION"
if [[ "$NODE_VERSION" < "v18.17.0" ]]; then
    echo -e "${RED}❌ Node.js 版本过低，要求 >= 18.17.0${NC}"
    exit 1
else
    echo -e "${GREEN}✅ Node.js 版本符合要求${NC}"
fi
echo ""

# 检查 npm 版本
echo "📦 检查 npm 版本..."
NPM_VERSION=$(npm -v)
echo "   当前版本: $NPM_VERSION"
if [[ "$NPM_VERSION" < "9.0.0" ]]; then
    echo -e "${YELLOW}⚠️  npm 版本较低，建议升级到 >= 9.0.0${NC}"
else
    echo -e "${GREEN}✅ npm 版本符合要求${NC}"
fi
echo ""

# 检查配置文件
echo "📄 检查必要的配置文件..."
files=(
    "package.json"
    "next.config.mjs"
    ".nvmrc"
    "tsconfig.json"
    "DEPLOYMENT.md"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $file${NC}"
    else
        echo -e "${RED}❌ $file 不存在${NC}"
        exit 1
    fi
done
echo ""

# 检查 CI/CD 配置
echo "🔧 检查 CI/CD 配置..."
if [ -f ".github/workflows/ci.yml" ]; then
    echo -e "${GREEN}✅ GitHub Actions 配置存在${NC}"
else
    echo -e "${YELLOW}⚠️  GitHub Actions 配置不存在${NC}"
fi
echo ""

# 检查部署平台配置
echo "🌐 检查部署平台配置..."
deploy_configs=("vercel.json" "netlify.toml" "Dockerfile" "docker-compose.yml")
for config in "${deploy_configs[@]}"; do
    if [ -f "$config" ]; then
        echo -e "${GREEN}✅ $config${NC}"
    else
        echo -e "${YELLOW}⚠️  $config 不存在（可选）${NC}"
    fi
done
echo ""

# 检查依赖安装
echo "📦 检查依赖..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✅ node_modules 已安装${NC}"
else
    echo -e "${RED}❌ node_modules 未安装，请运行 npm install${NC}"
    exit 1
fi
echo ""

# 运行构建测试
echo "🔨 测试构建..."
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✅ 构建成功${NC}"
else
    echo -e "${RED}❌ 构建失败${NC}"
    exit 1
fi
echo ""

# 检查构建输出
echo "📂 检查构建输出..."
if [ -d ".next" ]; then
    echo -e "${GREEN}✅ .next 目录存在${NC}"
    
    # 检查 standalone 构建
    if [ -d ".next/standalone" ]; then
        echo -e "${GREEN}✅ standalone 构建已生成（适用于 Node.js 托管）${NC}"
    else
        echo -e "${YELLOW}⚠️  standalone 构建未生成${NC}"
    fi
    
    # 检查静态文件
    if [ -d ".next/static" ]; then
        echo -e "${GREEN}✅ 静态文件已生成${NC}"
    else
        echo -e "${RED}❌ 静态文件未生成${NC}"
        exit 1
    fi
else
    echo -e "${RED}❌ .next 目录不存在${NC}"
    exit 1
fi
echo ""

# 检查关键页面
echo "📄 检查关键页面路由..."
pages=(
    "app/page.tsx"
    "app/layout.tsx"
    "app/company-profile/page.tsx"
    "app/contact-us/page.tsx"
    "app/product/[id]/page.tsx"
)

for page in "${pages[@]}"; do
    if [ -f "$page" ]; then
        echo -e "${GREEN}✅ $page${NC}"
    else
        echo -e "${RED}❌ $page 不存在${NC}"
        exit 1
    fi
done
echo ""

# 汇总
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}🎉 部署验证完成！项目已准备就绪。${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📚 接下来的步骤："
echo "   1. 提交代码: git add . && git commit -m 'Ready for deployment'"
echo "   2. 推送到远程: git push origin main"
echo "   3. 选择托管平台部署（推荐 Vercel 或 Netlify）"
echo "   4. 详细部署指南请查看: DEPLOYMENT.md"
echo ""

