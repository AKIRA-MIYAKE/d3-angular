(function(){
	'use strict';

	angular.module('d3-angular', [ 'ngRoute','d3-angular-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();