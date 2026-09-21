import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";

/** Everything is public, search and AI crawlers alike; just point at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  const origin = siteOrigin();
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
