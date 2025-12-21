#!/bin/bash

# 安全检查脚本 - 检测是否已被入侵

echo "========================================"
echo "🛡️  网站安全检查工具"
echo "========================================"
echo ""

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

SUSPICIOUS_COUNT=0

# 1. 检查可疑的文件扩展名
echo "📋 1. 检查上传目录中的可疑文件..."
if [ -d "public/images/uploads" ]; then
    SUSPICIOUS_FILES=$(find public/images/uploads -type f \( \
        -name "*.php*" -o \
        -name "*.jsp*" -o \
        -name "*.asp*" -o \
        -name "*.exe*" -o \
        -name "*.sh*" -o \
        -name "*.bat*" -o \
        -name "*.cmd*" -o \
        -name "*.js" -o \
        -name "*.ts" -o \
        -name "*.html" \))
    
    if [ -n "$SUSPICIOUS_FILES" ]; then
        echo -e "${RED}⚠️  发现可疑文件:${NC}"
        echo "$SUSPICIOUS_FILES"
        SUSPICIOUS_COUNT=$((SUSPICIOUS_COUNT + $(echo "$SUSPICIOUS_FILES" | wc -l)))
    else
        echo -e "${GREEN}✓ 未发现可疑扩展名文件${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  上传目录不存在${NC}"
fi
echo ""

# 2. 检查超大文件
echo "📋 2. 检查异常大小的文件 (>10MB)..."
if [ -d "public/images/uploads" ]; then
    LARGE_FILES=$(find public/images/uploads -type f -size +10M)
    
    if [ -n "$LARGE_FILES" ]; then
        echo -e "${YELLOW}⚠️  发现超大文件:${NC}"
        echo "$LARGE_FILES"
        find public/images/uploads -type f -size +10M -exec ls -lh {} \;
        SUSPICIOUS_COUNT=$((SUSPICIOUS_COUNT + $(echo "$LARGE_FILES" | wc -l)))
    else
        echo -e "${GREEN}✓ 未发现异常大文件${NC}"
    fi
fi
echo ""

# 3. 检查最近上传的文件
echo "📋 3. 最近24小时上传的文件..."
if [ -d "public/images/uploads" ]; then
    RECENT_FILES=$(find public/images/uploads -type f -mtime -1)
    
    if [ -n "$RECENT_FILES" ]; then
        echo -e "${YELLOW}发现最近上传:${NC}"
        find public/images/uploads -type f -mtime -1 -exec ls -lh {} \;
    else
        echo -e "${GREEN}✓ 24小时内无文件上传${NC}"
    fi
fi
echo ""

# 4. 检查可疑的进程
echo "📋 4. 检查可疑的进程..."
SUSPICIOUS_PROC=$(ps aux | grep -E "cryptominer|xmrig|cgminer|bfgminer|minerd" | grep -v grep)

if [ -n "$SUSPICIOUS_PROC" ]; then
    echo -e "${RED}⚠️  发现可疑挖矿进程:${NC}"
    echo "$SUSPICIOUS_PROC"
    SUSPICIOUS_COUNT=$((SUSPICIOUS_COUNT + 10))
else
    echo -e "${GREEN}✓ 未发现已知挖矿进程${NC}"
fi
echo ""

# 5. 检查异常的网络连接
echo "📋 5. 检查异常的网络连接..."
if command -v netstat &> /dev/null; then
    SUSPICIOUS_CONN=$(netstat -antp 2>/dev/null | grep -E "ESTABLISHED|SYN_SENT" | grep -v "127.0.0.1\|:22\|:80\|:443\|:3000\|:3001")
    
    if [ -n "$SUSPICIOUS_CONN" ]; then
        echo -e "${YELLOW}⚠️  发现异常连接:${NC}"
        echo "$SUSPICIOUS_CONN"
    else
        echo -e "${GREEN}✓ 网络连接正常${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  netstat 命令不可用，跳过网络检查${NC}"
fi
echo ""

# 6. 检查 crontab 任务
echo "📋 6. 检查定时任务..."
CRON_JOBS=$(crontab -l 2>/dev/null | grep -v "^#" | grep -v "^$")

if [ -n "$CRON_JOBS" ]; then
    echo -e "${YELLOW}当前 crontab 任务:${NC}"
    echo "$CRON_JOBS"
    echo -e "${YELLOW}⚠️  请检查这些任务是否为您设置的${NC}"
else
    echo -e "${GREEN}✓ 无 crontab 任务${NC}"
fi
echo ""

# 7. 检查 /tmp 目录中的可疑文件
echo "📋 7. 检查 /tmp 目录..."
if [ -d "/tmp" ]; then
    SUSPICIOUS_TMP=$(find /tmp -type f \( -name "*.php" -o -name "*.sh" -o -perm /111 \) -mtime -1 2>/dev/null | head -20)
    
    if [ -n "$SUSPICIOUS_TMP" ]; then
        echo -e "${YELLOW}⚠️  /tmp 中发现可疑文件:${NC}"
        echo "$SUSPICIOUS_TMP"
    else
        echo -e "${GREEN}✓ /tmp 目录正常${NC}"
    fi
fi
echo ""

# 8. 检查数据库文件
echo "📋 8. 检查数据库文件..."
if [ -f "prisma/dev.db" ]; then
    DB_SIZE=$(ls -lh prisma/dev.db | awk '{print $5}')
    echo -e "${GREEN}✓ 数据库文件存在 (大小: ${DB_SIZE})${NC}"
else
    echo -e "${RED}⚠️  数据库文件不存在！${NC}"
    SUSPICIOUS_COUNT=$((SUSPICIOUS_COUNT + 1))
fi
echo ""

# 9. 检查 PM2 进程
echo "📋 9. 检查 PM2 进程..."
if command -v pm2 &> /dev/null; then
    PM2_LIST=$(pm2 list 2>/dev/null)
    echo "$PM2_LIST"
else
    echo -e "${YELLOW}⚠️  PM2 未安装${NC}"
fi
echo ""

# 总结
echo "========================================"
echo "📊 检查结果总结"
echo "========================================"

if [ $SUSPICIOUS_COUNT -eq 0 ]; then
    echo -e "${GREEN}✓ 未发现明显的安全威胁${NC}"
    echo -e "${GREEN}✓ 系统看起来是安全的${NC}"
else
    echo -e "${RED}⚠️  发现 ${SUSPICIOUS_COUNT} 个可疑项目${NC}"
    echo -e "${RED}⚠️  建议立即检查上述标记的项目${NC}"
fi

echo ""
echo "========================================"
echo "🔧 建议操作"
echo "========================================"
echo "1. 如果发现可疑文件，立即删除:"
echo "   find public/images/uploads -type f \\( -name '*.php*' -o -name '*.jsp*' \\) -delete"
echo ""
echo "2. 如果发现挖矿进程，立即结束:"
echo "   kill -9 <PID>"
echo ""
echo "3. 检查服务器日志:"
echo "   journalctl -u pm2* --since today | grep -E 'error|warn|failed'"
echo ""
echo "4. 备份数据库:"
echo "   cp prisma/dev.db prisma/dev.db.backup-\$(date +%Y%m%d-%H%M%S)"
echo ""
echo "5. 更新代码并重启服务:"
echo "   git pull && pnpm build && pm2 restart all"
echo ""

exit $SUSPICIOUS_COUNT

