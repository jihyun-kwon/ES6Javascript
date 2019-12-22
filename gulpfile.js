const gulp = require('gulp');
<<<<<<< HEAD
const babel = require('gulp-babel');

gulp.task('default', async function() {
    gulp.src('es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest("dist"));
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
=======
//걸프 의존성을 여기 쓴다

gulp.task('default', function()  {
//걸프 작업을 여기 쓴다
>>>>>>> b697a89d738b064ec633d6963bb33167699d56df
});