var gulp = require('gulp');
var del = require('del');
var config = require('../config.js'); // config.jsの読み込み

gulp.task('clean', function () {
    return del(config.build);
});
