
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var styleFiles = [
        'css/sass/main.scss'
    ];
var jsFiles = [
		// 'bower_components/jquery/dist/jquery.js',
		'bower_components/angular/angular.js',
		'bower_components/angular-route/angular-route.js',
		'js/src/app.js'
	];



gulp.task('styles', function() {
    gulp.src(styleFiles)
        .pipe(concat('main.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('scripts', function(){
	gulp.src(jsFiles)
		.pipe(concat('app.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('./js/'))
		.on('error', gutil.log);
});

gulp.task('watch', function(){
    gulp.watch(['css/sass/*.scss'], ['styles']);
    gulp.watch(['js/src/*.js'], ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);