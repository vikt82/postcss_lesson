var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

gulp.task('postcss', function () {
    var processors = [
        autoprefixer('last 5 version'),
        cssnext, 
        precss
    ];
    return gulp.src('./src/style/**/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest/css'));
});


// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch('src/style/style.css', ['postcss']);
    // gulp.watch(paths.images, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'postcss']);