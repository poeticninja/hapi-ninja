// The title being passed through can be access by the template {{title}}.
module.exports = function() {
    var routes = [
        {
            method: 'GET',
            path: '/partials/{path*}',
            config: {
                handler: {
                    directory: { path: './server/views/partials' }
                },
                app: {
                    name: 'partials'
                }
            }
        },
        {
            method: 'GET',
            path: '/images/{path*}',
            config: {
                handler: {
                    directory: { path: './public/images' }
                },
                app: {
                    name: 'images'
                }
            }
        },
        {
            method: 'GET',
            path: '/css/{path*}',
                config: {
                handler: {
                    directory: { path: './public/css' }
                },
                app: {
                    name: 'css'
                }
            }
        },
        {
            method: 'GET',
            path: '/js/{path*}',
            config: {
                handler: {
                    directory: { path: './public/js' }
                },
                app: {
                    name: 'js'
                }
            }
        },
        {
            method: 'GET',
            path: '/bower_components/{path*}',
            config: {
                handler: {
                    directory: { path: './public/bower_components' }
                },
                app: {
                    name: 'bower'
                }
            }
        },
        {
            method: 'GET',
            path: '/{path*}',
            config: {
                handler: function(request){
                    request.reply.view('404', {
                        title: 'You found a missing page, but found the 404 error!'
                    });
                },
                app: {
                    name: '404'
                }
            }
        }
    ];

    server.addRoutes(routes);
};