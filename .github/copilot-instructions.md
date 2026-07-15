# Copilot Instructions

## Playwright Test Framework

This repository uses the Playwright Test framework for automated tests.

When creating or modifying tests, review [playwright.config.ts](../playwright.config.ts) first so the test follows the current project settings, including `baseURL`, `timeout`, `retries`, `projects`, and reporter behavior.

## Conventional Commits

Commit messages must use the format: `type(scope): description`

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`, `perf`

Rules:

- Lowercase type and description, imperative mood, no period
- Scope is optional (e.g., `tests`, `config`, `api`)
- Header under 72 characters

Examples:

```
feat(api): add user authentication endpoint
fix(tests): correct flaky timeout in smoke suite
chore: remove unused lesson directories
```

## Arrange Act Assert

Structure every test using the AAA pattern with `// Arrange`, `// Act`, and `// Assert` comments.

Rules:

- **Arrange** — navigation, test data setup, and any preconditions
- **Act** — user interactions (fill, click, etc.); omit this section when the test has no interaction
- **Assert** — all `expect` calls

Example:

```typescript
test(
  'should register a new user successfully',
  { tag: ['@registration', '@smoke'] },
  async ({ page }) => {
    // Arrange
    await page.goto('/register.html');
    const testEmail = `user${Date.now()}@example.com`;

    // Act
    await page.getByTestId('email-input').fill(testEmail);
    await page.getByTestId('register-submit-btn').click();

    // Assert
    await expect(page).toHaveURL(/\/login\.html$/);
  },
);
```

When there is no user interaction (e.g. a field visibility check), omit `// Act`:

```typescript
test(
  'should show email input on registration form',
  { tag: ['@registration', '@ui'] },
  async ({ page }) => {
    // Arrange
    await page.goto('/register.html');

    // Assert
    await expect(page.getByTestId('email-input')).toBeVisible();
  },
);
```

## Test Tagging

When creating or modifying tests, always use tags defined in [TEST_PLAN.md](../TEST_PLAN.md#test-plan-and-tagging-system).

Rules:

- Every test must have at least one tag from the test plan
- Use `test.describe` or `test` with tag annotations: `{ tag: ['@smoke', '@critical'] }`
- Tags must match the test area (e.g., `@auth` for authentication, `@farm` for farm management)
- Combine area tags with type tags (e.g., `@auth` + `@login`, `@marketplace` + `@crud`)
- Do not invent new tags — use only those listed in TEST_PLAN.md
- New: Use the tag format `#sym:## Test Plan and Tagging System` when creating tests, and keep the reference to [TEST_PLAN.md](../TEST_PLAN.md#test-plan-and-tagging-system) updated if the test plan changes.

Available tag categories from TEST_PLAN.md:

- **Smoke**: `@smoke`, `@critical`, `@navigation`, `@api`
- **Authentication**: `@auth`, `@registration`, `@login`, `@session`, `@logout`, `@rbac`, `@permissions`, `@validation`
- **Farm Management**: `@farm`, `@crud`, `@fields`, `@animals`, `@staff`, `@assignments`, `@business-logic`, `@edge-case`
- **Marketplace**: `@marketplace`, `@offers`, `@purchase`, `@happy-path`, `@ownership`, `@cancel`, `@status`
- **Financial**: `@financial`, `@balance`, `@history`, `@transfer`, `@transactions`
- **E2E**: `@e2e`, `@farm-setup`, `@marketplace-flow`, `@user-journey`

Example:

```typescript
test(
	'user can login with valid credentials',
	{ tag: ['@auth', '@login', '@happy-path'] },
	async ({ page }) => {
		// test implementation
	},
);
```
