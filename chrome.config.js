const hooks = require('./config/hooks.conf');
const base = require('./config/base.conf');

module.exports = {

    runner: 'local',

    maxInstances: 5,

    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,

    }],
    baseUrl: 'https://stage.localcoding.us',
    services: ['chromedriver'],

    ...base,
    ...hooks
}