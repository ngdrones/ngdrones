'use strict';

var proxyMiddleware = require('http-proxy-middleware');

module.exports = function (gulp, $, config) {
  var options = {
      target: 'http://localhost:8000/'
  };
  var proxy = proxyMiddleware('/api', options);

  gulp.task('browserSync', function () {
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
};
