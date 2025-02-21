//Cypress - Spec
///<reference types= "Cypress"/>
import "cypress-real-events"
describe('My first test case', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        });
    it('My first test case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type("ca").type("{Enter}");
        cy.wait(2000)
        cy.get('.product').should('be.visible', 4);
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click(); //selecting a random product
        //cy.get('.products.list.items.product-items').find('.product-item').should('have.length', 11);
        //cy.get('.products.list.items.product-items').find('.product-item').eq(2).realHover().click(cy.get('[type = "submit"]'));
        //selecting specific product regardless of the position
        cy.get('.products').find('.product').each(($el, index, $list)=>{
            const item = $el.find('.product-name').text();
            if(item.includes('Cauliflower')){
                cy.wrap($el).find('button').click();
            }
        })
    })
})