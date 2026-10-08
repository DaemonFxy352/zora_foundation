import { siteUrl, socialImage } from "@/lib/metadata";
import { audiences, formatLabel, type Resource } from "@/data/resources";

export const organizationId = `${siteUrl}/#organization`;
export const organization = {
  "@type": "Organization",
  "@id": organizationId,
  name: "ZoraSafe Foundation",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/icon-512.png`,
  description:
    "Closing the digital safety knowledge gap through education, research, prevention, access, and community partnerships.",
  email: "hello@zorasafefoundation.org",
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

// These are educational guides, not original studies or reviewed papers.
// Publisher is known; individual authors and reviewers have not been supplied.
export function resourceSchema(resource: Resource) {
  const url = `${siteUrl}/education/${resource.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "@id": `${url}#resource`,
    url,
    name: resource.title,
    description: resource.summary,
    inLanguage: "en-US",
    learningResourceType: formatLabel(resource.format),
    isAccessibleForFree: true,
    publisher: { "@id": organizationId },
    datePublished: resource.publishedAt,
    dateModified: resource.updatedAt,
    image: socialImage.url,
    audience: audiences
      .filter((a) => resource.audience.includes(a.id))
      .map((a) => ({
        "@type": "Audience",
        audienceType: a.label,
      })),
    citation: resource.sources.map((source) => ({
      "@type": "CreativeWork",
      name: source.label,
      url: source.url,
    })),
    mainEntityOfPage: url,
  };
}
