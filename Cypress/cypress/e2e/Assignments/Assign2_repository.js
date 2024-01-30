export{customer}
class customer{
    entername(name){
        cy.get('#name').click().type(name)
    }
    enteremail(email){
        cy.get('#email').click().type(email)
    }
    enterphone(phone){
        cy.get('#phone').click().type(phone)
    }
    entermessage(msg){
        cy.get('#message').click().type(msg)
    }
    clickbutton(){
        cy.get('[colspan="2"] > .button').click()
    }
}