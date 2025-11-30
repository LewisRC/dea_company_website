/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // 支持Node.js托管环境
  // output: 'export', // 如果需要纯静态导出，取消注释此行并注释上一行
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  images: {
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // 生产环境优化
  swcMinify: true,
  compress: true,
  
  // 性能优化
  poweredByHeader: false,
  generateEtags: false,
  
  // 环境变量配置 - 确保构建时可以访问
  env: {
    DATABASE_URL: process.env.DATABASE_URL || 'file:./prisma/dev.db',
  },
  
  // 实验性功能 - 优化构建
  experimental: {
    // 优化服务器内存使用
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
}

export default nextConfig
