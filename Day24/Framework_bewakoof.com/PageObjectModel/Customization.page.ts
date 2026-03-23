import { Page, Locator } from '@playwright/test';
export class CustomizationPage {
    readonly page: Page
    readonly customizationLogo: Locator;
    readonly productImage: Locator;
    readonly color: Locator;
    readonly size: Locator;
    readonly next: Locator;
    readonly canvas: Locator;
    readonly addtext: Locator;
    readonly textInput: Locator;
    readonly tick: Locator;
    readonly cross: Locator;
    readonly save: Locator;
    readonly nextbutton: Locator;
    readonly addtobag: Locator;

    constructor(page: Page) {        
        this.page = page;
        this.customizationLogo = page.locator('//span[text()="Customization"]');
        this.productImage = page.locator('//img[@data-testid="custom-image"]').first();
        this.color = page.locator('//div[@data-testid="custom-product-color-1"]');
        this.size = page.locator('//div[@data-testid="custom-product-size-2"]');
        this.next = page.locator('//button[@data-testid="custom-design-next-button"]');
        this.canvas = page.locator('//canvas[@class="upper-canvas "]');
        this.addtext = page.locator('//span[text()="Add Text"]');
        this.textInput = page.locator('//input[@data-testid="custom-design-text-description"]');
        this.tick = page.locator('//img[@alt="checked icon"]');
        this.cross = page.locator('//div[@data-testid="custom-design-close-icon"]');
        this.save = page.locator('//button[@data-testid="custom-design-save-button"]');
        this.nextbutton = page.locator('//button[@data-testid="custom-design-next-button"]');
        this.addtobag = page.locator('//div[@data-testid="custom-design-atb-button"]');








    }

}