const gulp = require('gulp');
const gulp_rename = require('gulp-rename')

gulp.task('rename',() => {
    gulp.src('js/*.js')
            .pipe(gulp_rename({
                dirname: 'demo',
                prefix: 'test.',
                suffix:'.min',
                extname: '.js'
            }))
            .pipe(gulp.dest('dest/'))
})


gulp.task('default',['rename'])