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

  readonly openAddAnimalBtn: Locator;
  readonly animalTypeSelect: Locator;
  readonly animalAmountInput: Locator;
  readonly submitAddAnimalBtn: Locator;
  readonly searchAnimalsInput: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByRole("heading", {
      name: "Staff & Fields Management",
    });
    this.openAddFieldBtn = page.locator("#openAddFieldModal");
    this.fieldNameInput = page.getByRole("textbox", { name: /Field Name/ });
    this.fieldAreaInput = page.getByRole("spinbutton", {
      name: /Area \(ha\)/,
    });
    this.submitAddFieldBtn = page
      .locator("#addFieldForm")
      .getByRole("button", { name: "Add Field" });
    this.searchFieldsInput = page.getByRole("textbox", {
      name: "Search fields...",
    });
    this.fieldAddedAlert = page.getByText("Field added!");

    this.openAddAnimalBtn = page.locator("#openAddAnimalModal");
    this.animalTypeSelect = page
      .locator("#addAnimalModal")
      .getByRole("combobox", { name: "Type" });
    this.animalAmountInput = page
      .locator("#addAnimalModal")
      .getByRole("spinbutton", { name: "Amount" });
    this.submitAddAnimalBtn = page
      .locator("#addAnimalForm")
      .getByRole("button", { name: "Add Animal" });
    this.searchAnimalsInput = page.getByRole("textbox", {
      name: "Search animals...",
    });
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

  async addAnimal(type: string, amount: number) {
    await this.openAddAnimalBtn.click();
    await this.animalTypeSelect.selectOption(type);
    await this.animalAmountInput.fill(String(amount));
    await this.submitAddAnimalBtn.click();
    await this.page.locator("#addAnimalModal").waitFor({ state: "hidden" });
  }

  async searchAnimalByType(type: string) {
    await this.searchAnimalsInput.fill(type);
  }

  animalListItemByType(type: string): Locator {
    return this.page.locator("#animalsList li").filter({ hasText: type }).first();
  }
}
