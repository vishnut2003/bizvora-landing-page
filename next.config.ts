import type { NextConfig } from "next";

// Featured images are served from the headless WordPress. The fallback keeps
// the config loadable without the env var; lib/wp.ts is where it is required.
const wpOrigin = new URL(process.env.WP_BASE_URL?.trim() || "https://wordpress.bizvoraone.com");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("/wp-content/uploads/**", wpOrigin)],
  },
};

export default nextConfig;
