import Link from "next/link";
import { notFound } from "next/navigation";
import { resources, getResource, formatLabel } from "@/data/resources";
import { Brand } from "@/components/Brand";
import { PrintButton } from "@/components/interior/PrintButton";
import { ResourceList } from "@/components/interior/ResourceList";
import { pageMetadata, siteUrl } from "@/lib/metadata";
export function generateStaticParams() {
  return resources.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();
  return pageMetadata(
    resource.title,
    resource.summary,
    `/education/${resource.slug}`,
  );
}
function dateLabel(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) notFound();
  const related = r.related
    .map(getResource)
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  return (
    <main id="main-content" className="interior resource-page" tabIndex={-1}>
      <div className="container">
        <nav className="breadcrumbs no-print" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/education">Education & Resources</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{r.title}</span>
        </nav>
        <article className="resource-article">
          <div className="print-brand">
            <Brand />
          </div>
          <header className="resource-header">
            <p className="eyebrow">{formatLabel(r.format)}</p>
            <h1>{r.title}</h1>
            <p className="page-intro">{r.summary}</p>
            <p className="resource-meta">
              {r.readingMinutes} min read · Published{" "}
              <time dateTime={r.publishedAt}>{dateLabel(r.publishedAt)}</time>
              {r.updatedAt !== r.publishedAt && (
                <>
                  {" "}
                  · Updated{" "}
                  <time dateTime={r.updatedAt}>{dateLabel(r.updatedAt)}</time>
                </>
              )}
            </p>
            <div className="actions">
              {r.printView && <PrintButton />}
              {r.download && (
                <a className="button" href={r.download.url} download>
                  {r.download.label} ({r.download.fileType})
                </a>
              )}
            </div>
          </header>
          <div className="reading-copy">
            <p>{r.intro}</p>
          </div>
          <section className="guide-section">
            <h2>Key warning signs</h2>
            <ul>
              {r.warningSigns.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </section>
          <section className="guide-section">
            <h2>What to do</h2>
            <ol className="action-steps">
              {r.actions.map((action) => (
                <li key={action.title}>
                  <h3>{action.title}</h3>
                  <p>{action.text}</p>
                </li>
              ))}
            </ol>
          </section>
          <section className="guide-section">
            <h2>What not to do</h2>
            <ul>
              {r.avoid.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </section>
          <section className="guide-section help-note">
            <h2>When to get help</h2>
            <p>{r.help}</p>
            <p>
              For U.S. scam reporting, visit{" "}
              <a href="https://reportfraud.ftc.gov/">ReportFraud.ftc.gov</a>.
              For a personal identity-theft recovery plan, use{" "}
              <a href="https://www.identitytheft.gov/">IdentityTheft.gov</a>.
              Outside the U.S., contact your local consumer-protection agency.
            </p>
          </section>
          <section className="guide-section practice-note">
            <h2>Try it together</h2>
            <p>{r.practice.prompt}</p>
            <h3>A safer next step</h3>
            <p>{r.practice.response}</p>
          </section>
          <section className="guide-section resource-sources">
            <h2>Sources & further reading</h2>
            <p>
              These public guidance sources informed this resource. Their
              inclusion does not imply endorsement of the Foundation.
            </p>
            <ul>
              {r.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url}>{source.label}</a>
                </li>
              ))}
            </ul>
          </section>
          <p className="print-source">
            ZoraSafe Foundation · {siteUrl}/education/{r.slug}
          </p>
        </article>
        <aside
          className="related-resources no-print"
          aria-labelledby="related-heading"
        >
          <h2 id="related-heading">Keep learning</h2>
          <ResourceList items={related} />
          <Link className="text-link" href="/education#resources">
            Browse all resources
          </Link>
        </aside>
      </div>
    </main>
  );
}
