/** Inicio de la aplicacion */
var vtoolsApp = angular.module('vtoolsApp', ['ngRoute']);




/** Rutas de la aplicacion*/
vtoolsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl : 'partials/welcome.html',
		controller : 'HomeController'
	}).when('/light', {
		templateUrl : 'partials/light.html',
		controller : 'LightController'
	}).when('/blind', {
		templateUrl : 'partials/blind.html',
		controller : 'BlindController'
	}).when('/heat', {
		templateUrl : 'partials/heat.html',
		controller : 'HeatController'
	}).when('/garage', {
		templateUrl : 'partials/garage.html',
		controller : 'GarageController'
	}).otherwise({
        redirectTo: '/home'
    });
}]);

/** Controller*/
vtoolsApp.controller('LoginController', function($scope, $http) {
	
	$scope.isAuth = false;
	$scope.tittle = "Vtools";
	
	$scope.auth= function auth() {
		isAuth= true;
	};
});