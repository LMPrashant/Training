describe("Handle",()=>{
    it('Check',()=>{
        cy.visit("https://demoqa.com/browser-windows")
        cy.get('#tabButton').invoke('removeAttr','target').click();
    })
})