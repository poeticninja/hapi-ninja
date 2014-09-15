/**
* Dependencies.
*/
var gulp = require('gulp'),
    util = require('gulp-util'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

// assets is where you define your application assets and you can pass them into gulp.
var assets = require('./assets');

// change the working directory to the public folder, where your assets are located.
var gulpFileCwd = __dirname +'/public';
process.chdir(gulpFileCwd);
// print the working directory
util.log('Working directory changed to', util.colors.magenta(gulpFileCwd));

// the default task that is run with the command 'gulp'
gulp.task('default', function(){

    // concat and minify your css
    gulp.src(assets.development.css)
        .pipe(concat('styles.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./css/'));

    // concat and minify your js
    gulp.src(assets.development.js)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'));

    // optimize your images
    gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./images/'));

});
