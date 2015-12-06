angular.module('vtools', [])

.controller('LoginController', function($scope, $http) {
  
	$scope.isAuth = false;
	$scope.tittle = "Vtools";
	
	$scope.auth= function auth() {
		isAuth= true;
	};
});