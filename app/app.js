'use strict';

angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'myApp.posts',
  'myApp.photos',
  'myApp.videos',
  'myApp.version'
]).
config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('landing', {
    url: '/'
  })
}]);
