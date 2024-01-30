describe('OrangeHRM', () =>{

   /*  it("Register",()=>{

    }) */

    it("Login",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       // cy.title().should('eq','OranageHRM');
        cy.get("input[name=username]").type("Admin");
        cy.get("input[name=password]").type("admin123");
        cy.get("button[type=submit]").click();
    })

    it("Login failed",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','abc');
        cy.get("input[name=username]").type("Admin");
        cy.get("input[name=password]").type("admin123");
        cy.get("button[type=submit]").click();
    })
    /* it("Logout",()=>{

    }) */
})