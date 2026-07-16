# Coding Standards

## Test Structure: Arrange-Act-Assert (AAA)

All tests should follow the **Arrange-Act-Assert (AAA)** pattern:

- **Arrange**: Set up test data, create page objects, prepare the environment
- **Act**: Perform the action being tested
- **Assert**: Verify the expected outcome

### Guidelines

- Separate the three phases with blank lines — no `// Arrange`, `// Act`, `// Assert` comment markers needed
- Structure should be self-evident from the code
- Keep each section focused and clear

### Example

```typescript
test('should register new user', async ({ page }) => {
	const registerPage = new RegisterPage(page);
	const email = 'user@example.com';
	const password = 'password123';

	await registerPage.register(email, password);

	await expect(registerPage.successMessage).toBeVisible();
});
```

## Page Object Pattern

### Essential Rules

**1. No assertions in Page Objects**

- Page Objects should NEVER contain `expect()` statements
- All verifications belong in test files (`*.spec.ts`) only

**2. Page Objects provide interface, tests verify behavior**

- Page Objects: Define locators and action methods
- Test files: Use Page Objects and add assertions

### BasePage

All Page Objects extend `BasePage`, which owns `page: Page`, `PAGE_URL`, and `goto()`.
Each page declares its route as `readonly PAGE_URL = PAGE_URLS.<KEY>` — a value from the centralized constants.

```typescript
// src/constants/pageUrls.ts
export const PAGE_URLS = {
	HOME: '/',
	LOGIN: '/login.html',
	// ...
} as const;

// src/pages/base.page.ts
export abstract class BasePage {
	abstract readonly PAGE_URL: string;
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async goto() {
		await this.page.goto(this.PAGE_URL);
	}
}

// src/pages/example.page.ts
export class ExamplePage extends BasePage {
	readonly PAGE_URL = PAGE_URLS.EXAMPLE;
	readonly elementName: Locator;

	constructor(page: Page) {
		super(page);
		this.elementName = page.getByTestId('element-id');
	}

	async performAction(param: string) {
		await this.elementName.fill(param);
	}
}
```

### Quick Reference

**✅ DO:**

- Extend `BasePage` and declare `readonly PAGE_URL = PAGE_URLS.<KEY>`
- Use `readonly` for properties
- Prefer `getByTestId()` for locators (for stability and resilience to UI changes); use `getByRole()` or similar strategies when testing accessibility or user-facing roles
- Create methods for user actions
- Keep methods focused on single actions

**❌ DON'T:**

- Duplicate `page` property or `goto()` — they live in `BasePage`
- Hard-code URL strings in page objects — use `PAGE_URLS` constants
- Include `expect()` in Page Objects
- Add test logic or validations in Page Objects

### Example

**Page Object (no `expect()`):**

```typescript
async register(email: string, password: string) {
  await this.emailInput.fill(email);
  await this.passwordInput.fill(password);
  await this.registerSubmitBtn.click();
}
```

**Test File (all `expect()` here):**

```typescript
test('should register new user', async ({ page }) => {
	const registerPage = new RegisterPage(page);

	await registerPage.register('user@example.com', 'password123');

	await expect(registerPage.successMessage).toBeVisible();
});
```
