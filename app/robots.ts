import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  // Keep pages crawlable so crawlers can see the preview noindex metadata.
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(process.env.VERCEL_ENV === "preview"
      ? {}
      : { sitemap: `${siteUrl}/sitemap.xml` }),
  };
}
