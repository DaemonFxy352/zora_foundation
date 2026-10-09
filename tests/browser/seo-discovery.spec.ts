import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

test("Google ownership file survives a feature release unchanged", async ({ request }) => {
  const original = readFileSync("public/google36b500dfad230655.html");
  // Hash of Google's original downloaded file, independently matched to production.
  expect(createHash("sha256").update(original).digest("hex")).toBe("28d66e818535e1f7825b02953456f33d956eea2aea7058cf35ad25f8a45263b5");
  const response = await request.get("/google36b500dfad230655.html", { maxRedirects: 0 });
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("text/html");
  expect(await response.body()).toEqual(original);
});

test("program pathways are usable on desktop and mobile", async ({ page }, info) => {
  await page.goto("/programs");
  await expect(page.getByRole("heading", { name: "Read a guide now; help shape a future workshop." })).toBeVisible();
  await expect(page.locator("main")).toContainText("Workshops are not currently scheduled or bookable.");
  await expect(page.locator(".program-facts")).toHaveCount(5);
  const pathways = page.getByRole("navigation", { name: "Program development pathways" });
  await expect(pathways.getByRole("link")).toHaveCount(5);
  await pathways.getByRole("link", { name: "School, youth, and teen education" }).click();
  await expect(page).toHaveURL(/#school-education$/);
  await expect(page.locator("#school-education")).toBeInViewport();
  for (const width of [1440, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
    // Full-page evidence should place the sticky header at the document start.
    await page.locator("main").focus();
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({ path: info.outputPath(`programs-${width}.png`), fullPage: true });
  }
});

test("education, guide navigation, and evidence are readable without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL: "http://127.0.0.1:3100" });
  const page = await context.newPage();
  try {
    await page.goto("/education");
    await expect(page.locator("#resource-results h3 a")).toHaveCount(17);
    await page.getByRole("link", { name: "Check an urgent call that sounds like someone you know" }).click();
    await expect(page).toHaveURL(/\/education\/ai-impersonation$/);
    await expect(page.locator("h1")).toHaveText("What is AI impersonation fraud?");
    await page.getByRole("navigation", { name: "On this guide" }).getByRole("link", { name: "If it already happened" }).click();
    await expect(page.locator("#recovery-help")).toBeInViewport();
    await expect(page.locator("#sources a").first()).toHaveAttribute("href", /^https:/);
    await expect(page.locator("main")).not.toContainText("Content reviewed");
  } finally { await context.close(); }
});

test("llms directory is exact public text; crawler permissions stay unchanged", async ({ request }) => {
  const res = await request.get("/llms.txt");
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toContain("text/plain");
  expect(await res.text()).toBe(readFileSync("public/llms.txt", "utf8"));
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toBe("User-Agent: *\nAllow: /\n\nSitemap: https://www.zorasafefoundation.org/sitemap.xml\n");
});
