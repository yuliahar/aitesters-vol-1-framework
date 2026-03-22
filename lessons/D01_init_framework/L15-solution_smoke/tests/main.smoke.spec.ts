import { expect, test } from "@playwright/test";

test(
  "should display the correct page title 'Rolnopol' on homepage",
  { tag: ["@smoke", "@critical"] },
  async ({ page }) => {
    await page.goto("");
    await expect(page).toHaveTitle("Rolnopol");
  }
);

test(
  "should load login page successfully",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    await page.goto("/login.html");

    const expectedSubtitle = "User Login & Account Access";

    await expect(page.getByTestId("login-subtitle")).toHaveText(
      expectedSubtitle
    );
  }
);

test(
  "should load register page successfully",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    await page.goto("/register.html");

    const expectedSubtitle = "Create Your User Account";

    await expect(page.getByTestId("register-subtitle")).toHaveText(
      expectedSubtitle
    );
  }
);

test(
  "should load API documentation page successfully",
  { tag: ["@smoke", "@documentation"] },
  async ({ page }) => {
    await page.goto("/swagger.html");

    const expectedHeading =
      "API documentation for the Rolnopol service with versioning support";

    await expect(
      page.frameLocator("iframe").getByText(expectedHeading)
    ).toBeVisible();
  }
);

test(
  "should load documentation page successfully",
  { tag: ["@smoke", "@documentation"] },
  async ({ page }) => {
    await page.goto("/docs.html");

    const expectedSubtitle = "Rolnopol System Guide & API Reference";

    await expect(page.locator(".docs-header-subtitle")).toHaveText(
      expectedSubtitle
    );
  }
);
