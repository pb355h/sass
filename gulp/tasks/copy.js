var gulp = require('gulp');
var copy = require('gulp-copy');
var config = require('../config.js'); // config.jsの読み込み

gulp.task('copy', function () {
    return gulp.src(config.src + '/**/*.js')
        .pipe(gulp.dest(config.build));
});
