import { test as base } from '@playwright/test';
import { LoginPage } from '@pages/auth/LoginPage';
import { ProductsPage } from '../../pages/products/ProductsPage';
import { CartPage } from '../../pages/checkout/CartPage';

type MyFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect } from '@playwright/test';
