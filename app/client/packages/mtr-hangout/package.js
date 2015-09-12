Package.describe({
    summary: 'Google Hangouts API',
    version: '0.0.1',
    name: 'wp:mtr-hangout',
    //git: "https://github.com/withpulp/mtr-hangout",
    documentation: "README.md"
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