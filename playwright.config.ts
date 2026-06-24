import { defineConfig, devices } from "@playwright/test";

// E2E config for a togo app. Point TOGO_BASE_URL at the running web (default :3000).
// Set TOGO_WEB_SERVER=1 to have Playwright start `togo serve` for you.
const baseURL = process.env.TOGO_BASE_URL || "http://localhost:3000";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "html",
  use: { baseURL, trace: "on-first-retry" },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: process.env.TOGO_WEB_SERVER
    ? { command: "togo serve", url: baseURL, reuseExistingServer: !process.env.CI, timeout: 120_000 }
    : undefined,
});
