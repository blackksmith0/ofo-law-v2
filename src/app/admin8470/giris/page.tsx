import { redirect } from "next/navigation";
import { loginAdmin } from "@/lib/admin-auth";

type Props = {
  searchParams: Promise<{ hata?: string }>;
};

export default async function AdminLoginPage({ searchParams }: Props) {
  const { hata } = await searchParams;

  async function loginAction(formData: FormData) {
    "use server";
    const username = String(formData.get("username") || "");
    const password = String(formData.get("password") || "");
    const result = await loginAdmin(username, password);
    if (result.ok) redirect("/admin8470");
    redirect("/admin8470/giris?hata=1");
  }

  return (
    <main className="admin-login-page">
      <form className="admin-login-card" action={loginAction}>
        <span>ÖFÖ</span>
        <h1>Yönetim Girişi</h1>
        <p>İçerik yönetimi alanına erişmek için giriş yapın.</p>
        {hata && <strong>Giriş bilgileri doğrulanamadı.</strong>}
        <label>
          Kullanıcı adı
          <input name="username" autoComplete="username" required />
        </label>
        <label>
          Şifre
          <input name="password" type="password" autoComplete="current-password" required />
        </label>
        <button type="submit">Giriş Yap</button>
      </form>
    </main>
  );
}
