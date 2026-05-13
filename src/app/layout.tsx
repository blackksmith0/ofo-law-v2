import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import SiteShell from "@/components/SiteShell";
import { defaultSeo, legalServiceJsonLd, personJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteUrl } from "@/lib/content";
import "./globals.css";

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin-ext"],
  display: "swap",
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultSeo.title,
    template: "%s | Av. Ömer Faruk ÖZDEMİR",
  },
  description: defaultSeo.description,
  openGraph: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    url: siteUrl,
    siteName: defaultSeo.siteName,
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/images/entry.png", alt: defaultSeo.siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSeo.title,
    description: defaultSeo.description,
    images: ["/images/entry.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <JsonLd data={[personJsonLd(), legalServiceJsonLd(), websiteJsonLd()]} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
