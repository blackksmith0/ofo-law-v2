import Link from "next/link";
import AdminShell from "@/components/AdminShell";
import { deleteArticleAction } from "@/lib/admin-actions";
import { requireAdmin } from "@/lib/admin-auth";
import { createSupabaseAdminClient } from "@/lib/supabase/server";
import { formatDateTR } from "@/lib/utils";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{ filtre?: string }>;
};

export default async function AdminArticlesPage({ searchParams }: Props) {
  await requireAdmin();
  const { filtre } = await searchParams;
  const supabase = createSupabaseAdminClient();
  let query = supabase.from("articles").select("*").order("updated_at", { ascending: false });
  if (filtre === "published") query = query.eq("status", "published");
  if (filtre === "draft") query = query.eq("status", "draft");
  if (filtre === "article") query = query.eq("type", "article");
  if (filtre === "note") query = query.eq("type", "note");
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  const articles = data || [];

  return (
    <AdminShell>
      <div className="admin-page-head">
        <p>İçerikler</p>
        <h1>Yazılar</h1>
        <Link href="/admin8470/yazilar/yeni">Yeni Yazı</Link>
      </div>
      <div className="admin-filter-bar">
        <Link href="/admin8470/yazilar">Tümü</Link>
        <Link href="/admin8470/yazilar?filtre=published">Yayındakiler</Link>
        <Link href="/admin8470/yazilar?filtre=draft">Taslaklar</Link>
        <Link href="/admin8470/yazilar?filtre=article">Hukuk Yazıları</Link>
        <Link href="/admin8470/yazilar?filtre=note">Uygulamadan Notlar</Link>
      </div>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Başlık</th>
              <th>Tür</th>
              <th>Kategori</th>
              <th>Durum</th>
              <th>Yayın tarihi</th>
              <th>Güncelleme</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{article.type === "note" ? "Uygulamadan Not" : "Hukuk Yazısı"}</td>
                <td>{article.category_title || "-"}</td>
                <td><span className={`status-pill ${article.status}`}>{article.status === "published" ? "Yayında" : "Taslak"}</span></td>
                <td>{formatDateTR(article.published_at)}</td>
                <td>{formatDateTR(article.updated_at)}</td>
                <td className="admin-row-actions">
                  <Link href={`/admin8470/yazilar/${article.id}/duzenle`}>Düzenle</Link>
                  <form action={deleteArticleAction}>
                    <input name="id" type="hidden" value={article.id} />
                    <button type="submit">Sil</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
