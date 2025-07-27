import login_pages from "../Pages/login_pages";

describe('Login Page UI Test', () => {
  const login_page = new login_pages();

  beforeEach(() => {
    //cy.fixture('credentials.json').as('credentials');
    cy.clearLocalStorage();
    cy.visit('http://localhost:3000'); // or your deployed app URL
  });

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

});
