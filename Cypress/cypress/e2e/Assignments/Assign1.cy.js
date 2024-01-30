describe("ParaBook",()=>{
    it("Email",()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get('.contact > a').click();
        cy.get('#name').click().type("Krish")
        cy.get('#email').click().type("kirsh@gmail.com")
        cy.get('#phone').click().type("1234567890")
        cy.get('#message').click().type("Hello go to hell")
        cy.get('[colspan="2"] > .button').click()



    })
})