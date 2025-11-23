# 数据库 + 后台管理系统使用指南

## 🎯 已完成功能

✅ SQLite数据库配置  
✅ Prisma ORM集成  
✅ 产品CRUD API接口  
✅ 管理后台登录页面  
✅ 产品管理页面

---

## 🚀 本地开发

### 1. 环境配置

复制环境变量示例文件（你需要手动创建.env.local）：

```bash
# 创建 .env.local 文件，添加以下内容：
DATABASE_URL="file:./prisma/dev.db"
```

### 2. 数据库初始化

数据库已经初始化完成，包含以下表：
- `Product` - 产品表
- `Admin` - 管理员表

### 3. 启动开发服务器

```bash
npm run dev
```

### 4. 访问管理后台

打开浏览器访问：
- **登录页面**: http://localhost:3000/admin
- **默认账号**: `admin`
- **默认密码**: `admin123`

### 5. 管理产品

登录后自动跳转到产品管理页面，可以：
- ✅ 查看所有产品
- ✅ 添加新产品
- ✅ 编辑产品
- ✅ 删除产品
- ✅ 立即生效（无需重新部署）

---

## 📊 API接口

### 产品管理API

```
GET    /api/admin/products      # 获取所有产品
POST   /api/admin/products      # 创建新产品
GET    /api/admin/products/:id  # 获取单个产品
PUT    /api/admin/products/:id  # 更新产品
DELETE /api/admin/products/:id  # 删除产品
```

### 请求示例

```typescript
// 创建产品
fetch('/api/admin/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: '10.1寸护士站管理机',
    category: '数字医护对讲系统',
    image: '/images/medical/product1.jpg',
    href: '/product/1'
  })
})

// 更新产品
fetch('/api/admin/products/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: '10.1寸护士站管理机（升级版）',
    category: '数字医护对讲系统',
    image: '/images/medical/product1.jpg',
    href: '/product/1'
  })
})

// 删除产品
fetch('/api/admin/products/1', {
  method: 'DELETE'
})
```

---

## 📁 文件结构

```
/Users/lewis.liu/Work/web_dev/code/
├── prisma/
│   ├── schema.prisma          # 数据库模型定义
│   ├── dev.db                 # SQLite数据库文件
│   └── migrations/            # 数据库迁移历史
├── lib/
│   └── prisma.ts             # Prisma客户端单例
├── app/
│   ├── api/
│   │   └── admin/
│   │       └── products/      # 产品API接口
│   └── admin/
│       ├── page.tsx           # 登录页面
│       └── products/
│           └── page.tsx       # 产品管理页面
└── scripts/
    └── migrate-products.ts    # 数据迁移脚本（可选）
```

---

## 🔄 导入现有产品数据

如果需要将config/products-data.ts中的产品导入数据库，有两种方式：

### 方式1：手动添加（推荐）

1. 访问 http://localhost:3000/admin
2. 登录后点击"添加产品"
3. 手动输入产品信息

### 方式2：使用迁移脚本（如果脚本可用）

```bash
# 运行迁移脚本
npm run migrate-products

# 或手动运行
npx tsx scripts/migrate-products.ts
```

注：如果遇到Prisma版本问题，推荐使用方式1手动添加。

---

## 🚀 部署到阿里云

### 第1步：购买服务器

访问 https://www.aliyun.com/product/swas
- 配置：2核4GB 轻量服务器
- 价格：¥498/年
- 镜像：宝塔Linux面板

### 第2步：配置环境变量

在服务器上创建 `.env.production`：

```bash
DATABASE_URL="file:/var/www/data/products.db"
NEXTAUTH_SECRET="生产环境随机密钥"
NEXTAUTH_URL="https://yourdomain.com"
```

### 第3步：初始化数据库

```bash
# SSH登录服务器
ssh root@your-server-ip

# 进入项目目录
cd /var/www/dea-website

# 运行数据库迁移
npx prisma migrate deploy

# 生成Prisma Client
npx prisma generate
```

### 第4步：构建和启动

```bash
# 安装依赖
npm install --production

# 构建项目
npm run build

# 启动服务（使用PM2）
pm2 start npm --name "dea-website" -- start
pm2 save
```

### 第5步：配置Nginx

使用宝塔面板或手动配置Nginx反向代理：

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔒 安全建议

### 1. 修改默认密码

默认账号密码是 `admin/admin123`，生产环境必须修改！

可以在数据库中直接更新：

```sql
UPDATE Admin 
SET password = '新的加密密码' 
WHERE username = 'admin';
```

### 2. 使用环境变量

生产环境必须设置强随机的 `NEXTAUTH_SECRET`：

```bash
# 生成随机密钥
openssl rand -base64 32
```

### 3. 配置HTTPS

使用宝塔面板一键申请Let's Encrypt证书，或使用阿里云免费SSL。

### 4. 数据库备份

定期备份SQLite数据库文件：

```bash
# 手动备份
cp /var/www/data/products.db /backup/products_$(date +%Y%m%d).db

# 或使用宝塔面板的计划任务功能
```

---

## 🐛 常见问题

### Q1: 数据库文件在哪里？

本地开发：`/Users/lewis.liu/Work/web_dev/code/prisma/dev.db`  
生产环境：`/var/www/data/products.db`

### Q2: 如何查看数据库内容？

使用Prisma Studio（可视化工具）：

```bash
npx prisma studio
```

会打开 http://localhost:5555 的Web界面。

### Q3: 如何重置数据库？

```bash
# 删除数据库文件
rm prisma/dev.db

# 重新运行迁移
npx prisma migrate dev

# 重新导入数据
npm run migrate-products
```

### Q4: API返回401/403错误？

管理后台使用简单的localStorage验证，生产环境建议：
1. 使用NextAuth.js
2. 添加JWT token验证
3. 配置session管理

### Q5: 产品图片怎么处理？

两种方式：
1. 图片放在 `public/images/` 目录
2. 使用阿里云OSS存储（推荐生产环境）

---

## 📝 下一步优化建议

### 短期（1-2周）
- [ ] 添加图片上传功能（集成OSS）
- [ ] 完善权限验证（NextAuth.js）
- [ ] 添加搜索和分页功能

### 中期（1-2月）
- [ ] 添加案例管理
- [ ] 添加用户留言管理
- [ ] 数据统计面板

### 长期（3-6月）
- [ ] 多管理员支持
- [ ] 操作日志记录
- [ ] 数据导入导出功能

---

## 📞 技术支持

如有问题，可以：
1. 查看Prisma文档：https://www.prisma.io/docs
2. 查看Next.js文档：https://nextjs.org/docs
3. 查看本项目README.md

---

**祝开发顺利！** 🚀

