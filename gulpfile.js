const {src, dest, watch, parallel, series} = require('gulp');

// Для установки галпа, команда в консоли "npm i"


const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixser = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer  = require('gulp-newer');
const svgSprite  = require('gulp-svg-sprite');
const fonter  = require('gulp-fonter');
const ttf2woffw2  = require('gulp-ttf2woff2');
const include  = require('gulp-include');

function pages () {
  return src('app/pages/*.html')
  .pipe(include({
    includePaths: 'app/components'
  }))
  .pipe(dest('app'))
  .pipe(browserSync.stream())
}

function fonts () {
  return src('app/fonts/src/*.*')
  .pipe(fonter({
    formats: ['woff', 'ttf']
  }))
  .pipe(src('app/fonts/*.ttf'))
  .pipe(ttf2woffw2())
  .pipe(dest('app/fonts'))
}

function sprite () {
  return src('app/images/*.svg')
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: '../sprite.svg',
        example: true
      }
    }
  }))
  .pipe(dest('app/images'))
}

function images() {
  return src(['app/images/src/*.*', '!app/images/src/*.svg'])
  .pipe(newer('app/images'))
  // .pipe(avif({quality : 50}))

  .pipe(src('app/images/src/*.*'))
  .pipe(newer('app/images'))
  .pipe(webp())

  .pipe(src('app/images/src/*.*'))
  .pipe(newer('app/images'))
  .pipe(imagemin())

  .pipe(dest('app/images'))
}

function scripts() {
  return src([
    'app/js/**/*.js',
    '!app/js/main.min.js' 
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())
}

function styles() {
  return src('app/scss/style.scss')
  // return src('app/scss/*.scss')
  .pipe(autoprefixser({overrideBrowserslist: ['last 10 version']}))
  .pipe(concat('style.min.css'))
  .pipe(scss({ outputStyle: 'compressed' }))
  .pipe(dest('app/css'))
  .pipe(browserSync.stream())

}

function watching() {
  // watch(['app/scss/style.scss'], styles)
  watch(['app/images/src'], images)
  watch(['app/scss/**/*.scss'], styles)
  watch(['app/components/*', 'app/pages/*'], pages)
  // watch(['app/js/main.js'], scripts)
  watch([
    'app/js/**/*.js',
    '!app/js/main.min.js' 
  ], scripts)
  watch(['app/**/*.html']).on('change',browserSync.reload) // *. что бы нашло все файлы html в корне. **./*  что бы нашло всей файлы где бы они небыли
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  })
}

function cleanDist() {
  return src('dist')
  .pipe(clean())
}

// Функция для сбора готовой верстки и сжатых файлов,команда в консоли "gulp build"
function building() { 
  return src([
    'app/css/style.min.css',
    'app/images/*.*',
    '!app/images/*.svg',
    'app/images/sprite.svg',
    'app/fonts/*.*',
    'app/js/main.min.js',
    'app/**/*.html'
  ],{base: 'app'}) 
  .pipe(dest('dist'))
}

exports.styles = styles
exports.images = images
exports.pages = pages
exports.sprite = sprite
exports.building = building
exports.fonts = fonts
exports.scripts = scripts
exports.watching = watching
exports.browsersync = browsersync

exports.build = series(cleanDist, building)
exports.default = parallel(styles, images, scripts, browsersync, pages, watching)