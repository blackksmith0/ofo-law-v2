import { searchableContent, type Article, type Note } from "@/lib/content";

export type SearchableEntry = Article | Note;

export function slugify(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function normalizeSearch(value: string) {
  return slugify(value).replace(/-/g, " ");
}

export function getContentText(entry: SearchableEntry) {
  const articleText =
    entry.type === "article"
      ? [entry.updatedAt, entry.coverAlt, ...entry.sections.flatMap((section) => [section.heading, section.body])]
      : [];

  return [
    entry.title,
    entry.category,
    entry.excerpt,
    entry.slug,
    ...articleText,
  ].join(" ");
}

export function searchArticles(query: string) {
  const normalizedQuery = normalizeSearch(query.trim());

  if (!normalizedQuery) {
    return [];
  }

  return searchableContent.filter((entry) =>
    normalizeSearch(getContentText(entry)).includes(normalizedQuery),
  );
}

export function getSearchResultHref(entry: SearchableEntry) {
  return entry.type === "article"
    ? `/hukuk-yazilari/${entry.slug}`
    : `/uygulamadan-notlar/${entry.slug}`;
}
