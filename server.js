/**
* Dependencies.
*/
var Hapi = require('hapi'),
    config = require('./server/config/settings'),
    routes = require('./server/config/routes'),
    fs = require('fs');

// Create a server with a host, port, and options
server = Hapi.createServer('0.0.0.0', config.port, config.hapi.options);

// Bootstrap Hapi Server Plugins
require('./server/config/plugins');


// Bootstrap controllers with the server object
require('./server/controllers/base')();
require('./server/controllers/default')();


//Start the server
server.start();

//Log to the console the host and port info
console.log('Server started at: ' + server.info.uri);