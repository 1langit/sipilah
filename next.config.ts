import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/qr',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
