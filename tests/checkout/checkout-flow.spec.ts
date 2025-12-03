import { test, expect } from '../fixtures/base-fixtures';
import { SELECTORS } from '../../utils/constants/selectors';

test.describe('Checkout Flow Tests', () => {

  test('should complete checkout with valid information @smoke @critical', async ({ 
    productsPage, 
    cartPage, 
    page 
  }) => {
    // Step 1: Add product
    await productsPage.navigate();
    await productsPage.addFirstProductToCart();
    
    // Step 2: Go to cart
    await cartPage.navigate();
    await cartPage.proceedToCheckout();
    
    // Step 3: Fill checkout form
    await page.fill(SELECTORS.CHECKOUT.FIRST_NAME, 'John');
    await page.fill(SELECTORS.CHECKOUT.LAST_NAME, 'Doe');
    await page.fill(SELECTORS.CHECKOUT.EMAIL, 'john.doe@example.com');
    await page.fill(SELECTORS.CHECKOUT.ADDRESS, '123 Main St');
    await page.fill(SELECTORS.CHECKOUT.CITY, 'New York');
    await page.fill(SELECTORS.CHECKOUT.ZIP_CODE, '10001');
    await page.selectOption(SELECTORS.CHECKOUT.COUNTRY, 'US');
    
    // Step 4: Continue
    await page.click(SELECTORS.CHECKOUT.CONTINUE_BUTTON);
    
    // Step 5: Verify success
    await expect(page).toHaveURL(/.*payment|success/);
  });

  test('should validate required fields', async ({ cartPage, page }) => {
    await cartPage.navigate();
    await cartPage.proceedToCheckout();
    
    // Try to continue without filling form
    await page.click(SELECTORS.CHECKOUT.CONTINUE_BUTTON);
    
    // Check for validation errors
    const firstNameError = page.locator('[data-error="firstName"]');
    await expect(firstNameError).toBeVisible();
  });
});
