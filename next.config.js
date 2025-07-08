/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'horze8elcmmyjoto.public.blob.vercel-storage.com',
      'app.relevanceai.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'horze8elcmmyjoto.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Enable static exports for better performance
  output: 'standalone',
  // Enable SWC minification
  swcMinify: true,
  // Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig