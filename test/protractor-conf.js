// exports.config = {
//   allScriptsTimeout: 11000,

//   specs: [
//     'e2e/*.js'
//   ],

//   capabilities: {
//     'browserName': 'chrome'
//   },

//   chromeOnly: true, // Fa que no necessiti un selenium corren. L'instancia i el destrueix

//   chromeDriver: '../node_modules/protractor/selenium/chromedriver',
  
//   // seleniumAddress:'http://localhost:4444/wd/hub',
  
//   // baseUrl: 'http://127.0.0.1:9000',

//   framework: 'mocha',

//   mochaOpts: {
//     reporter: "spec",
//     slow: 3000
//   }
//   // jasmineNodeOpts: {
//   //   defaultTimeoutInterval: 30000
//   // }
// };

// An example configuration file from protractor repository
exports.config = {
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  // specs: ['e2e/example_spec.js'],
  // specs: ['e2e/mainpage.js'],
  specs: ['e2e/*.js'],

  exclude: ['e2e/angularjsHomepage.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
