describe("Book Flight",()=>{
    it("Book",()=>{
        cy.visit("https://www.spicejet.com/");
        //cy.get('[data-testid="guest-submit-btn"]').click();
        cy.get('[data-testid="travel-type-1"] > .css-76zvg2').click();
        cy.get('[data-testid="search-source-code"]').click();
        cy.get('[data-testid="auto-cmp-txt"]').type("BLR").click();
        cy.get('[data-testid="auto-cmp-row-title-0"]').click();
        cy.get('[data-testid="search-destination-code"]').click();
        cy.get('[data-testid="auto-cmp-txt"]').type("BKK");
        cy.get('[data-testid="auto-cmp-row-title-0"]').click();
        cy.get('.r-1awozwy > :nth-child(1) > [data-testid="search-renderPax"]').click();
        cy.get('[data-testid="home-travellers-adult-2"]').click();
        cy.get('[data-testid="home-travellers-action-btn"]').click();
        cy.get('[style="flex-wrap: nowrap;"] > :nth-child(1) > .css-1dbjc4n > .css-76zvg2').click();
        cy.get('[data-testid="search-submit-btn"]').click();
        cy.get('.r-1uavh4e').check();
        cy.get('.r-obd0qt > .r-1awozwy').click();
       // cy.get('.r-1tf5bf9').click()
       
    })
})