Package.describe({
    summary: 'Google Hangouts API',
    version: '0.0.1',
    name: 'wp:mtr-hangout',
    //git: "https://github.com/withpulp/mtr-hangout",
    documentation: "README.md"
});

Package.onUse(function (api) {
    api.versionsFrom('1.0.1');

    api.use(['templating', 'underscore', 'http']);

    api.add_files([
        'lib/client/buttons.html',
        'lib/client/buttons.js'
    ], ['client']);

    api.add_files([
        'lib/server/hangout.js'
    ], ['client', 'server']);

    api.export('Hangout', 'client');
    api.export('Sessions', ['client', 'server']);
});

Package.onTest(function (api) {
    api.use([
        'tinytest',
        'wp:mtr-hangout'
    ], ['client', 'server']);

    //api.addFiles('tests/client/specs.js', 'client');
    //api.addFiles('tests/server/specs.js', 'server');
});