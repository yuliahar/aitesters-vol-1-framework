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

		await expect(
			page.getByRole('heading', { name: 'Welcome to Rolnopol' }),
		).toBeVisible();
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
