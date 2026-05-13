import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Yasal Uyarı | Av. Ömer Faruk ÖZDEMİR",
  description: "Sitede yer alan hukuk yazıları ve bilgilendirme içeriklerine ilişkin yasal uyarı.",
  path: "/yasal-uyari",
});

export default function LegalNoticePage() {
  return (
    <main className="inner-page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Yasal Uyarı", path: "/yasal-uyari" },
        ])}
      />
      <section className="page-hero compact">
        <p className="eyebrow">Bilgilendirme Sınırı</p>
        <h1>Yasal Uyarı</h1>
        <p>
          Bu sitede yer alan içerikler genel bilgilendirme amacı taşır; hukuki
          danışmanlık yerine geçmez. Her somut olay kendi koşulları içinde ayrıca
          değerlendirilmelidir.
        </p>
      </section>
    </main>
  );
}
