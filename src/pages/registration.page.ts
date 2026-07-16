import { Locator, Page } from '@playwright/test';
import { PAGE_URLS } from '../constants/pageUrls';
import { BasePage } from './base.page';

export class RegistrationPage extends BasePage {
	readonly PAGE_URL = PAGE_URLS.REGISTER;
	readonly emailInput: Locator;
	readonly displayNameInput: Locator;
	readonly passwordInput: Locator;
	readonly submitButton: Locator;
	readonly registrationSubtitle: Locator;
	readonly registrationSuccessMessage: Locator;

	constructor(page: Page) {
		super(page);
		this.emailInput = page.getByTestId('email-input');
		this.displayNameInput = page.getByTestId('display-name-input');
		this.passwordInput = page.getByTestId('password-input');
		this.submitButton = page.getByTestId('register-submit-btn');
		this.registrationSubtitle = page.getByTestId('register-subtitle');
		this.registrationSuccessMessage = page.getByText(
			'Registration successful!',
		);
	}

	async fillEmail(email: string) {
		await this.emailInput.fill(email);
	}

	async fillDisplayName(name: string) {
		await this.displayNameInput.fill(name);
	}

	async fillPassword(password: string) {
		await this.passwordInput.fill(password);
	}

	async submit() {
		await this.submitButton.click();
	}

	// `password` is required; `displayName` is optional.
	async register(email: string, password: string, displayName?: string) {
		await this.fillEmail(email);
		if (displayName !== undefined && displayName !== null) {
			await this.fillDisplayName(displayName);
		}
		await this.fillPassword(password);
		await this.submit();
	}

	// Note: Page Objects do not include assertions. Tests should perform
	// verifications using the locators exposed below.
}

export default RegistrationPage;
