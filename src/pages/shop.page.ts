import { Page } from '@playwright/test'

export class ShopPage {

  private page: Page

  constructor(page: Page) {
    this.page = page
  }

  productItemImage = (number: number) => this.page.getByTestId('product-list-section-item-image').nth(number)
  productPrice = (number: number) => this.page.getByTestId('product-list-section-item-price').nth(number)
  productTitle = (number: number) => this.page.getByTestId('product-list-section-item-title').nth(number)
}