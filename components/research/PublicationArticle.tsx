import Link from "next/link";
import type { Publication } from "@/data/publications";
import {
  publishedPublications,
  validatePublication,
} from "@/data/publications";
import { getResource } from "@/data/resources";
import { Brand } from "@/components/Brand";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbSchema } from "@/lib/structured-data";
import { publicationSchema, suggestedCitation } from "@/lib/publication-schema";
import { siteUrl } from "@/lib/metadata";
import { ContentSections } from "@/components/content/ContentSections";
import {
  DateLabel,
  EditorialResponsibility,
} from "@/components/content/EditorialResponsibility";
import { PrintButton } from "@/components/interior/PrintButton";
export function PublicationArticle({
  publication: p,
}: {
  publication: Publication;
}) {
  if (p.status !== "published")
    throw new Error("Unpublished reports cannot be rendered");
  validatePublication(p);
  const schema = publicationSchema(p)!;
  return (
    <main id="main-content" className="interior resource-page" tabIndex={-1}>
      <StructuredData data={schema} />
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Research", path: "/research" },
          { name: p.title, path: `/research/${p.slug}` },
        ])}
      />
      <div className="container">
        <nav className="breadcrumbs no-print" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/research">Research</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{p.title}</span>
        </nav>
        <article className="resource-article">
          <div className="print-brand">
            <Brand />
          </div>
          <header className="resource-header">
            <p className="eyebrow">{p.kind.replaceAll("-", " ")}</p>
            <h1>{p.title}</h1>
            {p.subtitle && <p className="page-intro">{p.subtitle}</p>}
            <p>{p.summary}</p>
            <p className="resource-meta">
              Published <DateLabel date={p.publishedAt!} />
              {p.updatedAt && p.updatedAt !== p.publishedAt && (
                <>
                  {" "}
                  · Updated <DateLabel date={p.updatedAt} />
                </>
              )}{" "}
              · Version {p.version}
            </p>
            <EditorialResponsibility value={p.editorial} />
            <p>
              Review status:{" "}
              {p.reviewStatus === "editorial-review"
                ? "Editorial review recorded; this does not imply peer review."
                : "No review recorded."}
            </p>
            <div className="actions no-print">
              <PrintButton />
              {p.pdf && (
                <a className="button" href={p.pdf.url}>
                  {p.pdf.label} (PDF, {Math.ceil(p.pdf.bytes / 1024)} KB,
                  version {p.pdf.version})
                </a>
              )}
            </div>
          </header>
          <section className="guide-section" id="abstract">
            <h2>Abstract</h2>
            <p>{p.abstract}</p>
          </section>
          <section className="guide-section" id="summary">
            <h2>Executive summary</h2>
            <p>{p.executiveSummary}</p>
          </section>
          <section className="guide-section" id="findings">
            <h2>Key findings</h2>
            <ul>
              {p.keyFindings.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
          <section className="guide-section" id="methodology">
            <h2>Methodology</h2>
            <p>{p.methodology}</p>
          </section>
          <section className="guide-section" id="limitations">
            <h2>Limitations</h2>
            <p>{p.limitations}</p>
          </section>
          <ContentSections sections={p.body} sources={p.references} />
          <section className="guide-section resource-sources" id="references">
            <h2>References</h2>
            <ol>
              {p.references.map((r) => (
                <li key={r.url}>
                  <a href={r.url}>{r.label}</a>
                  {r.note && <p>{r.note}</p>}
                </li>
              ))}
            </ol>
          </section>
          <section className="guide-section" id="citation">
            <h2>Suggested citation</h2>
            <p>{suggestedCitation(p)}</p>
          </section>
          <section className="guide-section" id="version-history">
            <h2>Version history and corrections</h2>
            <ol>
              {p.history.map((entry) => (
                <li key={entry.version}>
                  <strong>
                    Version {entry.version} — {entry.kind}
                  </strong>{" "}
                  · <DateLabel date={entry.date} />
                  <p>{entry.summary}</p>
                </li>
              ))}
            </ol>
            <p>
              <Link href="/editorial-standards">Request a correction</Link>.
            </p>
          </section>
          {p.relatedResearch.length > 0 && (
            <section className="guide-section" id="related-research">
              <h2>Related research</h2>
              <ul>
                {p.relatedResearch.map((slug) => {
                  const related = publishedPublications().find(
                    (r) => r.slug === slug,
                  );
                  if (!related) throw new Error("Missing related report");
                  return (
                    <li key={slug}>
                      <Link href={`/research/${slug}`}>{related.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
          {p.relatedResources.length > 0 && (
            <section className="guide-section" id="related-education">
              <h2>Related education resources</h2>
              <ul>
                {p.relatedResources.map((slug) => {
                  const r = getResource(slug);
                  if (!r) throw new Error("Missing related resource");
                  return (
                    <li key={slug}>
                      <Link href={`/education/${slug}`}>{r.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}
          <p className="print-source">
            ZoraSafe Foundation · {siteUrl}/research/{p.slug}
          </p>
        </article>
      </div>
    </main>
  );
}
