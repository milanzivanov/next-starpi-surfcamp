export function getStrapiURL() {
  const url = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
  return url.startsWith("http") ? url : `https://${url}`;
}
