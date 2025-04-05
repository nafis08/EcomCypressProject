///<reference types = "Cypress"/>

describe('Table value extraction', function(){
    it('Implementing parent, child and sibling concept in table', function(){
        cy.visit(Cypress.env('url')+"/AutomationPractice/");
        cy.get("#product tr td:nth-child(2)").each(($el, index, $list) =>{
            const course = $el.text();
            if(course.includes("Python")){
                cy.get("#product tr td:nth-child(2)").eq(index).next().then(function(price){
                    const priceText = price.text();
                    expect(priceText).to.equal('25');
                })
            }
        })
    })
})