import type { Source } from "@/data/sources";
export type ContentSection = {
  id: string;
  title: string;
  paragraphs: string[];
  sourceUrls?: string[];
};
export function ContentSections({
  sections,
  sources,
}: {
  sections: ContentSection[];
  sources: Source[];
}) {
  return sections.map((s) => (
    <section className="guide-section" id={s.id} key={s.id}>
      <h2>{s.title}</h2>
      {s.paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {s.sourceUrls?.length ? (
        <p className="section-evidence">
          Source guidance:{" "}
          {s.sourceUrls.map((url, i) => {
            const source = sources.find((item) => item.url === url);
            if (!source) throw new Error(`Missing source for ${s.id}: ${url}`);
            return (
              <span key={url}>
                {i > 0 && "; "}
                <a href={url}>{source.label}</a>
              </span>
            );
          })}
          .
        </p>
      ) : null}
    </section>
  ));
}
