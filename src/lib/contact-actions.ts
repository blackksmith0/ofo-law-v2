"use server";

import { Resend } from "resend";

export type ContactFormState = {
  ok: boolean;
  message: string;
};

const successMessage =
  "Mesajınız alınmıştır. Başvurunuz, somut olayın içeriğine göre ayrıca değerlendirilecektir.";

const errorMessage =
  "Mesaj gönderilirken bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz veya doğrudan e-posta yoluyla iletişime geçiniz.";

const contactRequiredMessage =
  "Lütfen sizinle iletişime geçilebilmesi için e-posta adresi veya telefon numarası alanlarından en az birini doldurunuz.";

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendContactMessageAction(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const website = readField(formData, "website");

  if (website) {
    return { ok: true, message: successMessage };
  }

  const name = readField(formData, "name");
  const email = readField(formData, "email");
  const phone = readField(formData, "phone");
  const subject = readField(formData, "subject") || "Genel başvuru";
  const message = readField(formData, "message");
  const kvkk = formData.get("kvkk") === "on";

  if (!name || !message || !kvkk) {
    return { ok: false, message: errorMessage };
  }

  if (!email && !phone) {
    return { ok: false, message: contactRequiredMessage };
  }

  if (email && !isEmail(email)) {
    return { ok: false, message: errorMessage };
  }

  if (phone && phone.length < 10) {
    return { ok: false, message: errorMessage };
  }

  if (message.length < 10 || message.length > 5000) {
    return { ok: false, message: errorMessage };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "av.omerfarukozdmr@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "site@omerfarukozdemir.av.tr";

  if (!apiKey) {
    return { ok: false, message: errorMessage };
  }

  const resend = new Resend(apiKey);
  const sentAt = new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Istanbul",
  }).format(new Date());

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      ...(email ? { replyTo: email } : {}),
      subject: `[ÖFÖ Hukuk] Yeni İletişim Formu: ${subject}`,
      text: `Yeni iletişim formu mesajı

Ad Soyad:
${name}

E-posta:
${email || "Belirtilmedi"}

Telefon:
${phone || "Belirtilmedi"}

Konu:
${subject}

Mesaj:
${message}

KVKK Onayı:
Evet

Gönderim:
${sentAt}`,
    });

    if (error) {
      return { ok: false, message: errorMessage };
    }

    return { ok: true, message: successMessage };
  } catch {
    return { ok: false, message: errorMessage };
  }
}
