import { Page, Locator } from '@playwright/test';

export class FlipkartPage {

  readonly page: Page;
  readonly homeLink: Locator;
  readonly gudiPadwaStore: Locator;
  readonly gudiCloth: Locator;
  readonly products: Locator;
  readonly addToCartBtn: Locator;
  readonly cartBtn: Locator;
  readonly quantityIncrease: Locator;
  readonly placeOrderBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.homeLink = page.getByText('Home');
    this.gudiPadwaStore = page.getByText('Gudi Padwa');
    this.gudiCloth = page.getByText('Gudi Cloth');

    this.products = page.locator('div._1AtVbE');

    this.addToCartBtn = page.getByText('Add to cart');

    this.cartBtn = page.locator('a[href*="viewcart"]');

    this.quantityIncrease = page.locator('button:has-text("+")');

    this.placeOrderBtn = page.getByText('Place Order');
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async clickHome() {
    await this.homeLink.click();
  }

  async openGudiPadwaStore() {
    await this.gudiPadwaStore.scrollIntoViewIfNeeded();
    await this.gudiPadwaStore.click();
  }

  async openGudiCloth() {
    await this.gudiCloth.click();
  }

  async addProductToCart(index: number) {

    const product = this.products.nth(index);

    await product.scrollIntoViewIfNeeded();
    await product.click();

    const pages = this.page.context().pages();
    const newPage = pages[pages.length - 1];

    await newPage.getByText('Add to cart').click();
  }

  async goToCart() {
    await this.cartBtn.click();
  }

  async increaseQuantity(times: number) {
    for (let i = 0; i < times; i++) {
      await this.quantityIncrease.first().click();
    }
  }

  async placeOrder() {
    await this.placeOrderBtn.click();
  }

}