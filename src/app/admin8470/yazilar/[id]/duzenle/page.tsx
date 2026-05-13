import { notFound } from "next/navigation";
import AdminArticleForm from "@/components/AdminArticleForm";
import AdminShell from "@/components/AdminShell";
import { requireAdmin } from "@/lib/admin-auth";
import { listMedia } from "@/lib/media-actions";
import { createSupabaseAdminClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditArticlePage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const supabase = createSupabaseAdminClient();
  const { data: article, error } = await supabase.from("articles").select("*").eq("id", id).maybeSingle();
  if (error) throw new Error(error.message);
  if (!article) notFound();
  const media = await listMedia();

  return (
    <AdminShell>
      <div className="admin-page-head">
        <p>Düzenle</p>
        <h1>{article.title}</h1>
      </div>
      <AdminArticleForm article={article} media={media} />
    </AdminShell>
  );
}
