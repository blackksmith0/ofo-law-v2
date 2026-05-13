import Link from "next/link";
import { articleCategories } from "@/lib/content";
import ArticleImage from "@/components/ArticleImage";
import {
  getRecentPublishedArticles,
  getRelatedPublishedArticles,
  type PublicContent,
} from "@/lib/public-content";

export default async function ArticleSidebar({ article }: { article?: PublicContent }) {
  const recentArticles = await getRecentPublishedArticles(4);
  const relatedArticles = article
    ? await getRelatedPublishedArticles(article, 3)
    : recentArticles.slice(0, 3);

  return (
    <aside className="article-sidebar">
      <form action="/arama" className="sidebar-search">
        <label htmlFor="sidebar-search">Yazılarda ara</label>
        <input id="sidebar-search" name="q" placeholder="Arama terimi" type="search" />
      </form>

      <section>
        <h2>Kategoriler</h2>
        <ul className="category-list">
          {articleCategories.map((category) => (
            <li key={category.slug}>
              <Link href={`/hukuk-yazilari?kategori=${category.slug}`}>{category.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Son Yazılar</h2>
        <div className="mini-list">
          {recentArticles.map((item) => (
            <Link href={`/hukuk-yazilari/${item.slug}`} key={item.slug}>
              <span>
                <ArticleImage alt={item.coverAlt} fill sizes="76px" src={item.coverImage} />
              </span>
              <strong>{item.title}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2>İlgili Yazılar</h2>
        <div className="related-list">
          {relatedArticles.map((item) => (
            <Link href={`/hukuk-yazilari/${item.slug}`} key={item.slug}>
              {item.title}
            </Link>
          ))}
        </div>
      </section>
    </aside>
  );
}
