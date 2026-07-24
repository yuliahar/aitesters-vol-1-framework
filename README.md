# AI_Testers — Vol. 1 Framework

A Playwright + TypeScript test-automation framework built step by step during the **AI_Testers** program. The root is a working framework (page objects, tests, CI); each folder under [`lessons/`](lessons/) is a self-contained snapshot of the framework at a given point in the course. The system under test is the **Rolnopol** demo app on `http://localhost:3000`.

## Getting Started

Requires [Node.js](https://nodejs.org/) 18+ and the Rolnopol app running on `http://localhost:3000` (provided with the course).

```bash
npm install              # install dependencies
npx playwright install   # install browsers
```

## Running Tests

```bash
npm test                              # run the suite (headless)
npx playwright test --headed          # headed mode
npx playwright test --grep @smoke     # filter by tag
npx playwright show-report            # open the last HTML report
```

Test configuration lives in [`playwright.config.ts`](playwright.config.ts).

## Working with a Lesson

Each lesson under [`lessons/`](lessons/) is its own project — open the folder, then install and run from there:

```bash
cd lessons/D01_init_framework/L09-instructions_for_ai
npm install && npm test
```

## Documentation

- [`CODING_STANDARDS.md`](CODING_STANDARDS.md) — test structure and style conventions
- [`TEST_PLAN.md`](TEST_PLAN.md) — Rolnopol test plan and tagging system
- [Playwright docs](https://playwright.dev/docs/intro) — official Playwright documentation
