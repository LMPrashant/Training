import {paralogin} from "D:\\Training\\Cypress\\cypress\\e2e\\Assignments\\Repo_paralogin.js"
describe("ParaBank",()=>{
    it("login",()=>{
        cy.fixture("data_paralogin").then((data)=>{
            
            const obj = new paralogin();
            obj.enterurl(data.url)
            obj.enteruname(data.username)
            obj.enterpass(data.password)
            obj.clicklogin()
            // cy.get('tfoot > tr > td').should('contain','Balance includes')
            // cy.get('#rightPanel').should('contain','13677')
            // cy.wait(1000)
            // obj.clicklogout()
        })
    })
})