///<reference types = 'Cypress'/>

describe("New tab handling in cypress", () =>{
    it("Manipulate new tab via Jquery ", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.origin("https://www.qaclickacademy.com/", () => {
            cy.get("#navbarSupportedContent a[href*='about']").click();
            cy.get("#about-page h2").should('contain', "Welcome to QAClick Academy ")
        })
    })
})