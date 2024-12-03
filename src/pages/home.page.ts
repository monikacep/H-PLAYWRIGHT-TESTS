import { Page } from '@playwright/test'

export class HomePage {

  private page: Page

  constructor(page: Page) {
    this.page = page
  }

  shopPageButton = () => this.page.getByTestId('navigationblock-page-shop').nth(0)
}