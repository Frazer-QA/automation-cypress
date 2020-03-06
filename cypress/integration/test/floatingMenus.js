describe("Actions", () => {
    beforeEach(() => {
        cy.visit("/floating_menu") //Specify extra URL folder structure if needed between apostrophes 
    })

    it('Floating Menu - Simple Clicks', () => {

        cy.get('#username')
            .type('testuser')

    })

})