describe("ParaBook",()=>{
    it("Email",()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('#customer\\.firstName').click().type("Ram")
        cy.get('#customer\\.lastName').click().type("Siya")
        cy.get('#customer\\.address\\.street').click().type("UP")
        cy.get('#customer\\.address\\.city').click().type("Ayosha")
        cy.get('#customer\\.address\\.state').click().type("Pawan Bhumi")
        cy.get('#customer\\.address\\.zipCode').click().type("12300")
        cy.get('#customer\\.phoneNumber').click().type("1111111")
        cy.get('#customer\\.ssn').click().type("9856")
        cy.get('#customer\\.username').click().type("Ram")
        cy.get('#customer\\.password').click().type("Sita")
        cy.get('#repeatedPassword').click().type("Sita")


    })
})