import { expect, test } from '@playwright/test';

test('home page displays a question and see next button', async ({ page }) => {
	await page.goto('/');

	// Check that a question is displayed
	await expect(page.locator('.question')).toBeVisible();

	// Check that "See next" button is visible
	await expect(page.getByRole('button', { name: 'See next' })).toBeVisible();
});

test('clicking see next button loads a new question', async ({ page }) => {
	await page.goto('/');

	// Click the "See next" button
	await page.getByRole('button', { name: 'See next' }).click();

	// Wait for the question to potentially change
	await page.waitForTimeout(500);

	// The question should still be visible after clicking
	await expect(page.locator('.question')).toBeVisible();
});
