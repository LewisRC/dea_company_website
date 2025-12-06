# 端口配置修复说明

## 问题
`npm start` 或 `pnpm start` 仍然使用 3000 端口，而不是预期的 80 端口。

## 原因
Next.js 16 在 standalone 模式下，命令行参数 `-p 80` 可能不生效，需要使用环境变量 `PORT` 来控制端口。

## 解决方案
创建了自定义的 `server.js` 启动脚本，通过环境变量读取端口配置。

---

## 🚀 使用方法

### 方法 1：直接使用 npm/pnpm（默认 80 端口）

```bash
# 构建
npm run build
# 或
pnpm build

# 启动（默认 80 端口，需要 sudo）
sudo npm start
# 或
sudo pnpm start
```

### 方法 2：使用启动脚本（推荐）

```bash
# 启动（脚本会自动处理 sudo）
bash start-server.sh
```

### 方法 3：自定义端口

```bash
# 使用 3000 端口
PORT=3000 npm start

# 使用 8080 端口
PORT=8080 npm start
```

### 方法 4：使用 PM2

```bash
# 安装 PM2
npm install -g pm2

# 启动（会使用 ecosystem.config.js 中的配置）
sudo pm2 start ecosystem.config.js

# 查看状态
pm2 status

# 查看日志
pm2 logs dea-company-website
```

---

## 📝 技术细节

### 新增的 server.js
```javascript
// 默认端口为 80
process.env.PORT = process.env.PORT || '80';
process.env.HOSTNAME = process.env.HOSTNAME || '0.0.0.0';

// 使用 Next.js API 启动服务器
const next = require('next');
const app = next({ dev: false });
// ...
```

### package.json 更新
```json
{
  "scripts": {
    "start": "node server.js",      // 使用自定义脚本
    "start:3000": "PORT=3000 node server.js"
  }
}
```

---

## 🧪 测试验证

```bash
# 1. 构建项目
npm run build

# 2. 测试启动（使用非特权端口）
PORT=3000 npm start

# 应该看到：
# 🚀 Starting server...
# 📍 Port: 3000
# 🌐 Hostname: 0.0.0.0
# ✅ Server ready on http://0.0.0.0:3000

# 3. 测试 80 端口（需要 sudo）
sudo PORT=80 npm start

# 或使用启动脚本
bash start-server.sh
```

---

## 阿里云部署

### 拉取更新
```bash
git pull origin main
```

### 环境变量配置
在阿里云控制台设置：
```
PORT=80
HOSTNAME=0.0.0.0
NODE_ENV=production
DATABASE_URL=file:./prisma/dev.db
```

### 启动命令

**选项 1：直接启动**
```bash
sudo npm start
```

**选项 2：使用脚本**
```bash
bash start-server.sh
```

**选项 3：使用 PM2（推荐）**
```bash
sudo pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

---

## ⚠️ 重要提示

1. **80 端口需要 root 权限**
   - Linux 下需要使用 `sudo`
   - 或配置 Node.js 权限：`sudo setcap cap_net_bind_service=+ep $(which node)`
   
2. **推荐生产环境方案**
   - 应用运行在 3000 端口（不需要 root）
   - 使用 Nginx 反向代理到 80 端口
   - 参考 `nginx.conf.example`

3. **开发环境**
   - 建议使用非特权端口：`PORT=3000 npm run dev`
   - 避免每次都需要 sudo

---

## 📚 相关文档

- [PORT_80_SETUP.md](./PORT_80_SETUP.md) - 80 端口完整配置指南
- [ALIYUN_DEPLOYMENT.md](./ALIYUN_DEPLOYMENT.md) - 阿里云部署指南
- [nginx.conf.example](./nginx.conf.example) - Nginx 配置示例
- [ecosystem.config.js](./ecosystem.config.js) - PM2 配置

---

## 🆘 常见问题

### Q: 为什么还是 3000 端口？
确保：
1. 已拉取最新代码：`git pull origin main`
2. 重新构建：`npm run build`
3. 使用正确的启动命令：`sudo npm start` 或 `bash start-server.sh`

### Q: 如何验证端口配置？
```bash
# 启动后检查
lsof -i :80
# 或
netstat -tulpn | grep :80
```

### Q: 开发时如何避免使用 sudo？
```bash
# 使用 3000 端口开发
PORT=3000 npm run dev
```

### Q: 生产环境最佳实践？
```bash
# 1. 应用运行在 3000 端口
PORT=3000 pm2 start ecosystem.config.js

# 2. Nginx 监听 80 并转发
# 参考 nginx.conf.example 配置
```


