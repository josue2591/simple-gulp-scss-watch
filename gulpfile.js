/**
 * @file
 * Theme tasks.
 */
/* eslint-env node */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//
// Compile scss to css
//

function style() {
  //1. where is my scss file
  return gulp.src('./scss/**/*.scss')
  //2. pass throught the sass compiler
  .pipe(sass())
  // 3. where do i save the compiled
  .pipe(gulp.dest('./css'))
  // browser sync
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;