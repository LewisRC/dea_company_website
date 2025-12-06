// PM2 配置文件 - 用于生产环境进程管理
module.exports = {
  apps: [{
    name: 'dea-company-website',
    script: './server.js',
    cwd: './',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      HOSTNAME: '0.0.0.0',
      DATABASE_URL: 'file:./prisma/dev.db'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
      HOSTNAME: '0.0.0.0',
      DATABASE_URL: 'file:./prisma/dev.db'
    },
    env_development: {
      NODE_ENV: 'development',
      PORT: 3000,
      HOSTNAME: 'localhost',
      DATABASE_URL: 'file:./prisma/dev.db'
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
}
