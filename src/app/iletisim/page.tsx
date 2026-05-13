import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/content";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "İletişim | Av. Ömer Faruk ÖZDEMİR",
  description:
    "Av. Ömer Faruk ÖZDEMİR ile mesleki iletişim ve genel başvuru kanalları. Ankara Çankaya ofis iletişim bilgileri, adres ve harita bilgisi.",
  path: "/iletisim",
});

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <main className="inner-page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim", path: "/iletisim" },
        ])}
      />
      <section className="page-hero compact">
        <p className="eyebrow">Mesleki İletişim</p>
        <h1>İletişim</h1>
        <p>
          Hukuki değerlendirme talepleriniz, mesleki iletişim ve genel başvurularınız
          için Ankara/Çankaya’daki ofis iletişim kanalları üzerinden ulaşabilirsiniz.
          Gönderilen başvurular, somut olayın içeriğine göre ayrıca değerlendirilir.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            <article className="contact-info-card">
              <div className="contact-brand-mark">
                <span className="contact-monogram">ÖFÖ</span>
                <span className="contact-office-label">Ofis</span>
              </div>
              <h2>İletişim Bilgileri</h2>
              <p className="contact-lead">
                Mesleki iletişim ve genel başvurular için aşağıdaki iletişim kanallarını
                kullanabilirsiniz.
              </p>

              <div className="contact-detail-list">
                <div className="contact-detail">
                  <span>Telefon</span>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
                </div>
                <div className="contact-detail">
                  <span>E-posta</span>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
                <div className="contact-detail">
                  <span>Adres</span>
                  <p>{contact.address}</p>
                </div>
                <div className="contact-detail">
                  <span>Çalışma Saatleri</span>
                  <p>{contact.workingHours}</p>
                </div>
              </div>

              <div className="contact-actions">
                <a className="contact-map-button" href={contact.mapUrl} target="_blank" rel="noreferrer">
                  Haritada Aç
                </a>
              </div>

              <div className="contact-social-box">
                <h3>Sosyal Profiller</h3>
                <p>
                  Mesleki paylaşımlar ve güncel duyurular için sosyal profilleri ziyaret
                  edebilirsiniz.
                </p>
                <div className="contact-social-links">
                  <a
                    href="https://www.instagram.com/o.faruk.ozdmr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram profilini yeni sekmede aç"
                  >
                    <span aria-hidden="true">
                      <svg viewBox="0 0 24 24" focusable="false">
                        <rect x="4" y="4" width="16" height="16" rx="5" />
                        <circle cx="12" cy="12" r="3.5" />
                        <circle cx="17" cy="7" r="1" />
                      </svg>
                    </span>
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ömer-faruk-özdemir-839173299?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profilini yeni sekmede aç"
                  >
                    <span aria-hidden="true">
                      <svg viewBox="0 0 24 24" focusable="false">
                        <path d="M6.5 10v8" />
                        <path d="M6.5 6.5v.01" />
                        <path d="M11 18v-8" />
                        <path d="M11 13.6c0-2.2 1.4-3.8 3.4-3.8 2.1 0 3.1 1.4 3.1 3.8V18" />
                      </svg>
                    </span>
                    LinkedIn
                  </a>
                </div>
              </div>
            </article>

            <ContactForm />
          </div>

          <article className="contact-map-card">
            <div>
              <h2>Ofis Konumu</h2>
              <p>{contact.address}</p>
            </div>
            <div className="map-frame">
              <iframe
                src={contact.mapEmbedUrl}
                width="100%"
                height="430"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ofo ofis konumu"
              />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
