"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import {
  type ContactFormState,
  sendContactMessageAction,
} from "@/lib/contact-actions";

const initialState: ContactFormState = {
  ok: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Gönderiliyor..." : "Gönder"}
    </button>
  );
}

export function ContactForm() {
  const messageRef = useRef<HTMLParagraphElement | null>(null);
  const [state, formAction] = useActionState(
    sendContactMessageAction,
    initialState,
  );

  useEffect(() => {
    if (state.message && messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [state]);

  return (
    <form className="contact-form-card" action={formAction}>
      <h2>İletişim Formu</h2>
      <p className="contact-form-lead">
        Hukuki değerlendirme talepleriniz ve genel başvurularınız için aşağıdaki
        formu kullanabilirsiniz. Gönderilen başvurular, somut olayın içeriğine
        göre ayrıca değerlendirilir.
      </p>

      {state.message ? (
        <p
          ref={messageRef}
          className={`contact-form-alert ${state.ok ? "success" : "error"}`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}

      <label className="contact-honeypot" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <label>
        Ad Soyad
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        E-posta
        <input name="email" type="email" autoComplete="email" />
      </label>
      <label>
        Telefon
        <input name="phone" type="tel" autoComplete="tel" minLength={10} />
      </label>
      <label>
        Konu
        <input name="subject" type="text" />
      </label>
      <label>
        Mesaj
        <textarea name="message" rows={7} minLength={10} maxLength={5000} required />
      </label>
      <label className="checkbox-line">
        <input name="kvkk" type="checkbox" required />
        KVKK kapsamında kişisel verilerimin iletişim talebimin değerlendirilmesi
        amacıyla işlenmesine ilişkin bilgilendirmeyi okudum.
      </label>
      <SubmitButton />
      <p>
        Bu form aracılığıyla gönderilen bilgiler, tek başına avukat-müvekkil
        ilişkisi kurulduğu anlamına gelmez. Avukat-müvekkil ilişkisi ancak
        ayrıca yapılacak açık kabul ve görevlendirme ile kurulur.
      </p>
    </form>
  );
}
