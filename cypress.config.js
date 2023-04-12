const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "junit",

  reporterOptions: {
    mochaFile: "cypress/results/test-output.xml",
    toConsole: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
