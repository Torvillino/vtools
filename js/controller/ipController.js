/** Controller*/
vtoolsApp.controller('IPController', function($scope, $http) {
	$scope.ip = MyIp;


	// Metodo para realizar la llamada al servidor y recargar la IP
	$scope.reloadIp = function(){
		$http({
		  method: 'GET',
		  url: 'http://' + $scope.ip + '/ope=IP'
		}).then(function successCallback(response) {
			// En caso de OK
			alert("OK");
		}, function errorCallback(response) {
		    // En caso de error
		    alert("ERROR");
		});
	};
});