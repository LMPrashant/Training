describe("Alert",()=>{
    it.skip("Sample Alert",()=>{
        cy.visit("https://letcode.in/alert")
        cy.get('#accept').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains("Hey! Welcome to LetCode")
            //expect(t).to.contains("abc")     //error
        })
    }) 

    it("Confirm Alert",()=>{
        cy.visit("https://letcode.in/alert")
        cy.get('#confirm').click()
        cy.wait(3000);
        cy.on('window:confirm',(a)=>{
            //expect(a).to.contains("Hey! Welcome to LetCode")      //error
            expect(a).to.contains("Are you happy with LetCode?")
        })
    })

    it("Prompt Alert",()=>{
        cy.visit("https://letcode.in/alert")
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("Cristina")
        })
        cy.get('#prompt').click()
       
    })
})