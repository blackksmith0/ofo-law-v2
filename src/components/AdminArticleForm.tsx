"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import AdminImageField from "@/components/AdminImageField";
import { type AdminArticleFormState, saveArticleAction } from "@/lib/admin-actions";
import { articleCategories } from "@/lib/content";

type AdminArticleFormProps = {
  article?: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category_slug: string | null;
    type: string;
    status: string;
    cover_image: string | null;
    cover_alt: string | null;
    hero_image: string | null;
    seo_title: string | null;
    seo_description: string | null;
  };
  media?: { name: string; url: string }[];
};

const initialState: AdminArticleFormState = {
  ok: false,
  message: "",
};

function AdminSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Kaydediliyor..." : "Kaydet"}
    </button>
  );
}

export default function AdminArticleForm({ article, media = [] }: AdminArticleFormProps) {
  const imageValue = article?.cover_image || article?.hero_image || "";
  const [state, formAction] = useActionState(saveArticleAction, initialState);

  return (
    <form className="admin-form" action={formAction}>
      {state.message && (
        <p className={`admin-form-alert ${state.ok ? "success" : "error"}`} role="status">
          {state.message}
        </p>
      )}
      {article?.id && <input name="id" type="hidden" value={article.id} />}
      <label>
        Başlık
        <input name="title" required defaultValue={article?.title} />
      </label>
      <label>
        Slug
        <input name="slug" required defaultValue={article?.slug} />
      </label>
      <div className="admin-form-grid">
        <label>
          Tür
          <select name="type" defaultValue={article?.type || "article"}>
            <option value="article">Hukuk Yazısı</option>
            <option value="note">Uygulamadan Not</option>
          </select>
        </label>
        <label>
          Kategori
          <select name="categorySlug" defaultValue={article?.category_slug || ""}>
            <option value="">Kategori seç</option>
            {articleCategories.map((category) => (
              <option value={category.slug} key={category.slug}>
                {category.title}
              </option>
            ))}
          </select>
        </label>
        <label>
          Durum
          <select name="status" defaultValue={article?.status || "draft"}>
            <option value="draft">Taslak</option>
            <option value="published">Yayında</option>
          </select>
        </label>
      </div>
      <label>
        Kısa özet
        <textarea name="excerpt" rows={4} required defaultValue={article?.excerpt} />
      </label>
      <label>
        İçerik
        <small className="admin-help-text">
          Başlıklar için ##, alt başlıklar için ### kullanın. Başlıkların düzgün görünmesi
          için başlıktan önce ve sonra bir boş satır bırakın. Boşluk bırakmak için
          [[spacer:80]] yazabilirsiniz.
        </small>
        <textarea className="markdown-editor" name="content" rows={18} required defaultValue={article?.content} />
      </label>
      <div className="admin-image-grid">
        <AdminImageField
          label="Yazı Görseli"
          name="imageUrl"
          defaultValue={imageValue}
          description="Bu görsel hem yazı kartlarında kapak görseli olarak hem de yazı detay sayfasında üst görsel olarak kullanılır."
        />
        <label>
          Kapak fotoğrafı alt metni
          <input name="coverAlt" defaultValue={article?.cover_alt || ""} />
        </label>
      </div>
      {media.length > 0 && (
        <section className="admin-media-picker">
          <h2>Supabase Storage Görselleri</h2>
          <div className="admin-media-picker-grid">
            {media.map((item) => (
              <article key={item.url}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.url} alt={item.name} />
                <strong>{item.name}</strong>
                <label>
                  <input name="imageUrl" type="radio" value={item.url} />
                  Yazı görseli olarak kullan
                </label>
              </article>
            ))}
          </div>
        </section>
      )}
      <div className="admin-form-grid">
        <label>
          SEO başlığı
          <input name="seoTitle" defaultValue={article?.seo_title || ""} />
        </label>
        <label>
          SEO açıklaması
          <input name="seoDescription" defaultValue={article?.seo_description || ""} />
        </label>
      </div>
      <div className="admin-actions">
        <AdminSubmitButton />
      </div>
    </form>
  );
}
