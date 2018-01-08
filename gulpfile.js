var gulp = require('gulp'),
browserify = require('browserify'),
source = require('vinyl-source-stream'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
utilities = require('gulp-util'),
jshint = require('gulp-jshint'),
del = require('del'),
lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
}),
browserSync = require('browser-sync').create(),
buildProduction = utilities.env.production,
babelify = require("babelify");
//
//#####################################
// js build task
gulp.task('bowerJS', function () { // function start for backend logic
  return gulp.src(lib.ext('js').files)//grab all the .js that bower install and concat them in the build/js folder
  .pipe(concat('vendor.min.js')) // contat the files together
  .pipe(uglify()) //make them samll
  .pipe(gulp.dest('./build/js')); // playes them in the build/js file for the html
});

gulp.task('concatInterface', function(){ // function start for ui logic
  return gulp.src(['js/*-ui.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});
//#####################################
//
//
//#####################################
//jshint stuff
gulp.task('jshint', function(){ // runs our task
  return gulp.src(['js/*.js']) //runs the jshint to help us find errors in our .js files
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
//#####################################
//
//
//#####################################
// clean task
gulp.task("clean", function(){
  return del(['build', 'tmp']);
});
//#####################################
//
//
//#####################################
// finele build
gulp.task('minifyScripts', ['jsBrowserify'], function() {
  return gulp.src('build/js/app.js')
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));
});
//#####################################
//
//
//#####################################
//translate js content
gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js']})
  .transform(babelify.configure({
    presets: ["es2015"]
  }))
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'))
});
//#####################################
//
//
//#####################################
// start tasks
gulp.task('bower', ['bowerJS']); // runs our js build and our css build

gulp.task('build', ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
});

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(['js/*.js'], ['jsBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);
});
//#####################################
//
//
//#####################################
//run task for watch tasks
gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){
  browserSync.reload();
});

gulp.task('bowerBuild', ['bower'], function(){
  browserSync.reload();
});
//#####################################
//
