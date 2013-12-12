var requireDirectory = require('require-directory');

// Bootstrap your controllers so you dont have to load them individually. This loads them all into the controller name space.
var controller = requireDirectory(module, './server/controllers');
console.log(controller);

// Array of routes for Hapi
module.exports = [
    {
        method: 'GET',
        path: '/info',
        config: controller.base.info
    },
    {
        method: 'GET',
        path: '/about',
        config: controller.base.about
    },
    {
        method: 'GET',
        path: '/',
        config: controller.base.index
    },
    {
        method: 'GET',
        path: '/{path*}',
        config: controller.base.missing
    },
    {
        method: 'GET',
        path: '/partials/{path*}',
        config: controller.assets.partials
    },
    {
        method: 'GET',
        path: '/images/{path*}',
        config: controller.assets.images
    },
    {
        method: 'GET',
        path: '/css/{path*}',
        config: controller.assets.css
    },
    {
        method: 'GET',
        path: '/js/{path*}',
        config: controller.assets.js
    },
    {
        method: 'GET',
        path: '/bower_components/{path*}',
        config: controller.assets.bower
    }
];