/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.kitsu.io',
        port: '',
        pathname: '/anime/poster_images/**',
      },
    ],
  },
};

export default nextConfig;
