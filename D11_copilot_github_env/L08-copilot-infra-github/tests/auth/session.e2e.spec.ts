import { expect, test } from "@playwright/test";
import { HomePage } from "../../src/pages/HomePage";
import { ProfilePage } from "../../src/pages/ProfilePage";

test.describe("DEMO_USER Session E2E", () => {
  test(
    "should use authenticated session, verify profile sections, and logout successfully",
    { tag: ["@auth", "@session", "@logout", "@happy-path"] },
    async ({ page }) => {
      const profilePage = new ProfilePage(page);
      const homePage = new HomePage(page);

      await profilePage.goto();

      await expect.soft(page).toHaveURL(profilePage.PAGE_URL);
      await expect.soft(profilePage.profileInformationHeading).toBeVisible();
      await expect.soft(profilePage.updateProfileHeading).toBeVisible();
      await expect.soft(profilePage.dangerZoneHeading).toBeVisible();

      await profilePage.logout();

      await expect(page).toHaveURL(homePage.PAGE_URL);
    },
  );
});
