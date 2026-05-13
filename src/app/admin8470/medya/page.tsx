import AdminShell from "@/components/AdminShell";
import CopyButton from "@/components/CopyButton";
import { requireAdmin } from "@/lib/admin-auth";
import { deleteMediaAction, listMedia, uploadMediaAction } from "@/lib/media-actions";

export const dynamic = "force-dynamic";

export default async function AdminMediaPage() {
  await requireAdmin();
  const media = await listMedia();

  return (
    <AdminShell>
      <div className="admin-page-head">
        <p>Supabase Storage</p>
        <h1>Medya</h1>
      </div>
      <form className="admin-upload-card" action={uploadMediaAction}>
        <label>
          Görsel yükle
          <input name="file" type="file" accept="image/jpeg,image/png,image/webp" required />
        </label>
        <button type="submit">Yükle</button>
      </form>
      <div className="media-grid">
        {media.map((item) => (
          <article className="media-card" key={item.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.url} alt={item.name} />
            <strong>{item.name}</strong>
            <input readOnly value={item.url} />
            <div>
              <CopyButton value={item.url} />
              <a href={item.url} target="_blank" rel="noreferrer">Aç</a>
              <form action={deleteMediaAction}>
                <input name="path" type="hidden" value={item.name} />
                <button type="submit">Sil</button>
              </form>
            </div>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}
