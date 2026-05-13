"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { articles } from "@/lib/content";
import { getSearchResultHref, searchArticles } from "@/lib/search";

export default function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => searchArticles(query).slice(0, 5), [query]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    inputRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      router.push(`/arama?q=${encodeURIComponent(trimmedQuery)}`);
      setIsOpen(false);
    }
  }

  return (
    <div className="search-shell">
      <button
        aria-expanded={isOpen}
        aria-label="Site içinde arama yap"
        className="search-trigger"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M10.8 18.1a7.3 7.3 0 1 1 5.2-2.2l4.1 4.1-1.5 1.5-4.1-4.1a7.2 7.2 0 0 1-3.7.7Zm0-2.1a5.2 5.2 0 1 0 0-10.4 5.2 5.2 0 0 0 0 10.4Z" />
        </svg>
      </button>

      {isOpen && (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Arama">
          <button
            aria-label="Aramayı kapat"
            className="search-backdrop"
            onClick={() => setIsOpen(false)}
            type="button"
          />
          <div className="search-panel">
            <div className="search-panel-head">
              <span>ÖFÖ</span>
              <button aria-label="Aramayı kapat" onClick={() => setIsOpen(false)} type="button">
                Kapat
              </button>
            </div>
            <form onSubmit={submitSearch}>
              <label htmlFor="site-search">Hukuk yazıları ve uygulamadan notlarda ara</label>
              <input
                aria-label="Arama terimi"
                id="site-search"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Örn. işe iade, tahliye, ifade..."
                ref={inputRef}
                type="search"
                value={query}
              />
            </form>
            <div className="search-results">
              {query.trim() && results.length === 0 && (
                <p className="empty-state">Aramanızla eşleşen bir yazı bulunamadı.</p>
              )}
              {!query.trim() && (
                <div className="search-suggestions">
                  {articles.slice(0, 3).map((article) => (
                    <Link
                      href={`/hukuk-yazilari/${article.slug}`}
                      key={article.slug}
                      onClick={() => setIsOpen(false)}
                    >
                      {article.title}
                    </Link>
                  ))}
                </div>
              )}
              {results.map((entry) => (
                <Link
                  className="search-result"
                  href={getSearchResultHref(entry)}
                  key={`${entry.type}-${entry.slug}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{entry.category}</span>
                  <strong>{entry.title}</strong>
                  <small>{entry.excerpt}</small>
                  <em>{entry.type === "article" ? "Yazıyı Oku" : "Notu Oku"}</em>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
