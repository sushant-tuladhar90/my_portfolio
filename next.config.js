/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github.com',
        },
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
        },
      ],
    },
    output: 'export',  // <-- add this for static export
  }
  
  module.exports = nextConfig
  