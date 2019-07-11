const gulp=require('gulp');
const watch=require('gulp-watch');
const minihtml=require('gulp-minify-html');
const minicss=require('gulp-minify-css');
const babel=require('gulp-babel');
const es2015=require('babel-preset-es2015');
const imagemin=require('gulp-imagemin');
//html
gulp.task('uglifyhtml',function () { 
    return gulp.src('src/*.html')
    .pipe(minihtml())
    .pipe(gulp.dest('dist/'))
 });

// 压缩css文件
gulp.task('uglifycss', () => {
    return gulp.src('src/css/*.css')//引入文件
        .pipe(minicss())//执行压缩插件
        .pipe(gulp.dest('dist/css'));//输出
});
//压缩js
gulp.task('uglifyjs', () => {
    return gulp.src('src/script/*.js')//引入文件
        .pipe(uglify())//执行压缩插件
        .pipe(gulp.dest('dist/script'));//输出
});
//es6转es5
//gulp-babel gulp-core  babel-preset-es2015
gulp.task('babeljs', () => {
    return gulp.src('src/script/*.js')//引入文件
        .pipe(babel({
            presets: ['es2015']
        }))//执行压缩插件
        .pipe(gulp.dest('dist/script'));//输出
});

//压缩图片
gulp.task('uglifyimg', () => {
    return gulp.src('src/img/*.png')//引入文件
        .pipe(imagemin())//执行压缩插件
        .pipe(gulp.dest('dist/img'));//输出
});


 //监听
gulp.task('default',function () { 
    watch(['src/*.html','src/css/*.css','src/script/*.js','src/img/*.png'],
        gulp.parallel('uglifyhtml','uglifycss','uglifyjs','babeljs','uglifyimg'));
 })