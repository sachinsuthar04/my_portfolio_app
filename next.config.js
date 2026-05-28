// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 🔑 Fixes the image loading issue and the deprecation warning
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/uc', // Pathname for the stable embed link
      },
    ],
  },
};

module.exports = nextConfig;