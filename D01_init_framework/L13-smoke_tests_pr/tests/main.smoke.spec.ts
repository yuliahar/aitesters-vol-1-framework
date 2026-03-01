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
    await expect(page.locator("body")).toBeVisible();
  }
);

test(
  "should load register page successfully",
  { tag: ["@smoke", "@auth"] },
  async ({ page }) => {
    await page.goto("/register.html");
    await expect(page.locator("body")).toBeVisible();
  }
);
