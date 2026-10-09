import { ContentSections } from "@/components/content/ContentSections";
import {
  DateLabel,
  EditorialResponsibility,
} from "@/components/content/EditorialResponsibility";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbSchema, resourceSchema } from "@/lib/structured-data";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  resources,
  getResource,
  formatLabel,
  audiences,
} from "@/data/resources";
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
      <StructuredData data={resourceSchema(r)} />
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Education & Resources", path: "/education" },
          { name: r.title, path: `/education/${r.slug}` },
        ])}
      />
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
              {r.readingMinutes} min read
              {r.publishedAt && (
                <>
                  {" "}
                  · Published <DateLabel date={r.publishedAt} />
                </>
              )}
              {r.updatedAt !== r.publishedAt && (
                <>
                  {" "}
                  · Updated <DateLabel date={r.updatedAt} />
                </>
              )}
            </p>
            <EditorialResponsibility value={r.editorial} />
            {r.sourceCheckedAt && (
              <p className="resource-meta">
                Sources checked <DateLabel date={r.sourceCheckedAt} />. This is
                a source check, not independent expert review.
              </p>
            )}
            <p className="resource-meta">
              For:{" "}
              {audiences
                .filter((a) => r.audience.includes(a.id))
                .map((a) => a.label)
                .join("; ")}
              .
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
          <section className="guide-section">
            <h2>Why this matters</h2>
            <p>{r.intro}</p>
          </section>
          <ContentSections sections={r.sections ?? []} sources={r.sources} />
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
            <h2>What to do if it already happened</h2>
            <p>{r.help}</p>
            {r.helpLinks ? (
              <ul>
                {r.helpLinks.map((link) => (
                  <li key={link.url}>
                    <a href={link.url}>{link.label}</a>
                    {link.note && <p>{link.note}</p>}
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                For U.S. scam reporting, visit{" "}
                <a href="https://reportfraud.ftc.gov/">ReportFraud.ftc.gov</a>.
                For a personal identity-theft recovery plan, use{" "}
                <a href="https://www.identitytheft.gov/">IdentityTheft.gov</a>.
                Internet-enabled crime can also be reported to{" "}
                <a href="https://www.ic3.gov/">FBI / IC3</a>. Outside the U.S.,
                contact your local consumer-protection agency.
              </p>
            )}
          </section>
          <section className="guide-section">
            <h2>When to get help</h2>
            <p>
              Ask a trusted person to help with practical next steps. Contact
              the affected service directly for account or payment problems. For
              an immediate threat to physical safety, contact local emergency
              services.
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
                  {source.note && <p>{source.note}</p>}
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
