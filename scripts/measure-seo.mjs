// Comparable local build measurements, not a reimplementation of Semrush.
import { readFileSync, writeFileSync } from "node:fs";
import { builtRoutes } from "./build-pages.mjs";
const decode = (s) => s.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"').replaceAll("&lt;", "<").replaceAll("&gt;", ">");
const text = (s) => decode(s.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, "").replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
const pages = builtRoutes.map((path) => {
  const html = readFileSync(`.next/server/app/${path === "/" ? "index" : path.slice(1)}.html`, "utf8");
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "";
  const scripts = [...html.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].map((m) => m[0]);
  const anchors = [...main.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "").matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((m) => decode(m[1]));
  const title = decode(html.match(/<title>(.*?)<\/title>/)?.[1] ?? "");
  const description = decode(html.match(/<meta name="description" content="([^"]+)"/)?.[1] ?? "");
  return { path, title, titleCharacters: title.length, description, descriptionCharacters: description.length,
    htmlBytes: Buffer.byteLength(html), scriptBytes: scripts.reduce((n, s) => n + Buffer.byteLength(s), 0),
    mainWords: text(main).split(/\s+/).filter(Boolean).length,
    textToHtmlPercent: Number((100 * Buffer.byteLength(text(html)) / Buffer.byteLength(html)).toFixed(2)),
    mainInternalLinks: [...new Set(anchors.filter((a) => a.startsWith("/") || a.startsWith("https://www.zorasafefoundation.org")))] };
});
for (const p of pages) p.incomingMainPages = pages.filter((other) => other.path !== p.path && other.mainInternalLinks.some((link) => new URL(link, "https://www.zorasafefoundation.org").pathname === p.path)).map((other) => other.path);
const output = { method: "Local prerendered HTML. Text removes scripts/styles/tags and normalizes whitespace; includes CSS-hidden text. Ratio is UTF-8 text bytes / HTML bytes, not Semrush's proprietary calculation. No network/Core Web Vitals score inferred.", publicPages: pages.length, pages };
if (process.argv[2]) writeFileSync(process.argv[2], JSON.stringify(output, null, 2) + "\n");
else console.log(JSON.stringify(output, null, 2));
