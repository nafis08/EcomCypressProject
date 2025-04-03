class HomePage{

    goTo(url){
        cy.visit(url);
    }
    login(username, password){
        cy.get("#username").type(username);
        cy.get("#password").type(password);
        cy.get(".radiotextsty").eq(0).click();
        cy.get("#terms").check();
        cy.get("#signInBtn").click();
    }
}

export default HomePage;