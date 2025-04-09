const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config, {
    json: {
      enabled: true,
    },
  });

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions))
  );

  return config;
}

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/*/*.feature",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://rahulshettyacademy.com",
    experimentalRunAllSpecs: true,
    experimentalInteractiveRunEvents: true,
  },
  retries: {
    runMode: 1,
  },
  env: {
    url: "https://rahulshettyacademy.com",
  },
  video: true,
  projectId: "qac871",
});
