/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
