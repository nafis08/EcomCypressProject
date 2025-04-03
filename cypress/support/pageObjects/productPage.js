class ProductPage{

    verifyProductPage(){
        cy.get(".my-4").should('contain', "Shop Name");
    }
    productCount(){
        return cy.get('app-card');
    }

    productSelection(productName){
        cy.get('app-card').filter(`:contains("${productName}")`).then($element=>{
            cy.wrap($element).should('have.length', 1);
            cy.wrap($element).contains('button', 'Add').click();

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
        })
    }

    addProduct(){
        cy.get('app-card').each(($el)=>{
            cy.wrap($el).contains('button', 'Add').click()
        })
    }
}

export default ProductPage;