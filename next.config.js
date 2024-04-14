/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'txvknzcumj1wlcwj.public.blob.vercel-storage.com',
      },
    ],
  },
};

module.exports = nextConfig;
