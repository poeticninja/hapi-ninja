var requireDirectory = require('require-directory');

// Bootstrap your controllers so you dont have to load them individually. This loads them all into the controller name space.
var controller = requireDirectory(module, './server/controllers');

// Array of routes for Hapi
module.exports = [

];