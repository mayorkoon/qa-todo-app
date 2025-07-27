// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: 'test/ui/cypress/support/e2e.js',
    specPattern: 'test/ui/cypress/e2e/**/*.cy.js',
    baseUrl: 'http://localhost:3000',
  },
});
