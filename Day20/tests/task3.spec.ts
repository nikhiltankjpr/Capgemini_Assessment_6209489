import test from '@playwright/test';
import path from 'path/win32';
test('shoppersstack', async ({ page }) => {
    await page.goto('https://www.shoppersstack.com/');
    await page.locator('//button[@id="loginBtn"]').click();
    await page.waitForTimeout(2000);
    // await page.locator('//input[@id="email"]').fill('
    
 let email=await page.getByLabel('Email');
 await email.fill('nik12345@gmail.com');
     await page.waitForTimeout(2000);

// await page.locator('//div[@class="MuiBox-root css-b18y7f"]').click();
//         await page.waitForTimeout(2000);

 await page.getByLabel('Password').fill("Nik@12345");
    //  await password.fill("Nik@12345");
     await page.waitForTimeout(2000);

    // await page.locator('//button[@id="loginBtn"]').click();
    //  await page.locator('//input[@id="search"]').fill('mobile');
    //  await page.locator('//*[local-name()="path"]').first().click();
});
