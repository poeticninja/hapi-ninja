// The title being passed through can be access by the template {{title}}.
module.exports = {
    index: {
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
    },
    info: {
        handler: function(request){
            request.reply.view('info', {
                title: 'Your are looking at the info Page',
                metaDescription: 'Best Meta description ever!'
            });
        },
        app: {
            name: 'info'
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