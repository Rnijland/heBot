/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

module.exports = nextConfig