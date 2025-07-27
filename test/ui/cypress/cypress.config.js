const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/*.cy.js',
    supportFile: false,
    testIsolation: false, // ✅ Ensures clean state per test
  },
});
