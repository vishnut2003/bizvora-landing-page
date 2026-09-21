import type { MetadataRoute } from "next";
import { STATIC_ROUTES } from "@/lib/routes";
import { siteOrigin } from "@/lib/site";
import { getPostStubs } from "@/lib/wp";

/** Re-read WordPress hourly, in step with the blog pages' ISR. */
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = siteOrigin();
  const deployed = new Date();

  const pages: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${origin}${route.path}`,
    lastModified: deployed,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const posts: MetadataRoute.Sitemap = (await getPostStubs()).map((post) => ({
    url: `${origin}/blogs/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
