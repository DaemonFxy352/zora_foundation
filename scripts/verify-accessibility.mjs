import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const css = readFileSync("app/globals.css", "utf8");
const interior = readFileSync("app/interior.css", "utf8");
const color = (name) => {
  const value = css.match(new RegExp(`--${name}:\\s*(#[a-f0-9]{6})`, "i"))?.[1];
  assert.ok(value, `Missing color token ${name}`);
  return value;
};
const luminance = (hex) => {
  const rgb = hex
    .slice(1)
    .match(/../g)
    .map((v) => parseInt(v, 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
};
for (const foreground of ["navy", "body", "teal-deep"]) {
  for (const background of ["#ffffff", color("soft-mint"), color("paper")]) {
    const values = [luminance(color(foreground)), luminance(background)].sort(
      (a, b) => b - a,
    );
    const contrast = (values[0] + 0.05) / (values[1] + 0.05);
    assert.ok(contrast >= 4.5, `${foreground} on ${background}: ${contrast}`);
    console.log(
      `PASS text palette: ${foreground} on ${background} ${contrast.toFixed(2)}:1`,
    );
  }
}
assert.ok(css.includes(":focus-visible"));
assert.ok(interior.includes("@page handout"));
assert.ok(interior.includes("size: letter"));
assert.ok(interior.includes("min-height: 48px"));
const html = readFileSync(".next/server/app/education.html", "utf8");
assert.ok(html.includes('type="search"'));
assert.ok(
  html.includes('<label for="resource-search">Search resources</label>'),
);
assert.ok(html.includes('id="resource-search"'));
assert.ok(html.includes('aria-describedby="search-help"'));
assert.ok(html.includes('id="search-help"'));
assert.ok(html.includes('role="status"'));
assert.ok(html.includes('aria-live="polite"'));
console.log(
  "PASS static search markup, palette contrast, focus/print declarations. Not browser, screen-reader, zoom, or computed-layout validation.",
);
