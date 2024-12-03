import { Page } from '@playwright/test'

export class ProductPage {

  private page: Page

  constructor(page: Page) {
    this.page = page
  }

  addToBagButton = () => this.page.getByTestId('productsection-btn-addtobag')
  subtotalElement = () => this.page.getByTestId('shoppingcart-text-subtotal')
  checkoutButton = () => this.page.getByTestId('shoppingcart-btn-checkout')
  productTitle = () => this.page.getByTestId('builder-product-section-title')
  decreaseButton = () => this.page.getByTestId('productpage-btn-decrease')
  quantityInput = () => this.page.getByTestId('productpage-text-qty')
  increaseButton = () => this.page.getByTestId('productpage-btn-increaseq')
}