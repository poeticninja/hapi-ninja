// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    index: {
        handler: function(request){
          // Render the view with the custom greeting
            request.reply.view('index', {
                title: 'Awesome Boiler Plate Homepage'
            });
        },
        app: {
            name: 'index'
        }
    },
    about: {
        handler: function(request){
            request.reply.view('about', {
                title: 'This is the example about page'
            });
        },
        app: {
            name: 'about'
        }
    },
    missing: {
        handler: function(request){
            request.reply.view('404', {
                title: 'You found a missing page, but won the 404 error!'
            });
        },
        app: {
            name: '404'
        }
    }
}