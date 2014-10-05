// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
    development: {
    	css: [
    		'css/bootstrap.css',
    		'css/style.css',
    		'css/font-awesome.min.css'
    	],
        js: [
        	'js/bootstrap.min.js',
        	'js/retina-1.1.0.js',
        	'js/jquery.hoverdir.js',
        	'js/jquery.hoverex.min.js',
        	'js/jquery.prettyPhoto.js',
        	'js/jquery.isotope.min.js',
        	'js/custom.js'
        ]
    },
    production: {
        js: ['js/scripts.js'],
        css: ['css/styles.css']
    }
}