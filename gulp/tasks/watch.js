var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var config = require('../config.js'); // config.jsの読み込み

gulp.task('watch', function () {

    /**
     * Chapter-15までのwatchタスク
     */
    //watch([config.src + '/**/*.scss', config.scss + '/**/*.scss'], function () {
        //gulp.start(['sass']);
    //});

    // scssファイルの変更を監視しsassタスクを実行する。
    watch([config.src + '/**/*.scss', config.scss + '/**/*.scss'], function () {
        runSequence('sass', 'kss')
    });

    // ejsファイルの変更を監視しejsタスクを実行する。
    watch([config.src + '/**/*.ejs'], function () {
        gulp.start(['ejs']);
    });
});