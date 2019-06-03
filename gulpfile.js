var requireDir = require('require-dir'); // require-dirモジュールの読み込み

// 各タスクの読み込み
requireDir('./gulp/tasks');

var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function(){
  gulp.src('build')
  .pipe(webserver({
    livereload: true,
    open: true,
    port: 8002
  }));
});
