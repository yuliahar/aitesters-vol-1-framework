import { expect, test } from '@playwright/test';

test(
	'page should have Rolnopol title',
	{ tag: ['@smoke', '@critical'] },
	async ({ page }) => {
		await page.goto('/');

		await expect(page).toHaveTitle(/Rolnopol/);
	},
);

test(
	'welcome heading is visible',
	{ tag: ['@smoke', '@critical'] },
	async ({ page }) => {
		await page.goto('/');
		const expectedHeading = 'Welcome to Rolnopol';

		await expect(
			page.getByRole('heading', { name: expectedHeading }),
		).toHaveText(expectedHeading);
	},
);

test(
	'login link is visible',
	{ tag: ['@smoke', '@navigation'] },
	async ({ page }) => {
		await page.goto('/');

		await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
	},
);

test(
	'should load login page successfully',
	{ tag: ['@smoke', '@auth'] },
	async ({ page }) => {
		await page.goto('/login.html');

		await expect(page.getByTestId('login-subtitle')).toBeVisible();
		await expect(page.getByTestId('login-subtitle')).toHaveText(
			'User Login & Account Access',
		);
	},
);

test(
	'should load register page successfully',
	{ tag: ['@smoke', '@auth', '@registration'] },
	async ({ page }) => {
		await page.goto('/register.html');

		const expectedSubtitle = 'Create Your User Account';

		await expect(page.getByTestId('register-subtitle')).toBeVisible();
		await expect(page.getByTestId('register-subtitle')).toHaveText(
			expectedSubtitle,
		);
	},
);

test(
	'should load documentation page successfully',
	{ tag: ['@smoke', '@navigation'] },
	async ({ page }) => {
		await page.goto('/docs.html');
		const expectedSubtitle = 'Rolnopol System Guide & API Reference';

		await expect(page.locator('.docs-header-subtitle')).toHaveText(
			expectedSubtitle,
		);
	},
);

test(
	'should load api explorer page successfully',
	{ tag: ['@smoke', '@api'] },
	async ({ page }) => {
		await page.goto('/swagger.html');
		const expectedHeading =
			'API documentation for the Rolnopol service with versioning support';

		await expect(
			page.frameLocator('iframe').getByText(expectedHeading),
		).toBeVisible();
	},
);
