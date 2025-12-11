# 🚀 生产环境部署指南（Standalone 模式）

## 📋 前置条件

- 阿里云 ECS 服务器
- Node.js 18+ 已安装
- pnpm 已安装
- PM2 已安装（推荐）

## ⚠️ 重要提示

本项目使用 `output: 'standalone'` 模式，**不能使用** `next start` 命令。

必须使用：`node .next/standalone/server.js`

## 🔧 部署步骤

### 1. 上传代码到服务器

```bash
# 使用 git 克隆（推荐）
git clone <your-repo-url>
cd dea_company_website

# 或者使用 scp/ftp 上传
```

### 2. 设置环境变量

在项目根目录创建 `.env` 文件：

```bash
# .env
DATABASE_URL="file:./prisma/dev.db"
NODE_ENV=production
PORT=3000
```

或者导出环境变量：

```bash
export DATABASE_URL="file:./prisma/dev.db"
export NODE_ENV=production
export PORT=3000
```

### 3. 安装依赖

```bash
pnpm install
```

### 4. 生成 Prisma Client

```bash
pnpm prisma generate
```

### 5. 构建项目

```bash
pnpm build
```

构建成功后，会生成 `.next/standalone` 目录。

### 6. 准备运行环境

运行准备脚本（会自动复制必要文件）：

```bash
chmod +x start-production.sh
./start-production.sh
```

或者手动复制：

```bash
# 复制 public 文件夹
cp -r public .next/standalone/

# 复制 .next/static 文件夹
mkdir -p .next/standalone/.next
cp -r .next/static .next/standalone/.next/

# 复制 prisma 数据库
mkdir -p .next/standalone/prisma
cp -r prisma/* .next/standalone/prisma/

# 复制 .env 文件
cp .env .next/standalone/
```

## 🎯 启动方式

### 方式 1: 使用启动脚本（推荐）

```bash
./start-production.sh
```

### 方式 2: 使用 PM2（推荐用于生产环境）

```bash
# 首次启动前，需要复制文件（参考步骤6）

# 启动应用
pm2 start ecosystem.production.config.js

# 查看状态
pm2 status

# 查看日志
pm2 logs deshian-website

# 重启应用
pm2 restart deshian-website

# 停止应用
pm2 stop deshian-website

# 设置开机自启
pm2 startup
pm2 save
```

### 方式 3: 直接使用 Node

```bash
cd .next/standalone
DATABASE_URL="file:./prisma/dev.db" NODE_ENV=production PORT=3000 node server.js
```

### 方式 4: 使用 nohup（后台运行）

```bash
cd .next/standalone
nohup DATABASE_URL="file:./prisma/dev.db" NODE_ENV=production PORT=3000 node server.js > ../logs/app.log 2>&1 &
```

## 🔍 验证部署

访问服务器：

```bash
# 本地测试
curl http://localhost:3000

# 查看进程
ps aux | grep node

# 查看端口
netstat -tlnp | grep 3000
```

## 📊 目录结构说明

```
.next/standalone/
├── server.js           # 服务器入口文件
├── node_modules/       # 生产依赖
├── public/             # 静态资源（需要手动复制）
├── .next/
│   └── static/        # Next.js 静态文件（需要手动复制）
├── prisma/            # 数据库文件（需要手动复制）
└── .env               # 环境变量（需要手动复制）
```

## 🐛 常见问题

### 1. DATABASE_URL 找不到

**错误信息：**
```
Environment variable not found: DATABASE_URL
```

**解决方案：**
- 确保 `.env` 文件存在于 `.next/standalone/` 目录
- 或者在启动命令中显式设置环境变量

### 2. 静态文件404

**问题：**
图片、CSS等静态资源加载失败

**解决方案：**
```bash
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/
```

### 3. 数据库文件找不到

**问题：**
```
Error: ENOENT: no such file or directory, open './prisma/dev.db'
```

**解决方案：**
```bash
mkdir -p .next/standalone/prisma
cp -r prisma/* .next/standalone/prisma/
```

### 4. 端口被占用

**问题：**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**解决方案：**
```bash
# 查找占用端口的进程
lsof -i :3000

# 杀死进程
kill -9 <PID>

# 或者换个端口
PORT=3001 node server.js
```

## 🔄 更新部署

当代码更新后：

```bash
# 1. 拉取最新代码
git pull

# 2. 安装新依赖（如果有）
pnpm install

# 3. 重新构建
pnpm build

# 4. 复制文件
./start-production.sh

# 或者使用 PM2 重启
pm2 restart deshian-website
```

## 🔒 安全建议

1. **使用 PM2 进程管理**
   - 自动重启
   - 日志管理
   - 多进程支持

2. **使用 Nginx 反向代理**
   - 参考 `nginx.conf.example`
   - 配置 SSL 证书
   - 配置缓存策略

3. **定期备份数据库**
   ```bash
   cp prisma/dev.db backups/dev.db.$(date +%Y%m%d)
   ```

4. **使用环境变量管理密码**
   - 不要将密码提交到代码仓库
   - 使用 `.env` 文件存储敏感信息

## 📝 PM2 常用命令

```bash
# 启动
pm2 start ecosystem.production.config.js

# 查看列表
pm2 list

# 查看详情
pm2 show deshian-website

# 查看日志
pm2 logs deshian-website
pm2 logs deshian-website --lines 100

# 监控
pm2 monit

# 重启
pm2 restart deshian-website

# 停止
pm2 stop deshian-website

# 删除
pm2 delete deshian-website

# 保存当前进程列表
pm2 save

# 清空日志
pm2 flush
```

## 🌐 访问管理后台

部署成功后，访问管理后台：

- URL: `http://your-server-ip:3000/admin`
- 账号: `admin`
- 密码: `Dsa@2025#Admin!`

## 📞 技术支持

如遇问题，请查看：
- PM2 日志: `.next/standalone/../logs/`
- 应用日志: `pm2 logs deshian-website`
- 系统日志: `/var/log/`

---

**版本**: 1.0.0  
**更新日期**: 2024-12-11  
**适用于**: Next.js 15 + Standalone 模式

