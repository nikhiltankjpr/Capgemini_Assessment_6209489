import {selectors, test} from "@playwright/test"

test("icc", async ({page}) => {
    await page.goto("https://www.icc-cricket.com/rankings")


     await page.waitForTimeout(5000)

     await page.locator("//button[text()='Accept All Cookies']").click()

  


    let b = await page.locator("(//span[@class='text-sm leading-140 font-medium capitalize text-primary'])[2]").textContent()
    console.log(b);

    let a = await page.locator("(//span[@class='text-sm leading-140 uppercase font-extrabold text-primary tracking-wide'])[2]").textContent()
    console.log(a);
    await page.screenshot({path: "icc.png"})

})