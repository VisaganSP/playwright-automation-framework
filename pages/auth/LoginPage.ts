import { Page, expect } from '@playwright/test';
import { BasePage } from '../BasePage';
import { SELECTORS, TEST_DATA } from '../../utils/constants/selectors';

export class LoginPage extends BasePage {
  
  constructor(page: Page) {
    super(page);
  }

  async navigate(): Promise<void> {
    await this.goto('/login');
  }

  async login(email: string, password: string, org_name: string): Promise<void> {
    await this.waitForSelector(SELECTORS.LOGIN.EMAIL_INPUT);
    await this.fill(SELECTORS.LOGIN.EMAIL_INPUT, email);
    await this.fill(SELECTORS.LOGIN.ORG_INPUT, org_name);
    await this.fill(SELECTORS.LOGIN.PASSWORD_INPUT, password);
    await this.click(SELECTORS.LOGIN.LOGIN_BUTTON);
  }

  async loginWithValidUser(): Promise<void> {
    const email = process.env.TEST_USER_EMAIL || TEST_DATA.VALID_USER.email;
    const password = process.env.TEST_USER_PASSWORD || TEST_DATA.VALID_USER.password;
    const org_name = process.env.TEST_USER_ORG || TEST_DATA.VALID_USER.org_name;
    await this.login(email, password, org_name);
  }

  async verifyLoginSuccess(): Promise<void> {
    // Use a strict locator so Playwright doesn't resolve multiple nodes with the same text.
    // Prefer the main page heading (h1) — the previous getByText matched both h1 and h2.
    await expect(
      this.page.getByRole('heading', { level: 1, name: 'விழா பட்டியல்' })
    ).toBeVisible();
  }

  async verifyLoginError(): Promise<void> {
    await expect(this.page.locator(SELECTORS.LOGIN.ERROR_MESSAGE)).toBeVisible();
  }

  async getErrorMessage(): Promise<string> {
    return await this.getText(SELECTORS.LOGIN.ERROR_MESSAGE);
  }
}
