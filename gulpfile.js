var gulp = require('gulp');

gulp.task('default', function() {
    require('./lib/ngdrones.js').ngdrones();
});