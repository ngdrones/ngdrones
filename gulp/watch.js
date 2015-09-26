'use strict';

var proxyMiddleware = require('http-proxy-middleware');
var nodemon = require('nodemon');

module.exports = function (gulp, $, config) {
  var options = {
      target: 'http://localhost:8000/'
  };
  var proxy = proxyMiddleware('/api', options);

  gulp.task('browserSync', ['nodemon'], function () {
    $.browserSync({
      host: config.host,
      open: 'external',
      port: config.port,
      server: {
        baseDir: config.buildDir,
        middleware: [proxy]
      }
    });
  });

  gulp.task('watch', function () {
    $.browserSync.reload();
    gulp.watch([config.unitTestFiles], ['unitTest']);
    gulp.watch([config.appFiles, '!' + config.unitTestFiles], ['build', $.browserSync.reload]);
  });

  gulp.task('nodemon', function (cb) {

    var started = false;

    return nodemon({
      script: 'index.js'
    }).on('start', function () {
      // to avoid nodemon being started multiple times
      // thanks @matthisk
      if (!started) {
        cb();
        started = true;
      }
  });
});
};
