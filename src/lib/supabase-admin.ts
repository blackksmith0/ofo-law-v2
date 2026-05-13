import { createSupabaseAdminClient } from "@/lib/supabase/server";

export const imageBucket = "article-images";

export function getSupabaseAdmin() {
  return createSupabaseAdminClient();
}

export function getPublicImageUrl(path: string) {
  return getSupabaseAdmin().storage.from(imageBucket).getPublicUrl(path).data.publicUrl;
}
