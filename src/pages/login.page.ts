import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
	readonly PAGE_URL = '/login.html';
	readonly loginSubtitle: Locator;

	constructor(page: Page) {
		super(page);
		this.loginSubtitle = page.getByTestId('login-subtitle');
	}
}
