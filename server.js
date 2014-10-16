/**
* Dependencies.
*/
var Hapi = require('hapi'),
    config = require('./server/config/settings');

// Create a server with a host, port, and options
var server = Hapi.createServer('0.0.0.0', config.port, config.hapi.options);

// Export the server to be required elsewhere.
module.exports = server;

// Bootstrap Hapi Server Plugins
require('./server/config/plugins');

// Add the server routes
server.route(require('./server/config/routes'));

//Start the server
server.start(function() {
    //Log to the console the host and port info
    console.log('Server started at: ' + server.info.uri);
});
