var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('default', function() {
  // place code for your default task here

});

gulp.task('reloadbrowser', function(){
	browserSync.reload();
});
gulp.task('sass', function(){
  return gulp.src('my-portfolio/scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('my-portfolio/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function(){
  gulp.watch('my-portfolio/scss/**/*.scss', ['sass', 'reloadbrowser']); 
  // Other watchers
});


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: "chloe.dev"
    });

    gulp.watch("my-portfolio/scss/*.scss", ['sass']);
    gulp.watch("my-portfolio/*.html").on('change', browserSync.reload);
});
