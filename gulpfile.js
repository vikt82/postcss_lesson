var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
var lost = require('lost');
var minmax = require('postcss-media-minmax');
var pxtorem = require('postcss-pxtorem');
var postcssResponsiveFont = require('postcss-responsive-font');
var cssnano = require('cssnano');

var pug = require('gulp-pug');

gulp.task('postcss', function () {
    var processors = [
        autoprefixer('last 5 version'),
        cssnext, 
        precss,
        lost,
        minmax,
        pxtorem,
        // cssnano,
        postcssResponsiveFont
    ];
    return gulp.src('./src/style/**/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest/css'));
});

gulp.task('pug', function () {
    return gulp.src('./src/pug/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dest/'));
});


// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch('src/style/*.css', ['postcss']);
    gulp.watch('src/pug/**/*.pug', ['pug']);
    // gulp.watch(paths.images, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'postcss', 'pug']);