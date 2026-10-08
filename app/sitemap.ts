import type { MetadataRoute } from "next";
import { resources } from "@/data/resources";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  // Explicit public-content allowlist. Utility pages, assets and drafts stay out.
  // Core pages have no maintained editorial date: omit rather than invent lastmod.
  return [
    ...[
      "/",
      "/education",
      "/programs",
      "/research",
      "/about",
      "/leadership",
      "/partner",
      "/contact",
      "/support",
    ].map((path) => ({ url: `${siteUrl}${path}` })),
    ...resources.map((resource) => ({
      url: `${siteUrl}/education/${resource.slug}`,
      lastModified: resource.updatedAt,
    })),
  ];
}
