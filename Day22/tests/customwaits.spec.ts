import {test} from '@playwright/test';
test("custom waits", async  ({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForFunction(() => {
        //return document.title === "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in";
       // return document.readyState === "complete";
       let ele=document.querySelectorAll("cv bn")
       return ele.length > 1;
//await 
    });
await page.title()
})

