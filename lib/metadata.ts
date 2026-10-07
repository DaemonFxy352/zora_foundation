import type { Metadata } from "next";

export const siteUrl = "https://www.zorasafefoundation.org";
export const socialImage = {
  url: `${siteUrl}/brand/zorasafe-foundation-social1.png`,
  width: 1200,
  height: 630,
  alt: "ZoraSafe Foundation — Safety through knowledge.",
  type: "image/png",
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = `${title} | ZoraSafe Foundation`;
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url,
      siteName: "ZoraSafe Foundation",
      locale: "en_US",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage],
    },
  };
}
