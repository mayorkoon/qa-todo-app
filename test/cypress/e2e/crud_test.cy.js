import crud_page from "../Pages/crud_page";
import login_pages from "../Pages/login_pages";

describe("The CRUD test suite", ()=>{

    const crud_actions = new crud_page()
    const login_page = new login_pages()
    before(()=>{
        //cy.clearAllCookies()
        cy.clearLocalStorage()
        cy.visit('http://localhost:3000'); // or your deployed app URL
        //cy.loginWithFixture();
    })

     it('should allow typing into inputs', function () {
    //const {username,password} = this.credentials;
    const username = Cypress.env('username');
    const password = Cypress.env('password');
    login_page.type_username(username)
    login_page.type_password(password)
    cy.wait(2000)
    login_page.click_login();
    login_page.todo_header().should('be.visible')
  });

    it("Create an item", ()=>{
        crud_actions.type_item();
        crud_actions.click_add();
        crud_actions.success_add().should('be.visible');
    })

    it("Edits an item",()=>{
        crud_actions.click_edit();
        crud_actions.clear_text()
        crud_actions.edit_text();
        crud_actions.click_save();
        crud_actions.success_edit().should('be.visible');
    })

    it("Deletes an item", ()=>{
        crud_actions.click_delete();
        crud_actions.success_delete().should('be.visible');
    })

}) 
