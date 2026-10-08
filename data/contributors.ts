// Add only approved public biographies. No placeholder people are published.
export type Contributor = {
  id: string;
  name: string;
  bio: string;
  credentials?: string[];
  affiliation?: string;
  publicUrl?: string;
};
export type EditorialResponsibility = {
  authors?: string[];
  reviewers?: string[];
  editors?: string[];
  contributors?: string[];
  reviewedAt?: string;
};
export const contributors: Contributor[] = [];
export function resolveContributors(ids: string[] = []): Contributor[] {
  return ids.map((id) => {
    const person = contributors.find((p) => p.id === id);
    if (!person) throw new Error(`Unknown contributor: ${id}`);
    if (
      !/^[a-z0-9-]+$/.test(person.id) ||
      !person.name.trim() ||
      !person.bio.trim()
    )
      throw new Error(`Incomplete contributor: ${id}`);
    if (person.publicUrl && new URL(person.publicUrl).protocol !== "https:")
      throw new Error("Contributor profile must use HTTPS");
    return person;
  });
}
