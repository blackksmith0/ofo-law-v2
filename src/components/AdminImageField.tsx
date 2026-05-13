"use client";

import { useState, type ChangeEvent } from "react";

type AdminImageFieldProps = {
  label: string;
  name: string;
  defaultValue?: string;
  description?: string;
};

export default function AdminImageField({ label, name, defaultValue = "", description }: AdminImageFieldProps) {
  const [value, setValue] = useState(defaultValue);
  const [message, setMessage] = useState("");
  const fallback = "/images/placeholders/article-placeholder.png";

  async function upload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setMessage("Yalnızca jpg, jpeg, png ve webp yüklenebilir.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setMessage("Dosya boyutu en fazla 5 MB olabilir.");
      return;
    }

    setMessage("Yükleniyor...");
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("/admin8470/medya/upload", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (!response.ok) {
      setMessage(result.error || "Yükleme başarısız.");
      return;
    }
    setValue(result.url);
    setMessage("Yüklendi.");
  }

  return (
    <section className="admin-image-card">
      <h2>{label}</h2>
      {description && <p className="admin-image-description">{description}</p>}
      <label>
        URL
        <input name={name} value={value} onChange={(event) => setValue(event.target.value)} />
      </label>
      <label className="admin-file-upload">
        Bilgisayardan Yükle
        <input type="file" accept="image/jpeg,image/png,image/webp" onChange={upload} />
      </label>
      <div className="admin-image-preview">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={value || fallback} alt="" onError={(event) => { event.currentTarget.src = fallback; }} />
      </div>
      {message && <p>{message}</p>}
    </section>
  );
}
