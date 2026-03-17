import { expect, test } from "@playwright/test";
import { getDemoEnvUser } from "../../src/models/User";
import { ProfilePage } from "../../src/pages/ProfilePage";

test.describe("DEMO_USER Profile Page E2E", () => {
  test(
    "should display correct DEMO_USER information in profile sections",
    { tag: ["@auth", "@profile", "@happy-path"] },
    async ({ page }) => {
      const demoUser = getDemoEnvUser();
      const profilePage = new ProfilePage(page);

      await profilePage.goto();
      await expect.soft(page).toHaveURL(profilePage.PAGE_URL);

      await expect
        .soft(profilePage.welcomeMessage)
        .toContainText(`Welcome, ${demoUser.displayName}`);

      await expect
        .soft(profilePage.displayedName)
        .toHaveText(demoUser.displayName);
      await expect.soft(profilePage.emailValue).toHaveText(demoUser.email);
      await expect.soft(profilePage.userId).not.toBeEmpty();
      await expect.soft(profilePage.createdAt).not.toBeEmpty();
      await expect.soft(profilePage.lastLogin).not.toBeEmpty();

      await expect.soft(profilePage.displayNameInput).toBeVisible();
      await expect
        .soft(profilePage.displayNameInput)
        .toHaveValue(demoUser.displayName);
      await expect.soft(profilePage.newPasswordInput).toBeVisible();
      await expect.soft(profilePage.confirmPasswordInput).toBeVisible();
      await expect.soft(profilePage.saveChangesBtn).toBeVisible();

      await expect.soft(profilePage.deleteAccountBtn).toBeVisible();
    },
  );
});
