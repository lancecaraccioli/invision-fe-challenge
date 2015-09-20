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
  'myApp.post'
]).
  run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    //for easy ui state checks (active navigation item for example)
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]).
  config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('/', '/posts');
    $urlRouterProvider.otherwise('/posts');

  }]).
  controller('AppCtrl', ['authentication', '$mdDialog', '$scope', function(authentication, $mdDialog, $scope) {
    this.authenticatedUser = authentication.user;
    console.log('AppCtrl scope:', $scope);
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
