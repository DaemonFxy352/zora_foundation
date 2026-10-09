import Link from "next/link";
import { notFound } from "next/navigation";
import { Brand } from "@/components/Brand";
import { PrintButton } from "@/components/interior/PrintButton";
import { DateLabel } from "@/components/content/EditorialResponsibility";
import { StructuredData } from "@/components/StructuredData";
import { breadcrumbSchema } from "@/lib/structured-data";
import { pageMetadata, siteUrl } from "@/lib/metadata";
import { handouts, getHandout } from "@/data/handouts";
import { getResource } from "@/data/resources";
export const dynamicParams = false;
export function generateStaticParams() {
  return handouts.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const h = getHandout((await params).slug);
  if (!h) notFound();
  return {
    ...pageMetadata(h.title, h.summary, `/education/handouts/${h.slug}`),
    robots: { index: false, follow: true },
  };
}
export default async function HandoutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const h = getHandout((await params).slug);
  if (!h) notFound();
  const r = getResource(h.resource)!;
  const sources = [
    ...new Map(
      [...r.sources, ...(r.helpLinks ?? [])].map((s) => [s.url, s]),
    ).values(),
  ];
  return (
    <main
      id="main-content"
      className="interior resource-page handout-page"
      tabIndex={-1}
    >
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Education & Resources", path: "/education" },
          { name: h.title, path: `/education/handouts/${h.slug}` },
        ])}
      />
      <div className="container">
        <nav className="breadcrumbs no-print" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/education">Education & Resources</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{h.title}</span>
        </nav>
        <article className="resource-article handout-sheet">
          <div className="print-brand">
            <Brand />
          </div>
          <header className="resource-header">
            <p className="eyebrow">Printable draft handout</p>
            <h1>{h.title}</h1>
            <p>{h.summary}</p>
            <p className="handout-status">
              <strong>
                Draft — organizational and subject-matter review pending.
              </strong>{" "}
              Prepared <DateLabel date={h.preparedAt} />. No professional review
              is claimed.
            </p>
            <p>
              Published by ZoraSafe Foundation. General educational guidance.
            </p>
            <div className="actions no-print">
              <PrintButton />
              <Link
                className="button button-outline"
                href={`/education/${h.resource}`}
              >
                Read the full guide
              </Link>
            </div>
            <p className="no-print">
              Print on US Letter paper or choose “Save as PDF” in your browser.
              This is an HTML handout, not a pre-generated PDF download. Draft
              status stays on the printed copy.
            </p>
          </header>
          <section className="guide-section">
            <h2>Steps to use</h2>
            <ol>
              {h.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
          <section className="guide-section">
            <h2>Put it into practice</h2>
            <p>{h.practice}</p>
            <div className="worksheet-space" aria-hidden="true" />
          </section>
          <section className="guide-section">
            <h2>If it already happened</h2>
            <p>{h.response}</p>
          </section>
          <section className="guide-section">
            <h2>Help and limits</h2>
            <p>{h.help}</p>
          </section>
          <section className="guide-section resource-sources">
            <h2>Sources and full guidance</h2>
            <p>
              Source references do not imply endorsement or review of this
              handout.
            </p>
            <ul>
              {sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url}>{s.label}</a>
                </li>
              ))}
            </ul>
            <p>
              Full Foundation guide:{" "}
              <a href={`/education/${h.resource}`}>{r.title}</a>
            </p>
          </section>
          <p className="print-source">
            {siteUrl}/education/handouts/{h.slug}
          </p>
        </article>
      </div>
    </main>
  );
}
