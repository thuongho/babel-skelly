'use strict';

var gulp = require('gulp');
// didn't include babel b/c babelify make use of CL to transform our code
// transform that allows browserify to package all the code and convert using babel on the way in
var babelify = require('babelify');
// write code in style of node modules, isomorphic code in browser and server
var browserify = require('browserify');
// use modules such as browserify which is not strictly set up out of the box to work with gulp
var source = require('vinyl-source-stream');

// $gulp build
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

// copy the index file into the dist folder
gulp.task('copy', function () {
  gulp.src('client/index.html')
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  // if any of the js file changes, run build
  gulp.watch('client/**/*.js', ['build']);
  // if any of the html file change, run copy
  gulp.watch('client/*.html', ['copy']);
});

// so that we don't always have to run build and copy
// give it a default task that runs all 3
// $gulp
gulp.task('default', ['copy', 'build', 'watch']);