describe("ParaBook",()=>{
    it("Using Fixture",()=>{

        cy.fixture('data_Assign1').then((data)=>{
        cy.visit(data.url)
        cy.get('.contact > a').click();
        cy.get('#name').click().type(data.name)
        cy.get('#email').click().type(data.email)
        cy.get('#phone').click().type(data.phone)
        cy.get('#message').click().type(data.message)
        cy.get('[colspan="2"] > .button').click()

        })

    })
})