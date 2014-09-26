// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    index: {
        handler: function(request, reply){
          // Render the view with the custom greeting
            reply.view('index', {
                title: 'HAPI NINJA - Homepage'
            });
        },
        app: {
            name: 'index'
        }
    },
    about: {
        handler: function(request, reply){
            reply.view('about', {
                title: 'HAPI NINJA - About'
            });
        },
        app: {
            name: 'about'
        }
    },
    blog: {
        handler: function(request, reply){
            reply.view('blog', {
                title: 'HAPI NINJA - Blog'
            });
        },
        app: {
            name: 'blog'
        }
    },
    contact: {
        handler: function(request, reply){
            reply.view('contact', {
                title: 'HAPI NINJA - Contact'
            });
        },
        app: {
            name: 'contact'
        }
    },
    portfolio: {
        handler: function(request, reply){
            reply.view('portfolio', {
                title: 'HAPI NINJA - Blog'
            });
        },
        app: {
            name: 'portfolio'
        }
    },
    singlePost: {
        handler: function(request, reply){
            reply.view('single-post', {
                title: 'HAPI NINJA - Single Post'
            });
        },
        app: {
            name: 'singlePost'
        }
    },
    singleProject: {
        handler: function(request, reply){
            reply.view('single-project', {
                title: 'HAPI NINJA - Single Project'
            });
        },
        app: {
            name: 'singleProject'
        }
    },
    missing: {
        handler: function(request, reply){
            reply.view('404', {
                title: '404 Page'
            }).code(404);
        },
        app: {
            name: '404'
        }
    }
}
