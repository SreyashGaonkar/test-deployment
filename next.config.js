/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  images: {
    domains: [
      "turftown.s3.ap-south-1.amazonaws.com",
      "turftown",
      "turftown.in",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/game/:path*",
        destination: "/game",
      },
      {
        source: "/club/:path*",
        destination: "/club",
      },
      {
        source: "/venue/:path*",
        destination: "/venue",
      },
      {
        source: "/user/:path*",
        destination: "/user",
      },
      {
        source: "/player/:path*",
        destination: "/player",
      },
    ];
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
