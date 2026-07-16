import { expect, test } from '@playwright/test';
import { DocsPage } from '../src/pages/docs.page';
import { HomePage } from '../src/pages/home.page';
import { LoginPage } from '../src/pages/login.page';
import { RegistrationPage } from '../src/pages/registration.page';
import { SwaggerPage } from '../src/pages/swagger.page';

test(
	'page should have Rolnopol title',
	{ tag: ['@smoke', '@critical'] },
	async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.goto();

		await expect(page).toHaveTitle(/Rolnopol/);
	},
);

test(
	'welcome heading is visible',
	{ tag: ['@smoke', '@critical'] },
	async ({ page }) => {
		const homePage = new HomePage(page);
		const expectedHeading = 'Welcome to Rolnopol';

		await homePage.goto();

		await expect(homePage.welcomeHeading).toHaveText(expectedHeading);
	},
);

test(
	'login link is visible',
	{ tag: ['@smoke', '@navigation'] },
	async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.goto();

		await expect(homePage.loginLink).toBeVisible();
	},
);

test(
	'should load login page successfully',
	{ tag: ['@smoke', '@auth'] },
	async ({ page }) => {
		const loginPage = new LoginPage(page);

		await loginPage.goto();

		await expect(loginPage.loginSubtitle).toBeVisible();
		await expect(loginPage.loginSubtitle).toHaveText(
			'User Login & Account Access',
		);
	},
);

test(
	'should load register page successfully',
	{ tag: ['@smoke', '@auth', '@registration'] },
	async ({ page }) => {
		const registrationPage = new RegistrationPage(page);
		const expectedSubtitle = 'Create Your User Account';

		await registrationPage.goto();

		await expect(registrationPage.registrationSubtitle).toBeVisible();
		await expect(registrationPage.registrationSubtitle).toHaveText(
			expectedSubtitle,
		);
	},
);

test(
	'should load documentation page successfully',
	{ tag: ['@smoke', '@navigation'] },
	async ({ page }) => {
		const docsPage = new DocsPage(page);
		const expectedSubtitle = 'Rolnopol System Guide & API Reference';

		await docsPage.goto();

		await expect(docsPage.headerSubtitle).toHaveText(expectedSubtitle);
	},
);

test(
	'should load api explorer page successfully',
	{ tag: ['@smoke', '@api'] },
	async ({ page }) => {
		const swaggerPage = new SwaggerPage(page);

		await swaggerPage.goto();

		await expect(swaggerPage.apiDescriptionText).toBeVisible();
	},
);
