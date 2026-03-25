import {test, expect} from '@playwright/test';
//import pom file
import { MMT } from '../pom/mmt.page.ts';

test('mmt flight booking', async ({page}) => {
    const mmt = new MMT(page);
    await mmt.goto();
    await mmt.cross1.click();
    await mmt.cross2.click();
    
    await page.waitForTimeout(2000);
    await mmt.mainbox.click();
    await mmt.searchBox.click();
    await page.waitForTimeout(2000);
    await mmt.cross3.click();

});
