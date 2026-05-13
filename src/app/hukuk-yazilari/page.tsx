import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import ArticleSidebar from "@/components/ArticleSidebar";
import JsonLd from "@/components/JsonLd";
import { articleCategories, getCategoryBySlug } from "@/lib/content";
import { getPublishedArticles } from "@/lib/public-content";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{ kategori?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { kategori } = await searchParams;
  if (kategori === "uygulamadan-notlar") {
    return createPageMetadata({
      title: "Uygulamadan Notlar | Av. Ömer Faruk ÖZDEMİR",
      description: "Uygulamadan notlar ayrı bir içerik bölümüdür.",
      path: "/uygulamadan-notlar",
    });
  }
  const category = getCategoryBySlug(kategori);

  const descriptions: Record<string, string> = {
    "ceza-hukuku":
      "Ceza soruşturması, kovuşturma, ifade, delil değerlendirmesi ve ceza yargılamasına ilişkin genel bilgilendirme amaçlı hukuk yazıları.",
    "is-hukuku":
      "İş sözleşmesi, fesih, işe iade, işçilik alacakları ve arabuluculuk süreçlerine ilişkin genel bilgilendirme amaçlı hukuk yazıları.",
    "icra-ve-alacak-hukuku":
      "İcra takibi, alacak ilişkileri, itiraz süreçleri ve tahsilat yollarına ilişkin genel bilgilendirme amaçlı hukuk yazıları.",
    "kira-hukuku":
      "Kira sözleşmeleri, tahliye, kira tespiti ve uyarlama konularına ilişkin genel bilgilendirme amaçlı hukuk yazıları.",
    "tazminat-hukuku":
      "Maddi ve manevi tazminat talepleri, zarar, illiyet bağı ve ispat konularına ilişkin genel bilgilendirme amaçlı hukuk yazıları.",
    "miras-ve-tasinmaz-hukuku":
      "Miras, taşınmaz, tapu ve ortaklık ilişkilerine dair uyuşmazlıklara ilişkin genel bilgilendirme amaçlı hukuk yazıları.",
    "hukuki-degerlendirmeler":
      "Güncel hukuki meseleler ve yargılama pratiğine ilişkin genel bilgilendirme amaçlı hukuki değerlendirme yazıları.",
  };

  return createPageMetadata({
    title: category ? `${category.title} Yazıları | Av. Ömer Faruk ÖZDEMİR` : "Hukuk Yazıları | Av. Ömer Faruk ÖZDEMİR",
    description: category
      ? descriptions[category.slug] || `${category.title} alanına ilişkin hukuk yazıları ve mesleki değerlendirmeler.`
      : "Ceza hukuku, iş hukuku, icra ve alacak hukuku, kira hukuku, tazminat hukuku, miras ve taşınmaz hukuku alanlarında genel bilgilendirme amaçlı hukuk yazıları.",
    path: "/hukuk-yazilari",
  });
}

export default async function ArticlesPage({ searchParams }: Props) {
  const { kategori } = await searchParams;
  if (kategori === "uygulamadan-notlar") {
    redirect("/uygulamadan-notlar");
  }
  const activeCategory = getCategoryBySlug(kategori);
  const filteredArticles = await getPublishedArticles(activeCategory?.slug);

  return (
    <main className="inner-page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Hukuk Yazıları", path: "/hukuk-yazilari" },
        ])}
      />
      <section className="page-hero">
        <p className="eyebrow">Yazılar ve Değerlendirmeler</p>
        <h1>{activeCategory ? `${activeCategory.title} Yazıları` : "Hukuk Yazıları"}</h1>
        <p>
          Hukuk yazıları kategoriye göre filtrelenebilir; her içerik genel bilgilendirme
          amacıyla ve mesleki değerlendirme diliyle hazırlanmıştır.
        </p>
      </section>

      <section className="content-layout section-shell">
        <div>
          <div className="filter-bar" aria-label="Kategori filtreleri">
            <Link className={!activeCategory ? "active" : undefined} href="/hukuk-yazilari">
              Tümü
            </Link>
            {articleCategories.map((category) => (
              <Link
                className={activeCategory?.slug === category.slug ? "active" : undefined}
                href={`/hukuk-yazilari?kategori=${category.slug}`}
                key={category.slug}
              >
                {category.title}
              </Link>
            ))}
          </div>

          <div className="article-grid article-grid-list">
            {filteredArticles.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
        <ArticleSidebar />
      </section>
    </main>
  );
}
