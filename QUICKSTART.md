# 快速启动指南

## 🚀 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器（默认80端口）
pnpm dev

# 或使用3000端口
PORT=3000 pnpm dev
```

访问: http://localhost:80 （或对应端口）

## 📦 生产构建

```bash
# 构建
pnpm build

# 启动生产服务器（默认80端口）
pnpm start

# 或使用3000端口
pnpm start:3000
```

## ⚙️ 端口配置

### 默认端口: 80

应用已配置为默认使用 **80端口**。

### 使用其他端口

```bash
# 开发模式
PORT=3000 pnpm dev

# 生产模式
PORT=3000 pnpm start
# 或使用快捷命令
pnpm start:3000
```

### 80端口权限配置

在 Linux/macOS 上，80端口需要特殊权限：

**方法1: 使用 setcap（推荐）**
```bash
sudo setcap cap_net_bind_service=+ep $(which node)
pnpm start
```

**方法2: 使用 sudo**
```bash
sudo pnpm start
```

**方法3: 使用 Nginx 反向代理**
```bash
# 应用运行在3000端口
PORT=3000 pnpm start

# Nginx 配置监听80端口并转发到3000
# 参考: nginx.conf.example
```

详细配置请查看: [PORT_CONFIGURATION.md](PORT_CONFIGURATION.md)

## 🌐 阿里云部署

### 1. 拉取代码
```bash
git pull origin main
```

### 2. 配置环境变量

在阿里云控制台添加：
```
DATABASE_URL=file:./prisma/dev.db
PORT=80
```

### 3. 构建和部署

**使用自动化脚本：**
```bash
bash deploy-aliyun.sh
```

**手动构建：**
```bash
pnpm install
pnpm prisma generate
pnpm build
```

### 4. 启动应用

**推荐: 使用 PM2**
```bash
pm2 start ecosystem.config.js --env production
pm2 save
```

**或直接启动**
```bash
pnpm start
```

详细部署说明请查看: [ALIYUN_DEPLOYMENT.md](ALIYUN_DEPLOYMENT.md)

## 📚 相关文档

- [端口配置详解](PORT_CONFIGURATION.md)
- [阿里云部署指南](ALIYUN_DEPLOYMENT.md)
- [构建问题修复](BUILD_FIX.md)
- [项目README](README.md)

## 🔧 常用命令

```bash
# 开发
pnpm dev              # 启动开发服务器（80端口）
PORT=3000 pnpm dev    # 启动开发服务器（3000端口）

# 构建
pnpm build            # 构建生产版本

# 生产
pnpm start            # 启动生产服务器（80端口）
pnpm start:3000       # 启动生产服务器（3000端口）

# 数据库
pnpm prisma generate  # 生成 Prisma Client
pnpm prisma studio    # 打开数据库管理界面

# 其他
pnpm lint             # 代码检查
```

## ⚠️ 注意事项

1. **首次运行**需要生成 Prisma Client:
   ```bash
   pnpm prisma generate
   ```

2. **80端口**需要特殊权限，建议：
   - 开发环境使用 3000 端口
   - 生产环境使用 Nginx 反向代理

3. **阿里云部署**前确保已配置环境变量

4. **生产环境**推荐使用 PM2 进程管理

## 🆘 常见问题

### 端口被占用
```bash
# 查看端口占用
lsof -i :80

# 终止占用进程
kill -9 <PID>
```

### 权限错误
```bash
# EACCES: permission denied
# 解决: 使用 setcap 或其他端口
sudo setcap cap_net_bind_service=+ep $(which node)
```

### 构建失败
```bash
# 清理缓存重试
rm -rf .next node_modules/.cache
pnpm install
pnpm build
```

更多问题请查看相关文档或提交 Issue。

