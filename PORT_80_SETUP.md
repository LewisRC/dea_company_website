# 80端口配置指南

应用已配置为默认从80端口启动。本文档说明如何在不同环境中配置和运行。

## 🎯 当前配置

### package.json 脚本
```json
{
  "scripts": {
    "start": "next start -p 80",  // 生产环境，80端口
    "dev": "next dev -p 80",      // 开发环境，80端口
    "start:3000": "next start -p 3000"  // 备用，3000端口
  }
}
```

## 🚀 启动方式

### 方式一：使用启动脚本（推荐）

```bash
bash start-server.sh
```

脚本会自动处理权限问题。

### 方式二：直接使用 npm

#### Linux/macOS（需要 sudo）
```bash
sudo PORT=80 npm start
```

#### Windows（以管理员身份运行）
```bash
set PORT=80 && npm start
```

### 方式三：使用 PM2（生产环境推荐）

```bash
# 安装 PM2
npm install -g pm2

# 使用 PM2 启动（会自动使用 ecosystem.config.js）
sudo pm2 start ecosystem.config.js

# 查看状态
sudo pm2 status

# 查看日志
sudo pm2 logs

# 重启
sudo pm2 restart dea-company-website

# 设置开机自启
sudo pm2 startup
sudo pm2 save
```

## ⚙️ 阿里云配置

### 选项 A：直接使用80端口（需要 root 权限）

1. **环境变量配置**
```bash
PORT=80
DATABASE_URL=file:./prisma/dev.db
NODE_ENV=production
```

2. **启动命令**
```bash
sudo npm start
```

### 选项 B：使用 Nginx 反向代理（推荐）

应用运行在3000端口，通过 Nginx 转发到80端口。

#### 1. 修改启动命令
```bash
PORT=3000 npm start
# 或使用
npm run start:3000
```

#### 2. 配置 Nginx
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

#### 3. 启用配置
```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 选项 C：使用 PM2 + Nginx（最佳实践）

#### 1. 使用 PM2 启动应用（3000端口）
修改 `ecosystem.config.js` 的端口为 3000：
```javascript
env: {
  PORT: 3000,
  // ...
}
```

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### 2. 配置 Nginx（同上）

## 🔐 权限说明

### 为什么需要 root 权限？
在 Linux/Unix 系统中，1024以下的端口（包括80）属于"特权端口"，只有 root 用户才能绑定。

### 解决方案

#### 方案1：使用 sudo
```bash
sudo npm start
```

#### 方案2：授予 Node.js 绑定特权端口的权限
```bash
sudo setcap 'cap_net_bind_service=+ep' $(which node)
```

然后可以不用 sudo：
```bash
npm start
```

⚠️ **注意**：此方法有安全风险，不推荐在生产环境使用。

#### 方案3：使用反向代理（推荐）
应用运行在非特权端口（如3000），通过 Nginx 等反向代理转发到80端口。

## 📝 环境变量

### 通过环境变量指定端口

**临时设置：**
```bash
PORT=80 npm start
```

**永久设置（在 .env.production.local 中）：**
```
PORT=80
```

### 查看配置示例
参考 `.env.production.local.example` 文件。

## 🧪 本地测试

### 开发环境（80端口）
```bash
sudo npm run dev
```

访问：http://localhost

### 开发环境（3000端口）
```bash
PORT=3000 npm run dev
```

访问：http://localhost:3000

## 🐳 Docker 部署

如果使用 Docker，在 `docker-compose.yml` 中配置端口映射：

```yaml
services:
  app:
    build: .
    ports:
      - "80:3000"  # 主机80 -> 容器3000
    environment:
      - PORT=3000
      - DATABASE_URL=file:./prisma/dev.db
```

这样应用在容器内运行在3000端口，但从外部通过80端口访问。

## ❓ 常见问题

### Q1: 错误 "EACCES: permission denied"
**原因：** 没有权限绑定80端口

**解决：**
- 使用 `sudo npm start`
- 或使用 Nginx 反向代理
- 或使用其他端口：`PORT=3000 npm start`

### Q2: 错误 "EADDRINUSE: address already in use"
**原因：** 80端口已被占用

**查找占用进程：**
```bash
sudo lsof -i :80
# 或
sudo netstat -tulpn | grep :80
```

**停止占用进程：**
```bash
sudo kill -9 <PID>
# 或如果是 Nginx
sudo systemctl stop nginx
```

### Q3: 如何在开发时使用不同端口？
```bash
PORT=3000 npm run dev
```

### Q4: 阿里云安全组配置
确保安全组开放了80端口：
1. 登录阿里云控制台
2. 进入 ECS 实例
3. 配置安全组规则
4. 添加入站规则：协议TCP，端口80，源0.0.0.0/0

## 📚 相关文档

- [ALIYUN_DEPLOYMENT.md](./ALIYUN_DEPLOYMENT.md) - 阿里云部署指南
- [BUILD_FIX.md](./BUILD_FIX.md) - 构建问题修复
- [ecosystem.config.js](./ecosystem.config.js) - PM2 配置
- [start-server.sh](./start-server.sh) - 启动脚本

## 🎯 推荐部署方案

**阿里云生产环境推荐：**
1. 应用使用 PM2 运行在3000端口
2. Nginx 作为反向代理，监听80端口
3. 配置 HTTPS（443端口）
4. 启用 PM2 开机自启

这样既安全又稳定，便于维护和扩展。

