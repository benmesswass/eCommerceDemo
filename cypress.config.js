const { defineConfig } = require("cypress");
//const { fx } = require("cypress/types/jquery");
const fs = require('fs-extra')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: "d9fkzi",
  e2e: {
    baseUrl: "https://clickandcollect-324914.firebaseapp.com/home",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())

      const file = config.env.configFile || ''
      return getConfigurationByFile(file)
    },
    screenshotsFolder: 'cypress/screenshots',
    retries: {
      runMode: 0,
      openMode: 1
    },
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    // viewportHeight: ,
    // viewportWidth: ,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
    },
  });
