describe("ParaBook",()=>{
    it("SignUP",()=>{

        cy.fixture('data_paraSign').then((data)=>{

        
        cy.visit(data.url)
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('#customer\\.firstName').click().type(data.fname)
        cy.get('#customer\\.lastName').click().type(data.lname)
        cy.get('#customer\\.address\\.street').click().type(data.street)
        cy.get('#customer\\.address\\.city').click().type(data.city)
        cy.get('#customer\\.address\\.state').click().type(data.state)
        cy.get('#customer\\.address\\.zipCode').click().type(data.zipcode)
        cy.get('#customer\\.phoneNumber').click().type(data.pnumber)
        cy.get('#customer\\.ssn').click().type(data.ssn)
        cy.get('#customer\\.username').click().type(data.uname)
        cy.get('#customer\\.password').click().type(data.password)
        cy.get('#repeatedPassword').click().type(data.upassword)


        })
    })
})