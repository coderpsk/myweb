var gulp = require('gulp'),
 watch =require('gulp-watch');
gulp.task('default',function(){
  console.log("horaaay you created  did gulp");

});

gulp.task('html',function(){
  console.log("imagine sommething done to your html");
});
gulp.task('styles',function(){
  console.log("imagine saas or post css task run");
});
gulp.task('watch',function(){
  watch('./app/index.html',function(){
    gulp.start('html');
  });
  watch('./app/assets/styles/**/*.css',function(){
    gulp.start('styles');
  })
});
