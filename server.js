#!/usr/bin/env node
/**
 * 自定义启动脚本 - 确保端口配置生效
 * 使用方法：node server.js
 */

// 设置默认端口为 3000
process.env.PORT = process.env.PORT || '3000';
process.env.HOSTNAME = process.env.HOSTNAME || '0.0.0.0';

console.log('🚀 Starting server...');
console.log(`📍 Port: ${process.env.PORT}`);
console.log(`🌐 Hostname: ${process.env.HOSTNAME}`);

// 导入 Next.js 服务器
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10);

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`✅ Server ready on http://${process.env.HOSTNAME}:${port}`);
  });
});


