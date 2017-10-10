'use strict';

var os = require('os');
var gulp = require('gulp');
var sass = require('gulp-sass');
var open = require('gulp-open');
var imagemin = require('gulp-imagemin');

gulp.task('styles', function() {
    return gulp.src('./src/scss/styles.scss')
      .pipe(sass())
      .pipe(gulp.dest('./dist/css'));
  });

gulp.task('open', function(){
    gulp.src('./index.html').pipe(open());
});

// watch task
gulp.task('watch', function() {
    gulp.watch('./index.html', ['open']);
    gulp.watch('./src/scss/*.scss', ['styles']);
  });

  gulp.task('imagemin', function(){
      gulp.src('./src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
  });