///<reference types = "Cypress"/>

describe("E-com E2E test", function(){
    it("Place order", function(){
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#");
        cy.get("#username").type("rahulshettyacademy");
        cy.get("#password").type("learning");
        cy.get(".radiotextsty").eq(0).click();
        cy.get("#terms").check();
        cy.get("#signInBtn").click();
        cy.url("https://rahulshettyacademy.com/angularpractice/shop");
        cy.get(".my-4").should('contain', "Shop Name")
        cy.get("div.card").find(".card-title").each(($el, index, $list)=>{
            const phoneName = $el.find("a").text();
            if(phoneName.includes("iphoneX")){
                cy.wrap($el).find(".btn btn-info").click();
            }
        })
    })
})