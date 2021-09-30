const gulp = require('gulp');
const cat = require('gulp-cat');
const minifyhtml = require('gulp-minify-html');
;

//test versie 3
//gulp.task('hallo', function(done){
   // console.log('Hallo Gulp file');
   // done();
//});

//test versie 4
//function hallo() {
   // return console.log('Hallo Gulp versie 4');
    
//};
//exports.default
//copy images
//gulp.task('copy-img', function(done){
    //gulp.src('./images/*.png')
       // .pipe(gulp.dest('public/images/'));
    //done();
//;});

//gulp plugin
//gulp.task('ascii' , function(done){
  //  gulp.src('./text/vis.txt')
     //   .pipe(cat());

    //done();
//});

//minify html
//gulp.task('minify' , function(done){
   // gulp.src('./*.html')
        //.pipe(minifyhtml())
        //.pipe(gulp.dest('./public/'));
    //done();    
//});


//watch css
gulp.task('watch', function(done){
    gulp.watch('./css/*.css').on('change', function(){
        gulp.src('./css/*.css')
         .pipe(gulp.dest('./public.css/'));
        console.log('css-bestand gekopieerd.');
        done();
    })


});

