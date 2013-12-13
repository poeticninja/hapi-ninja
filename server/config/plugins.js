var goodOptions = {
    subscribers: {
        console: ['ops', 'request', 'log', 'error'],
        'tmp/logs/': ['ops', 'request', 'log', 'error']
    }
};


// Setup the Hapi plugin 'Good' for logging.
server.pack.require('good', goodOptions, function (err) {
    if(err){
        console.log('Failed loading plugin good');
    }
});

// Setup the Hapi plugin 'Hapi Named Routes' to allow route names in the view templates.
server.pack.require('hapi-named-routes', function(){
    if(err){
        console.log('Failed loading plugin hapi-named-routes');
    }
});
