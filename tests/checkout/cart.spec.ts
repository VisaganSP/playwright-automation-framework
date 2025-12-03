import { test, expect } from '../fixtures/base-fixtures';

test.describe('Shopping Cart Tests', () => {

  test('should display items in cart @smoke', async ({ productsPage, cartPage, page }) => {
    // Add product to cart
    await productsPage.navigate();
    await productsPage.addFirstProductToCart();
    
    // Go to cart
    await page.click('[data-testid="nav-cart"]');
    
    // Verify cart has items
    await cartPage.verifyCartNotEmpty();
  });

  test('should remove item from cart', async ({ productsPage, cartPage, page }) => {
    // Add product
    await productsPage.navigate();
    await productsPage.addFirstProductToCart();
    
    // Go to cart
    await cartPage.navigate();
    const initialCount = await cartPage.getCartItemCount();
    
    // Remove item
    await cartPage.removeFirstItem();
    
    // Verify count decreased
    const newCount = await cartPage.getCartItemCount();
    expect(newCount).toBe(initialCount - 1);
  });

  test('should proceed to checkout @critical', async ({ productsPage, cartPage, page }) => {
    // Add product
    await productsPage.navigate();
    await productsPage.addFirstProductToCart();
    
    // Go to cart and checkout
    await cartPage.navigate();
    await cartPage.proceedToCheckout();
    
    // Verify on checkout page
    await expect(page).toHaveURL(/.*checkout/);
  });

  test('should display correct total price', async ({ productsPage, cartPage }) => {
    await productsPage.navigate();
    await productsPage.addFirstProductToCart();
    
    await cartPage.navigate();
    const total = await cartPage.getTotalPrice();
    
    expect(total).toBeTruthy();
    expect(total).not.toBe('$0.00');
  });
});
