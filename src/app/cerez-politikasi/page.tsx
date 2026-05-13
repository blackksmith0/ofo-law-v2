import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Çerez Politikası | Av. Ömer Faruk ÖZDEMİR",
  description: "Sitede çerez kullanımına ilişkin bilgilendirme metni.",
  path: "/cerez-politikasi",
});

export default function CookiePolicyPage() {
  return (
    <main className="inner-page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Çerez Politikası", path: "/cerez-politikasi" },
        ])}
      />
      <section className="page-hero compact">
        <p className="eyebrow">Dijital Kullanım Bilgisi</p>
        <h1>Çerez Politikası</h1>
        <p>Çerez kullanımına ilişkin açıklamalar bu sayfada ayrıca düzenlenebilir.</p>
      </section>
    </main>
  );
}
