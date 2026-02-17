import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/content";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/thoughts", "/talks", "/contact", "/rss.xml"].map(
    (path) => ({
      url: `${site.domain}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    }),
  );

  const postRoutes = getAllPosts().map((post) => ({
    url: `${site.domain}/thoughts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
