class CartPage{
    priceVerification(){
        let sum = 0;

        cy.get('a').contains('Checkout').click();
        return cy.get('tr td:nth-child(4) strong').each(($el)=>{
            const cost = Number($el.text().split(" ")[1].trim());
            sum = sum + cost;
            
        }).then(function(){
            return sum;
        })
    }

    checkout(){
        cy.contains('button', 'Checkout').click();
    }
}

export default CartPage;