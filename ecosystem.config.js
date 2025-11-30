// PM2 配置文件 - 用于生产环境进程管理
module.exports = {
  apps: [{
    name: 'dea-company-website',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: './',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 80,
      HOSTNAME: '0.0.0.0',
      DATABASE_URL: 'file:./prisma/dev.db'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}
