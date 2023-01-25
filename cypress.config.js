const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://clickandcollect-324914.firebaseapp.com/home",
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true
  },
});
