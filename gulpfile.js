/**
* Dependencies.
*/
var gulp = require("gulp"),
    gulpLoadTasks = require("gulp-load-tasks"),
    tasks = gulpLoadTasks();

// assets is where you define your application assets and you can pass them into gulp.
var assets = require('./assets');

// change the working directory to the public folder, where your assets are located.
var gulpFileCwd = __dirname +'/public';
process.chdir(gulpFileCwd);
// print the working directory
tasks.util.log('Working directory changed to', tasks.util.colors.magenta(gulpFileCwd));

// the default task that is run with the command 'gulp'
gulp.task('default', function(){

    // concat and minify your css
    gulp.src(assets.development.css)
        .pipe(tasks.concat("styles.css"))
        .pipe(tasks.csso())
        .pipe(gulp.dest('./css/'));

    // concat and minify your js
    gulp.src(assets.development.js)
        .pipe(tasks.concat("scripts.js"))
        .pipe(tasks.uglify())
        .pipe(gulp.dest('./js/'));

    // optimize your images
    gulp.src('./images/*')
        .pipe(tasks.imagemin())
        .pipe(gulp.dest('./images/'));

});