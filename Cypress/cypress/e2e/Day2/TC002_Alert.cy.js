describe("Alert",()=>{
    it("Sample Alert",()=>{
        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.get('#alertexamples').click()
         cy.on('window:alert',(t)=>{
            expect(t).to.contains("I am an alert box!")
            //expect(t).to.contains("abc")     //error
        }) 
    }) 

    it("Confirm Alert",()=>{
        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
         cy.get('#confirmexample').click()
        cy.wait(3000);
        cy.on('window:confirm',(a)=>{
            //expect(a).to.contains("Hey! Welcome to LetCode")      //error
            expect(a).to.contains("I am a confirm alert")
        }) 
    })

    it("Prompt Alert",()=>{
        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
         cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("Priyanka")
        })
        cy.get('#promptexample').click() 
       
    })
})