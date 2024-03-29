describe("SpiceJet", ()=>{

    it("Login",()=>{ 
        //cy.get("div[class='css-76zvg2 r-jwli3a r-ubezar']").click();
        //cy.get("[data-testid='signup-submit-btn']").click();
        cy.visit("https://spiceclub.spicejet.com/signup");
        cy.url().should("eq","https://spiceclub.spicejet.com/signup")
        cy.get('.title-black').should("contain","Member Enrollment");
        cy.get('.col-sm-4 > .form-control').should("be.visible").select("Mr");
        cy.get('.col-sm-4 > .form-control').then((t)=>{
            let val = t.prop('value')
            assert.equal(val,"MR")
        })
        cy.get('#first_name').click().type("Jolvin");
        cy.get('#last_name').click().type("Farnandis");
        cy.get(':nth-child(3) > :nth-child(1) > .form-control').select("India");
        cy.get('#dobDate').click().type("11-May-1998");
        /* cy.get('.react-datepicker__month-select').select("May");
        cy.get('.react-datepicker__year-select').select("1998");
        cy.get('.react-datepicker__day--011').click(); */

        cy.get('.react-tel-input > .form-control').type("8600469755");
        cy.get('#email_id').click().type("pkmkur@gmail.com");
        cy.get('#new-password').click().type("Spicejet@123");
        cy.get('#c-password').click().type("Spicejet@123");
        cy.get('#defaultCheck1').check();
        cy.get('.px-sm-4 > a > .btn').click();
        
    })
 
})