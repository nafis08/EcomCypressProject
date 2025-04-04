///<reference types = "Cypress"/>
import CheckoutPage from '../../support/pageObjects/checkoutPage'
import CartPage from '../../support/pageObjects/cartPage'
import HomePage from '../../support/pageObjects/homePage'
import ProductPage from '../../support/pageObjects/productPage'

describe("E-com E2E test", function(){
    before(function(){
        //Test
        Cypress.config('defaultCommandTimeout', 6000)

        cy.fixture("userdata.json").then(function(data){
            this.data = data;

            
            const homePage = new HomePage();
            homePage.goTo(Cypress.env('url')+ "/loginpagePractise/#");
            homePage.login(this.data.username, this.data.password);
        })

    })
    it("Place order", function(){

        //Cypress.config('defaultCommandTimeout', 20000) //this cannot effect the "it" block as it is not loaded during the cypress instruction sync

        const productName = "iphone X";        
        
        const productPage = new ProductPage();
        productPage.verifyProductPage();
        productPage.productCount().should('have.length', 4)
        productPage.productSelection(productName);
        productPage.addProduct();

        const cartPage = new CartPage();
        cartPage.priceVerification().then(function(sum){
            expect(sum).to.be.lessThan(500000); //expect(sum).to.be.lessThan(500000);
        });
        cartPage.checkout();

        const checkoutPage = new CheckoutPage();
        checkoutPage.paymentProceed();
        checkoutPage.getAlert().should('contain', 'Success');; 
        

    })
})