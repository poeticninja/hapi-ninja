/**
* Dependencies.
*/
var path = require('path');

// Defaults that you can access when you require this config.
module.exports = {
    rootPath: path.normalize(__dirname + '/../..'),
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