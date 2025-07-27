import crud_page from "../Pages/crud_page";

describe("The CRUD test suite", ()=>{

    const crud_actions = new crud_page()
    before(()=>{
        //cy.clearAllCookies()
        cy.clearLocalStorage()
        cy.visit('http://localhost:3000'); // or your deployed app URL
        cy.loginWithFixture();
    })

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
