
var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');





gulp.task('css', function () {

    return gulp.src('./css/less/style.less')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(less({
            compress: false
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions', "IE 9"],
        }))
        .pipe( gulp.dest('./css') )
        .pipe( browserSync.stream());
});

gulp.task('server', function() {

    // Not remove! This is config by denis
    browserSync.init({
        host: 'localhost',
        open: 'external',
        proxy: 'http://localhost/MODEST/index.html',
        port: '8086'
    });



});

gulp.task('gcmq', function () {
    gulp.src('./css/***.css')
        .pipe(gcmq())
        .pipe(gulp.dest('css'));
});






gulp.task('watch', function() {
    gulp.watch('./css/less/style.less', ['css']);
    gulp.watch(['./index.html', './js/common.js'], browserSync.reload);
});

gulp.task('default', ['css', 'server', 'watch']);