import type { MetadataRoute } from "next";
import { getPublishedArticles, getPublishedNotes } from "@/lib/public-content";
import { siteUrl } from "@/lib/content";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/hakkimda`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/hukuk-yazilari`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/uygulamadan-notlar`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/iletisim`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const [articles, notes] = await Promise.all([getPublishedArticles(), getPublishedNotes()]);

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/hukuk-yazilari/${article.slug}`,
    lastModified: article.updatedAtDate || article.publishedAt || now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const noteRoutes: MetadataRoute.Sitemap = notes.map((note) => ({
    url: `${siteUrl}/uygulamadan-notlar/${note.slug}`,
    lastModified: note.updatedAtDate || note.publishedAt || now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...articleRoutes, ...noteRoutes];
}
