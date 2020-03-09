function typeLetter(value) {     //Create typeLetter function and passed Variable 'Value' into it
    cy.get('#target')
        .type(value)
    cy.get('#result').contains(value)
    cy.get('#target')
        .type('{backspace}')
}

describe("Actions", () => {
    beforeEach(() => {
        cy.visit("/key_presses")
    })

    it('EXAMPLE 1: ABC Test', () => {

        typeLetter("A") //Calling function and passing string "A" into variable named Value
        typeLetter("B")
        typeLetter("C")
        typeLetter("D")
        typeLetter("E")
        typeLetter("F")
        typeLetter("G")
        typeLetter("H")
        typeLetter("I")
        typeLetter("J")
        typeLetter("K")
        typeLetter("L")
        typeLetter("M")
        typeLetter("N")
        typeLetter("O")
        typeLetter("P")
        typeLetter("Q")
        typeLetter("R")
        typeLetter("S")
        typeLetter("T")
        typeLetter("U")
        typeLetter("V")
        typeLetter("W")
        typeLetter("X")
        typeLetter("Y")
        typeLetter("Z")
    });
})

var array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
             "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

describe("Actions", () => {

    beforeEach(() => {
        cy.visit("/key_presses")
    })

    it('EXAMPLE 2: ABC Test', () => {

        array.forEach(function (value) {
            cy.get('#target')
                .type(value)
            cy.get('#result').contains(value)
            cy.get('#target')
                .type('{backspace}')

        });
    })
})