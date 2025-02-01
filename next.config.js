/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn-images-1.medium.com"],
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
