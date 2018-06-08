var gulp = require('gulp');

gulp.task('moveFile',function () { 
    gulp.src('js/demo.js')
    .pipe(gulp.dest('dest/'))
 })

 gulp.watch('js/demo.js',['moveFile']);
 
 gulp.task('default',['moveFile'])