import { Locator, Page } from "@playwright/test";
import { PAGE_URLS } from "../constants/pageUrls";
import { BasePage } from "./BasePage";

export class StaffFieldsMainPage extends BasePage {
  readonly PAGE_URL = PAGE_URLS.STAFF_FIELDS_MAIN;

  readonly pageHeading: Locator;
  readonly openAddFieldBtn: Locator;
  readonly fieldNameInput: Locator;
  readonly fieldAreaInput: Locator;
  readonly submitAddFieldBtn: Locator;
  readonly searchFieldsInput: Locator;
  readonly fieldAddedAlert: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByRole("heading", {
      name: "Staff & Fields Management",
    });
    this.openAddFieldBtn = page
      .locator("main")
      .getByRole("button", { name: "+ Add Field" })
      .first();
    this.fieldNameInput = page.getByRole("textbox", { name: /Field Name/ });
    this.fieldAreaInput = page.getByRole("spinbutton", {
      name: /Area \(ha\)/,
    });
    this.submitAddFieldBtn = page
      .locator("#addFieldForm")
      .getByRole("button", { name: "+ Add Field" });
    this.searchFieldsInput = page.getByRole("textbox", {
      name: "Search fields...",
    });
    this.fieldAddedAlert = page.getByText("Field added!");
  }

  async addField(name: string, areaInHa: number) {
    await this.openAddFieldBtn.click();
    await this.fieldNameInput.fill(name);
    await this.fieldAreaInput.fill(String(areaInHa));
    await this.submitAddFieldBtn.click();
  }

  async searchFieldByName(name: string) {
    await this.searchFieldsInput.fill(name);
  }

  fieldListItemByName(name: string): Locator {
    return this.page.locator("li").filter({ hasText: name }).first();
  }
}
