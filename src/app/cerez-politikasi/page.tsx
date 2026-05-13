import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Çerez Politikası | Av. Ömer Faruk ÖZDEMİR",
  description: "Sitede çerez kullanımına ilişkin bilgilendirme metni.",
  path: "/cerez-politikasi",
});

export default function CookiePolicyPage() {
  return (
    <main className="inner-page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Çerez Politikası", path: "/cerez-politikasi" },
        ])}
      />
      <section className="page-hero compact">
        <p className="eyebrow">Dijital Kullanım Bilgisi</p>
        <h1>Çerez Politikası</h1>
        <p>
          Bu Çerez Politikası, omerfarukozdemir.av.tr internet sitesinde kullanılan
          çerezler ve benzeri teknolojiler hakkında kullanıcıları bilgilendirmek amacıyla
          hazırlanmıştır.
        </p>
      </section>

      <section className="section-shell legal-content">
        <article className="info-card">
          <span aria-hidden="true" />
          <h2>1. Çerez Nedir?</h2>
          <p>
            Çerezler, bir internet sitesini ziyaret ettiğinizde tarayıcınız veya cihazınız
            üzerinde saklanabilen küçük metin dosyalarıdır. Çerezler, internet sitesinin
            çalışmasını sağlamak, kullanıcı deneyimini iyileştirmek, güvenliği sağlamak ve
            bazı teknik tercihleri hatırlamak amacıyla kullanılabilir.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>2. Bu Sitede Kullanılan Çerezler</h2>
          <p>
            omerfarukozdemir.av.tr internet sitesinde, temel olarak sitenin güvenli ve
            düzgün çalışması için gerekli teknik çerezler kullanılabilir.
          </p>
          <p>Kullanılabilecek çerez türleri şunlardır:</p>
          <p>
            <strong>Zorunlu Çerezler:</strong><br />
            Sitenin temel işlevlerinin çalışması için gerekli olan çerezlerdir. Güvenlik,
            oturum yönetimi ve form işlemleri gibi amaçlarla kullanılabilir. Bu çerezler
            olmadan sitenin bazı bölümleri düzgün çalışmayabilir.
          </p>
          <p>
            <strong>Performans ve Analitik Çerezleri:</strong><br />
            İleride site trafiğini ve kullanıcı davranışlarını genel düzeyde analiz etmek
            amacıyla analitik araçlar kullanılması halinde bu tür çerezler gündeme gelebilir.
            Bu durumda çerez politikası ayrıca güncellenecektir.
          </p>
          <p>
            <strong>Üçüncü Taraf Çerezleri:</strong><br />
            Sitede harita, video, sosyal medya bağlantıları veya benzeri üçüncü taraf
            hizmetlerin kullanılması halinde, ilgili üçüncü taraflar kendi çerezlerini
            kullanabilir. Bu çerezler üzerinde doğrudan kontrolümüz bulunmayabilir.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>3. Çerezlerin Kullanım Amaçları</h2>
          <p>Çerezler aşağıdaki amaçlarla kullanılabilir:</p>
          <ul>
            <li>İnternet sitesinin güvenli ve doğru şekilde çalışmasını sağlamak</li>
            <li>Sayfa performansını ve kullanıcı deneyimini iyileştirmek</li>
            <li>Admin oturumu gibi teknik işlemleri yürütmek</li>
            <li>Form ve güvenlik işlemlerinin sağlıklı çalışmasını desteklemek</li>
            <li>İleride analitik araçlar kullanılması halinde site kullanımını genel düzeyde analiz etmek</li>
          </ul>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>4. Çerezlerin Hukuki Sebebi</h2>
          <p>
            Zorunlu çerezler, internet sitesinin çalışması ve güvenliğinin sağlanması
            bakımından gerekli olması nedeniyle kullanılmaktadır.
          </p>
          <p>
            Açık rıza gerektiren analitik, pazarlama veya takip amaçlı çerezler kullanılması
            halinde, ilgili çerezler ancak kullanıcı tercihleri doğrultusunda devreye
            alınacaktır.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>5. Çerezleri Nasıl Yönetebilirsiniz?</h2>
          <p>
            Tarayıcı ayarlarınız üzerinden çerezleri silebilir, engelleyebilir veya çerez
            kullanımına ilişkin tercihlerinizi değiştirebilirsiniz. Ancak zorunlu çerezlerin
            devre dışı bırakılması halinde internet sitesinin bazı bölümleri düzgün
            çalışmayabilir.
          </p>
          <p>
            Çerez ayarları, kullanılan tarayıcıya göre farklılık gösterebilir. Chrome,
            Safari, Firefox, Edge ve diğer tarayıcıların ayarlar bölümünden çerez
            tercihlerinizi yönetebilirsiniz.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>6. Üçüncü Taraf Hizmetler</h2>
          <p>
            Bu internet sitesi, barındırma, güvenlik, e-posta veya harita gibi hizmetler
            kapsamında üçüncü taraf teknik altyapılardan yararlanabilir. Bu hizmet
            sağlayıcılar, kendi hizmetlerinin sunulması için sınırlı teknik veriler işleyebilir.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>7. Politikanın Güncellenmesi</h2>
          <p>
            Bu Çerez Politikası, internet sitesinde kullanılan teknolojiler veya mevzuat
            değişiklikleri doğrultusunda güncellenebilir. Güncel metin her zaman bu sayfada
            yayımlanır.
          </p>
          <p className="legal-update">Son güncelleme tarihi: 2026</p>
        </article>
      </section>
    </main>
  );
}
