export function slugifyTurkish(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function calculateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} dk okuma`;
}

export function formatDateTR(value?: Date | string | null) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export function safeImageName(fileName: string) {
  const parts = fileName.split(".");
  const extension = parts.pop()?.toLowerCase() || "";
  const base = slugifyTurkish(parts.join(".") || "gorsel");
  return `${base}-${Date.now()}.${extension}`;
}
