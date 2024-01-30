import { paraSign } from "D:\\Training\\Cypress\\cypress\\e2e\\Assignments\\paraSign_repository.js";
describe("ParaBook", () => {
  it("Repo_SignUP", () => {
    cy.fixture("data_paraSignUp").then((data) => {
      const obj = new paraSign();
      obj.enterurl(data.url);
      obj.register();
      obj.enterfname(data.fname);
      obj.enterlname(data.lname);
      obj.enterstreet(data.street);
      obj.entercity(data.city);
      obj.enterstate(data.state);
      obj.enterzipcode(data.zipcode);
      obj.enterpnum(data.pnumber);
      obj.enterssn(data.ssn);
      obj.enteruname(data.uname);
      obj.enterpass(data.password);
      obj.enterupass(data.upassword);
      obj.clickregister();
    });
  });
});
