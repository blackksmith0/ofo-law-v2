import AdminShell from "@/components/AdminShell";
import { requireAdmin } from "@/lib/admin-auth";
import { createSupabaseAdminClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  await requireAdmin();
  const supabase = createSupabaseAdminClient();
  const [all, published, drafts, notes] = await Promise.all([
    supabase.from("articles").select("id", { count: "exact", head: true }),
    supabase.from("articles").select("id", { count: "exact", head: true }).eq("status", "published"),
    supabase.from("articles").select("id", { count: "exact", head: true }).eq("status", "draft"),
    supabase.from("articles").select("id", { count: "exact", head: true }).eq("type", "note"),
  ]);

  return (
    <AdminShell>
      <div className="admin-page-head">
        <p>Panel</p>
        <h1>Yönetim Paneli</h1>
      </div>
      <div className="admin-stat-grid">
        <article><span>Toplam</span><strong>{all.count ?? 0}</strong></article>
        <article><span>Yayında</span><strong>{published.count ?? 0}</strong></article>
        <article><span>Taslak</span><strong>{drafts.count ?? 0}</strong></article>
        <article><span>Notlar</span><strong>{notes.count ?? 0}</strong></article>
      </div>
    </AdminShell>
  );
}
