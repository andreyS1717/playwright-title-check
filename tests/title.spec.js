// tests/title.spec.js
import { test, expect } from '@playwright/test';

test('Заголовок страницы должен быть корректным', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
});
