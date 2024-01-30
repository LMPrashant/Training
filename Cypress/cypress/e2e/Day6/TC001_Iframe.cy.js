import 'cypress-iframe'
describe('Iframe',()=>{
    it('Iframe Test',()=>{
        cy.visit("https://jqueryui.com/droppable/")
        cy.frameLoaded('.demo-frame')
        cy.iframe().find("#draggable").then(function(data){
        const frametext=data.text()
        expect(frametext).to.contains("\n\tDrag me to my target\n")
        cy.log(frametext)

        })
    })
})