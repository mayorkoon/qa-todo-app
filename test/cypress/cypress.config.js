// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    //specPattern: 'cypress/e2e/**/*.cy.js',
    baseUrl: 'http://localhost:3000',
  },
});
