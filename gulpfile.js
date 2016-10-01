var gulp = require('gulp');
var jslint = require('gulp-jslint');
var sass = require('gulp-sass');
var del = require('del');

var paths = {
    clean: {
        css: './public/stylesheets/**/*.css'
    },
    scss: {
        input: "./styleguide/**/*.scss",
        output: "./public/stylesheets"
    },
    jslint: [
        './app.js',
        './settings.js',
        './routes/**/*.js',
        './public/javascripts/**/*.js'
    ]
};

gulp.task('clean:css', function(){
    return del(paths.clean.css);
});

gulp.task('build:css', function(){
    var outputStyle = "compressed";
    if(process.env.NODE_ENV === 'development') {
        outputStyle = "nested";
    }
    return gulp.src(paths.scss.input)
        .pipe(sass({
            outputStyle: outputStyle
        }).on('error', sass.logError))
        .pipe(gulp.dest(paths.scss.output));
});

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

gulp.task('clean', ['clean:css'], function(){

});

gulp.task('test', function(){
    
});

gulp.task('build', ['jslint', 'build:css'], function() {

});

gulp.task('default', function(){
    
});