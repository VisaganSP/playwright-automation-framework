export const SELECTORS = {
  // Login Page
  LOGIN: {
    EMAIL_INPUT: '//*[@id="email"]',
    PASSWORD_INPUT: '//*[@id="password"]',
    ORG_INPUT: '//*[@id="org_name"]',
    LOGIN_BUTTON: '//*[@id="root"]/div/div/form/button',
    ERROR_MESSAGE: '.error-message',
  },

  // Navigation
  NAV: {
    HOME: '[data-testid="nav-home"]',
    PRODUCTS: '[data-testid="nav-products"]',
    CART: '[data-testid="nav-cart"]',
    PROFILE: '[data-testid="nav-profile"]',
    LOGOUT: '[data-testid="logout"]',
  },

  // Products Page
  PRODUCTS: {
    SEARCH_INPUT: '[data-testid="search"]',
    PRODUCT_CARD: '.product-card',
    ADD_TO_CART: '[data-testid="add-to-cart"]',
    PRODUCT_TITLE: '.product-title',
    PRODUCT_PRICE: '.product-price',
    FILTER_CATEGORY: '[data-testid="filter-category"]',
    SORT_DROPDOWN: '[data-testid="sort"]',
  },

  // Cart
  CART: {
    CART_ITEMS: '.cart-item',
    QUANTITY_INPUT: '[data-testid="quantity"]',
    REMOVE_BUTTON: '[data-testid="remove"]',
    CHECKOUT_BUTTON: '[data-testid="checkout-button"]',
    TOTAL_PRICE: '[data-testid="total-price"]',
    CART_COUNT: '[data-testid="cart-count"]',
  },

  // Checkout
  CHECKOUT: {
    FIRST_NAME: '[name="firstName"]',
    LAST_NAME: '[name="lastName"]',
    EMAIL: '[name="email"]',
    ADDRESS: '[name="address"]',
    CITY: '[name="city"]',
    ZIP_CODE: '[name="zipCode"]',
    COUNTRY: '[name="country"]',
    CONTINUE_BUTTON: '[data-testid="continue"]',
  },
};

export const TEST_DATA = {
  VALID_USER: {
    email: 'zenitsu@example.com',
    password: '12345678',
    org_name: 'admin_organization',
  },
  INVALID_USER: {
    email: 'wrong@example.com',
    password: 'WrongPassword',
    org_name: 'wrong_organization',
  },
};
