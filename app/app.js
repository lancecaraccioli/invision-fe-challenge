'use strict';

angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'taiPlaceholder',
  'myApp.posts',
  'myApp.photos',
  'myApp.videos',
  'myApp.user',
  'myApp.composer',
  'myApp.navigation',
  'myApp.post'
]).
  run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    //for easy ui state checks (active navigation item for example)
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]).
  config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('landing', {
      url: '/'
    });
  }]).
  controller('AppCtrl', ['authentication', function(authentication) {
    this.authenticatedUser = authentication.user;////
  }]);
