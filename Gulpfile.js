const gulp = require('gulp');
const sass = require('gulp-sass');
const tilde = require('node-sass-tilde-importer');
const shell = require('gulp-shell')

gulp.task('themes', function () {
  return gulp.src('src/themes/*.scss')
    .pipe(sass({importer: tilde}))
    .pipe(gulp.dest('src/assets/themes'))
});

gulp.task('ng', shell.task('npx ng build --prod'));

gulp.task('build', gulp.series(['themes', 'ng']));
