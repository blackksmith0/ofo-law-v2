import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Yasal Uyarı | Av. Ömer Faruk ÖZDEMİR",
  description: "Sitede yer alan hukuk yazıları ve bilgilendirme içeriklerine ilişkin yasal uyarı.",
  path: "/yasal-uyari",
});

export default function LegalNoticePage() {
  return (
    <main className="inner-page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Yasal Uyarı", path: "/yasal-uyari" },
        ])}
      />
      <section className="page-hero compact">
        <p className="eyebrow">Bilgilendirme Sınırı</p>
        <h1>Yasal Uyarı</h1>
        <p>
          omerfarukozdemir.av.tr internet sitesinde yer alan tüm içerikler genel
          bilgilendirme ve hukuki değerlendirme amacıyla hazırlanmıştır.
        </p>
      </section>

      <section className="section-shell legal-content">
        <article className="info-card">
          <span aria-hidden="true" />
          <h2>1. Genel Bilgilendirme Niteliği</h2>
          <p>
            Bu internet sitesinde yayımlanan içerikler, hukuk alanındaki genel konulara
            ilişkin bilgi vermek ve okuyuculara hukuki meselelerin değerlendirilmesine
            ilişkin genel bir bakış açısı sunmak amacıyla hazırlanmıştır.
          </p>
          <p>
            Her hukuki uyuşmazlık; olayın özellikleri, tarafların durumu, deliller,
            süreler, usul kuralları ve güncel mevzuat dikkate alınarak ayrıca
            değerlendirilmelidir. Bu nedenle sitede yer alan bilgiler, tek başına somut
            bir olay bakımından hukuki görüş veya tavsiye niteliği taşımaz.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>2. Avukat-Müvekkil İlişkisi Kurulmaz</h2>
          <p>
            Bu internet sitesinin ziyaret edilmesi, sitede yer alan iletişim formunun
            doldurulması, e-posta gönderilmesi veya herhangi bir içerikten yararlanılması
            tek başına avukat-müvekkil ilişkisi kurmaz.
          </p>
          <p>
            Avukat-müvekkil ilişkisi, ancak somut olayın ayrıca değerlendirilmesi, taraflar
            arasında açık bir kabulün oluşması ve gerekli görevlendirmenin yapılması halinde
            kurulabilir.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>3. İçeriklerin Güncelliği</h2>
          <p>
            Sitede yer alan içeriklerin güncel, doğru ve anlaşılır olması için özen
            gösterilmektedir. Ancak mevzuat değişiklikleri, yargı kararları, uygulama
            farklılıkları veya somut olayın özellikleri nedeniyle içerikler zaman içinde
            güncelliğini yitirebilir.
          </p>
          <p>
            Bu nedenle sitedeki bilgiler esas alınarak işlem yapılmadan önce somut olay
            özelinde hukuki destek alınması önerilir.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>4. Sorumluluk Sınırı</h2>
          <p>
            Bu internet sitesinde yer alan içeriklere dayanılarak yapılan işlemlerden,
            alınan kararlardan veya doğabilecek sonuçlardan dolayı site sahibi herhangi
            bir hukuki sorumluluk kabul etmez.
          </p>
          <p>
            Sitedeki bilgiler, herhangi bir uyuşmazlıkta kesin sonuç, başarı garantisi
            veya belirli bir hukuki sonucun taahhüdü anlamına gelmez.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>5. Üçüncü Taraf Bağlantılar</h2>
          <p>
            Bu sitede zaman zaman üçüncü taraf internet sitelerine yönlendiren bağlantılar
            bulunabilir. Bu bağlantılar yalnızca bilgilendirme amacıyla paylaşılabilir.
            Bağlantı verilen üçüncü taraf sitelerin içeriklerinden, güncelliğinden,
            güvenliğinden veya veri işleme faaliyetlerinden site sahibi sorumlu değildir.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>6. Fikri Haklar</h2>
          <p>
            Bu internet sitesinde yer alan yazılar, tasarımlar, görseller, metinler ve diğer
            içerikler, aksi açıkça belirtilmedikçe Av. Ömer Faruk ÖZDEMİR’e aittir.
            İçerikler, kaynak gösterilmeden veya yazılı izin alınmadan ticari amaçla
            çoğaltılamaz, yayımlanamaz veya kullanılamaz.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>7. Meslek Kurallarına Uygunluk</h2>
          <p>
            Bu internet sitesi, Av. Ömer Faruk ÖZDEMİR’in hukuk alanındaki yazılarını,
            mesleki değerlendirmelerini ve uygulamadan notlarını paylaşmak amacıyla
            hazırlanmıştır. Sitede yer alan hiçbir ifade; reklam, haksız rekabet, sonuç
            garantisi veya müvekkil teminine yönelik taahhüt olarak yorumlanmamalıdır.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>8. İletişim</h2>
          <p>
            Bu yasal uyarı veya internet sitesindeki içeriklerle ilgili talepleriniz için
            aşağıdaki iletişim kanalı üzerinden başvurabilirsiniz:
          </p>
          <p>E-posta: av.omerfarukozdmr@gmail.com</p>
          <p className="legal-update">Son güncelleme tarihi: 2026</p>
        </article>
      </section>
    </main>
  );
}
