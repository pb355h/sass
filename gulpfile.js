var requireDir = require('require-dir'); // require-dirモジュールの読み込み

// 各タスクの読み込み
requireDir('./gulp/tasks');

// var gulp = require('gulp');
// var webserver = require('gulp-webserver');
//
// gulp.task('webserver', function(){
//   gulp.src('build')
//   .pipe(webserver({
//     livereload: true,
//     open: true,
//     port: 8002
//   }));
// });

//プラグイン
const gulp = require('gulp')
const browserSync =require('browser-sync')

//ブラウザシンクさせる対象のフォルダ
const src = 'build/'

//管理するファイルのパス
const srcDir = {
  html:[src + '*.html'],//html第1階層まで
  css:[src + 'assets/css/*.css', src + 'assets/css/**/*.css'],//css第2階層まで
}

//タスク
//html
gulp.task('html', () => {
  gulp.src(srcDir.html)
  .pipe(browserSync.reload({ stream:true }))
})

//css
gulp.task('css', () => {
  gulp.src(srcDir.css)
  .pipe(browserSync.reload({ stream:true }))
})

//BrowserSync
 gulp.task('browser-sync', () => {
   browserSync({
      server: {
        baseDir: src,
        index : 'index.html'
     },
    port: 2000,
   })
 })

//デフォルト
gulp.task('default', ['browser-sync'], () => {
  gulp.watch([srcDir.html, srcDir.css], ['html', 'css'])
})
