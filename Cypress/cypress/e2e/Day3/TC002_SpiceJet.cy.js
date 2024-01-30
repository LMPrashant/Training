import {signUp} from "D:\\Training\\Cypress\\cypress\\e2e\\Day3\\SpiceJet_repository.js"
describe("page OM SpiceJet", ()=>{

    it("Using Fixture",()=>{ 
       cy.fixture('data_spicejet').then((data)=>{
        const obj = new signUp()
        obj.geturl(data.url);
        cy.url().should("eq","https://spiceclub.spicejet.com/signup")
        obj.title(data.title);
        obj.firstname(data.firstname);
        obj.lasttname(data.lastname);
        obj.country(data.country)
        obj.country(data.country);
        obj.date(data.date);
        obj.Number(data.mobile);
        obj.email(data.email);
        obj.password(data.upassword);
        obj.upassword(data.password);
        obj.submit();
       })       
    })
})