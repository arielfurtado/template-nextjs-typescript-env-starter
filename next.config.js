/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  presets: ["next/babel"],
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};

module.exports = nextConfig;
