import {test} from "@playwright/test"
import Flipkart from "../pom/flipkart.page.ts"
test("Flipkart Scenario",async({page})=>{
    await page.goto("https://Flipkart.com");

    await page.locator('//span[@class="b3wTlE"]').click();
    

    // await page.waitForLoadState() 
    const flipkartPage=new Flipkart(page);
        // await page.waitForLoadState() 

    await flipkartPage.handlePopupDialog();
        // await page.waitForLoadState() 

    await flipkartPage.getProductsPage();
            // await page.waitForLoadState() 

    await flipkartPage.addProducts();
        // await page.waitForLoadState() 


    await flipkartPage.manageQuantity()
        // await page.waitForLoadState() 

})