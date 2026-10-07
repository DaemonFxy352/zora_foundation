import Link from "next/link";
import { Arrow } from "@/components/Brand";
import { formatLabel, type Resource } from "@/data/resources";
export function ResourceList({ items }: { items: Resource[] }) {
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
          </div>
          {resource.printView && (
            <span className="resource-print-label">Print-friendly</span>
          )}
        </li>
      ))}
    </ul>
  );
}
