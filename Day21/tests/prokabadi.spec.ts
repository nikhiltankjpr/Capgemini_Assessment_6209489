import {test} from '@playwright/test';

    test('pro kabadi', async ({page}) => {
        await page.goto('https://www.prokabaddi.com/');
        await page.waitForTimeout(2000);
        await page.locator('//a[@data-parameter="homepage_recent_more_link"]').click();
        await page.waitForTimeout(2000);
       // await page.screenshot({path: 'prokabadi.png'});
       await page.locator('//a[@data-title="Dabang Delhi K.C. VS Puneri Paltan"]').nth(0).click();
       await page.waitForTimeout(2000);
       //await page.screenshot({path: 'prokabadi1.png'});
       let a = await page.locator('//h4[@class="title"] | //h4[@class="matchinfo"] | //p[@class="team-name"] | //p[@class="team-name"] | //p[@class="status"]').allTextContents();
       console.log(a);

    //     let b = await page.locator('//h4[@class="title"]|//h4[@class="matchinfo"]');
    //    console.log(await b.textContent());

    //     let c = await page.locator('//h4[@class="title"]|//h4[@class="matchinfo"]|//p[@class="team-name"]').nth(0);
    //    console.log(await c.textContent());

    //     let d = await page.locator('//h4[@class="title"]|//h4[@class="matchinfo"]|//p[@class="team-name"]|//p[@class="team-name"]').nth(1);
    //    console.log(await d.textContent());
        
    //    let e = await page.locator('//h4[@class="title"]|//h4[@class="matchinfo"]|//p[@class="team-name"]|//p[@class="team-name"]|//p[@class="status"]').nth(0);
    //    console.log(await e.textContent());


    //           let f = await page.locator('//p[@class="status"]').nth(1);
    //    console.log(await f.textContent());

       await page.screenshot({path: 'prokabadifinal2withpipeline2.png'});


    });