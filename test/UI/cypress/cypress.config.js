// test/cypress/cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'test/UI/cypress/e2e/**/*.cy.js',
    supportFile: 'test/UI/cypress/support/e2e.js',
    baseUrl: 'http://localhost:3000', // change if needed
    setupNodeEvents(on, config) {
      // Node event listeners
    },
    testIsolation: false,
  },
});
