import { expect, test } from "@playwright/test";
import { StaffFieldsMainPage } from "../../src/pages/StaffFieldsMainPage";

test.describe("DEMO_USER Staff & Fields E2E", () => {
  test(
    "should create a new field in Staff & Fields view",
    { tag: ["@auth", "@crud", "@farm", "@resources", "@happy-path"] },
    async ({ page }) => {
      const staffFieldsMainPage = new StaffFieldsMainPage(page);
      const uniqueFieldName = `Auto Field ${Date.now()}`;
      const fieldAreaInHa = 7;

      await staffFieldsMainPage.goto();
      await expect.soft(page).toHaveURL(staffFieldsMainPage.PAGE_URL);
      await expect.soft(staffFieldsMainPage.pageHeading).toBeVisible();

      await staffFieldsMainPage.addField(uniqueFieldName, fieldAreaInHa);

      await expect.soft(staffFieldsMainPage.fieldAddedAlert).toBeVisible();

      await staffFieldsMainPage.searchFieldByName(uniqueFieldName);

      await expect
        .soft(staffFieldsMainPage.fieldListItemByName(uniqueFieldName))
        .toBeVisible();
    },
  );

  test(
    "should create a new animal group in Staff & Fields view",
    { tag: ["@auth", "@crud", "@farm", "@resources", "@happy-path"] },
    async ({ page }) => {
      const staffFieldsMainPage = new StaffFieldsMainPage(page);
      const animalType = "sheep";
      const animalAmount = 50;

      await staffFieldsMainPage.goto();
      await expect.soft(page).toHaveURL(staffFieldsMainPage.PAGE_URL);
      await expect.soft(staffFieldsMainPage.pageHeading).toBeVisible();

      await staffFieldsMainPage.addAnimal(animalType, animalAmount);

      await staffFieldsMainPage.searchAnimalByType(animalType);

      await expect
        .soft(staffFieldsMainPage.animalListItemByType(animalType))
        .toBeVisible();
    },
  );
});
