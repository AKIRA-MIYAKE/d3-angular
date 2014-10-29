(function(){
'use strict';

angular.module('d3-angular', ['ui.router', 'd3-angular-main', 'templates', 'd3'])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  });

})();
