# Coding Standards

## Test Structure: Arrange-Act-Assert (AAA)

All tests should follow the **Arrange-Act-Assert (AAA)** pattern with clear comment markers:

- **Arrange**: Set up test data, create page objects, prepare the environment
- **Act**: Perform the action being tested
- **Assert**: Verify the expected outcome

### Guidelines

- Use `// Arrange`, `// Act`, and `// Assert` comments to mark each section
- For simple tests, you can combine `// Act & Assert` when the action and verification are tightly coupled
- Keep each section focused and clear

### Example

```typescript
test("should register new user", async ({ page }) => {
  // Arrange
  const registerPage = new RegisterPage(page);
  const email = "user@example.com";
  const password = "password123";

  // Act
  await registerPage.register(email, password);

  // Assert
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

### Basic Structure

```typescript
export class PageName {
  readonly page: Page;
  readonly elementName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.elementName = page.getByTestId("element-id");
  }

  async goto() {
    await this.page.goto("/page-path");
  }

  async performAction(param: string) {
    await this.elementName.fill(param);
  }
}
```

### Quick Reference

**✅ DO:**

- Use `readonly` for properties
- Prefer `getByTestId()` for locators (for stability and resilience to UI changes); use `getByRole()` or similar strategies when testing accessibility or user-facing roles
- Create methods for user actions
- Keep methods focused on single actions

**❌ DON'T:**

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
test("should register new user", async ({ page }) => {
  // Arrange
  const registerPage = new RegisterPage(page);

  // Act
  await registerPage.register("user@example.com", "password123");

  // Assert
  await expect(registerPage.successMessage).toBeVisible();
});
```
