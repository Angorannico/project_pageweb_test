/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pages.pagespruebas.site'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pages.pagespruebas.site',
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