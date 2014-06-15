/**
* Dependencies.
*/
var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');

// Defaults that you can access when you require this config.
module.exports = {
    root: rootPath,
    port: parseInt(process.env.PORT, 10) || 3000,
    hapi: {
        options: {
            views: {
                path: './server/views',
                engines: {
                    html: require('swig')
                }
            }
        }
    }
}