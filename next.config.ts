import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/anasayfa",
        destination: "/",
        permanent: true,
      },
      {
        source: "/makaleler",
        destination: "/hukuk-yazilari",
        permanent: true,
      },
      {
        source: "/makaleler/:slug",
        destination: "/hukuk-yazilari/:slug",
        permanent: true,
      },
      {
        source: "/hizmetlerimiz",
        destination: "/hukuk-yazilari",
        permanent: true,
      },
      {
        source: "/hizmetlerimiz/:slug",
        destination: "/hukuk-yazilari",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sgwqfxteyhyrtlwtfvdo.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "cdn-yb.ams3.cdn.digitaloceanspaces.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
