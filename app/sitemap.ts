import type { MetadataRoute } from "next";
import { articles } from "./lib/articles";
import { siteConfig } from "./lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/blog", "/contact", "/privacy"].map((path) => ({ url: `${siteConfig.siteUrl}${path}`, lastModified: new Date(), changeFrequency: path === "/blog" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.8 }));
  return [...pages, ...articles.map((article) => ({ url: `${siteConfig.siteUrl}/blog/${article.slug}`, lastModified: new Date(article.published), changeFrequency: "monthly" as const, priority: 0.7 }))];
}
