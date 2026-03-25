import { Page, Locator } from "@playwright/test";

export class bank{
    readonly page: Page;
    readonly bankmanager: Locator;
    readonly addcustomer: Locator;
    readonly name: Locator;
    readonly lname: Locator;
    readonly postcode: Locator;
    readonly submit: Locator;
    readonly openacct: Locator;
    readonly customerDropdown: Locator;
    readonly currencyDropdown: Locator;
    readonly submit2: Locator;
    readonly home: Locator;
    readonly ctlogin: Locator;
    readonly customernamedropdown: Locator;
    readonly login: Locator;
    readonly deposit: Locator;
    readonly amt: Locator;
    readonly dsubmit: Locator;
    readonly withdraw: Locator;
    readonly wamt: Locator;
    readonly wsubmit: Locator;
    readonly balance: Locator;
    readonly logout: Locator;
   




    constructor(page:Page){
        this.page = page;
        this.bankmanager = page.locator('//button[text()="Bank Manager Login"]');
        this.addcustomer = page.locator('//button[@ng-class="btnClass1"]');
        this.name = page.locator('//input[@placeholder="First Name"]');
        this.lname = page.locator('//input[@placeholder="Last Name"]');
        this.postcode = page.locator('//input[@placeholder="Post Code"]');
        this.submit = page.locator('//button[@type="submit"]')
        this.openacct = page.locator('//button[@ng-class="btnClass2"]');

        // this.ctname = page.locator('//select[@class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required"]');
        this.customerDropdown = page.locator('//select[@ng-model="custId"]');   // Customer dropdown
        this.currencyDropdown = page.locator('//select[@name="currency"]');     // Currency dropdown

        this.submit2 = page.locator('//button[@type="submit"]');
        this.home = page.locator('//button[@class="btn home"]');
        this.ctlogin = page.locator('//button[@ng-click="customer()"]');

        this.customernamedropdown = page.locator('//select[@class="form-control ng-pristine ng-untouched ng-valid"]');
        this.login = page.locator('//button[@class="btn btn-default"]');

        this.deposit = page.locator('//button[@ng-class="btnClass2"]');
        this.amt = page.locator('//input[@type="number"]');
        this.dsubmit = page.locator('//button[@type="submit"]');
        this.withdraw = page.locator('//button[@ng-class="btnClass3"]');
        this.wamt = page.locator('//input[@placeholder="amount"]');
        this.wsubmit = page.locator('//button[@type="submit"]');
        this.balance = page.locator('//strong[@class="ng-binding"]').nth(1);

        this.logout = page.locator('//button[@ng-show="logout"]');
    




    }

    async goto(){
        await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    }

    async selectCustomer(name: string) {
    await this.customerDropdown.selectOption({ label: name });
}

async selectCurrency(currency: string) {
    await this.currencyDropdown.selectOption({ label: currency });
}

async selectCtname(name: string){
    await this.customernamedropdown.selectOption({ label: name});
}
}