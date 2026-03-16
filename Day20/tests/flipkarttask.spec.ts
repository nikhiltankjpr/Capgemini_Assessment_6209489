import { test } from '@playwright/test';
import { FlipkartPage } from '../pom/flipkart.page.ts';
import data from '../testdata/data2.json';

test('Flipkart', async ({ page }) => {
  const flipkart = new FlipkartPage(page);
  await flipkart.navigate(data.url);
  await flipkart.clickHome();
  await flipkart.openGudiPadwaStore();
  await flipkart.openGudiCloth();
  await flipkart.addProductToCart(data.productIndexes[0]);
  await flipkart.addProductToCart(data.productIndexes[1]);
  await flipkart.goToCart();
  await flipkart.increaseQuantity(data.quantity);
  await flipkart.placeOrder();
  await page.screenshot({
    path: 'flipkart-order.png',
    fullPage: true
  });
});
