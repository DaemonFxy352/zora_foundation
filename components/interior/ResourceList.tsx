import Link from "next/link";
import { Arrow } from "@/components/Brand";
import { formatLabel } from "@/data/resource-taxonomy";
import type { ResourceSummary } from "@/data/resources";
export function ResourceList({ items }: { items: ResourceSummary[] }) {
  return (
    <ul className="resource-list">
      {items.map((resource) => (
        <li key={resource.slug}>
          <div>
            <p className="resource-meta">
              {formatLabel(resource.format)} <span aria-hidden="true">·</span>{" "}
              {resource.readingMinutes} min read
            </p>
            <h3>
              <Link href={`/education/${resource.slug}`}>
                {resource.title}
                <Arrow />
              </Link>
            </h3>
            <p>{resource.summary}</p>
            {resource.handoutSlug && (
              <Link
                className="text-link"
                href={`/education/handouts/${resource.handoutSlug}`}
              >
                Draft handout: {resource.title}
              </Link>
            )}
          </div>
          {resource.printView && (
            <span className="resource-print-label">Print-friendly</span>
          )}
        </li>
      ))}
    </ul>
  );
}
