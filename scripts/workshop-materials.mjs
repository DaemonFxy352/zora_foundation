import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
const workshops = JSON.parse(readFileSync("data/workshop-drafts.json", "utf8"));
const bullets = (items) => items.map((item) => `- ${item}`).join("\n");
export function workshopMarkdown(w) {
  assert.equal(w.status, "draft");
  assert.equal(
    w.outline.reduce((sum, part) => sum + part.minutes, 0),
    w.durationMinutes,
  );
  for (const key of [
    "objectives",
    "preparation",
    "accessibility",
    "releaseGates",
    "takeaways",
    "resources",
    "handouts",
  ])
    assert.ok(w[key].length, `${w.slug}: ${key}`);
  return `# DRAFT — ${w.title}\n\n${w.reviewStatus}. Not certified, delivered, or available for booking.\n\nPrepared: ${w.preparedAt}. No human review date or approval is recorded.\n\nAudience: ${w.audience}\n\nSuggested duration: ${w.durationMinutes}${w.extensionMinutes ? `–${w.durationMinutes + w.extensionMinutes}` : ""} minutes.\n\n## Learning objectives\n\n${bullets(w.objectives)}\n\n## Facilitator preparation\n\n${bullets(w.preparation)}\n\n## Session outline\n\n${w.outline.map((p) => `### ${p.title} — ${p.minutes} minutes\n\n${p.activity}\n\nDiscussion prompt: ${p.prompt}`).join("\n\n")}\n\n${w.extension ? `${w.extension}\n\n` : ""}## Participant takeaways\n\n${bullets(w.takeaways)}\n\n## Accessibility and adaptation\n\n${bullets(w.accessibility)}\n\n## Supporting guidance\n\nThese working-branch paths are not a claim of production availability. Review the sources linked in each guide.\n\n${bullets(w.resources.map((slug) => `/education/${slug}`))}\n\n## Draft handouts\n\n${bullets(w.handouts.map((slug) => `internal/handouts/data.ts — draft ID: ${slug}`))}\n\n## Required release gates\n\n${bullets(w.releaseGates)}\n\nGenerated from data/workshop-drafts.json. Edit the data and run npm run materials:write. No public workshop route is generated.\n`;
}
for (const w of workshops) {
  const file = `docs/training/${w.slug}.md`;
  const output = workshopMarkdown(w);
  if (process.argv.includes("--write")) writeFileSync(file, output);
  else
    assert.equal(
      readFileSync(file, "utf8"),
      output,
      `Stale curriculum: ${file}`,
    );
}
console.log(
  `${process.argv.includes("--write") ? "Wrote" : "Verified"} ${workshops.length} internal draft curricula.`,
);
