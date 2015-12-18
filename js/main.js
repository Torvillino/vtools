/** Inicio de la aplicacion */
var vtoolsApp = angular.module('vtoolsApp', ['ngRoute']);

/** Rutas de la aplicacion*/
vtoolsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl : 'partials/welcome.html',
		controller : 'WelcomeController'
	}).when('/light', {
		templateUrl : 'partials/light.html',
		controller : 'LightController'
	}).when('/blind', {
		templateUrl : 'partials/blind.html',
		controller : 'BlindController'
	}).when('/heat', {
		templateUrl : 'partials/heat.html',
		controller : 'HeatController'
	}).when('/garden', {
		templateUrl : 'partials/garden.html',
		controller : 'GardenController'
	}).when('/garage', {
		templateUrl : 'partials/garage.html',
		controller : 'GarageController'
	}).when('/ip', {
		templateUrl : 'partials/ip.html',
		controller : 'IPController'
	}).otherwise({
        redirectTo: '/home'
    });
}]);