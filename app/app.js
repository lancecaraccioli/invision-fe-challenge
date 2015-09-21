'use strict';

angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'ngSanitize',
  'ui.router',
  'taiPlaceholder',
  'myApp.posts',
  'myApp.photos',
  'myApp.videos',
  'myApp.user',
  'myApp.composer',
  'myApp.navigation',
  'myApp.post',
  'myApp.settings'
]).
  run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    //for easy ui state checks (active navigation item for example)
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]).
  config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('/', '/posts/');
    $urlRouterProvider.otherwise('/posts/');

    $stateProvider.state('posts', {
      url: '/posts',
      abstract: true,
      views: {
        'main': {
          template: '<ui-view />'
        }
      }
    });
    $stateProvider.state('photos', {
      url: '/photos',
      abstract: true,
      views: {
        'main': {
          template: '<ui-view />'
        }
      }
    });
    $stateProvider.state('videos', {
      url: '/videos',
      abstract: true,
      views: {
        'main': {
          template: '<ui-view />'
        }
      }
    });

    $stateProvider.state('settings', {
      url: '/settings',
      abstract: true,
      views: {
        'branding': {
          template: '<div><div>'
        },
        'main': {
          template: '<ui-view />'
        }
      }
    });

  }]).
  controller('AppCtrl', ['authentication', '$mdDialog', '$scope', function(authentication, $mdDialog, $scope) {
    this.authenticatedUser = authentication.user;
    /**
     * TODO migrate once compose-button directive is created
     */
    this.showComposerDialog = function () {

      $mdDialog
        .show({
          clickOutsideToClose: true,
          scope: $scope,
          preserveScope: true,
          template: ''+
                    '<md-dialog>' +
                    '  <md-dialog-content>' +
                    '     <composer class="modal" ' +
                    '               title="\'Create new message\'"' +
                    '               include-post-button="true"></composer>' +
                    '  </md-dialog-content>' +
                    '</md-dialog>',
          controller: ['$scope', '$mdDialog', function DialogController($scope, $mdDialog) {
            $scope.closeDialog = function() {
              $mdDialog.hide();
            };
          }]
        });
    };
  }]);
