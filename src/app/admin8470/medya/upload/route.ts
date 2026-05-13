import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getSupabaseAdmin, imageBucket } from "@/lib/supabase-admin";
import { safeImageName } from "@/lib/utils";

const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const maxSize = 5 * 1024 * 1024;

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Yetkisiz işlem." }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Dosya seçilmedi." }, { status: 400 });
  }
  if (!allowedTypes.has(file.type)) {
    return NextResponse.json({ error: "Yalnızca jpg, jpeg, png ve webp yüklenebilir." }, { status: 400 });
  }
  if (file.size > maxSize) {
    return NextResponse.json({ error: "Dosya boyutu en fazla 5 MB olabilir." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const path = `articles/${safeImageName(file.name)}`;
  const { error } = await supabase.storage
    .from(imageBucket)
    .upload(path, await file.arrayBuffer(), { contentType: file.type, upsert: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { data } = supabase.storage.from(imageBucket).getPublicUrl(path);
  return NextResponse.json({ path, url: data.publicUrl });
}
