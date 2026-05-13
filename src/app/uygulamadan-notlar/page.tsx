import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getPublishedNotes } from "@/lib/public-content";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createPageMetadata({
  title: "Uygulamadan Notlar | Av. Ömer Faruk ÖZDEMİR",
  description:
    "Duruşma hazırlığı, dilekçe dili, delil değerlendirmesi, bilirkişi raporları ve hukuki süreçlere ilişkin uygulamadan mesleki notlar.",
  path: "/uygulamadan-notlar",
});

export default async function PracticeNotesPage() {
  const notes = await getPublishedNotes();

  return (
    <main className="inner-page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Uygulamadan Notlar", path: "/uygulamadan-notlar" },
        ])}
      />
      <section className="page-hero compact">
        <p className="eyebrow">Sahadan Mesleki Notlar</p>
        <h1>Uygulamadan Notlar</h1>
        <p>
          Duruşma hazırlığı, dilekçe dili, bilirkişi raporları, delil değerlendirmesi,
          icra takipleri ve dava stratejisi gibi uygulamada önem taşıyan konulara
          ilişkin kısa ve orta uzunlukta mesleki notlar.
        </p>
      </section>

      <section className="section-shell notes-layout">
        <aside className="notice-card">
          <h2>Bilgi Notu</h2>
          <p>
            Bu bölümde yer alan notlar genel mesleki gözlem ve bilgilendirme amacı taşır.
            Somut dosya bilgisi, müvekkil sırrı veya gizlilik kapsamında
            değerlendirilebilecek ayrıntılara yer verilmez.
          </p>
        </aside>

        <div className="notes-grid">
          {notes.map((note) => (
            <article className="note-card" id={note.slug} key={note.slug}>
              <span>{note.categoryTitle}</span>
              <h2>{note.title}</h2>
              <p>{note.excerpt}</p>
              <div>
                <small>{note.readingTime}</small>
                <Link href={`/uygulamadan-notlar/${note.slug}`}>Notu Oku →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
