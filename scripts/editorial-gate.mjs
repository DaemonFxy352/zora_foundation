import { readFileSync } from "node:fs";
const dir = "docs/release/phase4-20261008";
const { entries } = JSON.parse(
  readFileSync(`${dir}/editorial-manifest.json`, "utf8"),
);
const decisions = JSON.parse(
  readFileSync(`${dir}/review-decisions.json`, "utf8"),
);
if (new Set(decisions.map((d) => d.id)).size !== decisions.length)
  throw new Error("Duplicate review decisions");
let blocked = 0;
for (const e of entries.filter((e) => e.url)) {
  const d = decisions.find((d) => d.id === e.id);
  const date = d?.reviewedAt;
  const validDate =
    typeof date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(date) &&
    Number.isFinite(Date.parse(date)) &&
    new Date(date).toISOString().slice(0, 10) === date;
  const missing = e.requiredReviewerExpertise.filter(
    (role) => !d?.reviewers.some((r) => r.name?.trim() && r.expertise === role),
  );
  if (
    d?.decision !== "approve" ||
    d?.contentSha256 !== e.contentSha256 ||
    !validDate ||
    missing.length
  ) {
    console.log(`REQUIRES HUMAN REVIEW: ${e.id}`);
    blocked++;
  }
}
console.log(
  blocked
    ? `NO-GO: ${blocked} public entries lack current documented approvals.`
    : "Documented public approvals present. Browser and owner deployment gates still apply.",
);
process.exitCode = blocked ? 1 : 0;
