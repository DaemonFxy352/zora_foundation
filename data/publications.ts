import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getResource } from "./resources";
import type { EditorialResponsibility } from "./contributors";
import { resolveContributors } from "./contributors";
import type { Source } from "./sources";
import type { ContentSection } from "../components/content/ContentSections";

export type Publication = {
  slug: string;
  status: "draft" | "review" | "published";
  kind: "whitepaper" | "report" | "brief" | "study" | "issue-paper";
  schemaType: "Report" | "ScholarlyArticle" | "Article" | "CreativeWork";
  title: string;
  subtitle?: string;
  summary: string;
  editorial: EditorialResponsibility;
  publishedAt?: string;
  updatedAt?: string;
  abstract: string;
  executiveSummary: string;
  keyFindings: string[];
  methodology: string;
  limitations: string;
  body: ContentSection[];
  references: Source[];
  pdf?: { url: string; label: string; version: string; bytes: number };
  version: string;
  relatedResearch: string[];
  relatedResources: string[];
};

// No unfinished papers or fixture records in the public catalog.
export const publications: Publication[] = [];
export function validatePublication(p: Publication): void {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug))
    throw new Error("Invalid publication slug");
  if (p.status !== "published") return;
  for (const text of [
    p.title,
    p.summary,
    p.abstract,
    p.executiveSummary,
    p.methodology,
    p.limitations,
    p.version,
  ]) {
    if (!text.trim()) throw new Error(`Incomplete publication: ${p.slug}`);
  }
  const validDate = (s?: string) =>
    Boolean(
      s &&
      /^\d{4}-\d{2}-\d{2}$/.test(s) &&
      Number.isFinite(Date.parse(s)) &&
      new Date(s).toISOString().slice(0, 10) === s,
    );
  if (
    !validDate(p.publishedAt) ||
    (p.updatedAt && (!validDate(p.updatedAt) || p.updatedAt < p.publishedAt!))
  )
    throw new Error("Invalid publication dates");
  if (p.editorial.reviewedAt && !validDate(p.editorial.reviewedAt))
    throw new Error("Invalid review date");
  if (p.editorial.reviewers?.length && !p.editorial.reviewedAt)
    throw new Error("Named review needs a review date");
  if (!p.editorial.authors?.length)
    throw new Error("Published work needs verified authors");
  for (const ids of [
    p.editorial.authors,
    p.editorial.reviewers,
    p.editorial.editors,
    p.editorial.contributors,
  ])
    resolveContributors(ids);
  if (!p.body.length || !p.references.length || !p.keyFindings.length)
    throw new Error("Published work needs body, references and findings");
  if (p.schemaType === "ScholarlyArticle" && p.kind !== "study")
    throw new Error("ScholarlyArticle requires a scholarly study");
  const reserved = new Set([
    "abstract",
    "summary",
    "findings",
    "methodology",
    "limitations",
    "references",
    "citation",
    "related-research",
    "related-education",
  ]);
  for (const section of p.body) {
    if (!/^[a-z][a-z0-9-]*$/.test(section.id) || reserved.has(section.id))
      throw new Error("Duplicate or invalid section anchor");
    reserved.add(section.id);
    if (
      !section.title.trim() ||
      !section.paragraphs.length ||
      section.paragraphs.some((text) => !text.trim())
    )
      throw new Error("Empty report section");
    for (const url of section.sourceUrls ?? [])
      if (!p.references.some((r) => r.url === url))
        throw new Error("Unresolved report citation");
  }
  for (const source of p.references)
    if (!source.label.trim() || new URL(source.url).protocol !== "https:")
      throw new Error("Invalid report reference");
  if (
    p.pdf &&
    (!/^\/research\/[a-z0-9/-]+\.pdf$/.test(p.pdf.url) ||
      p.pdf.bytes <= 0 ||
      !p.pdf.version ||
      !p.pdf.label)
  )
    throw new Error("Invalid PDF companion");
}
export function publishedPublications(records: Publication[] = publications) {
  const visible = records.filter((p) => p.status === "published");
  const slugs = new Set<string>();
  for (const p of visible) {
    validatePublication(p);
    if (slugs.has(p.slug)) throw new Error("Duplicate publication slug");
    for (const slug of p.relatedResources)
      if (!getResource(slug))
        throw new Error(`Missing related education resource: ${slug}`);
    if (p.pdf) {
      const file = readFileSync(join(process.cwd(), "public", p.pdf.url));
      if (
        file.subarray(0, 5).toString() !== "%PDF-" ||
        file.length !== p.pdf.bytes
      )
        throw new Error("PDF companion does not match its metadata");
    }
    slugs.add(p.slug);
  }
  for (const p of visible)
    for (const slug of p.relatedResearch) {
      if (slug === p.slug || !slugs.has(slug))
        throw new Error("Related research must be another published work");
    }
  return visible;
}
export function getPublication(slug: string) {
  return publishedPublications().find((p) => p.slug === slug);
}
