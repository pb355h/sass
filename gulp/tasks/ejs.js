var gulp = require('gulp');
var ejs = require('gulp-ejs');
var plumber = require('gulp-plumber');
var data = require('gulp-data');
var pages = require('../../assets/ejs/settings/_pages.json');
var config = require('../config.js'); // config.jsの読み込み
var minifyejs = require('gulp-minify-ejs');
var gulpif = require('gulp-if');
var envOption = { string: 'env' };
var options = require('minimist')(process.argv.slice(2), envOption);
var isProduction = (options.env === 'production') ? true : false;

gulp.task('ejs', function () {
    return gulp.src([config.src + '/**/*.ejs', '!' + config.src + '/**/_**/*.ejs', '!' + config.src + '/**/_*.ejs'])
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err.messageFormatted);
                this.emit('end');
            }
        }))
        .pipe(data(function (file) {
            if (file.path.length !== 0) {
                var path = file.path.split('¥').join('/');
                path = path.split('\\').join('/');
                var filename = path.split('src/')[1].replace('.ejs', '');
                return {
                    metadata: pages[filename]
                }
            }
        }))
        .pipe(ejs('', {'ext': '.html'}))
        .pipe(gulpif(isProduction, minifyejs()))
        .pipe(gulp.dest(config.build));
});
