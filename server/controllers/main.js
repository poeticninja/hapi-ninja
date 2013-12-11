// The title being passed through can be access by the template {{title}}.
module.exports = {
     homepage: {
        handler: function(request){
          // Render the view with the custom greeting
            request.reply.view('index', {
                title: 'Awesome Boiler Plate Homepage',
                metaDescription: 'Some cool meta description about the homepage.'
            });
        },
        app: {
            name: 'homepage'
        }
    },
    about: {
        handler: function(request){
            request.reply.view('about', {
                title: 'Your are looking at the About Page',
                metaDescription: 'Best Meta description ever!'
            });
        },
        app: {
            name: 'about'
        }
    },
    partials: {
        handler: {
            directory: { path: './server/views/partials' }
        },
        app: {
            name: 'partials'
        }
    },
    images: {
        handler: {
            directory: { path: './public/images' }
        },
        app: {
            name: 'images'
        }
    },
    css: {
        handler: {
            directory: { path: './public/css' }
        },
        app: {
            name: 'css'
        }
    },
    js: {
        handler: {
            directory: { path: './public/js' }
        },
        app: {
            name: 'js'
        }
    },
    bower: {
        handler: {
            directory: { path: './public/bower_components' }
        },
        app: {
            name: 'bower'
        }
    },
    missing: {
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