import Link from "next/link";
import {
  resolveContributors,
  type EditorialResponsibility as Responsibility,
} from "@/data/contributors";
export function DateLabel({ date }: { date: string }) {
  return (
    <time dateTime={date}>
      {new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(`${date}T00:00:00Z`))}
    </time>
  );
}
export function EditorialResponsibility({ value }: { value?: Responsibility }) {
  const groups = [
    ["Written by", value?.authors],
    ["Reviewed by", value?.reviewers],
    ["Edited by", value?.editors],
    ["Contributions from", value?.contributors],
  ] as const;
  const people = resolveContributors([
    ...new Set(groups.flatMap(([, ids]) => ids ?? [])),
  ]);
  return (
    <div className="resource-meta editorial-responsibility">
      <p>
        Published by <Link href="/about">ZoraSafe Foundation</Link>.
      </p>
      {groups.map(([label, ids]) =>
        ids?.length ? (
          <p key={label}>
            {label}:{" "}
            {resolveContributors(ids)
              .map((p) => p.name)
              .join(", ")}
            .
          </p>
        ) : null,
      )}
      {people.map((person) => (
        <div className="contributor-note" key={person.id}>
          <p>
            <strong>{person.name}</strong>: {person.bio}
          </p>
          {person.affiliation && <p>Affiliation: {person.affiliation}</p>}
          {person.credentials?.length ? (
            <p>{person.credentials.join("; ")}</p>
          ) : null}
          {person.publicUrl && (
            <p>
              <a href={person.publicUrl}>Public profile of {person.name}</a>
            </p>
          )}
        </div>
      ))}
      {value?.reviewedAt && (
        <p>
          Content reviewed <DateLabel date={value.reviewedAt} />. This date
          records a content and source check, not formal peer review.
        </p>
      )}
      <p>
        <Link href="/editorial-standards">
          Editorial standards and corrections
        </Link>
      </p>
    </div>
  );
}
