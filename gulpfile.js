var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('typescript', function () {
    console.log('Compiling typescript');
    return gulp.src(['app/**/*.ts'])
        .pipe(ts({module: 'AMD'}))
        .pipe(gulp.dest('build'))
        .on('finish', function () {
            console.log("finished compiling typescript")
        });
});

gulp.task('copy', function () {
    console.log('copying the html files')
    gulp.src(['app/**/*.html'])
        .pipe(gulp.dest('build'))
        .on('finish', function () {
            console.log("finished copying the html files")
        });
});

gulp.task('default', ['typescript', 'copy'], function () {
    console.log('good to go..CHEERS :)  !!');
});

gulp.task('watch', function () {
    gulp.watch('app/**/*.*', ['default']);
});



