import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "KVKK Aydınlatma Metni | Av. Ömer Faruk ÖZDEMİR",
  description: "Kişisel verilerin işlenmesine ilişkin KVKK aydınlatma metni.",
  path: "/kvkk-aydinlatma-metni",
});

export default function KvkkPage() {
  return (
    <main className="inner-page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "KVKK Aydınlatma Metni", path: "/kvkk-aydinlatma-metni" },
        ])}
      />
      <section className="page-hero compact">
        <p className="eyebrow">Kişisel Veri Bilgilendirmesi</p>
        <h1>KVKK Aydınlatma Metni</h1>
        <p>
          Kişisel verilerin işlenmesine ilişkin aydınlatma metni bu sayfada ayrıca
          düzenlenebilir.
        </p>
      </section>
    </main>
  );
}
