describe('Assertion', () =>{

    /*  it("Register",()=>{
 
     }) */
 
     it("Implicit Assertion",()=>{
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         .and("include",'orange')
         .and("contain","orange")
         cy.title().should("eq",'OrangeHRM')
         //cy.url().should("include",'orange')
         //cy.url().should("contain","blue")     //error
         //cy.title().should("eq",'OrangeHRM')


         cy.get("input[name=username]").type("Admin");
         cy.get("input[name=password]").type("admin123");
         cy.get("button[type=submit]").click();
     })

     it.only("Explicit Assertion",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.get("input[name=username]").type("Admin");
        cy.get("input[name=password]").type("admin123");
        cy.get("button[type=submit]").click();

        let expectname='admin'
        cy.get('.oxd-userdropdown-name').then((x)=>{
            let acnamr = x.text()
            //BDD - Behaviour Driven Development used for acceptance testing
            expect(acnamr).to.be.equal('Burak İkinci')
            expect(acnamr).to.not.equal(expectname);
            //TDD - Test driven Development used for unit testing
            //assert.equal(acnamr,expectname) //error
            assert.notEqual(acnamr,expectname)
        })
        
    })
 
     /* it("Logout",()=>{
 
     }) */
 })