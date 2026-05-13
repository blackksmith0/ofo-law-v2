import AdminArticleForm from "@/components/AdminArticleForm";
import AdminShell from "@/components/AdminShell";
import { requireAdmin } from "@/lib/admin-auth";
import { listMedia } from "@/lib/media-actions";

export const dynamic = "force-dynamic";

export default async function NewArticlePage() {
  await requireAdmin();
  const media = await listMedia();
  return (
    <AdminShell>
      <div className="admin-page-head">
        <p>Yeni İçerik</p>
        <h1>Yeni Yazı</h1>
      </div>
      <AdminArticleForm media={media} />
    </AdminShell>
  );
}
