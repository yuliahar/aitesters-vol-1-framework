import { expect, test } from "@playwright/test";

test(
  "should display the correct page title 'Rolnopol' on homepage",
  { tag: ["@smoke", "@critical"] },
  async ({ page }) => {
    // Arrange
    await page.goto("");

    // Act & Assert
    await expect(page).toHaveTitle("Rolnopol");
  }
);

test(
  "should load login page successfully",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    // Arrange
    await page.goto("/login.html");
    const expectedSubtitle = "User Login & Account Access";

    // Act & Assert
    await expect(page.getByTestId("login-subtitle")).toHaveText(
      expectedSubtitle
    );
  }
);

test(
  "should load register page successfully",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    // Arrange
    await page.goto("/register.html");
    const expectedSubtitle = "Create Your User Account";

    // Act & Assert
    await expect(page.getByTestId("register-subtitle")).toHaveText(
      expectedSubtitle
    );
  }
);

test(
  "should load API documentation page successfully",
  { tag: ["@smoke", "@documentation"] },
  async ({ page }) => {
    // Arrange
    await page.goto("/swagger.html");
    const expectedHeading =
      "API documentation for the Rolnopol service with versioning support";

    // Act & Assert
    await expect(
      page.frameLocator("iframe").getByText(expectedHeading)
    ).toBeVisible();
  }
);

test(
  "should load documentation page successfully",
  { tag: ["@smoke", "@documentation"] },
  async ({ page }) => {
    // Arrange
    await page.goto("/docs.html");
    const expectedSubtitle = "Rolnopol System Guide & API Reference";

    // Act & Assert
    await expect(page.locator(".docs-header-subtitle")).toHaveText(
      expectedSubtitle
    );
  }
);

test(
  "should register new user successfully",
  { tag: ["@smoke", "@auth", "@registration"] },
  async ({ page }) => {
    // Arrange
    await page.goto("/register.html");
    const timestamp = Date.now();
    const uniqueEmail = `testuser${timestamp}@example.com`;

    // Act
    await page.getByTestId("email-input").fill(uniqueEmail);
    await page.getByTestId("display-name-input").fill("Test User");
    await page.getByTestId("password-input").fill("testpassword123");
    await page.getByTestId("register-submit-btn").click();

    // Assert
    await expect(page.getByText("Registration successful!")).toBeVisible();
    await expect(page).toHaveURL("/login.html");
  }
);
