const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
// const critical = require('critical').stream;
const cleanCSS = require('gulp-clean-css');

function style() {
    return gulp.src('./css/**/*.scss')
            .pipe(sass())
            .pipe(cleanCSS())
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.stream())
}

function watch () {
    browserSync.init({
        server: {
          baseDir: './'
        }
    });
    gulp.watch('./css/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

// function taskCritical () {
//     return src('./*.html')
//         .pipe(
//             critical({
//                 base: './',
//                 inline: true,
//                 css: ['css/style.css'],
//             })
//         )
//         .on('error', err => {
//             log.error(err.message);
//         })
//         .pipe(dest('./'))
// }

// exports.critical = taskCritical;
exports.style = style;
exports.watch = watch;