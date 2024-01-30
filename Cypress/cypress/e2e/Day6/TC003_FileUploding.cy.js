import 'cypress-file-upload';

describe('File Upload',()=>{
    it('upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.wait(3000);

        const filepath = "D:\\Training\\GitHub\\hello.txt"
        cy.get('#file-upload').attachFile(filepath);
        cy.get('#file-submit').click();
    })
})