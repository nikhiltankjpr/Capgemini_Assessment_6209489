import {test, expect} from '@playwright/test';

import {bank} from '../pom/bank.page';

test('bank', async ({page}) => {
    const bk = new bank(page);
    await bk.goto();
    // await page.waitForTimeout(2000);
    await bk.bankmanager.click();
    await bk.addcustomer.click();
    await bk.name.fill('Sam');
    await bk.lname.fill('Manekshaw');
    await bk.postcode.fill('302021');
    await bk.submit.click();
    await bk.openacct.click();
    await page.waitForTimeout(2000);
    await bk.openacct.click();


    await bk.selectCustomer('Sam Manekshaw');

    await bk.selectCurrency('Dollar');

    await bk.submit2.click();
    await page.waitForTimeout(2000);
    await bk.home.click();
    await bk.ctlogin.click();
    await bk.selectCtname('Sam Manekshaw');
    await bk.login.click();
    await page.waitForTimeout(2000);
    await bk.deposit.click();
    await bk.amt.fill('2000');
    await bk.dsubmit.click();
    await page.waitForTimeout(2000);

    await bk.withdraw.click();
        await page.waitForTimeout(2000);

    await bk.wamt.fill('10');
        await page.waitForTimeout(2000);

    await bk.wsubmit.click();
        await page.waitForTimeout(2000);

    let a = await bk.balance.textContent();
    console.log(a);
    await page.screenshot({ path: '1.png' });

        await page.waitForTimeout(2000);
    await bk.logout.click();

    await page.screenshot({ path: '2.png' });



});