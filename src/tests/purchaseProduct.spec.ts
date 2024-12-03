import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/home.page.ts'
import { ShopPage } from '../pages/shop.page.ts'
import { ProductPage } from '../pages/product.page.ts'
import { CheckoutPage } from '../pages/checkout.page.ts'
import purchaseTestData from './data/purchaseTestData.json'


for (const shippingOption of purchaseTestData.shippingOptions) {
    test(`Purchase Product Flow With ${shippingOption} Shipping`, async ({ page }) => {
    const homePage = new HomePage(page)
    const shopPage = new ShopPage(page)
    const productPage = new ProductPage(page)
    const checkoutPage = new CheckoutPage(page)

    await test.step('User can navigate to shop page and select a product', async () => {
        await page.goto('/')
        await homePage.shopPageButton().click()
        expect (shopPage.productPrice(Math.floor(Math.random() * purchaseTestData.productCount))).toBeVisible({timeout: 6000})
        expect (shopPage.productTitle(Math.floor(Math.random() * purchaseTestData.productCount))).toBeVisible()
        await shopPage.productItemImage(Math.floor(Math.random() * purchaseTestData.productCount)).click()
    })

    await test.step('User can add product to a bag', async () => {
        expect(productPage.productTitle()).toBeVisible()
        await productPage.increaseButton().click()
        await productPage.decreaseButton().click()
        const quantity = await productPage.quantityInput().inputValue()
        expect(quantity).toBe('1')
        await productPage.addToBagButton().click()
        expect(productPage.subtotalElement()).toBeVisible()
        await productPage.checkoutButton().click()
    })

    await test.step(`User can proceed checkout and place the order`, async () => {
        expect(checkoutPage.checkoutSummaryItem()).toBeVisible({timeout: 6000})
        expect(checkoutPage.subtotalPriceValue()).toBeVisible({timeout: 6000})
        expect(checkoutPage.totalPriceValue()).toBeVisible({timeout: 6000})
        await checkoutPage.fillShippingDetails(
            purchaseTestData.country,
            shippingOption
        )
        await checkoutPage.shippingDetailsContinueButton().click()
        await checkoutPage.fillContactInformation(
            purchaseTestData.email,
            purchaseTestData.name,
            purchaseTestData.phone,
            purchaseTestData.custom
        )
        await checkoutPage.contactInformationContinueButton().click()
        await checkoutPage.placeOrderButton().click()
        await checkoutPage.gotItButton().click()
    })
})}
