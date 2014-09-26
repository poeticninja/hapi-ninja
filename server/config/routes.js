/**
* Dependencies.
*/
var requireDirectory = require('require-directory');

module.exports = function(server) {
    // Bootstrap your controllers so you dont have to load them individually. This loads them all into the controller name space. https://github.com/troygoode/node-require-directory
    var controller = requireDirectory(module, '../controllers');

    // Array of routes for Hapi
    var routeTable = [
        {
            method: 'GET',
            path: '/',
            config: controller.base.index
        },
        {
            method: 'GET',
            path: '/about',
            config: controller.base.about
        },
        {
            method: 'GET',
            path: '/blog',
            config: controller.base.blog
        },
        {
            method: 'GET',
            path: '/contact',
            config: controller.base.contact
        },
        {
            method: 'GET',
            path: '/portfolio',
            config: controller.base.portfolio
        },
        {
            method: 'GET',
            path: '/single-post',
            config: controller.base.singlePost
        },
        {
            method: 'GET',
            path: '/single-project',
            config: controller.base.singleProject
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
            path: '/img/{path*}',
            config: controller.assets.img
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
            path: '/fonts/{path*}',
            config: controller.assets.fonts
        },
        {
            method: 'GET',
            path: '/bower_components/{path*}',
            config: controller.assets.bower
        }
    ];
    return routeTable;
}
