class CheckoutPage{
    paymentProceed(){
        cy.get('#country').type("Bangladesh");
        cy.wait(5000);
        cy.get('.suggestions ul li a').click();
        cy.get('.btn-success').click();//flaky
    }

    getAlert(){
        return cy.get('.alert-success')
    }
}

export default CheckoutPage;