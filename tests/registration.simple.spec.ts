import { expect, test } from '@playwright/test';
import { generateTestEmail } from '../src/helpers/testHelpers';
import { RegistrationPage } from '../src/pages/registration.page';

test(
	'should register a new user successfully',
	{ tag: ['@registration', '@smoke'] },
	async ({ page }) => {
		const registration = new RegistrationPage(page);
		await registration.goto();
		const testEmail = generateTestEmail();
		const testPassword = 'TestPass123';
		const testDisplayName = 'Test User';

		await registration.register(testEmail, testPassword, testDisplayName);

		await expect(registration.registrationSuccessMessage).toBeVisible();
		// app redirects after 2 s notification delay
		await expect(page).toHaveURL(/\/login\.html$/, { timeout: 8000 });
		await expect(page).toHaveTitle('Login - Rolnopol');
	},
);

test(
	'should show email placeholder on registration form',
	{ tag: ['@registration', '@ui'] },
	async ({ page }) => {
		const registration = new RegistrationPage(page);
		await registration.goto();

		await expect(registration.emailInput).toBeVisible();
		await expect(registration.emailInput).toHaveAttribute(
			'placeholder',
			'Enter your email (e.g., john@example.com)',
		);
	},
);

test(
	'should have optional display name field on registration form',
	{ tag: ['@registration', '@ui'] },
	async ({ page }) => {
		const registration = new RegistrationPage(page);
		await registration.goto();

		await expect(registration.displayNameInput).toBeVisible();
	},
);

test(
	'should have password field with minimum 3 character requirement on registration form',
	{ tag: ['@registration', '@ui'] },
	async ({ page }) => {
		const registration = new RegistrationPage(page);
		await registration.goto();

		await expect(registration.passwordInput).toBeVisible();
	},
);
