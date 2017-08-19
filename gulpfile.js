"use strict";

var port = "4500";

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');

var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    proxy: 'http://localhost:' + port+ '/'
  });

  gulp.watch("./index.html").on('change', browserSync.reload);
});

gulp.task('scss', function() {
  return gulp.src(['./**/*.scss', '!./node_modules/**'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('.'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function() {
  return gulp.src(['./**/*.sass', '!./node_modules/**'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('.'));
});

gulp.task('start-watch', function () {
  gulp.watch('./**/*.scss', ['scss'])
  // gulp.watch('./**/*.sass', ['sass'])
  // gulp.watch('./**/*.less', ['less'])
});

gulp.task('default', ['scss', 'sass']);

gulp.task('watch', ['default', 'start-watch', 'serve']);
