const gulp = require('gulp'),
  sass = require('gulp-sass'),
  nodeSass = require('node-sass'),
  sourceMaps = require('gulp-sourcemaps');

sass.compiler = nodeSass;

gulp.task('sass', () => {
  return gulp.src('src/sass/index.scss')
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('assets/css'));
})

gulp.task('watch', () => {
  gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
})

gulp.task('serve', gulp.series('sass', 'watch'));