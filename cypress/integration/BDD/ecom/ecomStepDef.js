import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../support/pageObjects/homePage";
import ProductPage from "../../../support/pageObjects/productPage";
import CartPage from "../../../support/pageObjects/cartPage";
import CheckoutPage from "../../../support/pageObjects/checkoutPage";

//const homePage = new HomePage();
//const productPage = new ProductPage();

Given("I am on Ecommerce Page", function () {
    this.homePage = new HomePage();
    this.homePage.goTo(Cypress.env('url') + "/loginpagePractise/#");
})

When("I login to the website", function () {
    this.productPage = new ProductPage();
    this.homePage.login(this.data.username, this.data.password);
    this.productPage.verifyProductPage();
    this.productPage.productCount().should('have.length', 4)
})

When("I add items to cart and checkout", function () {
    this.productPage.productSelection(this.data.productName);
    this.productPage.addProduct();
})

When("I validate the total price", function () {
    this.cartPage = new CartPage();
    this.cartPage.priceVerification().then(function (sum) {
        expect(sum).to.be.lessThan(500000); //expect(sum).to.be.lessThan(500000);
    });
    this.cartPage.checkout();
})

Then("I select the country submit and verify Thank you", function () {
    this.checkoutPage = new CheckoutPage();
    this.checkoutPage.paymentProceed();
    this.checkoutPage.getAlert().should('contain', 'Success');
})

When("I login to the web portal with username and password", function(dataTable){
    const credentials = dataTable.hashes()[0];
    this.productPage = new ProductPage();
    this.homePage.login(credentials.username, credentials.password);
    this.productPage.verifyProductPage();
    this.productPage.productCount().should('have.length', 4)
})

When("I add specific item to cart and checkout", function(dataTable){
    const item = dataTable.hashes()[0];
    this.productPage.productSelection(item.productName);
})