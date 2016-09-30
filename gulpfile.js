var gulp = require('gulp');
var jslint = require('gulp-jslint');

var paths = {
    jslint: [
        'app.js',
        'settings.js',
        'routes/**/*.js',
        'public/javascripts/**/*.js'
    ]
};

gulp.task('jslint', function(){
    return gulp.src(paths.jslint)
        .pipe(jslint({
            node: true,
            nomen: true,
            unparam: true,
            white: true,
            globals: [],
            predef: []
        }))
        .pipe(jslint.reporter('stylish'));
});

gulp.task('build', ['jslint'], function() {

});

gulp.task('default', function(){
    
});