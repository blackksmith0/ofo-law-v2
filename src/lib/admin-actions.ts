"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { logoutAdmin } from "@/lib/admin-auth";
import { articleCategories } from "@/lib/content";
import { createSupabaseAdminClient } from "@/lib/supabase/server";
import { calculateReadingTime, slugifyTurkish } from "@/lib/utils";

export type AdminArticleFormState = {
  ok: boolean;
  message: string;
};

const initialAdminArticleFormState: AdminArticleFormState = {
  ok: false,
  message: "",
};

function stringValue(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function lastStringValue(formData: FormData, key: string) {
  return formData
    .getAll(key)
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .at(-1) || "";
}

async function ensureUniqueSlug(slug: string, id?: string) {
  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase.from("articles").select("id").eq("slug", slug).maybeSingle();
  if (error) throw new Error(error.message);
  if (data && data.id !== id) {
    throw new Error("Bu slug zaten kullanılıyor.");
  }
}

function revalidateContentPaths(type?: string | null, slug?: string | null) {
  revalidatePath("/sitemap.xml");
  revalidatePath("/hukuk-yazilari");
  revalidatePath("/uygulamadan-notlar");

  if (!slug) return;

  if (type === "note") {
    revalidatePath(`/uygulamadan-notlar/${slug}`);
    return;
  }

  revalidatePath(`/hukuk-yazilari/${slug}`);
}

export async function adminLogoutAction() {
  await logoutAdmin();
  redirect("/admin8470/giris");
}

export async function saveArticleAction(
  _prevState: AdminArticleFormState = initialAdminArticleFormState,
  formData: FormData,
): Promise<AdminArticleFormState> {
  void _prevState;
  const id = stringValue(formData, "id");
  const title = stringValue(formData, "title");
  const type = stringValue(formData, "type") === "note" ? "note" : "article";
  const status = stringValue(formData, "status") === "published" ? "published" : "draft";
  const rawSlug = stringValue(formData, "slug") || title;
  const slug = slugifyTurkish(rawSlug);
  const content = stringValue(formData, "content");
  const categorySlug = type === "article" ? stringValue(formData, "categorySlug") : "";
  const category = articleCategories.find((item) => item.slug === categorySlug);

  if (!title) return { ok: false, message: "Başlık zorunludur." };
  if (!slug) return { ok: false, message: "Slug zorunludur." };
  if (!content) return { ok: false, message: "İçerik zorunludur." };
  if (type === "article" && !category) {
    return { ok: false, message: "Hukuk yazısı için kategori seçmelisiniz." };
  }

  try {
    await ensureUniqueSlug(slug, id || undefined);
  } catch {
    return { ok: false, message: "Bu slug zaten kullanılıyor." };
  }

  const imageUrl = lastStringValue(formData, "imageUrl");
  const supabase = createSupabaseAdminClient();
  const previous = id
    ? await supabase.from("articles").select("slug,type").eq("id", id).maybeSingle()
    : null;

  const data = {
    title,
    slug,
    excerpt: stringValue(formData, "excerpt"),
    content,
    category_slug: type === "article" ? category?.slug : null,
    category_title: type === "article" ? category?.title : "Uygulamadan Notlar",
    type,
    status,
    cover_image: imageUrl || null,
    cover_alt: stringValue(formData, "coverAlt") || null,
    hero_image: imageUrl || null,
    seo_title: stringValue(formData, "seoTitle") || null,
    seo_description: stringValue(formData, "seoDescription") || null,
    reading_time: calculateReadingTime(content),
    published_at: status === "published" ? new Date().toISOString() : null,
    updated_at: new Date().toISOString(),
  };

  try {
    if (id) {
      const { error } = await supabase.from("articles").update(data).eq("id", id);
      if (error) return { ok: false, message: "Kayıt sırasında bir sorun oluştu. Lütfen tekrar deneyiniz." };
    } else {
      const { error } = await supabase.from("articles").insert(data);
      if (error) return { ok: false, message: "Kayıt sırasında bir sorun oluştu. Lütfen tekrar deneyiniz." };
    }
  } catch {
    return { ok: false, message: "Kayıt sırasında bir sorun oluştu. Lütfen tekrar deneyiniz." };
  }

  if (previous?.data) {
    revalidateContentPaths(previous.data.type, previous.data.slug);
  }
  revalidateContentPaths(type, slug);
  redirect("/admin8470/yazilar");
}

export async function deleteArticleAction(formData: FormData) {
  const id = stringValue(formData, "id");
  if (id) {
    const supabase = createSupabaseAdminClient();
    const { data: previous } = await supabase.from("articles").select("slug,type").eq("id", id).maybeSingle();
    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (error) throw new Error(error.message);
    revalidateContentPaths(previous?.type, previous?.slug);
  } else {
    revalidateContentPaths();
  }
}
