import { Locator, Page } from '@playwright/test';
import { PAGE_URLS } from '../constants/pageUrls';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
	readonly PAGE_URL = PAGE_URLS.HOME;
	readonly welcomeHeading: Locator;
	readonly loginLink: Locator;

	constructor(page: Page) {
		super(page);
		this.welcomeHeading = page.getByRole('heading', {
			name: 'Welcome to Rolnopol',
		});
		this.loginLink = page.getByRole('link', { name: 'Login' });
	}
}
