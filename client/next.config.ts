import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**"
      },
      {
        protocol: "https",
        hostname: "beneficial-festival-b6882c765c.strapiapp.com"
      }
    ]
  }
};

export default nextConfig;
