import { Page, expect } from '@playwright/test';
import { BasePage } from '../BasePage';
import { SELECTORS } from '../../utils/constants/selectors';

export class ProductsPage extends BasePage {
  
  constructor(page: Page) {
    super(page);
  }

  async navigate(): Promise<void> {
    await this.goto('/products');
  }

  async searchProduct(query: string): Promise<void> {
    await this.fill(SELECTORS.PRODUCTS.SEARCH_INPUT, query);
    await this.page.keyboard.press('Enter');
    await this.page.waitForLoadState('networkidle');
  }

  async getProductCount(): Promise<number> {
    return await this.page.locator(SELECTORS.PRODUCTS.PRODUCT_CARD).count();
  }

  async addFirstProductToCart(): Promise<void> {
    await this.page.locator(SELECTORS.PRODUCTS.ADD_TO_CART).first().click();
  }

  async verifyProductsDisplayed(): Promise<void> {
    const count = await this.getProductCount();
    expect(count).toBeGreaterThan(0);
  }

  async selectCategory(category: string): Promise<void> {
    await this.page.selectOption(SELECTORS.PRODUCTS.FILTER_CATEGORY, category);
    await this.page.waitForLoadState('networkidle');
  }
}
