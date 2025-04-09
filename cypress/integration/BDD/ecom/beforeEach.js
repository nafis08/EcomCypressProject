beforeEach(function(){
    cy.fixture("userdata.json").then(function(data){
        this.data = data;
    })

})