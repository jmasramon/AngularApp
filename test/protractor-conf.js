exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  chromeOnly: true,

  seleniumAddress:'http://localhost:4444/wd/hub',
  
  baseUrl: 'http://127.0.0.1:9000',

  framework: 'mocha',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};