/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['mediumseagreen-crane-771753.hostingersite.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'mediumseagreen-crane-771753.hostingersite.com',
          port: '',
          pathname: '/wp-content/uploads/**',
        },
      ],
    },
    experimental: {
      optimizePackageImports: ['lucide-react'],
    },
  }
  
  module.exports = nextConfig  