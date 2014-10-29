(function(){
  'use strict';


  angular.module('d3-angular-main',['ui.router', 'd3'])
    .config(function ($stateProvider) {
      $stateProvider.state('main', {
        url: '/',
        controller: 'MainCtrl',
        templateProvider: function($templateCache) {
          return $templateCache.get('main/main.html');
        }
      });
    })
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    })
    .directive('d3Test', ['d3Service', function(d3Service) {
      return {
        restrict: 'ACE',
        link: function(scope, element, attrs) {
          d3Service.d3().then(function(d3) {
            console.log(d3);
          });
        }
      };
    }]);
})();
