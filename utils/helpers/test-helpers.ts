import { Page } from '@playwright/test';

export class TestHelpers {
  
  static async waitForPageLoad(page: Page): Promise<void> {
    await page.waitForLoadState('networkidle');
  }

  static async takeScreenshot(page: Page, name: string): Promise<void> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await page.screenshot({ 
      path: `screenshots/${name}-${timestamp}.png`,
      fullPage: true 
    });
  }

  static generateRandomEmail(): string {
    return `test.${Date.now()}@example.com`;
  }

  static async clearBrowserData(page: Page): Promise<void> {
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  }
}
