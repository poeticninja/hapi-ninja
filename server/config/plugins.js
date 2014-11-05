// Load the server
var settings = require('./settings'),
    server = require(settings.rootPath + '/server');

// Options to pass into the 'Good' plugin
var goodOptions = {
    subscribers: {
        console: ['ops', 'request', 'log', 'error']
    }
};
// The Assets Configuaration Options
var assetOptions = require(settings.rootPath + '/assets');

server.pack.register([
    {
        name: "good",
        plugin: require("good"),
        options: goodOptions
    },
    {
        name: "hapi-assets",
        plugin: require("hapi-assets"),
        options: assetOptions
    },
    {
        name: "hapi-named-routes",
        plugin: require("hapi-named-routes")
    },
    {
        name: "hapi-cache-buster",
        plugin: require("hapi-cache-buster")
    }
], function(err) {
    if (err) throw err;
});
