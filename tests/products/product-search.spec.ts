import { test, expect } from '../fixtures/base-fixtures';

test.describe('Product Search Tests', () => {

  test.beforeEach(async ({ productsPage }) => {
    await productsPage.navigate();
  });

  test('should display products on page load @smoke', async ({ productsPage }) => {
    await productsPage.verifyProductsDisplayed();
  });

  test('should search for products @critical', async ({ productsPage }) => {
    await productsPage.searchProduct('laptop');
    await productsPage.verifyProductsDisplayed();
  });

  test('should add product to cart @smoke @critical', async ({ productsPage, page }) => {
    await productsPage.addFirstProductToCart();
    
    // Verify cart count updated
    const cartCount = await page.locator('[data-testid="cart-count"]').textContent();
    expect(parseInt(cartCount || '0')).toBeGreaterThan(0);
  });

  test('should filter products by category', async ({ productsPage }) => {
    await productsPage.selectCategory('Electronics');
    await productsPage.verifyProductsDisplayed();
  });

  test('should show no results for invalid search', async ({ productsPage, page }) => {
    await productsPage.searchProduct('xyzinvalidproduct12345');
    
    const noResults = page.locator('[data-testid="no-results"]');
    await expect(noResults).toBeVisible();
  });
});
