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

		await expect(page.getByTestId('register-subtitle')).toBeVisible();
		await expect(page.getByTestId('register-subtitle')).toHaveText(
			'Create Your User Account',
		);
	},
);
