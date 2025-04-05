const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/*/*.js',

  },

  retries: {
    runMode: 1,
 
  },

  env: {
    url: "https://rahulshettyacademy.com"
  },

  video: true,
  projectId: "qac871", //for cypress cloud


});
