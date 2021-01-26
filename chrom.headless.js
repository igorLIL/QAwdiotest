const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');

module.exports = {

    runner: 'local',

    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu']
        }
    }],
    baseUrl: 'https://stage.localcoding.us',
    services: ['chromedriver'],

    ...base,
    ...hooks
}