/** Controller*/
vtoolsApp.controller('GarageController', function($scope, $http) {
	
	$scope.isAuth = false;
	$scope.tittle = "Vtools";
	
	$scope.auth= function auth() {
		isAuth= true;
	};
});