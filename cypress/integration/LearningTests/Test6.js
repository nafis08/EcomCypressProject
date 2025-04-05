///<reference types = "Cypress"/>

describe('Mouse hover', function(){
    it('Mouse hover actions', function(){
        cy.visit(Cypress.env('url')+"/AutomationPractice/");
        cy.get('.mouse-hover-content').invoke('show');
        cy.get('.mouse-hover-content [href="#top"]').click();
        cy.url(Cypress.env('url')+"/AutomationPractice/#top").should('include', "top");
        cy.get('#mousehover').click();
        cy.contains('Top').click({force:true}); //In case of clicking an item while remain hidden
    })
})