module.exports = {
  apps: [
    {
      name: 'deshian-website',
      script: '.next/standalone/server.js',
      cwd: '/root/dea_company_website/.next/standalone',
      instances: 1,
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '500M',
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
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      // 自动重启配置
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      // 优雅关闭
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000
    }
  ]
}

