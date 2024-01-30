export {signUp}
class signUp{

    geturl(url){
        cy.visit(url)
    }

    title(title){
        cy.get('.col-sm-4 > .form-control').select(title)
    }
    firstname(fname){
        cy.get('#first_name').click().type(fname);
    }
    lasttname(lname){
        cy.get('#last_name').click().type(lname);
    }
    country(ctr){
        cy.get(':nth-child(3) > :nth-child(1) > .form-control').select(ctr);
    }
    date(date){
        cy.get('#dobDate').click().type(date);
    }
    Number(num){
        cy.get('.react-tel-input > .form-control').type(num);
    }
    email(mail){
        cy.get('#email_id').click().type(mail);
    }
    password(pass){
        cy.get('#new-password').click().type(pass)
    }
    upassword(pass){
        cy.get('#c-password').click().type(pass);
    }
    submit(){
        cy.get('#defaultCheck1').check();
        cy.get('.px-sm-4 > a > .btn').click();
    }


}