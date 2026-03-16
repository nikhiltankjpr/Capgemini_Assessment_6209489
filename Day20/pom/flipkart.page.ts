import {Locator,Page} from "@playwright/test"
class Flipkart{
    homeBtn:Locator
    gudiStore:Locator
    gudiCloth:Locator
    page:Page
    singleProduct:Locator
    page2:Page
    constructor(page:Page){
        this.page=page
        this.homeBtn=page.locator('(//div[@class="css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-1b1g84l r-tuq35u r-u8s1d r-q4m81j r-1r0gou5"])[6]/..')
        this.gudiStore=page.locator('(//img[@style="filter: none; opacity: 1; transition: filter 0.5s ease-in-out, opacity 0.5s ease-in-out; width: 100%; margin: auto; display: block; object-fit: contain; aspect-ratio: 1 / 1;"])[2]');
        this.gudiCloth=page.locator('//img[@style="filter: none; opacity: 1; transition: filter 0.5s ease-in-out, opacity 0.5s ease-in-out; width: 100%; margin: auto; display: block; object-fit: contain; aspect-ratio: 3 / 4;"]').nth(1);
        this.singleProduct=page.locator('//div[@class="RGLWAk"]').nth(4);
        this.page2=page;
        const 
    }
    async getProductsPage(){
        await this.homeBtn.waitFor({ state: "visible" })
        await this.homeBtn.click()

        await this.gudiStore.waitFor({ state: "visible" })
        await this.gudiStore.click()

        await this.gudiCloth.waitFor({ state: "visible" })
        await this.gudiCloth.click()
    }
    async addProducts(){
        const [newpage]=await Promise.all([
            this.page.waitForEvent("popup"),
            this.singleProduct.click()
        ])
        this.page2=newpage
        
    }
}
export default Flipkart;