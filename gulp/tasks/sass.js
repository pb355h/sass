var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require("gulp-sass-glob");
var config = require('../config.js'); // config.jsの読み込み
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');
var gulpif = require('gulp-if');
var envOption = { string: 'env' };
var options = require('minimist')(process.argv.slice(2), envOption);
var isProduction = (options.env === 'production') ? true : false;
gulp.task('sass', function () {
    return gulp.src(config.src + '/**/*.scss')
        .pipe(plumber({
            errorHandler: function(err) {
                console.log(err.messageFormatted);
                this.emit('end');
            }
        }))
        .pipe(sassGlob())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(postcss([
            autoprefixer({
                browsers: [
                    'last 2 versions',
                    'iOS >= 8',
                    'Android >= 4'
                ]
            })
        ]))
        .pipe(gulpif(isProduction, postcss([
            mqpacker({
                sort: function (a, b) {
                    return b.localeCompare(a);
                }
            }),
            csswring()
        ])))
        .pipe(gulp.dest(config.build));
});
