var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('reload', function() {
  gulp.src('public/**/!(~)')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['public/**/*.@(css|html|js|json)'], ['reload']);
  gulp.watch(['bundle.js', 'lib/**/*.js'], ['browserify']);
});

gulp.task('server', function() {
  connect.server({
    root: 'public',
    livereload: true,
    port: 8000
  });
});

gulp.task('default', ['browserify', 'server', 'watch']);

gulp.task('browserify', function() {
  return browserify('./bundle.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/'));
});
