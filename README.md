<!-- togo-header -->
<div align="center">
  <img src=".github/assets/togo-mark.svg" alt="togo" height="64" />
  <h1>togo-framework/testing-playwright</h1>
  <p>
    <a href="https://to-go.dev/marketplace"><img src="https://img.shields.io/badge/marketplace-to--go.dev-1FC7DC" alt="marketplace" /></a>
    <a href="https://pkg.go.dev/github.com/togo-framework/testing-playwright"><img src="https://pkg.go.dev/badge/github.com/togo-framework/testing-playwright.svg" alt="pkg.go.dev" /></a>
    <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT" />
  </p>
  <p><strong>Part of the <a href="https://to-go.dev">togo</a> framework.</strong></p>
</div>

## Install

```bash
togo install togo-framework/testing-playwright
```

<!-- /togo-header -->

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

<!-- togo-sponsors -->
---

<div align="center">
  <h3>Premium sponsors</h3>
  <p>
    <a href="https://id8media.com"><strong>ID8 Media</strong></a> &nbsp;·&nbsp;
    <a href="https://one-studio.co"><strong>One Studio</strong></a>
  </p>
  <p><sub>Support togo — <a href="https://github.com/sponsors/fadymondy">become a sponsor</a>.</sub></p>
</div>
<!-- /togo-sponsors -->
