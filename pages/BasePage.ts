import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string = ''): Promise<void> {
    const baseURL = process.env.BASE_URL || '';
    await this.page.goto(`${baseURL}${path}`);
    await this.page.waitForLoadState('networkidle');
  }

  async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  async fill(selector: string, value: string): Promise<void> {
    await this.page.fill(selector, value);
  }

  async getText(selector: string): Promise<string> {
    return await this.page.locator(selector).textContent() || '';
  }

  async isVisible(selector: string): Promise<boolean> {
    return await this.page.locator(selector).isVisible();
  }

  async waitForSelector(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async getCurrentURL(): Promise<string> {
    return this.page.url();
  }
}
