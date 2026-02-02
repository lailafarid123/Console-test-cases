const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      const { defineConfig } = require('cypress')

      module.exports = defineConfig({
        e2e: {
          baseUrl: 'https://your-app-url.com',
          specPattern: 'cypress/e2e/**/*.cy.js',
          supportFile: 'cypress/support/e2e.js',
          retries: 0, // ⚡ explicitly disable retries
        },
      })
      // leave this empty if you don't use it

    },
  },
});

