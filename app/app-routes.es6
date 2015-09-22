(function () {
  'use strict';

  angular
    .module('ngdrones')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
