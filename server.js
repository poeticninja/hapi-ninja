/**
* Dependencies.
*/
var Hapi = require('hapi'),
    config = require('./server/config/settings'),
    routes = require('./server/config/routes');

// Create a server with a host, port, and options
var server = Hapi.createServer('0.0.0.0', config.port, config.hapi.options);

// Bootstrap Hapi Server Plugins, passes the server object to the plugins
require('./server/config/plugins')(server);

// Add the server routes
server.route(routes);

//Start the server
server.start();

//Log to the console the host and port info
console.log('Server started at: ' + server.info.uri);