/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {

        //Check boxes
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //Static Dropdown

        cy.get('select').select('option2').should('have.value', 'option2')

        //Dynamic dropdowns
        cy.get('#autocomplete').type('Bangl')

        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if ($e1.text().includes("Bang")) {
                cy.wrap($e1).click()
            }


        })
        //autocomplete
        cy.get('#autocomplete').should('have.value', 'Bangladesh')
        //visible invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons

        cy.get('[value="radio2"]').check().should('be.checked')

        //popup
        cy.get('#alertbtn').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        
        cy.get('#confirmbtn').click();
        cy.on('window:confirm', (str) =>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })



    })



})