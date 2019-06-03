var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprites');
var config = require('../config.js'); // config.jsの読み込み
var options = require('minimist')(process.argv.slice(2));
var spriteConfig = {
    baseSize: 128, // 個別のSVGファイルを制作時の高さ,
    padding: 10, // スプライト同士の余白
    common: options.prefix,
    cssFile: config.scss + '/tools/mixins/_' + options.dir + 'Sprite.scss', // mixinファイルの出力先
    svgPath: '../img/' + options.dir + '/sprite.svg', // cssから読み込むspriteファイルへのパス
    svg: {
        sprite: config.src + '/assets/img/' + options.dir + '/sprite.svg' // spriteファイルの出力先
    },
    preview: false, // アイコンの一覧画面の生成有無
    templates: {
        scss: require('fs').readFileSync(config.sprite + '/tmpl/_mixins.scss', 'utf-8') // mixinファイルを生成するためのテンプレートファイル
    }
};

gulp.task('sprites', function () {
    return gulp.src(config.sprite + '/' + options.dir + '/*.svg')
        .pipe(svgSprite(spriteConfig))
        .pipe(gulp.dest('./'))
});

