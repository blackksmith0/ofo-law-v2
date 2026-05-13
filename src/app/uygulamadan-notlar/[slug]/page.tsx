import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { extractToc, renderMarkdown } from "@/lib/markdown";
import { getPublishedNoteBySlug, getPublishedNotes } from "@/lib/public-content";
import { articleJsonLd, breadcrumbJsonLd, createContentMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = await getPublishedNoteBySlug(slug);

  if (!note) return {};

  return createContentMetadata(note, `/uygulamadan-notlar/${note.slug}`);
}

export default async function NoteDetailPage({ params }: Props) {
  const { slug } = await params;
  const note = await getPublishedNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  const toc = extractToc(note.content);
  const recentNotes = (await getPublishedNotes()).filter((item) => item.slug !== note.slug).slice(0, 3);

  return (
    <main className="article-detail-page">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Uygulamadan Notlar", path: "/uygulamadan-notlar" },
            { name: note.title, path: `/uygulamadan-notlar/${note.slug}` },
          ]),
          articleJsonLd(note, `/uygulamadan-notlar/${note.slug}`),
        ]}
      />
      <section className="page-hero compact">
        <p className="eyebrow">Sahadan Mesleki Notlar</p>
        <h1>{note.title}</h1>
        <p>{note.excerpt}</p>
        <div className="article-meta">
          <span>Yayın: {note.date}</span>
          <span>{note.readingTime}</span>
        </div>
      </section>

      <section className="article-detail-layout section-shell">
        <article className="article-body article-content">
          <p className="lead">{note.excerpt}</p>

          {toc.length > 0 && (
            <nav className="toc-box" aria-label="Yazı içeriği">
              <h2>Yazı İçeriği</h2>
              <ol>
                {toc.map((item) => (
                  <li className={item.level === 3 ? "toc-subitem" : undefined} key={item.id}>
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {renderMarkdown(note.content)}

          <aside className="legal-note-box">
            Bu içerik genel bilgilendirme ve mesleki gözlem amacı taşır. Somut olayın
            özellikleri değerlendirilmeden hukuki danışmanlık yerine geçmez.
          </aside>
        </article>

        <aside className="article-sidebar">
          <section>
            <h2>Son Notlar</h2>
            <div className="related-list">
              {recentNotes.map((item) => (
                <a href={`/uygulamadan-notlar/${item.slug}`} key={item.slug}>
                  {item.title}
                </a>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
