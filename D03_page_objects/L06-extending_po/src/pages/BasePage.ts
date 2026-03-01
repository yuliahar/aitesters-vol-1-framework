import { Page } from "@playwright/test";

/**
 * BasePage class provides shared functionality for all page objects.
 * Each page should extend this class and define its own PAGE_URL constant.
 */
export abstract class BasePage {
  readonly page: Page;
  protected abstract readonly PAGE_URL: string;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the page using the PAGE_URL constant defined in the child class.
   */
  async goto() {
    await this.page.goto(this.PAGE_URL);
  }
}
