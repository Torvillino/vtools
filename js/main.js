/** Inicio de la aplicacion */
var vtoolsApp = angular.module('vtoolsApp', ['ngRoute']);

vtoolsApp.controller('LoginController', function($scope, $http) {
	
	$scope.isAuth = false;
	$scope.tittle = "Vtools";
	
	$scope.auth= function auth() {
		isAuth= true;
	};
});


/** Rutas de la aplicacion*/
vtoolsApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/home', {
		templateUrl : 'partials/welcome.html',
		controller : 'WelcomeCtrl'
	})
	.when('/light', {
		templateUrl : 'partials/light.html',
		controller : 'LightCtrl'
	})
	.when('/heat', {
		templateUrl : 'partials/heat.html',
		controller : 'HeatCtrl'
	})
	.when('/garage', {
		templateUrl : 'partials/garage.html',
		controller : 'GarageCtrl'
	});
} ]);

