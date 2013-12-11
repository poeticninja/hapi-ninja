/**
* Dependencies.
*/
var config = require('./settings');

// Setup the Hapi plugin 'Good' for logging.
server.pack.require('good', config.hapi.logging, function (err) {
    if(err){
        console.log('Failed loading plugin good');
    }
});

// Setup the Hapi plugin 'Lout' for documentation. This can be seen in the browswer at /docs.
server.pack.require('lout', config.hapi.docs, function (err) {
    if(err){
        console.log('Failed loading plugin lout');
    }
});

// Setup the Hapi plugin 'Hapi Named Routes' to allow route names in the view templates.
server.pack.require('hapi-named-routes', function(){
    if(err){
        console.log('Failed loading plugin hapi-named-routes');
    }
});
