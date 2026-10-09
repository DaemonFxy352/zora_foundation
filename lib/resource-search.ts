import type { ResourceSummary } from "../data/resources";
import { audiences, topics } from "../data/resource-taxonomy";
export type ResourceFilters = {
  query: string;
  audience: string;
  topic: string;
  format: string;
};
export const emptyResourceFilters: ResourceFilters = {
  query: "",
  audience: "",
  topic: "",
  format: "",
};
const normalize = (s: string) =>
  s
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("en-US")
    .replace(/\bfamilies\b/g, "family");
// No query URLs, remote service, tracking, or full article bodies in the client.
export function filterResources(
  items: ResourceSummary[],
  filters: ResourceFilters,
) {
  const terms = normalize(filters.query).trim().split(/\s+/).filter(Boolean);
  return items.filter((r) => {
    if (filters.audience && !r.audience.some((a) => a === filters.audience))
      return false;
    if (filters.topic && !r.topics.some((t) => t === filters.topic))
      return false;
    if (filters.format === "printable" && !r.printView) return false;
    if (
      filters.format &&
      filters.format !== "printable" &&
      r.format !== filters.format
    )
      return false;
    const text = normalize(
      [
        r.title,
        r.summary,
        ...audiences
          .filter((a) => r.audience.includes(a.id))
          .map((a) => a.label),
        ...topics.filter((t) => r.topics.includes(t.id)).map((t) => t.label),
      ].join(" "),
    );
    return terms.every((term) => text.includes(term));
  });
}
