import { Locator, Page } from "@playwright/test";

export class RegisterPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly displayNameInput: Locator;
  readonly passwordInput: Locator;
  readonly registerSubmitBtn: Locator;
  readonly registerSubtitle: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByTestId("email-input");
    this.displayNameInput = page.getByTestId("display-name-input");
    this.passwordInput = page.getByTestId("password-input");
    this.registerSubmitBtn = page.getByTestId("register-submit-btn");
    this.registerSubtitle = page.getByTestId("register-subtitle");
    this.successMessage = page.getByText("Registration successful!");
  }

  async goto() {
    await this.page.goto("/register.html");
  }

  async register(email: string, password: string, displayName?: string) {
    await this.emailInput.fill(email);
    if (displayName) {
      await this.displayNameInput.fill(displayName);
    }
    await this.passwordInput.fill(password);
    await this.registerSubmitBtn.click();
  }
}
