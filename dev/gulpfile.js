var gulp = require('gulp');
var run = require('gulp-run');
var fs = require('fs');

gulp.task('dist', function() {

  fs.unlink('../r2/*.*', function (err) {
    if (err) { console.log(err.message); };
    gulp.src('src/r2/r2.js').pipe(gulp.dest('../r2/'));
  });

  fs.unlink('../*.js', function (err) {
    if (err) { console.log(err.message); };
    gulp.src('src/gh3/*.js').pipe(gulp.dest('../'));
  });

});

gulp.task('default', function() {

});

