describe('Table handling',()=>{
    it('Handle',()=>{
        cy.visit("https://www.dezlearn.com/webtable-example/");
        cy.get('#post-9373 > div > div > section > div > div > div > section > div > div > div > div > div > table > tbody > tr').should('have.length',7);
        cy.get("#post-9373 > div > div > section > div > div > div > section > div > div > div > div > div > table > tbody > tr > th").should('have.length',6)
        //cy.get("#post-9373 > div > div > section > div > div > div > section > div > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(1)").should('contains',"Tim Watson")
        cy.get('tbody > :nth-child(2) > :nth-child(1)').should('contain','Tim Watson')

        cy.get("#post-9373 > div > div > section > div > div > div > section > div > div > div > div > div > table > tbody > tr")
        .each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.log($row.text())
                cy.get('th').each(($col,index,$cols)=>{
                    cy.log($col.text())
                    // cy.get('tr').each(($raw,index,$raws)=>{
                    //     cy.log($raw.text())
                    // })
                })
            })
        })

    })
})