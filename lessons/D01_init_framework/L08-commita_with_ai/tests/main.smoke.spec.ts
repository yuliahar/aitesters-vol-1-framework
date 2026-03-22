import { expect, test } from "@playwright/test";

test("should display the correct page title 'Rolnopol' on homepage", async ({ page }) => {
  await page.goto("");
  await expect(page).toHaveTitle("Rolnopol");
});
