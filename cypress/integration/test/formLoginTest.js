describe("Actions", () => {
    beforeEach(() => {
        cy.visit("/login") //Specify extra URL folder structure if needed between apostrophes 
    })

    it('Login - Unauthorised', () => {

        cy.get('#username') // Command
            .type('testuser') 

        cy.get('#password')
            .type('testPassword')

        cy.get("[class=radius][type=submit]")
            .click()

        cy.get("#flash")
            .should("be.visible") // Assertion

    })

    it('Login - Authorised', () => {

        cy.get('#username')
            .type('tomsmith')

        cy.get('#password')
            .type('SuperSecretPassword!')

        cy.get("[class=radius][type=submit]")
            .click()

        cy.url()
            .should('eq', 'http://the-internet.herokuapp.com/secure')

    })

    it('Login - Authorised - Logout', () => {

        cy.get('#username')
            .type('tomsmith')

        cy.get('#password')
            .type('SuperSecretPassword!')

        cy.get('[class=radius][type=submit]')
            .click()

        cy.url()
            .should('eq', 'http://the-internet.herokuapp.com/secure')

        cy.get('i').contains(' Logout')


    })

})

