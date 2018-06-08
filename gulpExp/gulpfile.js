var gulp = require('gulp');

gulp.task('show', function () {
	console.log(123);

})
gulp.task('default', ['show'])