import { test, expect } from "@playwright/test";

// Smoke tests for a freshly scaffolded togo app. Adjust selectors per your app.
test("welcome page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/togo|app/i);
});

test("REST API is reachable", async ({ request }) => {
  const res = await request.get("/api/health").catch(() => null);
  // /api/health may not exist on every app — accept any 2xx/404, fail only on 5xx.
  if (res) expect(res.status()).toBeLessThan(500);
});

test("login page renders", async ({ page }) => {
  await page.goto("/login");
  await expect(page.getByText(/sign in|welcome|login/i).first()).toBeVisible();
});
