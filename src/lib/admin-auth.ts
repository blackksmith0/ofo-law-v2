import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const cookieName = "ofo_admin_session";
const maxAge = 60 * 60 * 8;

function sessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || "development-only-secret";
}

function sign(value: string) {
  return crypto.createHmac("sha256", sessionSecret()).update(value).digest("hex");
}

function createToken(username: string) {
  const payload = `${username}:${Date.now()}`;
  return `${payload}.${sign(payload)}`;
}

function verifyToken(token?: string) {
  if (!token) return false;
  const [username, timestamp, signature] = token.split(/[.:]/);
  if (!username || !timestamp || !signature) return false;
  const payload = `${username}:${timestamp}`;
  const expected = sign(payload);
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export async function loginAdmin(username: string, password: string) {
  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedUsername || !expectedPassword || !process.env.ADMIN_SESSION_SECRET) {
    return { ok: false, message: "Admin env değerleri eksik." };
  }

  const isValid = username === expectedUsername && password === expectedPassword;
  if (!isValid) {
    return { ok: false, message: "Kullanıcı adı veya şifre hatalı." };
  }

  const cookieStore = await cookies();
  cookieStore.set(cookieName, createToken(username), {
    httpOnly: true,
    maxAge,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return { ok: true };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.set(cookieName, "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return verifyToken(cookieStore.get(cookieName)?.value);
}

export async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin8470/giris");
  }
}
