describe("Actions", () => {
    beforeEach(() => {
        cy.visit("/key_presses") //Specify extra URL folder structure if needed between apostrophes 
    })

    it('ABC Test', () => {

        cy.get('#target')   
            .type("A")
        cy.get('#result').contains('A')
        cy.get('#target') 
            .type('{backspace}') 

         cy.get('#target')   
            .type("B")
        cy.get('#result').contains('B')
        cy.get('#target') 
            .type('{backspace}') 
            
        cy.get('#target')   
            .type("C")
        cy.get('#result').contains('C')
        cy.get('#target') 
            .type('{backspace}') 
    
    })

})

