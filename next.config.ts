import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["c.ndtvimg.com"],
    
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
