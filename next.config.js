/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.jsdelivr.net'], // Add any domains you need to load images from
    formats: ['image/avif', 'image/webp'],
  },
  // Optimization for production
  swcMinify: true,
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Add any environment variables you want to expose to the browser
  env: {
    NEXT_PUBLIC_WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://yourwebsite.com',
  },
  // Internationalization (if needed)
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // Adjust webpack config if needed
  webpack(config) {
    return config;
  },
};

module.exports = nextConfig;
