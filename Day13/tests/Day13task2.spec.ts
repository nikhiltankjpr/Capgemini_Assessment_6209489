import {selectors, test} from "@playwright/test"

test("olympics", async ({page}) => {
    await page.goto("https://www.google.in")

        await page.locator("//textarea[@class='gLFyf']").fill("Tokyo olympics")
        await page.locator("//textarea[@class='gLFyf']").press("Enter")
await page.waitForTimeout(2000)
       await page.locator("//div[@class='recaptcha-checkbox-border']").click()
await page.waitForTimeout(5555000)

       // await page.locator("//textarea[@class='gLFyf']").press("Enter")
    //  await page.locator("//button[text()='Accept All Cookies']").click()

  


    // let b = await page.locator("(//span[@class='text-sm leading-140 font-medium capitalize text-primary'])[2]").textContent()
    // console.log(b);

    // let a = await page.locator("(//span[@class='text-sm leading-140 uppercase font-extrabold text-primary tracking-wide'])[2]").textContent()
    // console.log(a);
    // await page.screenshot({path: "icc.png"})

})