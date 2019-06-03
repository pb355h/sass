# コーディングガイドライン
本サイトの開発環境、コーディングルール、モジュール集について記載しています。

## 開発環境
node、npmのインストールは済ませておいてください。(P.xx参照)

### パッケージダウンロード
```
npm i 
```

### パッケージ一覧

* [gulp](https://www.npmjs.com/package/gulp)(P.118参照)
* [gulp-sass](https://www.npmjs.com/package/gulp-sass)(P.140参照)
* [require-dir](https://www.npmjs.com/package/require-dir)(P.140参照)
* [gulp-sass-glob](https://www.npmjs.com/package/gulp-sass-glob)(P.140参照)
* [gulp-watch](https://www.npmjs.com/package/gulp-watch)(P.148参照)
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)(P.148参照)
* [autoprefixer](https://www.npmjs.com/package/autoprefixer)(P.152参照)
* [gulp-postcss](https://www.npmjs.com/package/gulp-postcss)(P.153参照)
* [gulp-svg-sprites](https://www.npmjs.com/package/gulp-svg-sprites)(P.154参照)
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)(P.159参照)
* [kss](https://www.npmjs.com/package/kss)(P.178参照)
* [run-sequence](https://www.npmjs.com/package/run-sequence)(P.182参照)
* [gulp-ejs](https://www.npmjs.com/package/gulp-ejs)(P.231参照)
* [gulp-data](https://www.npmjs.com/package/gulp-data)(P.246参照)
* [del](https://www.npmjs.com/package/del)(P.248参照)
* [gulp-copy](https://www.npmjs.com/package/gulp-copy)(P.248参照)
* [gulp-if](https://www.npmjs.com/package/gulp-if)(P.248参照)
* [csswring](https://www.npmjs.com/package/csswring)(P.248参照)
* [css-mqpacker](https://www.npmjs.com/package/css-mqpacker)(P.248参照)
* [gulp-minify-ejs](https://www.npmjs.com/package/gulp-minify-ejs)(P.248参照)

### タスク一覧

* Sassのコンパイル、PostCssによる最適化(P.140参照)
```
npm run sass
```

* ファイルの監視(P.148参照)
```
npm run watch
```

* サイト構造部分のスプライト画像の生成(P.155参照)
```
npm run sprite:st
```

* コンテンツ側のスプライト画像の生成(P.155参照)
```
npm run sprite:c
```

* 画像圧縮(P.159参照)
```
npm run imagemin
```

* スタイルガイドの生成(P.179参照)
```
npm run kss
```

* EJSのコンパイル(P.234参照)
```
npm run ejs
```

### ビルド一覧

* 開発用
```
npm run build
```

* 商用(P.249参照)
```
npm run build:prod
```

### ディレクトリ・ファイル構成

```
.
├── assets
│   ├── ejs
│   │   ├── _template.ejs
│   │   ├── contents
│   │   │   └── section
│   │   │       └── _section_lv2.ejs
│   │   ├── settings
│   │   │   ├── _pages.json
│   │   │   └── _variables.ejs
│   │   └── structures
│   │       ├── _footer.ejs
│   │       └── _header.ejs
│   ├── scss
│   │   ├── base
│   │   │   └── _normalize.scss
│   │   ├── contents
│   │   │   ├── _button.scss
│   │   │   ├── _card.scss
│   │   │   ├── _container.scss
│   │   │   ├── _grid.scss
│   │   │   ├── _heading.scss
│   │   │   ├── _link.scss
│   │   │   └── _section.scss
│   │   ├── settings
│   │   │   ├── _js.scss
│   │   │   ├── _main.scss
│   │   │   ├── _variables.scss
│   │   │   └── _zindex.scss
│   │   ├── structures
│   │   │   ├── _footer.scss
│   │   │   ├── _header.scss
│   │   │   └── _main.scss
│   │   ├── tools
│   │   │   ├── functions
│   │   │   │   └── _rem.scss
│   │   │   └── mixins
│   │   │       ├── _contentsSprite.scss
│   │   │       ├── _hack.scss
│   │   │       ├── _margin.scss
│   │   │       ├── _mediaqueries.scss
│   │   │       ├── _rem.scss
│   │   │       ├── _structuresSprite.scss
│   │   │       └── _wordbreak.scss
│   │   └── trumps
│   │       └── _col.scss
│   ├── sprite
│   │   ├── contents
│   │   │   ├── arrow-circle-red.svg
│   │   │   ├── chevron-red.svg
│   │   │   ├── chevron-white.svg
│   │   │   ├── external-gray.svg
│   │   │   ├── external-white.svg
│   │   │   └── facebook.svg
│   │   ├── structures
│   │   │   ├── contact.svg
│   │   │   └── search.svg
│   │   └── tmpl
│   │       └── _mixins.scss
│   └── styleguide
│       ├── README.md
│       ├── builder.js
│       ├── index.hbs
│       ├── kss-assets
│       │   ├── WARNING.txt
│       │   ├── github-fork--black.png
│       │   ├── kss.css
│       │   ├── kss.js
│       │   ├── kss.scss
│       │   ├── noise-low.png
│       │   ├── prettify.js
│       │   ├── sample-inline.png
│       │   ├── sample-inline.svg
│       │   ├── sample.png
│       │   ├── sample.svg
│       │   └── scrollspy.js
│       └── package.json
├── build
│   ├── assets
│   │   ├── css
│   │   │   └── style.css
│   │   ├── img
│   │   │   ├── contents
│   │   │   │   └── sprite.svg
│   │   │   └── structures
│   │   │       ├── logo.svg
│   │   │       └── sprite.svg
│   │   └── js
│   │       └── ui.js
│   ├── index.html
│   ├── styleguide
│   │   ├── index.html
│   │   ├── kss-assets
│   │   │   ├── WARNING.txt
│   │   │   ├── github-fork--black.png
│   │   │   ├── kss.css
│   │   │   ├── kss.js
│   │   │   ├── kss.scss
│   │   │   ├── noise-low.png
│   │   │   ├── prettify.js
│   │   │   ├── sample-inline.png
│   │   │   ├── sample-inline.svg
│   │   │   ├── sample.png
│   │   │   ├── sample.svg
│   │   │   └── scrollspy.js
│   │   ├── section-1.html
│   │   ├── section-2.html
│   │   ├── section-3.html
│   │   ├── section-4.html
│   │   └── section-5.html
│   └── top
│       └── assets
│           ├── css
│           │   └── local.css
│           └── img
│               ├── company.png
│               ├── company_2.jpg
│               ├── company_2_x2.jpg
│               ├── company_x2.png
│               ├── lab.jpg
│               ├── lab_2.jpg
│               ├── lab_3.jpg
│               ├── main_anniversary.jpg
│               ├── main_anniversary_x2.jpg
│               ├── service.jpg
│               ├── service_2.jpg
│               ├── service_3.jpg
│               └── service_4.jpg
├── gulp
│   ├── config.js
│   └── tasks
│       ├── clean.js
│       ├── copy.js
│       ├── ejs.js
│       ├── imagemin.js
│       ├── kss.js
│       ├── sass.js
│       ├── sprite.js
│       └── watch.js
├── gulpfile.js
├── npm-shrinkwrap.json
├── package.json
└── src
    ├── assets
    │   ├── css
    │   │   └── style.scss
    │   ├── img
    │   │   ├── contents
    │   │   │   └── sprite.svg
    │   │   └── structures
    │   │       ├── logo.svg
    │   │       └── sprite.svg
    │   └── js
    │       └── ui.js
    ├── index.ejs
    └── top
        └── assets
            ├── css
            │   └── local.scss
            └── img
                ├── company.png
                ├── company_2.jpg
                ├── company_2_x2.jpg
                ├── company_x2.png
                ├── lab.jpg
                ├── lab_2.jpg
                ├── lab_3.jpg
                ├── main_anniversary.jpg
                ├── main_anniversary_x2.jpg
                ├── service.jpg
                ├── service_2.jpg
                ├── service_3.jpg
                └── service_4.jpg

```

## コーディングスキーマ

### 対象環境
サンプルサイトで想定しているユーザー環境について定義します。

|                | os                                       | 推奨環境                                                                                                |
|----------------|------------------------------------------|--------------------------------------------------------------------------------------------------------|
| **パソコン**    | - Windows <br>- MacOS X (macOS)          | - Windows IE 11 <br>- Windows Firefox 最新版 <br>- Windows Google Chrome 最新版 <br>- MacOSX Firefox 最新版 <br>- MacOSX Google Chrome 最新版 |
| **スマートフォン** <br> **タブレット** | - iOS 8.0 <br>- Android 5.0 | - Mobile Safari <br>- Google Chrome |


### レスポンシブ
* ラージビュー<br>
801px以上
* ミディアムビュー<br>
601px〜800px
* スモールビュー<br>
600px以下

#### メディアクエリの指定方法
ラージスクリーン・ファーストとする。

```
/* 大画面サイズのCSS */
.c-disp {display: none;} 

@media (max-width: 800px) { 
	/* 中画面サイズのCSS */ 
	.c-disp {display: block;} 
} 

@media (max-width: 600px) { 
	/* 小画面サイズのCSS */ 
	.c-disp {display: none;} 
}

/* Mixinを使ったコード */
@include max-screen($BREAK_POINT_MD) {
	/* 中画面サイズのCSS */ 
	.c-disp {display: block;} 
}
@include max-screen($BREAK_POINT_SM) {
	/* 小画面サイズのCSS */
	.c-disp {display: none;} 
}
```

#### viewport指定

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## コーディングルール

### SCSSファイル

#### ディレクトリ構成

| ルート | 第2階層     |                            |
|-------|------------|-----------------------------|
| scss  | settings   | サイト共通の設定ファイルの管理  |
|       | tools      | mixin、function             |
|       | base       | リセットCSS                  |
|       | structures | サイト共通の構造部分を定義     |
|       | contents   | コンテンツモジュール          |
|       | trumps     | ヘルパークラス               |

#### ファイル構成

モジュールはカテゴリー毎にファイルを分けて管理します。

```
scss
├── base
│   └── _normalize.scss
├── contents
│   ├── _button.scss
│   ├── _card.scss
│   ├── _container.scss
│   ├── _grid.scss
│   ├── _heading.scss
│   ├── _link.scss
│   └── _section.scss
├── settings
│   ├── _js.scss
│   ├── _main.scss
│   ├── _variables.scss
│   └── _zindex.scss
├── structures
│   ├── _footer.scss
│   ├── _header.scss
│   └── _main.scss
├── tools
│   ├── functions
│   │   └── _rem.scss
│   └── mixins
│       ├── _contentsSprite.scss
│       ├── _hack.scss
│       ├── _margin.scss
│       ├── _mediaqueries.scss
│       ├── _rem.scss
│       ├── _structuresSprite.scss
│       └── _wordbreak.scss
└── trumps
    └── _col.scss
```

#### 命名ルール

MindBEMding（P.xx）をベースにカスタマイズしたものを採用しています。<br>
各モジュールには役割と管理を区別するためにプレフィックスを用います。<br>
JavaScriptによる状態の切り替えでクラス名を利用する場合、SMACSS の状態（ステート）ルールを参考にis-プレフィックスを使用します。<br>

- structures - `.st-カテゴリー名-*`
- contents - `.c-カテゴリー名-*`
- trumps - `.u-カテゴリー名-*`

カスタムデータ属性<br>

- structures - `data-カテゴリー名-*`
- contents - `data-カテゴリー名-*`
- trumps - `data-u-カテゴリー名-*`

カスタムデータ属性そのものにルールを持たせる場合は必ずtrumpsに格納すること。

### EJSファイル

#### ディレクトリ構成

| ルート | 第2階層     |                                 |
|-------|------------|----------------------------------|
| ejs   | settings   | サイト共通の設定ファイルの管理 |
|       | structures | サイト共通の構造部分を定義 |
|       | contents   | コンテンツモジュール、パターンの定義 |

### SVGスプライト

#### ディレクトリ構成

| ルート  | 第2階層     |                                        |
|--------|------------|-----------------------------------------|
| sprite | tmpl       | mixinファイルの基となるテンプレートファイル |
|        | structures | サイト共通の構造部分の画像管理 |
|        | contents   | コンテンツモジュールの画像管理 |

### スタイルガイド

#### ディレクトリ構成

| ルート      | 第2階層     |                                   |
|------------|------------|------------------------------------|
| styleguide | kss-assets | スタイルガイド生成用のリソースファイルを管理。|

#### ファイル構成

```
styleguide
├── README.md // ドキュメントファイル
├── builder.js
├── index.hbs // スタイルガイド用テンプレート
├── kss-assets
└── package.json
```