import { test, expect } from "@playwright/test";
import { createHash } from "node:crypto";
import { writeFileSync } from "node:fs";
import fixture from "../fixtures/held-assets.json";

const normalize = (text: string) => text.replace(/\s+/g, " ").trim();
const sha256 = (text: string) => createHash("sha256").update(text).digest("hex");

test("asset hotfix preserves homepage copy and links across viewports", async ({ page }, info) => {
  const failures: string[] = [];
  page.on("pageerror", (error) => failures.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400) failures.push(`${response.status()} ${response.url()}`);
  });
  expect((await page.goto("/"))?.status()).toBe(200);
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.evaluate(() => document.fonts.ready);
    expect(sha256(normalize((await page.locator("main").textContent())!))).toBe(fixture.homepage.textSha256);
    const links = await page.locator("a").evaluateAll((nodes) => nodes.map((node) => ({
      text: node.textContent!.replace(/\s+/g, " ").trim(), href: node.getAttribute("href"),
    })));
    expect(sha256(JSON.stringify(links))).toBe(fixture.homepage.linksSha256);
    await expect(page.locator("main img")).toHaveCount(0);
    await expect(page.locator(".hero-mark svg")).toBeVisible();
    await expect(page.locator(".program-grid article")).toHaveCount(4);
    await expect(page.locator(".research-steps li")).toHaveCount(3);
    for (const property of ["og:image", "twitter:image"]) {
      await expect(page.locator(`meta[property="${property}"],meta[name="${property}"]`)).toHaveAttribute(
        "content", "https://www.zorasafefoundation.org/brand/zorasafe-foundation-social1.png",
      );
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
    await page.screenshot({ path: info.outputPath(`home-${width}.png`), fullPage: true, scale: "css" });
  }
  expect(failures).toEqual([]);
});

test("held originals, hashed copies and observed optimized variants are unavailable", async ({ request }, info) => {
  const results = [];
  for (const path of fixture.exposedPaths) {
    for (const method of ["GET", "HEAD"]) {
      const response = await request.fetch(path, { method });
      expect(response.status(), `${method} ${path}`).toBe(404);
      expect(response.headers()["content-type"] ?? "").not.toMatch(/^image\//);
      results.push({ method, path, status: response.status() });
    }
  }
  const approved = await request.get("/brand/zorasafe-foundation-social1.png");
  expect(approved.status()).toBe(200);
  expect(approved.headers()["content-type"]).toMatch(/^image\/png/);
  for (const path of ["/privacy", "/terms", "/internal/legal/privacy-draft.md", "/internal/legal/terms-draft.md"])
    expect((await request.get(path)).status()).toBe(404);
  writeFileSync(info.outputPath("removed-asset-responses.json"), JSON.stringify(results, null, 2));
});
