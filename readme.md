
---

# Amazon UI Test

This repository contains Cypress  tests for Amazon, specifically focusing on product details.

## Prerequisites

- Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- Cypress installed globally. You can install it using:

  ```bash
  npm install -g cypress
  ```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/black-fyre/vendease-platform-ui-testing
   ```

2. Navigate to the project directory:

   ```bash
   cd vendease-platform-ui-testing
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Running the Test

To run the Cypress UI test, execute the following command:

```bash
npm run cypress:open
```

This will open the Cypress Test Runner. Click on the `product_details.cy.js` file to run the specific test case.

## Test Description

The test case in `product_details.cy.js` focuses on asserting that the product page contains the "About this item" section and logs its content. It follows the steps:

1. Open the Amazon India website.
2. Click on the hamburger menu.
3. Navigate to "Televisions" under the menu.
4. Check the checkbox for Samsung brand.
5. Click on the sorting dropdown and select an option.


---