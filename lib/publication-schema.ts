import { contributorSchema, personSchema } from "./contributor-schema";
import { siteUrl, socialImage } from "./metadata";
import { organizationId } from "./structured-data";
import { resolveContributors } from "../data/contributors";
import { validatePublication, type Publication } from "../data/publications";
export function suggestedCitation(p: Publication) {
  validatePublication(p);
  if (p.status !== "published")
    throw new Error("Do not cite unpublished work as a publication");
  return `${resolveContributors(p.editorial.authors)
    .map((a) => a.name)
    .join(
      "; ",
    )}. (${p.publishedAt!.slice(0, 4)}). ${p.title}. ZoraSafe Foundation. Version ${p.version}. ${siteUrl}/research/${p.slug}`;
}
export function publicationSchema(p: Publication) {
  if (p.status !== "published") return null;
  validatePublication(p);
  const url = `${siteUrl}/research/${p.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": p.schemaType,
    "@id": `${url}#publication`,
    url,
    name: p.title,
    headline: p.title,
    description: p.summary,
    abstract: p.abstract,
    inLanguage: "en-US",
    publisher: { "@id": organizationId },
    ...contributorSchema(p.editorial),
    datePublished: p.publishedAt,
    dateModified: p.updatedAt ?? p.publishedAt,
    version: p.version,
    image: socialImage.url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
      ...(p.editorial.reviewedAt
        ? { lastReviewed: p.editorial.reviewedAt }
        : {}),
      ...(p.editorial.reviewers?.length
        ? {
            reviewedBy: resolveContributors(p.editorial.reviewers).map(
              personSchema,
            ),
          }
        : {}),
    },
    citation: p.references.map((r) => ({
      "@type": "CreativeWork",
      name: r.label,
      url: r.url,
    })),
    ...(p.pdf
      ? {
          encoding: {
            "@type": "MediaObject",
            contentUrl: `${siteUrl}${p.pdf.url}`,
            encodingFormat: "application/pdf",
            name: p.pdf.label,
          },
        }
      : {}),
  };
}
