///<reference types = "Cypress"/>

describe("E-com E2E test", function(){
    it("Place order", function(){

        const productName = "iphone X";
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#");
        cy.get("#username").type("rahulshettyacademy");
        cy.get("#password").type("learning");
        cy.get(".radiotextsty").eq(0).click();
        cy.get("#terms").check();
        cy.get("#signInBtn").click();
        cy.url("https://rahulshettyacademy.com/angularpractice/shop");
        cy.get(".my-4").should('contain', "Shop Name");
        cy.get('app-card').should('have.length', 4);

        cy.get('app-card').filter(`:contains("${productName}")`).then($element=>{
            cy.wrap($element).should('have.length', 1);
            cy.wrap($element).contains('button', 'Add').click()
        })

        //This is done when the product name is given hard coded
        /*
        cy.get('app-card').filter(':contains("iphone X")').then($element=>{
            cy.wrap($element).should('have.length', 1);
            cy.wrap($element).contains('button', 'Add').click()
        })*/

        //For static element iteration
        /*
        cy.get('app-card').eq(0).contains('button', 'Add').click();
        cy.get('app-card').eq(1).contains('button', 'Add').click();
        cy.get('app-card').eq(2).contains('button', 'Add').click();
        cy.get('app-card').eq(3).contains('button', 'Add').click();
        */

        cy.get('app-card').each(($el)=>{
            cy.wrap($el).contains('button', 'Add').click()
        })

        let sum = 0;

        cy.get('a').contains('Checkout').click();
        cy.get('tr td:nth-child(4) strong').each(($el)=>{
            const cost = Number($el.text().split(" ")[1].trim());
            sum = sum + cost;
            //expect(sum).to.be.lessThan(500000);
        }).then(function(){
            expect(sum).to.be.lessThan(500000);
        })

        cy.contains('button', 'Checkout').click();
        cy.get('#country').type("Bangladesh");
        cy.wait(3000);
        cy.get('.suggestions ul li a').click();
        cy.get('.btn-success').click();
        cy.get('.alert-success').should('contain', 'Success');
        

    })
})