import {Page , Locator} from '@playwright/test';

export class MMT{
    readonly page: Page;
    readonly searchBox: Locator;
    readonly cross1: Locator;
    readonly cross2: Locator;
    readonly mainbox: Locator;
    readonly cross3: Locator;

    constructor(page: Page){
        this.page = page;
        this.searchBox = page.locator('//a[@class="primaryBtn font24 latoBold widgetSearchBtn "]');
        this.cross1 = page.locator('//img[@src="https://jsak.mmtcdn.com/pwa/platform-myra-ui/static/sub_icons/close-icon.png"]');
        this.cross2 = page.locator('//span[@data-cy="closeModal"]');
        this.mainbox = page.locator('//div[@class="minContainer"]');
        this.cross3 = page.locator('//span[@class="newCrossIconV2"]');
    }

    async goto(){
        await this.page.goto('https://www.makemytrip.com/flights/');
    }
}