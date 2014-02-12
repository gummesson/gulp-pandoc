/* Modules */

var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var mocha  = require('gulp-mocha');

/* Tasks */

gulp.task('lint', function() {
  gulp.src('*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  gulp.src('*.js')
    .pipe(mocha({ reporter: 'list' }));
});

gulp.task('default', ['lint', 'test'], function() {
  gulp.watch('*.js', ['lint', 'test']);
});
