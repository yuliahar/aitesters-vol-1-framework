import { expect, test } from "@playwright/test";
import { generateUniqueEmail } from "../src/helpers/testDataHelpers";
import { ApiDocsPage } from "../src/pages/ApiDocsPage";
import { DocsPage } from "../src/pages/DocsPage";
import { HomePage } from "../src/pages/HomePage";
import { LoginPage } from "../src/pages/LoginPage";
import { RegisterPage } from "../src/pages/RegisterPage";

test(
  "should display the correct page title 'Rolnopol' on homepage",
  { tag: ["@smoke", "@critical"] },
  async ({ page }) => {
    // Arrange
    const homePage = new HomePage(page);
    await homePage.goto();

    // Act & Assert
    await expect(page).toHaveTitle("Rolnopol");
  }
);

test(
  "should load login page successfully",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const expectedSubtitle = "User Login & Account Access";

    // Act & Assert
    await expect(loginPage.loginSubtitle).toHaveText(expectedSubtitle);
  }
);

test(
  "should load API documentation page successfully",
  { tag: ["@smoke", "@documentation"] },
  async ({ page }) => {
    // Arrange
    const apiDocsPage = new ApiDocsPage(page);
    await apiDocsPage.goto();
    const expectedHeading =
      "API documentation for the Rolnopol service with versioning support";

    // Act & Assert
    await expect(apiDocsPage.iframe.getByText(expectedHeading)).toBeVisible();
  }
);

test(
  "should load documentation page successfully",
  { tag: ["@smoke", "@documentation"] },
  async ({ page }) => {
    // Arrange
    const docsPage = new DocsPage(page);
    await docsPage.goto();
    const expectedSubtitle = "Rolnopol System Guide & API Reference";

    // Act & Assert
    await expect(docsPage.docsHeaderSubtitle).toHaveText(expectedSubtitle);
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
