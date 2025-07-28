import login_pages from "../Pages/login_pages";

describe('Login Page UI Test', () => {
  const login_page = new login_pages();
    const username = Cypress.env('username');
    const password = Cypress.env('password');
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('/');
  });

  it('should allow typing into inputs', function () {
    login_page.typeUsername(username)
    login_page.typePassword(password)
    login_page.clickLogin();
    login_page.todoHeader().should('be.visible')
  });

});
