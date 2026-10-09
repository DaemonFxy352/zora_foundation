import { builtRoutes } from "./build-pages.mjs";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

// Exercise the emitted production pages, not a separate mock renderer.
const root = ".next/server/app";
const routes = builtRoutes;
const pages = new Map(
  routes.map((route) => [
    route,
    readFileSync(
      join(root, route === "/" ? "index.html" : `${route.slice(1)}.html`),
      "utf8",
    ),
  ]),
);
const attr = (tag, name) =>
  tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`))?.[1];
const tags = (html, name) =>
  [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "g"))].map(
    (match) => match[0],
  );
const origin = "https://www.zorasafefoundation.org";
const image = `${origin}/brand/zorasafe-foundation-social1.png`;
for (const [route, html] of pages) {
  assert.equal(tags(html, "main").length, 1, `${route}: main landmark`);
  assert.equal(tags(html, "h1").length, 1, `${route}: H1`);
  const levels = [...html.matchAll(/<h([1-6])\b/g)].map((m) => Number(m[1]));
  assert.equal(levels[0], 1, `${route}: first heading`);
  assert.ok(
    levels.every((level, i) => i === 0 || level <= levels[i - 1] + 1),
    `${route}: heading order`,
  );
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${route}: duplicate IDs`);
  for (const tag of tags(html, "img"))
    assert.ok(attr(tag, "alt"), `${route}: missing image alt`);
  for (const [, targets] of html.matchAll(
    /aria-(?:labelledby|controls)="([^"]+)"/g,
  ))
    for (const id of targets.split(" "))
      assert.ok(ids.includes(id), `${route}: missing ARIA target ${id}`);
  const head = html.split("</head>")[0];
  const meta = new Map(
    tags(head, "meta").map((tag) => [
      attr(tag, "property") ?? attr(tag, "name"),
      attr(tag, "content"),
    ]),
  );
  {
    const canonical = tags(head, "link").find(
      (tag) => attr(tag, "rel") === "canonical",
    );
    assert.equal(
      attr(canonical, "href")?.replace(/\/$/, ""),
      `${origin}${route === "/" ? "" : route}`,
      `${route}: canonical`,
    );
    assert.equal(
      meta.get("og:url")?.replace(/\/$/, ""),
      `${origin}${route === "/" ? "" : route}`,
      `${route}: OG URL`,
    );
    assert.ok(meta.get("description"), `${route}: description`);
    assert.ok(meta.get("og:title"), `${route}: OG title`);
    assert.ok(meta.get("twitter:title"), `${route}: Twitter title`);
    assert.equal(meta.get("og:image"), image);
    assert.equal(meta.get("twitter:image"), image);
    assert.equal(meta.get("twitter:card"), "summary_large_image");
  }
  for (const tag of tags(html, "a")) {
    const href = attr(tag, "href");
    assert.ok(href && href !== "#", `${route}: empty link`);
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const url = new URL(href.replaceAll("&amp;", "&"), `${origin}${route}`);
    if (pages.has(url.pathname)) {
      if (url.hash)
        assert.ok(
          pages.get(url.pathname).includes(`id="${url.hash.slice(1)}"`),
          `${route}: missing target ${href}`,
        );
    } else
      assert.ok(
        existsSync(join("public", decodeURIComponent(url.pathname))),
        `${route}: broken link ${href}`,
      );
  }
  if (
    route.startsWith("/education/") &&
    !route.startsWith("/education/handouts/")
  ) {
    for (const text of [
      "Key warning signs",
      "What to do",
      "What not to do",
      "When to get help",
      "Try it together",
      "Sources &amp; further reading",
      "Print or save as PDF",
      "Keep learning",
    ])
      assert.ok(html.includes(text), `${route}: missing ${text}`);
    assert.ok(
      html.includes('class="print-brand"'),
      `${route}: printable branding`,
    );
  }
  if (route.startsWith("/education/handouts/")) {
    for (const text of [
      "Printable draft handout",
      "review pending",
      "Steps to use",
      "Put it into practice",
      "If it already happened",
      "Help and limits",
      "Sources and full guidance",
      "Print or save as PDF",
    ])
      assert.ok(html.includes(text), `${route}: handout missing ${text}`);
    assert.ok(html.includes('class="print-brand"'));
  }
  assert.ok(
    !/Lorem ipsum|TODO|\uFFFD/.test(html),
    `${route}: placeholder/encoding artifact`,
  );
  console.log(
    `PASS ${route}: metadata, landmarks, image alt text, links, ARIA targets${route.startsWith("/education/handouts/") ? ", draft handout sections" : route.startsWith("/education/") ? ", guide sections" : ""}`,
  );
}
console.log(`Verified ${pages.size} production pages.`);
