# 端口配置说明

## 默认端口设置

应用已配置为默认从 **80端口** 启动。

## 快速启动

### 方法1：使用启动脚本（推荐）

```bash
# 使用80端口（需要权限配置）
bash start-server.sh

# 使用自定义端口
PORT=3000 bash start-server.sh
```

### 方法2：直接使用 npm/pnpm

```bash
# 使用默认80端口
pnpm start

# 使用3000端口
pnpm start:3000

# 开发模式（80端口）
pnpm dev
```

### 方法3：自定义端口

```bash
# 使用环境变量指定端口
PORT=8080 pnpm start
```

## 80端口权限配置

在 Linux/macOS 上，80端口是**特权端口**，需要特殊权限才能使用。

### 选项A：使用 setcap（推荐，无需 sudo）

给 Node.js 授予端口绑定权限（只需执行一次）：

```bash
# 查找 Node.js 路径
which node

# 授权 Node.js 绑定特权端口
sudo setcap cap_net_bind_service=+ep $(which node)

# 验证配置
getcap $(which node)
# 应该输出: /path/to/node cap_net_bind_service=ep

# 现在可以直接启动
pnpm start
```

**优点：**
- 只需配置一次
- 启动时不需要 sudo
- 更安全，只授予端口绑定权限

**注意：** 如果更新了 Node.js 版本，需要重新运行 setcap 命令。

### 选项B：使用 sudo

```bash
sudo pnpm start
# 或
sudo bash start-server.sh
```

**缺点：** 每次启动都需要 sudo，安全性较低。

### 选项C：使用 Nginx 反向代理（生产环境推荐）

应用监听非特权端口（如3000），Nginx 监听80端口并转发请求。

#### 1. 安装 Nginx

```bash
# Ubuntu/Debian
sudo apt install nginx

# CentOS/RHEL
sudo yum install nginx

# macOS
brew install nginx
```

#### 2. 配置 Nginx

创建配置文件 `/etc/nginx/sites-available/dea-website`:

```nginx
server {
    listen 80;
    server_name your-domain.com;  # 替换为你的域名

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### 3. 启用配置并重启 Nginx

```bash
# 创建软链接
sudo ln -s /etc/nginx/sites-available/dea-website /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

#### 4. 启动 Next.js 应用（3000端口）

```bash
PORT=3000 pnpm start
# 或使用
pnpm start:3000
```

现在：
- Nginx 监听 80 端口
- Next.js 应用监听 3000 端口
- 用户访问 80 端口，Nginx 转发到 3000 端口

### 选项D：使用 PM2（生产环境推荐）

PM2 可以管理应用进程，自动重启，并处理端口权限。

#### 1. 安装 PM2

```bash
npm install -g pm2
```

#### 2. 配置 PM2

创建 `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'dea-website',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 80',
    cwd: './',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 80,
      DATABASE_URL: 'file:./prisma/dev.db'
    }
  }]
}
```

#### 3. 启动应用

```bash
# 如果需要80端口
sudo pm2 start ecosystem.config.js

# 如果配置了 setcap
pm2 start ecosystem.config.js

# 保存配置
pm2 save

# 设置开机自启
pm2 startup
```

## 阿里云部署配置

### 方法1：使用 Nginx 反向代理（推荐）

1. 在阿里云上安装 Nginx
2. 配置 Nginx 监听80端口，转发到3000端口
3. 启动应用时使用3000端口：
   ```bash
   PORT=3000 pnpm start
   ```

### 方法2：直接使用80端口

在阿里云服务器上：

```bash
# 配置 Node.js 权限
sudo setcap cap_net_bind_service=+ep $(which node)

# 构建并启动
pnpm build
pnpm start
```

### 方法3：使用 PM2

```bash
# 安装 PM2
npm install -g pm2

# 配置 setcap
sudo setcap cap_net_bind_service=+ep $(which node)

# 启动
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## 端口说明

| 端口 | 用途 | 启动方式 |
|------|------|----------|
| 80 | 默认生产端口 | `pnpm start` 或 `bash start-server.sh` |
| 3000 | 备用端口 | `pnpm start:3000` 或 `PORT=3000 pnpm start` |
| 自定义 | 任意端口 | `PORT=8080 pnpm start` |

## 常见问题

### Q1: 启动时报错 "EACCES: permission denied"

**原因：** 没有权限绑定80端口

**解决：**
```bash
# 方案1: 使用 setcap
sudo setcap cap_net_bind_service=+ep $(which node)

# 方案2: 使用 sudo
sudo pnpm start

# 方案3: 使用其他端口
PORT=3000 pnpm start
```

### Q2: 使用 sudo 启动后找不到 pnpm

**原因：** sudo 环境下的 PATH 不同

**解决：**
```bash
# 使用完整路径
sudo $(which pnpm) start

# 或使用 npm
sudo npm start
```

### Q3: setcap 在 Docker 容器中不工作

**原因：** Docker 容器默认不支持 setcap

**解决：**
```dockerfile
# 在 Dockerfile 中使用非特权端口
EXPOSE 3000
ENV PORT=3000

# 然后在主机上用 docker 映射端口
docker run -p 80:3000 your-image
```

### Q4: macOS 上 setcap 命令不存在

**原因：** macOS 不支持 Linux capabilities

**解决：**
```bash
# 方案1: 使用 sudo
sudo pnpm start

# 方案2: 使用非特权端口 + 端口转发
# 使用 pfctl 或其他工具转发端口
```

## 最佳实践

### 开发环境
```bash
# 使用开发模式，任意端口
PORT=3000 pnpm dev
```

### 生产环境（推荐方案）

**优先级从高到低：**

1. **Nginx 反向代理 + PM2**（最推荐）
   - Nginx 监听80端口
   - PM2 管理应用（3000端口）
   - 自动重启、负载均衡、日志管理

2. **PM2 + setcap**
   - 直接使用80端口
   - PM2 进程管理
   - 需配置 setcap

3. **直接运行 + setcap**
   - 简单场景
   - 配置 setcap 后直接运行

## 检查当前配置

```bash
# 查看应用默认端口
cat package.json | grep "start"

# 查看 Node.js 权限
getcap $(which node)

# 测试端口是否开放
curl http://localhost:80
```

## 修改默认端口

如果需要修改默认端口，编辑 `package.json`:

```json
{
  "scripts": {
    "start": "next start -p 8080"  // 改为你想要的端口
  }
}
```

