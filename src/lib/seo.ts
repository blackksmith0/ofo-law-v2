import type { Metadata } from "next";
import { siteConfig, siteUrl } from "@/lib/content";
import type { PublicContent } from "@/lib/public-content";

export const defaultSeo = {
  siteName: "Av. Ömer Faruk ÖZDEMİR",
  title: "Av. Ömer Faruk ÖZDEMİR | Ankara Avukat",
  description:
    "Av. Ömer Faruk ÖZDEMİR’in hukuk yazıları, mesleki değerlendirmeleri ve uygulamadan notlarını içeren kişisel hukuk platformu.",
  image: "/images/entry.png",
};

export const sameAs = [
  "https://www.instagram.com/o.faruk.ozdmr",
  "https://www.linkedin.com/in/ömer-faruk-özdemir-839173299?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
];

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultSeo.image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string | null;
}): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image || defaultSeo.image);

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: defaultSeo.siteName,
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: imageUrl,
          alt: defaultSeo.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function createContentMetadata(content: PublicContent, path: string): Metadata {
  const title = content.seoTitle || content.title;
  const description = content.seoDescription || content.excerpt;
  const image = content.heroImage || content.coverImage || defaultSeo.image;
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: defaultSeo.siteName,
      locale: "tr_TR",
      type: "article",
      images: [
        {
          url: imageUrl,
          alt: content.coverAlt || content.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Av. Ömer Faruk ÖZDEMİR",
    jobTitle: "Avukat",
    url: siteUrl,
    sameAs,
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Gazi Üniversitesi" },
      { "@type": "CollegeOrUniversity", name: "Süleyman Demirel Üniversitesi" },
      { "@type": "CollegeOrUniversity", name: "Atatürk Üniversitesi" },
    ],
  };
}

export function legalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Av. Ömer Faruk ÖZDEMİR",
    url: siteUrl,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mustafa Kemal, 2127. Cd No:11/A",
      addressLocality: "Çankaya",
      addressRegion: "Ankara",
      postalCode: "06510",
      addressCountry: "TR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: "Ankara",
    sameAs,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: defaultSeo.siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/arama?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function articleJsonLd(content: PublicContent, path: string) {
  const url = absoluteUrl(path);
  const image = absoluteUrl(content.heroImage || content.coverImage || defaultSeo.image);

  return {
    "@context": "https://schema.org",
    "@type": content.type === "note" ? "BlogPosting" : "Article",
    headline: content.title,
    description: content.seoDescription || content.excerpt,
    image,
    datePublished: content.publishedAt?.toISOString(),
    dateModified: content.updatedAtDate?.toISOString() || content.publishedAt?.toISOString(),
    author: {
      "@type": "Person",
      name: "Av. Ömer Faruk ÖZDEMİR",
    },
    publisher: {
      "@type": "Person",
      name: "Av. Ömer Faruk ÖZDEMİR",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  };
}
