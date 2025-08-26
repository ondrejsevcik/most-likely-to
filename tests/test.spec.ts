import { expect, test } from '@playwright/test';

test('homepage loads and shows a question', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('text=Most likely')).toBeVisible();
});
