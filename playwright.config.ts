import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  retries: 0,
  outputDir:
    process.env.PLAYWRIGHT_OUTPUT_DIR ??
    "/tmp/sandra-portfolio-playwright-results",
  reporter: "list",
  use: {
    baseURL: process.env.PORTFOLIO_URL ?? "http://127.0.0.1:3210",
    reducedMotion: "reduce",
  },
  projects: [
    {
      name: "chromium-desktop",
      use: { browserName: "chromium", viewport: { width: 1440, height: 1000 } },
    },
    {
      name: "chromium-phone",
      use: {
        browserName: "chromium",
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: "chromium-tablet",
      use: {
        browserName: "chromium",
        viewport: { width: 768, height: 1024 },
        hasTouch: true,
      },
    },
    {
      name: "webkit-desktop",
      use: { browserName: "webkit", viewport: { width: 1280, height: 900 } },
    },
  ],
  webServer: process.env.PORTFOLIO_URL
    ? undefined
    : {
        command: "npm run start -- --hostname 127.0.0.1 --port 3210",
        url: "http://127.0.0.1:3210",
        reuseExistingServer: false,
        timeout: 60000,
      },
});
