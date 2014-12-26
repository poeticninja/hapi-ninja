// This is the assets controller. Goal is to serve css, js, partials, images, or bower packages.
module.exports = {
    partials: {
        handler: {
            directory: { path: './server/views/partials' }
        },
        id: 'partials'
    },
    images: {
        handler: {
            directory: { path: './public/images' }
        },
        id: 'images'
    },
    css: {
        handler: {
            directory: { path: './public/css' }
        },
        id: 'css'
    },
    js: {
        handler: {
            directory: { path: './public/js' }
        },
        id: 'js'
    },
    bower: {
        handler: {
            directory: { path: './public/bower_components' }
        },
        id: 'bower'
    }
}