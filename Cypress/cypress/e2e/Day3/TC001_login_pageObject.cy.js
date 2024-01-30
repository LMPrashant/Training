import {loginpage} from "D:\\Training\\Cypress\\cypress\\e2e\\Day3\\Register_repository.js";

describe('Page Object Model', () =>{
 
    it("Using Fictures",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('data_orangehrm').then((data)=>{
            const obj = new loginpage()
            obj.enterusername(data.username)
            obj.enterpassword(data.password)
            obj.clickbutton()
            /* cy.get("input[name=username]").type(data.username)
            cy.get("input[name=password]").type(data.password)
            cy.get("button[type=submit]").click(); */
        })
  
     })

    
 })