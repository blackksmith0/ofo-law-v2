import Link from "next/link";
import ArticleImage from "@/components/ArticleImage";
import type { PublicContent } from "@/lib/public-content";

export default function ArticleCard({ article }: { article: PublicContent }) {
  return (
    <Link className="article-card" href={`/hukuk-yazilari/${article.slug}`}>
      <span className="article-card-media">
        <ArticleImage
          alt={article.coverAlt}
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 33vw"
          src={article.coverImage}
        />
        <span className="date-badge">{article.date}</span>
      </span>
      <span className="article-card-body">
        <span className="article-category">{article.categoryTitle}</span>
        <strong>{article.title}</strong>
        <span>{article.excerpt}</span>
        <small>
          Yayın: {article.date} · Güncelleme: {article.updatedAt} · {article.readingTime}
        </small>
      </span>
    </Link>
  );
}
