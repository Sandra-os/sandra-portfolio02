import { expect, test } from "@playwright/test";

const legacy = [
  "bloomfit-fitness-tracker",
  "task-manager-app",
  "real-time-product-marking",
  "uart-design",
  "32-bit-processor",
];

test("Home → case study → public Play destination; private case study stays restricted", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  await page.goto("/");
  await expect(page).toHaveTitle("Sandra Ogbudinkpa | Software Engineer");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "reliable full-stack products",
  );
  await page
    .getByRole("link", { name: "View selected work", exact: true })
    .click();
  await expect(page).toHaveURL(/#selected-work$/);
  await page
    .getByRole("link", { name: "Read Petal Relay case study", exact: false })
    .click();
  await expect(page).toHaveURL(/\/projects\/petal-relay$/);
  await expect(
    page.getByRole("heading", { name: "Petal Relay", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Play Petal Relay", exact: false }),
  ).toHaveAttribute("href", "https://petal-relay.vercel.app/");
  await expect(page.getByText(/isolated rerun passed/)).toBeVisible();
  await page.getByRole("link", { name: "Next: KinOS", exact: false }).click();
  await expect(
    page.getByRole("heading", { name: "KinOS", exact: true }),
  ).toBeVisible();
  await expect(page.getByText("Source private", { exact: true })).toBeVisible();
  const links = await page
    .locator("main a[href]")
    .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")));
  expect(
    links.every((href) => href?.startsWith("/") || href?.startsWith("#")),
  ).toBe(true);
  expect(errors).toEqual([]);
});

test("retained routes, local links, meaningful 404, and responsive layout", async ({
  page,
  request,
}) => {
  for (const route of [
    "/",
    "/projects",
    "/projects/petal-relay",
    "/projects/kinos",
    "/about",
    "/experience",
    "/skills",
    "/resume",
    "/blog",
    "/contact",
    ...legacy.map((s) => `/projects/${s}`),
  ]) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("main h1")).toHaveCount(1);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
      route,
    ).toBe(true);
    const targets = await page
      .locator("a[href^='/']")
      .evaluateAll((nodes) => [
        ...new Set(nodes.map((n) => n.getAttribute("href")!.split("#")[0])),
      ]);
    for (const target of targets)
      expect(
        (await request.get(target)).status(),
        `${route} -> ${target}`,
      ).toBe(200);
    for (const image of await page.locator("img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(
          () => image.evaluate((img) => (img as HTMLImageElement).naturalWidth),
          { message: route },
        )
        .toBeGreaterThan(0);
    }
  }
  expect((await page.goto("/projects/does-not-exist"))?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: /not found|lost|find/i }).first(),
  ).toBeVisible();
});

test("resume PDF downloads; contact uses the real email with a webmail fallback", async ({
  page,
  request,
}) => {
  await page.goto("/resume");
  const link = page
    .getByRole("link", { name: /download.*pdf|download.*resume/i })
    .first();
  const href = await link.getAttribute("href");
  expect(href).toBe("/resume/sandra-ogbudinkpa-resume-2026.pdf");
  const pdf = await request.get(href!);
  expect(pdf.status()).toBe(200);
  expect(pdf.headers()["content-type"]).toContain("application/pdf");
  expect((await pdf.body()).subarray(0, 5).toString()).toBe("%PDF-");
  const downloadPromise = page.waitForEvent("download");
  await link.click();
  expect((await downloadPromise).suggestedFilename()).toContain("resume");
  await page.goto("/contact");
  await expect(
    page.locator("main a[href='mailto:sandra.os325@gmail.com']"),
  ).toBeVisible();
  await expect(page.getByText(/If you use webmail/)).toBeVisible();
  await expect(page.locator("form")).toHaveCount(0);
});

test("keyboard entry, visible focus, reduced motion and mobile disclosure", async ({
  page,
  browserName,
}, testInfo) => {
  await page.goto("/");
  await page.keyboard.press(browserName === "webkit" ? "Alt+Tab" : "Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeInViewport();
  expect(
    await page.evaluate(
      () => getComputedStyle(document.activeElement!).outlineStyle,
    ),
  ).not.toBe("none");
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  if (testInfo.project.name === "chromium-phone") {
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("button", { name: "Open navigation menu" }),
    ).toBeFocused();
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeHidden();
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Contact", exact: true })
      .click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeHidden();
  }
});

test("canonical URLs, social text, sitemap and factual structured data", async ({
  page,
  request,
}) => {
  for (const route of [
    "/",
    "/projects",
    "/projects/petal-relay",
    "/projects/kinos",
    "/resume",
    "/contact",
    "/blog",
    "/about",
    "/skills",
    "/experience",
  ]) {
    await page.goto(route);
    await expect(page.locator("link[rel='canonical']")).toHaveAttribute(
      "href",
      `https://sandra-ogbudinkpa.vercel.app${route === "/" ? "" : route}`,
    );
    await expect(
      page.locator("meta[property='og:description']"),
    ).toHaveAttribute("content", /.+/);
    const person = JSON.parse(
      await page.locator("script[type='application/ld+json']").innerText(),
    );
    expect(person.name).toBe("Sandra Ogbudinkpa");
    expect(person).not.toHaveProperty("worksFor");
  }
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  for (const slug of ["petal-relay", "kinos", ...legacy])
    expect(await sitemap.text()).toContain(`/projects/${slug}`);
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain(
    "Sitemap: https://sandra-ogbudinkpa.vercel.app/sitemap.xml",
  );
});
