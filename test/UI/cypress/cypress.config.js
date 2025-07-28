// test/UI/cypress/cypress.config.js
const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');


module.exports = defineConfig({
  e2e: {
    specPattern: 'e2e/**/*.cy.js', 
    supportFile: 'support/e2e.js',              
    baseUrl: 'http://localhost:3000',
    testIsolation: false,
    setupNodeEvents(on, config) {
      //implement node event listeners here
        addMatchImageSnapshotPlugin(on, config);
        return config;
    },
  },
});
