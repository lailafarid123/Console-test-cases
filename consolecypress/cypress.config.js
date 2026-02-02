const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome', // ✅ Mochawesome reporter add kiya
  reporterOptions: {
    reportDir: 'cypress/reports', // Reports yahan save hongi
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    // Path to your spec files
    specPattern: 'cypress/e2e/**/*.cy.js',

    // Base URL of your app
    baseUrl: 'https://consolestaging.alxtel.com',

    // Timeouts
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,

    // Experimental features


    // Retries for flaky tests
    retries: {
      runMode: 2,
      openMode: 2
    },

    // Node events
    setupNodeEvents(on, config) {
      // you can add event listeners here if needed
      // leave empty if you don't use it
      return config;
    },
  },
});
