import { test, expect } from '../fixtures/base-fixtures';
import { TEST_DATA } from '../../utils/constants/selectors';

test.describe('Login Tests', () => {
  
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });

  test.only('should login successfully with valid credentials @smoke @critical', async ({ loginPage }) => {
    await loginPage.loginWithValidUser();
    await loginPage.verifyLoginSuccess();
  });

  test('should show error with invalid credentials', async ({ loginPage }) => {
    await loginPage.login(TEST_DATA.INVALID_USER.email, TEST_DATA.INVALID_USER.password, TEST_DATA.INVALID_USER.org_name);
    await loginPage.verifyLoginError();
  });

  test('should not login with empty email', async ({ loginPage, page }) => {
    await page.fill('[data-testid="password"]', 'password123');
    const button = page.locator('[data-testid="login-button"]');
    await expect(button).toBeDisabled();
  });

  test('should not login with empty password', async ({ loginPage, page }) => {
    await page.fill('[data-testid="email"]', 'test@example.com');
    const button = page.locator('[data-testid="login-button"]');
    await expect(button).toBeDisabled();
  });

  test('should validate email format', async ({ page }) => {
    await page.fill('[data-testid="email"]', 'invalid-email');
    await page.fill('[data-testid="password"]', 'password123');
    // Add your validation check here
  });
});
