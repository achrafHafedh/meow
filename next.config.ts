import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.media.tumblr.com",
      },
    ],
  },
};

export default nextConfig;
