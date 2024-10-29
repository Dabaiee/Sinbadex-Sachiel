/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
        pathname: '/coins/images/**',
      },
      {
        protocol: 'https',
        hostname: 'api.coingecko.com',
        pathname: '/api/v3/**',
      },
    ],
  },
};

module.exports = nextConfig;
