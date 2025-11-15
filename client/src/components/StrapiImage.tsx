import Image from "next/image";
import { getStrapiURL } from "@/utils/get-strapi-url";

interface StrapiImageProps {
  src: string;
  alt: string;
  className?: string;
  [key: string]: string | number | boolean | undefined;
}

export function StrapiImage({
  src,
  alt,
  className,
  ...rest
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  console.log("/////// imageUrl", imageUrl);

  return (
    <Image
      unoptimized
      src={imageUrl}
      alt={alt}
      className={className}
      {...rest}
    />
  );
}

export function getStrapiMedia(url: string | null) {
  // const strapiURL = getStrapiURL();
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  // return `${strapiURL}${url}`;
  return getStrapiURL() + url;
}
