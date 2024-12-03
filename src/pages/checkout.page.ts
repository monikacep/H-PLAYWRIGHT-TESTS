import { Page } from '@playwright/test'

export class CheckoutPage {

  private page: Page

  constructor(page: Page) {
    this.page = page
  }
  
  shippingDestinationSelect = () => this.page.getByTestId('checkout-shippingdestination-select')
  countrySelect = (country: string) => this.page.locator('.v-list-item-title', { hasText: country})
  shippintOptionElement = (option:string) => this.page.getByTestId(`checkout-shippingdetails-option-${option}`)
  shippingAddressSelect = () => this.page.getByTestId('checkout-shippingoptions-parcelselect')
  addressSelect = () => this.page.locator('.v-list-item.v-list-item--link')
  shippingDetailsContinueButton = () => this.page.getByTestId('checkout-shippingdetails-continue')
  checkoutSummaryItem = () => this.page.getByTestId('checkout-cartsummary-item')
  subtotalPriceValue = () => this.page.getByTestId('checkout-cartsummary-subtotalprice-value')
  totalPriceValue = () => this.page.getByTestId('checkout-cartsummary-totalprice-value')
  emailInput = () => this.page.locator('input#email')
  fullNameInput = () => this.page.locator('input#name')
  phoneInput = () => this.page.locator('input#phone')
  customInput = () => this.page.locator('input#customFieldValue')
  contactInformationContinueButton = () => this.page.getByTestId('checkout-contactinformation-continue')
  placeOrderButton = () => this.page.getByTestId('checkout-paymentmethods-placeorder')
  gotItButton = () => this.page.locator('.payment-info__button')

  async fillShippingDetails(country: string, shippingOption: string ) {
    await this.shippingDestinationSelect().click()
    await this.countrySelect(country).click()
    await this.shippintOptionElement(shippingOption).click()
    await this.shippingAddressSelect().click()
    const itemCount = await this.addressSelect().count();
    await this.addressSelect().nth(Math.floor(Math.random() * itemCount)).click()
  }

  async fillContactInformation(email: string, name: string, phone: string, custom: string) {
    await this.emailInput().fill(email)
    await this.fullNameInput().fill(name)
    await this.phoneInput().fill(phone)
    await this.customInput().fill(custom)
  }
}