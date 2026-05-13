"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { articleCategories } from "@/lib/content";
import SearchOverlay from "@/components/SearchOverlay";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/hukuk-yazilari", label: "Hukuk Yazıları" },
  { href: "/uygulamadan-notlar", label: "Uygulamadan Notlar" },
  { href: "/iletisim", label: "İletişim" },
];

const footerLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/hukuk-yazilari", label: "Hukuk Yazıları" },
  { href: "/uygulamadan-notlar", label: "Uygulamadan Notlar" },
  { href: "/hukuk-yazilari", label: "İlgilendiğim Hukuk Alanları" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/yasal-uyari", label: "Yasal Uyarı" },
  { href: "/kvkk-aydinlatma-metni", label: "KVKK Aydınlatma Metni" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
];

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link className="brand" href="/" aria-label="Ana sayfa">
            <span>ÖFÖ</span>
            <strong>
              Av. Ömer Faruk ÖZDEMİR
              <small>Hukuk Yazıları & Uygulamadan Notlar</small>
            </strong>
          </Link>

          <button
            aria-controls="main-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            className="menu-toggle"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={isMenuOpen ? "open" : ""} id="main-navigation" aria-label="Ana menü">
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  className={isActive ? "active" : undefined}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <SearchOverlay />
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="footer-grid">
          <section className="footer-brand">
            <div className="footer-logo">ÖFÖ</div>
            <h2>Av. Ömer Faruk ÖZDEMİR</h2>
            <p>
              Av. Ömer Faruk ÖZDEMİR | Hukuk Yazıları, Mesleki Değerlendirmeler ve
              Uygulamadan Notlar
            </p>
            <p className="legal-note">
              Bu sitede yer alan içerikler genel bilgilendirme amacı taşır; hukuki
              danışmanlık yerine geçmez.
            </p>
          </section>

          <section>
            <h3>Faydalı Bağlantılar</h3>
            <ul>
              {footerLinks.map((item) => (
                <li key={item.href + item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>İlgilendiğim Hukuk Alanları</h3>
            <ul>
              {articleCategories.map((category) => (
                <li key={category.slug}>
                  <Link href={`/hukuk-yazilari?kategori=${category.slug}`}>{category.title}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Mesleki İletişim</h3>
            <p>
              Hukuki değerlendirme talepleriniz ve mesleki iletişim için iletişim
              sayfasındaki kanallar üzerinden ulaşabilirsiniz. Gönderilen başvurular somut
              olayın içeriğine göre ayrıca değerlendirilir.
            </p>
            <Link className="footer-button" href="/iletisim">
              İletişim Sayfasına Git
            </Link>
          </section>
        </div>
        <div className="copyright">
          © {year} Av. Ömer Faruk ÖZDEMİR. Tüm hakları saklıdır.
        </div>
      </footer>

      <nav className="quick-access" aria-label="Hızlı erişim">
        <Link href="/arama">Ara</Link>
        <Link href="/iletisim">İletişim</Link>
        <Link href="/hukuk-yazilari">Yazılar</Link>
      </nav>
    </>
  );
}
