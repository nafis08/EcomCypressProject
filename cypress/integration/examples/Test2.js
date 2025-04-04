

//Cypress - Spec
///<reference types= "Cypress"/>
//import "cypress-real-events"
describe('My first test case', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        });
    it('My first test case', function(){
        cy.visit(Cypress.env('url')+"/seleniumPractise/#/");
        cy.get('.search-keyword').type("ca").type("{Enter}");
        cy.wait(2000)
        cy.get('.products').find('.product').each(($el, index, $list)=>{
            const item = $el.find('.product-name').text();
            if(item.includes('Cauliflower')){
                cy.wrap($el).find('button').click();
            }
        })
        cy.get('.cart-icon').click();
        cy.get('[type = "button"]').contains('PROCEED TO CHECKOUT').click();
        cy.get('button').contains('Place Order').click();
    })
})