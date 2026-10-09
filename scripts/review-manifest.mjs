import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import vm from "node:vm";
import ts from "typescript";
import { load } from "./lib/load-ts.mjs";
const dir = "docs/release/phase4-20261008";
const baseline = "5ba89820ddcf57351e467223fda43b9a4d4a0c49";
const { resources, audiences } = load("data/resources.ts");
const { handouts } = load("internal/handouts/data.ts");
const workshops = JSON.parse(readFileSync("data/workshop-drafts.json", "utf8"));
const canonical = (value) =>
  JSON.stringify(value, (_, v) =>
    v && !Array.isArray(v) && typeof v === "object"
      ? Object.fromEntries(
          Object.entries(v).sort(([a], [b]) => a.localeCompare(b)),
        )
      : v,
  );
const hash = (value) =>
  createHash("sha256").update(canonical(value)).digest("hex");
const priorSource = execFileSync(
  "git",
  ["show", `${baseline}:data/resources.ts`],
  { encoding: "utf8" },
);
const priorModule = { exports: {} };
vm.runInNewContext(
  ts.transpileModule(priorSource, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText,
  { exports: priorModule.exports, module: priorModule },
);
const prior = priorModule.exports.resources;
const classify = (content) => {
  const text = JSON.stringify(content).toLowerCase();
  const flags = [];
  if (/child|teen|youth|parent|gaming/.test(text)) flags.push("child-safety");
  if (/sextortion|exploitation|intimate|sexual/.test(text))
    flags.push("exploitation-and-safe-reporting");
  if (/bank|payment|financial|money/.test(text)) flags.push("financial-fraud");
  if (/recover|reportfraud|identitytheft|ic3|cybertip/.test(text))
    flags.push("recovery-and-reporting");
  return flags;
};
function entry(
  id,
  title,
  url,
  file,
  audience,
  type,
  content,
  sources,
  change,
  exposure,
) {
  const flags = classify(content);
  return {
    id,
    title,
    url,
    file,
    intendedAudience: audience,
    contentType: type,
    reviewStatus: "REQUIRES HUMAN REVIEW",
    contentSha256: hash(content),
    sources,
    sensitiveTopicFlags: flags,
    requiredReviewerExpertise: [
      "Foundation editorial/organizational authority",
      ...(flags.includes("child-safety") ||
      flags.includes("exploitation-and-safe-reporting")
        ? ["child-safety and safeguarding specialist"]
        : []),
      ...(flags.includes("financial-fraud") ||
      flags.includes("recovery-and-reporting")
        ? ["fraud prevention and reporting specialist"]
        : []),
    ],
    changesSinceBaseline: change,
    exposure,
    priorityBeforeRelease: flags.length
      ? "P0: review before release"
      : "P1: review before release",
  };
}
const entries = resources.map((r) => {
  const old = prior.find((p) => p.slug === r.slug);
  const fields = old
    ? Object.keys(r).filter((k) => canonical(r[k]) !== canonical(old[k]))
    : [];
  return entry(
    `resource:${r.slug}`,
    r.title,
    `/education/${r.slug}`,
    "data/resources.ts (composed catalog)",
    r.audience.map((id) => audiences.find((a) => a.id === id).label),
    "educational resource",
    r,
    [...r.sources, ...(r.helpLinks ?? [])],
    old
      ? { kind: "modified", fields, baselineContentSha256: hash(old) }
      : { kind: "new" },
    "Public route in candidate; release requires review",
  );
});
for (const h of handouts) {
  const r = resources.find((r) => r.slug === h.resource);
  entries.push(
    entry(
      `handout:${h.slug}`,
      h.title,
      null,
      "internal/handouts/data.ts",
      r.audience,
      "internal draft handout",
      h,
      [...r.sources, ...(r.helpLinks ?? [])],
      { kind: "new; previous candidate route removed" },
      "Internal only; previous /education/handouts URL now 404",
    ),
  );
}
for (const w of workshops)
  entries.push(
    entry(
      `workshop:${w.slug}`,
      w.title,
      null,
      `docs/training/${w.slug}.md`,
      [w.audience],
      "internal draft curriculum",
      w,
      w.resources.flatMap(
        (slug) => resources.find((r) => r.slug === slug).sources,
      ),
      { kind: "new" },
      "Internal only; no public route",
    ),
  );
for (const [path, title] of [
  ["/", "Homepage"],
  ["/education", "Education hub"],
  ["/programs", "Program pathways"],
  ["/research", "Research overview"],
  ["/about", "About"],
  ["/leadership", "Leadership"],
  ["/partner", "Partnerships"],
  ["/contact", "Contact"],
  ["/support", "Support"],
  ["/editorial-standards", "Editorial standards"],
]) {
  const file = path === "/" ? "app/page.tsx" : `app${path}/page.tsx`;
  const contentFiles = path === "/"
    ? [file, ...["Hero", "WhyItMatters", "WhatWeDo", "Programs", "ResearchImpact", "Partnerships", "SupportCTA"].map((name) => `components/${name}.tsx`)]
    : path === "/programs" ? [file, "data/program-pathways.ts"] : [file];
  contentFiles.push("components/Footer.tsx", "app/layout.tsx");
  const text = contentFiles.map((source) => ({ source, text: readFileSync(source, "utf8") }));
  const diff = execFileSync("git", ["diff", baseline, "--", file], {
    encoding: "utf8",
  });
  entries.push(
    entry(
      `page:${path}`,
      title,
      path,
      contentFiles.join("; "),
      ["General public / institutional partners"],
      "organizational page",
      text,
      [],
      {
        kind: diff
          ? "page source modified/new"
          : "shared metadata/navigation/template changes; page source unchanged",
      },
      "Public; verify institutional status and shared navigation",
    ),
  );
}
const manifest = {
  baselineCommit: baseline,
  preparedAt: "2026-10-08",
  note: "No human approval is asserted. Verify production deployment matches baseline before interpreting diffs. Regeneration does not overwrite decisions.",
  entries,
};
const json = JSON.stringify(manifest, null, 2) + "\n";
if (process.argv.includes("--check")) {
  if (readFileSync(`${dir}/editorial-manifest.json`, "utf8") !== json)
    throw new Error("Editorial manifest stale: run npm run review:manifest");
  console.log(
    `PASS review manifest: ${entries.length} current hashed records.`,
  );
} else {
  writeFileSync(`${dir}/editorial-manifest.json`, json);
  const decisionsFile = `${dir}/review-decisions.json`;
  if (!existsSync(decisionsFile))
    writeFileSync(
      decisionsFile,
      JSON.stringify(
        entries.map((e) => ({
          id: e.id,
          contentSha256: e.contentSha256,
          decision: "pending",
          reviewers: [],
          reviewedAt: null,
          notes: "",
        })),
        null,
        2,
      ) + "\n",
    );
  console.log(
    `Wrote ${entries.length} review entries; existing decisions preserved.`,
  );
}
