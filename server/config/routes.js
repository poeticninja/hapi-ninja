var requireDirectory = require('require-directory');

// Bootstrap your controllers so you dont have to load them individually. This loads them all into the controller name space.
var controller = requireDirectory(module, './server/controllers');

// Array of routes for Hapi
module.exports = [
    {
        method: 'GET',
        path: '/',
        config: controller.main.homepage
    },
    {
        method: 'GET',
        path: '/about',
        config: controller.main.about
    },
    {
        method: 'GET',
        path: '/partials/{path*}',
        config: controller.main.partials
    },
    {
        method: 'GET',
        path: '/images/{path*}',
        config: controller.main.images
    },
    {
        method: 'GET',
        path: '/css/{path*}',
        config: controller.main.css
    },
    {
        method: 'GET',
        path: '/js/{path*}',
        config: controller.main.js
    },
    {
        method: 'GET',
        path: '/bower_components/{path*}',
        config: controller.main.bower
    },
    {
        method: 'GET',
        path: '/{path*}',
        config: controller.main.missing
    }
];