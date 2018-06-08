const gulp = require('gulp');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-minify-css');
const minifyHtml = require('gulp-minify-html');
const minifyImg = require('gulp-imagemin');
gulp.task('dealJs', () => {
    gulp.src('src/**/*.js')
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('dest/'));
});
gulp.task('dealCss', () => {
    gulp.src('src/**/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dest/'));

});
gulp.task('dealHtml', () => {
    gulp.src('src/index.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('dest/'));
});
gulp.task('dealImg', () => {
    gulp.src('src/imgs/**')
        .pipe(minifyImg())
        .pipe(gulp.dest('dest/imgs/'));
});
gulp.task('moveData', () => {
    gulp.src('src/data/**')
        .pipe(gulp.dest('dest/data'));
});
gulp.watch('src/**/*.js', ['dealJs']);
gulp.task('deal', ['dealJs', 'dealCss', 'dealHtml', 'dealImg']);
gulp.task('move', ['moveData']);
gulp.task('default', ['deal', 'move']);