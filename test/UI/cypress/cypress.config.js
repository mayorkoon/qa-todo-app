// test/cypress/cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'e2e/*.cy.{js,ts}',
    supportFile: 'support/e2e.js',
    baseUrl: 'http://localhost:3000', // change if needed
    setupNodeEvents(on, config) {
      // Node event listeners
    },
    testIsolation: false,
  },
});
