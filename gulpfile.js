'use strict';

var gulp = require('gulp');
// didn't include babel b/c babelify make use of CL to transform our code
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// gulp build
gulp.task('build', function () {
  browserify({
    // tell it where all the entry points are
    // root file that calls in all the rest of them
    entries: './client/app/main.js',
    debug: true
  })
  // transform browserify code using babelify middleware
  .transform(babelify)
  // bundle it up meaning stitch all the transformed code into one file
  .bundle()
  .pipe(source('app.bundle.js'))
  // pipe it again to distribution folder
  .pipe(gulp.dest('./dist'));
});