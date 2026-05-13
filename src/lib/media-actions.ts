"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin-auth";
import { getPublicImageUrl, getSupabaseAdmin, imageBucket } from "@/lib/supabase-admin";
import { safeImageName } from "@/lib/utils";

const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const maxSize = 5 * 1024 * 1024;

export async function uploadMediaAction(formData: FormData) {
  await requireAdmin();
  const file = formData.get("file");
  if (!(file instanceof File)) {
    throw new Error("Dosya seçilmedi.");
  }
  if (!allowedTypes.has(file.type)) {
    throw new Error("Yalnızca jpg, jpeg, png ve webp yüklenebilir.");
  }
  if (file.size > maxSize) {
    throw new Error("Dosya boyutu en fazla 5 MB olabilir.");
  }

  const supabase = getSupabaseAdmin();
  const fileName = `articles/${safeImageName(file.name)}`;
  const bytes = await file.arrayBuffer();
  const { error } = await supabase.storage
    .from(imageBucket)
    .upload(fileName, bytes, { contentType: file.type, upsert: false });

  if (error) throw new Error(error.message);
  revalidatePath("/admin8470/medya");
}

export async function deleteMediaAction(formData: FormData) {
  await requireAdmin();
  const path = String(formData.get("path") || "");
  if (!path) return;
  const supabase = getSupabaseAdmin();
  await supabase.storage.from(imageBucket).remove([path]);
  revalidatePath("/admin8470/medya");
}

export async function listMedia() {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase.storage.from(imageBucket).list("articles", {
      limit: 100,
      sortBy: { column: "created_at", order: "desc" },
    });
    if (error) return [];
    return (data || [])
      .filter((item) => item.name && !item.name.endsWith("/"))
      .map((item) => ({
        name: `articles/${item.name}`,
        url: getPublicImageUrl(`articles/${item.name}`),
      }));
  } catch {
    return [];
  }
}
