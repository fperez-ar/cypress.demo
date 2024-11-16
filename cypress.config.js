const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
  },
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    defaultCommandTimeout: 6000,
    viewportWidth: 1280,
    viewportHeight: 1080,   
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
