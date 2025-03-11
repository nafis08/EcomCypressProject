///<reference types= "Cypress"/>

describe('Handling child window', function(){
    it('Handling child window without removing attribute', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //cy.get("#opentab").click();
        cy.get("#opentab").then(function(link){
            const url = link.prop('href');
            cy.visit(url);
            cy.origin(url, ()=>{
                cy.get('ul.ml-auto a[href*="about"]').click();
            })
        })
    })
})