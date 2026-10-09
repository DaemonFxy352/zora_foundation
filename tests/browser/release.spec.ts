import { test, expect } from "@playwright/test";
const routes = [
  "/",
  "/education",
  "/education/internet-safety-parents",
  "/education/teen-online-safety",
  "/education/online-safety-older-adults",
  "/education/payment-redirection",
  "/programs",
  "/partner",
  "/contact",
  "/research",
];
for (const route of routes) {
  test(`readable and navigable ${route}`, async ({ page }, info) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page.locator("main h1")).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth + 1,
      ),
    ).toBe(true);
    await expect(page.getByRole("contentinfo")).toBeVisible();
    await expect(
      page
        .getByRole("contentinfo")
        .getByRole("link", { name: "Contact", exact: true }),
    ).toHaveAttribute("href", "/contact");
    expect(errors).toEqual([]);
    await page.screenshot({
      path: info.outputPath(`${route.replaceAll("/", "-") || "home"}.png`),
      fullPage: true,
    });
  });
}
test("search, audiences, combined filters, empty and reset states", async ({
  page,
}) => {
  await page.goto("/education");
  const search = page.getByRole("searchbox", {
    name: "Search resources",
    exact: true,
  });
  await expect(search).toBeVisible();
  await search.fill("family verification");
  await expect(page.locator("#resource-results")).toContainText(
    "Verify before you trust",
  );
  await search.fill("zzzz-no-result");
  await expect(
    page.getByRole("heading", {
      name: "No resources match these filters yet.",
    }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await expect(search).toHaveValue("");
  await expect(page.getByRole("status")).toHaveText("17 resources available");
  await page.getByRole("combobox", { name: "Audience", exact: true }).selectOption("teenagers");
  await page.getByRole("combobox", { name: "Topic", exact: true }).selectOption("privacy");
  await expect(page.locator("#resource-results")).toContainText(
    "Teen online safety",
  );
  await search.fill("gaming");
  await expect(page.locator("#resource-results")).toContainText("Gaming scams");
  await page.getByRole("button", { name: "Reset filters" }).click();
  await page
    .getByRole("combobox", { name: "Audience", exact: true })
    .selectOption("older-adults");
  await expect(page.locator("#resource-results")).toContainText(
    "Online safety for older adults",
  );
  await expect(page.locator('a[href*="/handouts/"]')).toHaveCount(0);
  await expect(
    page
      .getByRole("combobox", { name: "Format", exact: true })
      .locator('option[value="handout"]'),
  ).toHaveCount(0);
});
test("keyboard navigation, mobile menu and focus", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to main content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
  const menu = page.getByRole("button", { name: "Menu", exact: false });
  if (await menu.isVisible()) {
    await menu.click();
    await expect(menu).toHaveAttribute("aria-expanded", "true");
  }
  const group = page.getByRole("button", { name: "What We Do", exact: true });
  await group.focus();
  await page.keyboard.press("Enter");
  await expect(group).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(group).toBeFocused();
  await expect(group).toHaveAttribute("aria-expanded", "false");
  expect(
    await group.evaluate((el) => getComputedStyle(el).outlineStyle),
  ).not.toBe("none");
  await page.keyboard.press("Enter");
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Education & Resources", exact: true })
    .click();
  await expect(page).toHaveURL(/\/education$/);
});
test("pathway inquiry links and local contact flows", async ({ page }) => {
  await page.goto("/programs#community-pathways");
  await expect(page.locator("#community-pathways")).toContainText(
    "not scheduled or bookable",
  );
  await page
    .locator('#community-pathways a[href="/contact#training"]')
    .first()
    .click();
  await expect(page).toHaveURL(/\/contact#training$/);
  await expect(page.locator("#training")).toBeVisible();
  await expect(page.locator('main a[href^="mailto:"]').first()).toHaveAttribute(
    "href",
    /hello@zorasafefoundation.org/,
  );
});
test("reflow at 200 percent zoom equivalent and 320 CSS pixels", async ({
  page,
}, info) => {
  // Browser zoom reduces the CSS viewport and activates responsive breakpoints.
  // CSS zoom on <html> leaves media queries at 1280px, so it is not an
  // equivalent simulation. 640px models 200% zoom from a 1280px viewport;
  // 320px additionally checks the WCAG reflow width. Native zoom stays manual.
  for (const width of [640, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/education");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("searchbox")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth + 1,
      ),
    ).toBe(true);
    await expect(page.getByRole("button", { name: "Menu", exact: false })).toBeVisible();
    await page.screenshot({
      path: info.outputPath(`education-reflow-${width}.png`),
      fullPage: true,
    });
  }
});
test("print styles and Letter PDF artifact", async ({ page }, info) => {
  test.skip(
    info.project.name !== "desktop",
    "PDF output is checked once in Chromium",
  );
  await page.goto("/education/teen-online-safety");
  await page.emulateMedia({ media: "print" });
  await expect(page.locator(".site-header")).toBeHidden();
  await expect(page.locator(".site-footer")).toBeHidden();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator(".resource-sources")).toBeVisible();
  await page.pdf({
    path: info.outputPath("teen-guide-letter.pdf"),
    format: "Letter",
    printBackground: false,
  });
});
test("draft and internal URLs return real 404s", async ({ request }) => {
  for (const path of [
    "/education/handouts/family-verification",
    "/internal/handouts/data.ts",
    "/data/workshop-drafts.json",
    "/docs/training/teen-digital-safety.md",
    "/research/unpublished-example",
  ])
    expect((await request.get(path)).status()).toBe(404);
});
