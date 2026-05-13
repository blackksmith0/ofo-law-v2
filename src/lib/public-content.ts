import { articles as staticArticles, notes as staticNotes } from "@/lib/content";
import { createSupabaseAdminClient, hasSupabaseServerEnv } from "@/lib/supabase/server";
import { calculateReadingTime, formatDateTR } from "@/lib/utils";

export type PublicContent = {
  id?: string;
  type: "article" | "note";
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  categorySlug?: string | null;
  categoryTitle?: string | null;
  date: string;
  updatedAt: string;
  readingTime: string;
  coverImage: string;
  coverAlt: string;
  heroImage?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  publishedAt?: Date | null;
  updatedAtDate?: Date | null;
};

const defaultCover = "/images/placeholders/article-placeholder.png";

export type SupabaseArticleRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category_slug: string | null;
  category_title: string | null;
  type: "article" | "note";
  status: "draft" | "published";
  cover_image: string | null;
  cover_alt: string | null;
  hero_image: string | null;
  seo_title: string | null;
  seo_description: string | null;
  reading_time: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

function staticArticleContent(article: (typeof staticArticles)[number]) {
  return article.sections
    .map((section) => `${section.level === 3 ? "###" : "##"} ${section.heading}\n\n${section.body}`)
    .join("\n\n");
}

function fromStaticArticle(article: (typeof staticArticles)[number]): PublicContent {
  const content = staticArticleContent(article);
  return {
    type: "article",
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt,
    content,
    categorySlug: article.categorySlug,
    categoryTitle: article.category,
    date: article.date,
    updatedAt: article.updatedAt,
    readingTime: article.readingTime || calculateReadingTime(content),
    coverImage: article.coverImage || defaultCover,
    coverAlt: article.coverAlt || article.title,
    heroImage: article.heroImage || article.coverImage || defaultCover,
  };
}

function fromStaticNote(note: (typeof staticNotes)[number]): PublicContent {
  const content = `## Uygulama Notu\n\n${note.excerpt}\n\n## Değerlendirme\n\nBu not, uygulamada karşılaşılan başlıklara ilişkin genel mesleki gözlem ve bilgilendirme amacıyla hazırlanmıştır.`;
  return {
    type: "note",
    title: note.title,
    slug: note.slug,
    excerpt: note.excerpt,
    content,
    categorySlug: null,
    categoryTitle: note.category,
    date: "12 Mayıs 2026",
    updatedAt: "12 Mayıs 2026",
    readingTime: note.readingTime || calculateReadingTime(content),
    coverImage: defaultCover,
    coverAlt: note.title,
    heroImage: defaultCover,
  };
}

export function fromSupabaseArticle(article: SupabaseArticleRow): PublicContent {
  const publishedAt = article.published_at || article.created_at;
  return {
    id: article.id,
    type: article.type,
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt,
    content: article.content,
    categorySlug: article.category_slug,
    categoryTitle: article.category_title,
    date: formatDateTR(publishedAt),
    updatedAt: formatDateTR(article.updated_at),
    readingTime: article.reading_time || calculateReadingTime(article.content),
    coverImage: article.cover_image || article.hero_image || defaultCover,
    coverAlt: article.cover_alt || article.title,
    heroImage: article.hero_image || article.cover_image || defaultCover,
    seoTitle: article.seo_title,
    seoDescription: article.seo_description,
    publishedAt: publishedAt ? new Date(publishedAt) : null,
    updatedAtDate: article.updated_at ? new Date(article.updated_at) : null,
  };
}

export async function getPublishedArticles(categorySlug?: string | null) {
  const fallback = () => {
    const items = staticArticles.map(fromStaticArticle);
    return categorySlug ? items.filter((item) => item.categorySlug === categorySlug) : items;
  };

  if (!hasSupabaseServerEnv()) return fallback();

  try {
    const supabase = createSupabaseAdminClient();
    let query = supabase
      .from("articles")
      .select("*")
      .eq("type", "article")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false });

    if (categorySlug) query = query.eq("category_slug", categorySlug);

    const { data, error } = await query;
    if (error) return fallback();

    return (data || []).map((row) => fromSupabaseArticle(row as SupabaseArticleRow));
  } catch {
    return fallback();
  }
}

export async function getPublishedNotes() {
  const fallback = () => staticNotes.map(fromStaticNote);
  if (!hasSupabaseServerEnv()) return fallback();

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("type", "note")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .order("created_at", { ascending: false });
    if (error) return fallback();

    return (data || []).map((row) => fromSupabaseArticle(row as SupabaseArticleRow));
  } catch {
    return fallback();
  }
}

export async function getPublishedArticleBySlug(slug: string) {
  const fallback = () => staticArticles.map(fromStaticArticle).find((article) => article.slug === slug) || null;
  if (!hasSupabaseServerEnv()) return fallback();

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", slug)
      .eq("type", "article")
      .eq("status", "published")
      .maybeSingle();
    if (error) return fallback();

    return data ? fromSupabaseArticle(data as SupabaseArticleRow) : fallback();
  } catch {
    return fallback();
  }
}

export async function getPublishedNoteBySlug(slug: string) {
  const fallback = () => staticNotes.map(fromStaticNote).find((note) => note.slug === slug) || null;
  if (!hasSupabaseServerEnv()) return fallback();

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", slug)
      .eq("type", "note")
      .eq("status", "published")
      .maybeSingle();
    if (error) return fallback();

    return data ? fromSupabaseArticle(data as SupabaseArticleRow) : fallback();
  } catch {
    return fallback();
  }
}

export async function getRecentPublishedArticles(limit = 4) {
  const items = await getPublishedArticles();
  return items.slice(0, limit);
}

export async function getRelatedPublishedArticles(article: PublicContent, limit = 3) {
  const items = await getPublishedArticles(article.categorySlug);
  const related = items.filter((item) => item.slug !== article.slug);
  if (related.length >= limit) return related.slice(0, limit);
  const all = await getPublishedArticles();
  return [...related, ...all.filter((item) => item.slug !== article.slug)]
    .filter((item, index, list) => list.findIndex((entry) => entry.slug === item.slug) === index)
    .slice(0, limit);
}
