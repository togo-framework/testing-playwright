# testing-playwright

**Playwright** end-to-end testing for [togo](https://to-go.dev) apps. Ships a ready
`playwright.config.ts` (desktop + mobile projects, optional `togo serve` web server)
and a starter `e2e/` suite that smoke-tests the welcome page, the REST API, and login.

## Install

```bash
togo install togo-framework/testing-playwright
npm i -D @playwright/test && npx playwright install
```

## Run

```bash
# against a running app
TOGO_BASE_URL=http://localhost:3000 npx playwright test
# or let Playwright boot the app
TOGO_WEB_SERVER=1 npx playwright test
npx playwright test --ui     # interactive
```

Pairs with the Go-side `github.com/togo-framework/testing` helpers for API/unit tests —
this covers the browser/e2e layer.

MIT © togo-framework
