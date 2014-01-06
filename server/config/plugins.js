var assetOptions = require('../../assets');

module.exports = function(server) {
    // Options to pass into the 'Good' plugin
    var goodOptions = {
        subscribers: {
            console: ['ops', 'request', 'log', 'error'],
            'tmp/logs/': ['ops', 'request', 'log', 'error']
        }
    };

    // Require the Hapi plugin 'Good' for logging. You can access your logs in the tmp/logs directory. https://github.com/spumko/good
    server.pack.require('good', goodOptions, function (err) {
        if(err){
            console.log('Failed loading plugin good');
        }
    });

    // Require the Hapi plugin 'Hapi Named Routes' to allow route names in the view templates. https://github.com/poeticninja/hapi-named-routes
    server.pack.require('hapi-named-routes', function(err){
        if(err){
            console.log('Failed loading plugin hapi-named-routes');
        }
    });

    // Require the Hapi plugin 'Hapi Assets' for different assets be used based on environment in the view templates. https://github.com/poeticninja/hapi-assets
    server.pack.require('hapi-assets', assetOptions, function(err){
        if(err){
            console.log('Failed loading plugin hapi-assets');
        }
    });

    // Require the Hapi plugin 'Hapi Cache Buster' for asset busting in the view templates. https://github.com/poeticninja/hapi-cache-buster
    server.pack.require('hapi-cache-buster', function(err){
        if(err){
            console.log('Failed loading plugin hapi-cache-buster');
        }
    });
};