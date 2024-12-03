# H-PLAYWRIGHT-TESTS

This project automates the purchase flow using [Playwright](https://playwright.dev/) and **TypeScript**. It includes steps to navigate the shop, add products to the cart, and proceed to checkout using different shipping options.

## Project Structure

```
.
├── pages/
│   ├── home.page.ts          # Home Page locators and actions
│   ├── shop.page.ts          # Shop Page locators and actions
│   ├── product.page.ts       # Product Page locators and actions
│   ├── checkout.page.ts      # Checkout Page locators and actions
├── tests/
│   ├── purchaseProduct.spec.ts  # Purchase flow test script
├── data/
│   ├── purchaseTestData.json  # Test data for shipping options, product counts, etc.
├── playwright.config.ts      # Playwright configuration file
└── README.md                 # Project documentation
```

## Prerequisites

- **Node.js** version 18 or higher.
- **Playwright** version 1.48.2.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/monikacep/H-PLAYWRIGHT-TESTS.git
   cd H-PLAYWRIGHT-TESTS
   ```
   
2. Install the dependencies:

    ```bash
    npm install
    ```
    
## Running the Tests

To run the Playwright tests:

```bash
npx playwright test
```

The tests will be executed in the default browser environment specified in the playwright.config.ts file.

## Test Results

The results of the tests will be output to the terminal, with details on the passed/failed tests. For a more detailed report, check the generated XML test report located in `tests-report.xml`.
