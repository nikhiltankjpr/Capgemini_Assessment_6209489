import { test, expect } from '@playwright/test';


test('jenkins', async ({ page }) => {
  console.log('Running Jenkins test');
  await page.goto('https://www.jenkins.io/');
  await expect(page).toHaveTitle(/Jenkins/);






});

