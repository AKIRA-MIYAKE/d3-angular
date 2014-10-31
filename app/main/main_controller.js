(function(){
  'use strict';


  angular.module('d3-angular-main',['ui.router', 'd3-angular-test'])
    .config(function ($stateProvider) {
      $stateProvider
        .state('main', {
          url: '/',
          controller: 'MainCtrl',
          templateProvider: function($templateCache) {
            return $templateCache.get('main/main.html');
          }
        })
    })
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
})();
