import { expect, test } from '@playwright/test';

test('has title', { tag: ['@smoke', '@critical'] }, async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle(/Rolnopol/);
});

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
