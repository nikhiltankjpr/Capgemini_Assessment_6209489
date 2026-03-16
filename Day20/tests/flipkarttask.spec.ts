import { test } from '@playwright/test';
import { FlipkartPage } from '../pom/flipkart.page.ts';
import data from '../testdata/data2.json';

test('Flipkart', async ({ page }) => {

  const flipkart = new FlipkartPage(page);

  // Launch URL
  await flipkart.navigate(data.url);

  // Click Home
  await flipkart.clickHome();

  // Scroll & Click Gudi Padwa Store
  await flipkart.openGudiPadwaStore();

  // Click Gudi Cloth
  await flipkart.openGudiCloth();

  // Add 5th Product
  await flipkart.addProductToCart(data.productIndexes[0]);

  // Add 8th Product
  await flipkart.addProductToCart(data.productIndexes[1]);

  // Go To Cart
  await flipkart.goToCart();

  // Increase Quantity for both products
  await flipkart.increaseQuantity(data.quantity);

  // Place Order
  await flipkart.placeOrder();

  // Screenshot
  await page.screenshot({
    path: 'flipkart-order.png',
    fullPage: true
  });

});