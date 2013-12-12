// The title being passed through can be access by the template {{title}}.
module.exports = function() {
    var routes = [
        {
            method: 'GET',
            path: '/',
            config: {
                handler: function(request){
                  // Render the view with the custom greeting
                    request.reply.view('index', {
                        title: 'Awesome Boiler Plate Homepage',
                        metaDescription: 'Some cool meta description about the homepage.'
                    });
                },
                app: {
                    name: 'index'
                }
            }
        },
        {
            method: 'GET',
            path: '/info',
            config: {
                handler: function(request){
                    request.reply.view('info', {
                        title: 'Your are looking at the info Page',
                        metaDescription: 'Best Meta description ever!'
                    });
                },
                app: {
                    name: 'info'
                }
            }
        },
        {
            method: 'GET',
            path: '/about',
            config: {
                handler: function(request){
                    request.reply.view('about', {
                        title: 'Your are looking at the About Page',
                        metaDescription: 'Best Meta description ever!'
                    });
                },
                app: {
                    name: 'about'
                }
            }
        }
    ];

    server.addRoutes(routes);
};