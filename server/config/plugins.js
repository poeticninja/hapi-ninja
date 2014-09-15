module.exports = function(server) {
    // Options to pass into the 'Good' plugin
    var goodOptions = {
        subscribers: {
            console: ['ops', 'request', 'log', 'error']
        }
    };
    // The Assets Configuaration Options
    var assetOptions = require('../../assets');

    server.pack.register([
        {
            plugin: require('good'),
            options: goodOptions
        },
        {
            plugin: require('hapi-assets'),
            options: assetOptions
        },
        {
            plugin: require('hapi-named-routes')
        },
        {
            plugin: require('hapi-cache-buster')
        }
    ], function(err) {
        if (err) throw err;
    });
};
