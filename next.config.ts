import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // Allow local images and external sources used in articles
    remotePatterns: [],
  },
}

export default nextConfig
