var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here

});

gulp.task('sass', function(){
  return gulp.src('my-portfolio/scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('my-portfolio/css'))
});

gulp.task('watch', function(){
  gulp.watch('my-portfolio/scss/**/*.scss', ['sass']); 
  // Other watchers
});