///<reference types = "Cypress"/>
import 'cypress-iframe'

describe("Handling iframe", function(){
    it("Handling iframe with iframe installation", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded("#courses-iframe");
        cy.iframe().find('a[href="mentorship"]').eq(0).click();
        cy.wait(2000);
        cy.iframe().find('.bg-pattern-1').should('have.length', 2);

    })
})