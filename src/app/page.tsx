import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { categories } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Av. Ömer Faruk ÖZDEMİR | Ankara Avukat ve Hukuk Yazıları",
  description:
    "Av. Ömer Faruk ÖZDEMİR’in hukuk yazıları, mesleki değerlendirmeleri ve uygulamadan notlarını içeren kişisel hukuk platformu.",
  path: "/",
});

const homeArticles = [
  {
    category: "Sözleşmeler Hukuku",
    title: "Sözleşmelerde Belirsizlik ve Yorum İlkeleri",
    excerpt:
      "Sözleşme hükümlerinin yorumu, taraf iradelerini etkili kılar. Belirsizlik hâlinde hangi ölçütler dikkate alınmalıdır?",
    meta: "20 Mayıs 2024 · 6 dk okuma",
    href: "/hukuk-yazilari",
  },
  {
    category: "Ticaret Hukuku",
    title: "Anonim Şirketlerde Azlığın Bilgi Alma Hakkı",
    excerpt:
      "Azlık pay sahiplerinin şirketten bilgi talep etme hakkı nasıl kullanılır? Uygulamada öne çıkan hususlar.",
    meta: "12 Mayıs 2024 · 7 dk okuma",
    href: "/hukuk-yazilari",
  },
  {
    category: "İş Hukuku",
    title: "Fesih Bildiriminde Usul ve İspat Sorunları",
    excerpt:
      "İş sözleşmesinin feshi sürecinde usule uygunluk ve ispat yükü bakımından dikkat edilmesi gereken noktalar.",
    meta: "5 Mayıs 2024 · 5 dk okuma",
    href: "/hukuk-yazilari?kategori=is-hukuku",
  },
];

const approachItems = [
  {
    title: "Ölçülü Dil",
    text: "Yazılar, hukuki konuları sadeleştirirken reklam veya kesin sonuç vaadi üreten ifadelerden uzak durur.",
  },
  {
    title: "Uygulamaya Yakınlık",
    text: "Başlıklar, yalnızca teorik açıklama değil; süre, belge düzeni ve usul gibi pratik noktaları da dikkate alır.",
  },
  {
    title: "Kişisel Yayın Alanı",
    text: "Site, mesleki değerlendirme ve hukuk yazıları için sakin, ciddi ve güven veren bir okuma zemini sunar.",
  },
];

export default function Home() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Av. Ömer Faruk ÖZDEMİR | Ankara Avukat ve Hukuk Yazıları",
          description:
            "Av. Ömer Faruk ÖZDEMİR’in hukuk yazıları, mesleki değerlendirmeleri ve uygulamadan notlarını içeren kişisel hukuk platformu.",
          url: "https://omerfarukozdemir.av.tr/",
        }}
      />
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-content">
            <p className="hero-eyebrow">Hukuka dair. Açık. Dikkatli. İlkeli.</p>
            <h1 className="hero-title">
              Hukuki Meselelerde
              <br />
              Açık Anlatım,
              <br />
              Dikkatli Değerlendirme
            </h1>
            <p className="hero-description">
              Hukuk yazıları, güncel gelişmeler ve uygulamadan notlarla daha iyi
              değerlendirme yapmak isteyenler için.
            </p>
            <Link className="hero-button" href="/hukuk-yazilari">
              Yazıları İncele
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell home-current">
        <div className="section-head">
          <div>
            <p className="eyebrow">Güncel Yazılar</p>
          </div>
          <Link href="/hukuk-yazilari">Tüm Yazılar →</Link>
        </div>
        <div className="home-article-grid">
          {homeArticles.map((article) => (
            <Link className="article-card-home" href={article.href} key={article.title}>
              <span>{article.category}</span>
              <strong>{article.title}</strong>
              <p>{article.excerpt}</p>
              <small>{article.meta}</small>
              <em aria-hidden="true">→</em>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-strip">
        <div>
          <p className="eyebrow">Bu Site Hakkında</p>
          <h2>Hukuki konulara sakin, açık ve dikkatli bir okuma alanı.</h2>
        </div>
        <p>
          Bu platform, Av. Ömer Faruk ÖZDEMİR’in hukuk yazıları, mesleki
          değerlendirmeleri ve uygulamadan notlarını bir araya getirir. İçerikler genel
          bilgilendirme amacı taşır; somut olayın koşulları ayrıca değerlendirilmelidir.
          Mesleki iletişim ve genel başvurular için Ankara/Çankaya’daki ofis iletişim
          kanalları kullanılabilir.
        </p>
      </section>

      <section className="section-shell approach-section">
        <div className="approach-grid">
          {approachItems.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell category-band">
        <div className="section-head">
          <div>
            <p className="eyebrow">Alanlar</p>
            <h2>İlgilendiğim Hukuk Alanları</h2>
          </div>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link href={`/hukuk-yazilari?kategori=${category.slug}`} key={category.slug}>
              <strong>{category.title}</strong>
              <span>{category.description}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
