import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { aboutSections } from "@/lib/content";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Av. Ömer Faruk Özdemir Hakkında | Ankara Avukat",
  description:
    "Av. Ömer Faruk Özdemir’in eğitim geçmişi, mesleki yaklaşımı ve hukuk alanındaki kişisel yayın platformu hakkında bilgi alın.",
  path: "/hakkimda",
});

export default function AboutPage() {
  return (
    <main className="inner-page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımda", path: "/hakkimda" },
        ])}
      />
      <section className="page-hero compact">
        <p className="eyebrow">Kişisel Profil</p>
        <h1>Av. Ömer Faruk Özdemir</h1>
        <p>
          Av. Ömer Faruk Özdemir, hukuki meselelerin yalnızca mevzuat hükümleriyle
          değil; olayın bütünlüğü, delillerin niteliği, yargılama pratiği ve doğru
          stratejiyle birlikte değerlendirilmesi gerektiğini benimseyen bir hukukçudur.
        </p>
      </section>

      <section className="section-shell about-page-grid">
        {aboutSections.map((section) => (
          <article className="info-card" key={section.title}>
            <span aria-hidden="true" />
            <h2>{section.title}</h2>
            <div className="about-paragraphs">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
