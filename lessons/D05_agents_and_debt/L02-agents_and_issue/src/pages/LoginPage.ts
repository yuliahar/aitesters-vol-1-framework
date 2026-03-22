import { Locator, Page } from "@playwright/test";
import { PAGE_URLS } from "../constants/pageUrls";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  protected readonly PAGE_URL = PAGE_URLS.LOGIN;
  readonly loginSubtitle: Locator;

  constructor(page: Page) {
    super(page);
    this.loginSubtitle = page.getByTestId("login-subtitle");
  }
}
