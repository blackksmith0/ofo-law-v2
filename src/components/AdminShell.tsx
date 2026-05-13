import Link from "next/link";
import { adminLogoutAction } from "@/lib/admin-actions";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <Link className="admin-brand" href="/admin8470">
          <span>ÖFÖ</span>
          <strong>Yönetim</strong>
        </Link>
        <nav>
          <Link href="/admin8470">Panel</Link>
          <Link href="/admin8470/yazilar">Yazılar</Link>
          <Link href="/admin8470/yazilar/yeni">Yeni Yazı</Link>
          <Link href="/admin8470/medya">Medya</Link>
        </nav>
        <form action={adminLogoutAction}>
          <button type="submit">Çıkış Yap</button>
        </form>
      </aside>
      <section className="admin-content">{children}</section>
    </main>
  );
}
