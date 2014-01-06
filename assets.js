// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
    development: {
        js: ['js/test-one.js', 'js/test-two.js'],
        css: ['css/test-one.css', 'css/test-two.css']
    },
    production: {
        js: ['js/scripts.js'],
        css: ['css/styles.css']
    }
}