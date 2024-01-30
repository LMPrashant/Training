import{customer} from "D:\\Training\\Cypress\\cypress\\e2e\\Assignments\\Assign2_repository"

describe('Page Object Model',()=>{
    it("using fixture",()=>{
        cy.fixture('data_Assign1').then((data)=>{
            cy.visit(data.url)
            const obj = new customer()
            cy.get('.contact > a').click();
            obj.entername(data.name)
            obj.enteremail(data.email)
            obj.enterphone(data.phone)
            obj.entermessage(data.message)
            obj.clickbutton();
        })
    })
})