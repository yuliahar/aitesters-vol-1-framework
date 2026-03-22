# Rolnopol-ATF

This repository contains the code for the Rolnopol-ATF framework (Rolnopol Automated Testing Framework) created during the AI_Testers course.

## Tested application

Repository: https://github.com/jaktestowac/rolnopol

To install and run application, follow instructions in rolnopol README.

## Prepare

### Local recommended tools:

- VS Code
- Git
- Node.js (version >20)

### Installation and setup

To prepare the project, follow these steps:

- (optional) install VSC recommended plugins
- install dependencies: `npm install`
- setup Playwright with: `npx playwright install --with-deps chromium`
- run tests to check if everything is working: `npx playwright test`

## Use

Run all tests:

```
npx playwright test
```

Run all tests with tags:

```
npx playwright test --grep "@smoke"
```

Run all tests without tags:

```
npx playwright test --grep-invert "@smoke"
```

For more usage cases look in `package.json` scripts section.
