import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "KVKK Aydınlatma Metni | Av. Ömer Faruk ÖZDEMİR",
  description: "Kişisel verilerin işlenmesine ilişkin KVKK aydınlatma metni.",
  path: "/kvkk-aydinlatma-metni",
});

export default function KvkkPage() {
  return (
    <main className="inner-page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "KVKK Aydınlatma Metni", path: "/kvkk-aydinlatma-metni" },
        ])}
      />
      <section className="page-hero compact">
        <p className="eyebrow">Kişisel Veri Bilgilendirmesi</p>
        <h1>KVKK Aydınlatma Metni</h1>
        <p>
          Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında,
          omerfarukozdemir.av.tr internet sitesi üzerinden gerçekleştirilen kişisel veri
          işleme faaliyetleri hakkında ilgili kişileri bilgilendirmek amacıyla hazırlanmıştır.
        </p>
      </section>

      <section className="section-shell legal-content">
        <article className="info-card">
          <span aria-hidden="true" />
          <h2>1. Veri Sorumlusu</h2>
          <p>
            Kişisel verileriniz, veri sorumlusu sıfatıyla Av. Ömer Faruk ÖZDEMİR tarafından
            aşağıda açıklanan amaçlar kapsamında işlenebilecektir.
          </p>
          <p>
            İletişim:<br />
            E-posta: av.omerfarukozdmr@gmail.com<br />
            Telefon: +90 553 506 05 68<br />
            Adres: Mustafa Kemal, 2127. Cd No:11/A, 06510 Çankaya/Ankara
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>2. İşlenen Kişisel Veriler</h2>
          <p>İnternet sitesi üzerinde yer alan iletişim formunu kullanmanız halinde aşağıdaki kişisel verileriniz işlenebilir:</p>
          <ul>
            <li>Ad ve soyad</li>
            <li>E-posta adresi</li>
            <li>Telefon numarası</li>
            <li>Mesaj konusu</li>
            <li>Mesaj içeriği</li>
            <li>Form gönderim tarihi ve teknik işlem kayıtları</li>
          </ul>
          <p>
            Bunun dışında internet sitesinin güvenli şekilde işletilmesi amacıyla IP adresi,
            tarayıcı bilgisi, erişim zamanı ve benzeri sınırlı teknik veriler de işlenebilir.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
          <p>Kişisel verileriniz aşağıdaki amaçlarla işlenebilir:</p>
          <ul>
            <li>İletişim taleplerinizin alınması ve değerlendirilmesi</li>
            <li>Başvurularınıza geri dönüş yapılması</li>
            <li>Hukuki değerlendirme taleplerinin ön incelemeye tabi tutulması</li>
            <li>İnternet sitesinin güvenliğinin ve işlevselliğinin sağlanması</li>
            <li>Mevzuattan doğan yükümlülüklerin yerine getirilmesi</li>
            <li>İleride doğabilecek uyuşmazlıklarda delil teşkil edebilecek kayıtların saklanması</li>
          </ul>
          <p>
            Bu form aracılığıyla gönderilen bilgiler, tek başına avukat-müvekkil ilişkisi
            kurulduğu anlamına gelmez. Avukat-müvekkil ilişkisi ancak ayrıca yapılacak açık
            kabul ve görevlendirme ile kurulur.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
          <p>
            Kişisel verileriniz, internet sitesinde yer alan iletişim formu, e-posta, telefon
            veya diğer iletişim kanalları aracılığıyla elektronik ortamda toplanmaktadır.
          </p>
          <p>Kişisel verileriniz, KVKK’nın 5. maddesinde yer alan aşağıdaki hukuki sebeplere dayanılarak işlenebilir:</p>
          <ul>
            <li>İlgili kişinin açık rızası</li>
            <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</li>
            <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi</li>
            <li>Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması</li>
            <li>İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaati</li>
          </ul>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>5. Kişisel Verilerin Aktarılması</h2>
          <p>Kişisel verileriniz, kural olarak üçüncü kişilerle paylaşılmaz. Ancak aşağıdaki durumlarda sınırlı şekilde aktarım yapılabilir:</p>
          <ul>
            <li>Kanunen yetkili kamu kurum ve kuruluşlarına bilgi verilmesinin zorunlu olması</li>
            <li>Yargı mercileri veya yetkili idari makamlar tarafından talep edilmesi</li>
            <li>Teknik altyapı, barındırma, e-posta ve güvenlik hizmetleri kapsamında hizmet sağlayıcılarla sınırlı ölçüde paylaşım yapılması</li>
            <li>Hukuki yükümlülüklerin yerine getirilmesi veya bir hakkın korunması için aktarımın gerekli olması</li>
          </ul>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>6. Kişisel Verilerin Saklanma Süresi</h2>
          <p>
            Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta
            öngörülen saklama süreleri dikkate alınarak muhafaza edilir. Saklama süresinin sona
            ermesi veya işleme amacının ortadan kalkması halinde kişisel veriler silinir, yok
            edilir veya anonim hale getirilir.
          </p>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>7. İlgili Kişinin Hakları</h2>
          <p>KVKK’nın 11. maddesi kapsamında, kişisel verilerinize ilişkin olarak aşağıdaki haklara sahipsiniz:</p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme</li>
            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
            <li>Mevzuatta öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
            <li>Düzeltme, silme veya yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
            <li>Otomatik sistemler aracılığıyla analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            <li>Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
          </ul>
        </article>

        <article className="info-card">
          <span aria-hidden="true" />
          <h2>8. Başvuru Yöntemi</h2>
          <p>
            KVKK kapsamındaki taleplerinizi, kimliğinizi doğrulamaya elverişli bilgilerle
            birlikte aşağıdaki iletişim kanalı üzerinden iletebilirsiniz:
          </p>
          <p>E-posta: av.omerfarukozdmr@gmail.com</p>
          <p>Başvurularınız, talebin niteliğine göre en kısa sürede ve mevzuatta öngörülen süreler içinde değerlendirilecektir.</p>
          <p className="legal-update">Son güncelleme tarihi: 2026</p>
        </article>
      </section>
    </main>
  );
}
