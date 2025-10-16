/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // This is important for Vercel deployment
  output: 'standalone',
  // If using basePath (uncomment if needed)
  // basePath: '',
  // Images configuration
  images: {
    domains: ['example.com'], // Add domains you're loading images from
    unoptimized: true, // Try this if images are causing issues
  },
}

module.exports = nextConfig
