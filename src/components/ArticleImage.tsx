"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
};

export default function ArticleImage({
  src,
  alt,
  fill,
  priority,
  className,
  sizes,
  width,
  height,
}: Props) {
  const [imageSrc, setImageSrc] = useState(src || "/images/placeholders/article-placeholder.png");
  const fallback = "/images/placeholders/article-placeholder.png";
  const imageAlt = alt || "Hukuk yazısı için temsili görsel";
  const isLocal = imageSrc.startsWith("/");
  const isAllowedRemote =
    imageSrc.startsWith("https://sgwqfxteyhyrtlwtfvdo.supabase.co/storage/v1/object/public/") ||
    imageSrc.startsWith("https://cdn-yb.ams3.cdn.digitaloceanspaces.com/");

  if (!isLocal && !isAllowedRemote) {
    const imgStyle = fill
      ? { position: "absolute" as const, inset: 0, width: "100%", height: "100%", objectFit: "cover" as const }
      : { width, height };

    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={imageAlt} className={className} src={imageSrc || fallback} style={imgStyle} onError={() => setImageSrc(fallback)} />;
  }

  return (
    <Image
      alt={imageAlt}
      className={className}
      fill={fill}
      height={height}
      onError={() => setImageSrc(fallback)}
      priority={priority}
      sizes={sizes}
      src={imageSrc}
      width={width}
    />
  );
}
