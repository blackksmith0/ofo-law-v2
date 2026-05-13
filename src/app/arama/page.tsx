import type { Metadata } from "next";
import Link from "next/link";
import { getSearchResultHref, searchArticles } from "@/lib/search";
import { createPageMetadata } from "@/lib/seo";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export const metadata: Metadata = createPageMetadata({
  title: "Arama | Av. Ömer Faruk ÖZDEMİR",
  description: "Hukuk yazıları ve uygulamadan notlar içinde arama yapın.",
  path: "/arama",
});

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const results = searchArticles(q);

  return (
    <main className="inner-page">
      <section className="page-hero compact">
        <p className="eyebrow">İçerik Tarama Alanı</p>
        <h1>Site İçi Arama</h1>
        <form className="search-page-form" action="/arama">
          <label htmlFor="q">Hukuk yazıları ve uygulamadan notlarda ara</label>
          <div>
            <input
              aria-label="Arama terimi"
              defaultValue={q}
              id="q"
              name="q"
              placeholder="Örn. işe iade, tahliye, ifade..."
              type="search"
            />
            <button type="submit">Ara</button>
          </div>
        </form>
      </section>

      <section className="section-shell">
        {q.trim() && <p className="result-count">“{q}” için {results.length} sonuç</p>}
        {q.trim() && results.length === 0 && (
          <p className="empty-state light">Aramanızla eşleşen bir yazı bulunamadı.</p>
        )}
        <div className="search-page-results">
          {results.map((entry) => (
            <Link className="search-list-card" href={getSearchResultHref(entry)} key={`${entry.type}-${entry.slug}`}>
              <span>{entry.category}</span>
              <h2>{entry.title}</h2>
              <p>{entry.excerpt}</p>
              <small>{entry.type === "article" ? "Yazıyı Oku" : "Notu Oku"}</small>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
