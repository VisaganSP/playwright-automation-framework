import { Page, expect } from '@playwright/test';
import { BasePage } from '../BasePage';
import { SELECTORS } from '../../utils/constants/selectors';

export class CartPage extends BasePage {
  
  constructor(page: Page) {
    super(page);
  }

  async navigate(): Promise<void> {
    await this.goto('/cart');
  }

  async getCartItemCount(): Promise<number> {
    return await this.page.locator(SELECTORS.CART.CART_ITEMS).count();
  }

  async proceedToCheckout(): Promise<void> {
    await this.click(SELECTORS.CART.CHECKOUT_BUTTON);
  }

  async getTotalPrice(): Promise<string> {
    return await this.getText(SELECTORS.CART.TOTAL_PRICE);
  }

  async removeFirstItem(): Promise<void> {
    await this.page.locator(SELECTORS.CART.REMOVE_BUTTON).first().click();
  }

  async verifyCartNotEmpty(): Promise<void> {
    const count = await this.getCartItemCount();
    expect(count).toBeGreaterThan(0);
  }
}
