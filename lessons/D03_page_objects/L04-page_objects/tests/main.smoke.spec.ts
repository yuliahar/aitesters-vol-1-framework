import { expect, test } from "@playwright/test";
import { generateUniqueEmail } from "../src/helpers/testDataHelpers";
import { RegisterPage } from "../src/pages/RegisterPage";

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
  "should load register page successfully",
  { tag: ["@smoke", "@auth", "@registration"] },
  async ({ page }) => {
    // Arrange
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    const expectedSubtitle = "Create Your User Account";

    // Act & Assert
    await expect(registerPage.registerSubtitle).toHaveText(expectedSubtitle);
  }
);

test(
  "should register new user successfully",
  { tag: ["@smoke", "@auth", "@registration"] },
  async ({ page }) => {
    // Arrange
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    const uniqueEmail = generateUniqueEmail();

    // Act
    await registerPage.register(uniqueEmail, "testpassword123", "Test User");

    // Assert
    await expect(registerPage.successMessage).toBeVisible();
    await expect(page).toHaveURL("/login.html");
  }
);
