module.exports = {

    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],

    logLevel: 'silent',

    bail: 0,

    waitforTimeout: 10000,
    connectionRetryTimeout: 20000,
    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],


    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: ['@babel/register']

    }
}