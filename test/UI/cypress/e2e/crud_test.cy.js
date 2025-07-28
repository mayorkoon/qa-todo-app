import crud_page from "../Pages/crud_page";
import login_pages from "../Pages/login_pages";
import { faker } from '@faker-js/faker';


describe("The CRUD test suite", ()=>{

    const crud_actions = new crud_page()
    const login_page = new login_pages()
    before(()=>{
        cy.clearLocalStorage()
        cy.visit('/');
        cy.loginWithFixture();
    })

    it("Create an item", ()=>{
        crud_actions.typeItem();
        crud_actions.clickAdd();
        crud_actions.successAdd().should('be.visible');
    })

    it("Edits an item",()=>{
        crud_actions.clickEdit();
        crud_actions.clearText()
        crud_actions.editText();
        crud_actions.clickSave();
        crud_actions.successEdit().should('be.visible');
    })

    it("Deletes an item", ()=>{
        crud_actions.clickDelete();
        crud_actions.successDelete().should('be.visible');
    })

}) 
