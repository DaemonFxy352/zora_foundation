import { siteUrl } from "./metadata";
import {
  resolveContributors,
  type Contributor,
  type EditorialResponsibility,
} from "../data/contributors";
export function personSchema(person: Contributor) {
  return {
    "@type": "Person",
    "@id": `${siteUrl}/#contributor-${person.id}`,
    name: person.name,
    description: person.bio,
    ...(person.publicUrl ? { url: person.publicUrl } : {}),
    ...(person.affiliation
      ? { affiliation: { "@type": "Organization", name: person.affiliation } }
      : {}),
  };
}
export function contributorSchema(value?: EditorialResponsibility) {
  const roles = {
    author: value?.authors,
    editor: value?.editors,
    contributor: value?.contributors,
  };
  return Object.fromEntries(
    Object.entries(roles)
      .filter(([, ids]) => ids?.length)
      .map(([key, ids]) => [key, resolveContributors(ids).map(personSchema)]),
  );
}
