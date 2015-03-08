var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('server', function() {
  connect.server({
    root: 'public',
    port: 8000
  });
})

gulp.task('default', ['server']);
