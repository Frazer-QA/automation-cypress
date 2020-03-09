describe("Actions", () => {
    beforeEach(() => {
        cy.visit("/javascript_alerts") //Specify extra URL folder structure if needed between apostrophes 
    })

    it('JS Prompt', () => {

        cy.window().then(winObject => {      //Create and name function ('winObject') 

            cy.get('[onclick="jsPrompt()"]')  //Why does this have to be inside the stub function?
             .click()
            cy.stub(winObject, 'prompt')
             .returns('Test Result')
        
        })

        cy.get('#result')
        .should('contain', 'You entered: Test Result')

    })

})