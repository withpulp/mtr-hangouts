Package.describe({
    summary: 'Google Hangouts API',
    version: '0.0.1',
    name: 'hangout'
});

Package.onUse(function (api) {

    api.use([
        'http'
    ], ['client', 'server']);

    api.add_files([
        'lib/client/buttons.html',
        'lib/client/buttons.js'
    ], ['client']);

    api.add_files([
        'lib/server/hangout.js'
    ], ['server']);

});