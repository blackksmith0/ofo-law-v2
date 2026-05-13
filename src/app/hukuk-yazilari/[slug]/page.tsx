import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleImage from "@/components/ArticleImage";
import ArticleSidebar from "@/components/ArticleSidebar";
import JsonLd from "@/components/JsonLd";
import { extractToc, renderMarkdown } from "@/lib/markdown";
import { getPublishedArticleBySlug } from "@/lib/public-content";
import { articleJsonLd, breadcrumbJsonLd, createContentMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return createContentMetadata(article, `/hukuk-yazilari/${article.slug}`);
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const toc = extractToc(article.content);
  const heroImage = article.heroImage || article.coverImage;

  return (
    <main className="article-detail-page">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Hukuk Yazıları", path: "/hukuk-yazilari" },
            { name: article.title, path: `/hukuk-yazilari/${article.slug}` },
          ]),
          articleJsonLd(article, `/hukuk-yazilari/${article.slug}`),
        ]}
      />
      <section className="article-hero">
        <ArticleImage alt={article.coverAlt} fill priority sizes="100vw" src={heroImage} />
        <div className="article-hero-overlay" />
        <div className="article-hero-content">
          <span className="article-category">{article.categoryTitle}</span>
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span>Yazar: Av. Ömer Faruk ÖZDEMİR</span>
            <span>Yayın: {article.date}</span>
            <span>Son güncelleme: {article.updatedAt}</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </section>

      <section className="article-detail-layout section-shell">
        <article className="article-body article-content">
          <p className="lead">{article.excerpt}</p>

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

          {renderMarkdown(article.content)}
        </article>

        <ArticleSidebar article={article} />
      </section>
    </main>
  );
}
