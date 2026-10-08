import { notFound } from "next/navigation";
import { publishedPublications, getPublication } from "@/data/publications";
import { PublicationArticle } from "@/components/research/PublicationArticle";
import { pageMetadata } from "@/lib/metadata";
export const dynamicParams = false;
export function generateStaticParams() {
  return publishedPublications().map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = getPublication((await params).slug);
  if (!p) notFound();
  const metadata = pageMetadata(p.title, p.summary, `/research/${p.slug}`);
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: p.publishedAt,
      modifiedTime: p.updatedAt ?? p.publishedAt,
    },
  };
}
export default async function PublicationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = getPublication((await params).slug);
  if (!p) notFound();
  return <PublicationArticle publication={p} />;
}
