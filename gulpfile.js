
// Определяем константы Gulp
const gulp = require('gulp');

// Подключаем модули gulp-sass
const sass = require('gulp-sass');

// Подключаем Autoprefixer
const autoprefixer = require('gulp-autoprefixer');

// Подключаем модуль gulp-clean-css
const cleancss = require('gulp-clean-css');

// Подключаем Browsersync
const browserSync = require('browser-sync').create();

function styles() {
  return gulp.src('./app/css/sass/*.scss') // Выбираем источник: "app/sass/main.sass" или "app/less/main.less"
    .pipe(sass().on('error', sass.logError)) // Преобразуем значение переменной "preprocessor" в функцию
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
    .pipe(cleancss( { level: { 1: { specialComments: 0 } } , format: 'beautify' } )) // Минифицируем стили
    .pipe(gulp.dest('./app/css')) // Выгрузим результат в папку "app/css/"
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({ // Инициализация Browsersync
    server: { baseDir: 'app/' }, // Указываем папку сервера
    notify: false, // Отключаем уведомления
    online: true // Режим работы: true или false
  })
  // Мониторим файлы препроцессора на изменения
  gulp.watch('./app/css/sass/*.scss', styles);
  gulp.watch('./app/*.html').on('change', browserSync.reload);
}


// Экспортируем функцию styles() в таск styles
exports.styles = styles;
exports.watch = watch;
