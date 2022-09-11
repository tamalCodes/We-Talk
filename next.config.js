/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com"],
  },
};

module.exports = nextConfig;
