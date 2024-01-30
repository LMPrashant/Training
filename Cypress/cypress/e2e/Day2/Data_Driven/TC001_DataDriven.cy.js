describe('Data Driven', () =>{

    /*  it("Register",()=>{
 
     }) */
 
     it("Using Fictures",()=>{
        cy.fixture('data_orangehrm').then((data)=>{
            cy.visit(data.url)
            cy.get("input[name=username]").type(data.username)
            cy.get("input[name=password]").type(data.password)
            cy.get("button[type=submit]").click();
        })
         /* cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         cy.get("input[name=username]").type("Admin");
         cy.get("input[name=password]").type("admin123");
         cy.get("button[type=submit]").click();
 */
     })

    
 })