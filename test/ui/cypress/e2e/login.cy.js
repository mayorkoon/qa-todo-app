describe('Login Page UI Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // or your deployed app URL
  });

  it('should render login form elements correctly', () => {
    //cy.get('h2.title').should('contain', 'Login');
    cy.get('h2').contains('Login')
    //cy.get('.login-input').should('have.length', 2);
    cy.get('input[placeholder="Username"]').should('exist');
    cy.get('input[placeholder="Password"]').should('exist');
    //cy.get('.login-button').should('contain', 'Login');
    cy.contains('button', 'Login').should('be.visible');
  });

  it('should allow typing into inputs', () => {
    cy.get('input[placeholder="Username"]').type('testuser').should('have.value', 'testuser');
    cy.get('input[placeholder="Password"]').type('test123').should('have.value', 'test123');
    cy.wait(5000)
    cy.contains('button', 'Login').click();
  });

  // it('should call onLogin and navigate on form submit', () => {
  //   // This assumes that login redirects to the Todo page
  //   cy.get('input[placeholder="Username"]').type('admin');
  //   cy.get('input[placeholder="Password"]').type('admin123');
  //   cy.get('.login-button').click();

  //   // Assuming a successful login redirects or shows a heading
  //   cy.contains('My Todo List').should('exist');
  // });
});
