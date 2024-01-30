describe("SpiceJet", ()=>{

    it("Using Fixture",()=>{ 
       cy.fixture('data_spicejet').then((data)=>{
        cy.visit(data.url);
        cy.url().should("eq","https://spiceclub.spicejet.com/signup")
        cy.get('.title-black').should("contain","Member Enrollment");
        cy.get('.col-sm-4 > .form-control').should("be.visible").select(data.drop);
        cy.get('.col-sm-4 > .form-control').then((t)=>{
            let val = t.prop('value')
            assert.equal(val,"MR")
        })
        cy.get('#first_name').click().type(data.firstname);
        cy.get('#last_name').click().type(data.lastname);
        cy.get(':nth-child(3) > :nth-child(1) > .form-control').select(data.country);
        cy.get('#dobDate').click().type(data.date);
        cy.get('.react-tel-input > .form-control').type(data.mobile);
        cy.get('#email_id').click().type(data.email);
        cy.get('#new-password').click().type(data.upassword);
        cy.get('#c-password').click().type(data.password);
        cy.get('#defaultCheck1').check();
        cy.get('.px-sm-4 > a > .btn').click();

       })

        
    })
 
})