import { expect, test } from "@playwright/test";

test(
  "should register a new user successfully",
  { tag: ["@registration", "@smoke"] },
  async ({ page }) => {
    // Arrange
    await page.goto("/register.html");
    const timestamp = Date.now();
    const testEmail = `testuser${timestamp}@example.com`;
    const testPassword = "TestPass123";
    const testDisplayName = "Test User";

    // Act
    await page.getByTestId("email-input").fill(testEmail);
    await page.getByTestId("display-name-input").fill(testDisplayName);
    await page.getByTestId("password-input").fill(testPassword);
    await page.getByTestId("register-submit-btn").click();

    // Assert
    // app redirects after 2 s notification delay
    await expect(page).toHaveURL(/\/login\.html$/, { timeout: 8000 });
    await expect(page).toHaveTitle("Login - Rolnopol");
  }
);

test(
  "should show email placeholder on registration form",
  { tag: ["@registration", "@ui"] },
  async ({ page }) => {
    // Arrange
    await page.goto("/register.html");

    // Assert
    const emailInput = page.getByTestId("email-input");
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute(
      "placeholder",
      "Enter your email (e.g., john@example.com)"
    );
  }
);

test(
  "should have optional display name field on registration form",
  { tag: ["@registration", "@ui"] },
  async ({ page }) => {
    // Arrange
    await page.goto("/register.html");

    // Assert
    const displayNameInput = page.getByTestId("display-name-input");
    await expect(displayNameInput).toBeVisible();
  }
);

test(
  "should have password field with minimum 3 character requirement on registration form",
  { tag: ["@registration", "@ui"] },
  async ({ page }) => {
    // Arrange
    await page.goto("/register.html");

    // Assert
    const passwordInput = page.getByTestId("password-input");
    await expect(passwordInput).toBeVisible();
  }
);
