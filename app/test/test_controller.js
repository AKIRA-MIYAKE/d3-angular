(function(){
  'use strict';


  angular.module('d3-angular-test',['ui.router', 'd3'])
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.test', {
          url: 'test',
          controller: 'TestCtrl',
          templateProvider: function($templateCache) {
            return $templateCache.get('test/test.html');
          }
        });
    })
    .controller('TestCtrl', function ($scope) {
      console.log('TestCtrl');
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
