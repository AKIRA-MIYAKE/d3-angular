var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy:false});

gulp.task('scripts', function(){
    //combine all js files of the app
    return gulp.src(['!./app/**/*_test.js','./app/**/*.js'])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('templates',function(){
    //combine all template files of the app into a js file
    return gulp.src(['!./app/index.html',
        './app/**/*.html'])
        .pipe(plugins.angularTemplatecache('templates.js',{standalone:true}))
        .pipe(gulp.dest('./build'));
});

gulp.task('sass', function() {
    // Cmpile sass and scss to css
    return gulp.src(['./app/**/*.sass', './app/**/*.scss'])
        .pipe(plugins.sass({
          sourceComments: 'normal'
        }))
        .pipe(gulp.dest('./app/css-temp'));
});

gulp.task('css', ['sass'], function(){
    return gulp.src('./app/**/*.css')
        .pipe(plugins.concat('app.css'))
        .pipe(gulp.dest('./build'));
});

gulp.task('vendorJS', function(){
    //concatenate vendor JS files
    return gulp.src(['!./bower_components/**/*.min.js',
        './bower_components/**/*.js'])
        .pipe(plugins.concat('lib.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('vendorCSS', function(){
    //concatenate vendor CSS files
    return gulp.src(['!./bower_components/**/*.min.css',
        './bower_components/**/*.css'])
        .pipe(plugins.concat('lib.css'))
        .pipe(gulp.dest('./build'));
});

gulp.task('copy-index', function() {
    return gulp.src('./app/index.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('watch',function(){
    gulp.watch(['./app/**/*.js','!./app/**/*test.js'],['scripts']);
    gulp.watch(['!./app/index.html','./app/**/*.html'],['templates']);
    gulp.watch('./app/**/*.css',['css']);
    gulp.watch('./app/index.html',['copy-index']);
    gulp.watch(['./app/**/*.sass', './app/**/*.scss'], ['sass']);
});

gulp.task('webserver', function() {
    gulp.src('build')
        .pipe(plugins.webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default',['webserver','scripts','templates','css','copy-index','vendorJS','vendorCSS','watch']);
