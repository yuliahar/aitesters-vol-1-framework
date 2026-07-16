import { Locator, Page } from '@playwright/test';
import { PAGE_URLS } from '../constants/pageUrls';
import { BasePage } from './base.page';

export class SwaggerPage extends BasePage {
	readonly PAGE_URL = PAGE_URLS.SWAGGER;
	readonly apiDescriptionText: Locator;

	constructor(page: Page) {
		super(page);
		this.apiDescriptionText = page
			.frameLocator('iframe')
			.getByText(
				'API documentation for the Rolnopol service with versioning support',
			);
	}
}
