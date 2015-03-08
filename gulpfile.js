var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('reload', function() {
  gulp.src('public/**/!(~)')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['public/**/*.@(css|html|js|json)'], ['reload']);
});

gulp.task('server', function() {
  connect.server({
    root: 'public',
    livereload: true,
    port: 8000
  });
});

gulp.task('default', ['server', 'watch']);
