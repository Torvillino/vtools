/** Controller*/
vtoolsApp.controller('IPController', function($scope, $http) {
	$scope.ip = MyIp;


	// Metodo para realizar la llamada al servidor y recargar la IP
	$scope.reloadIp = function(){
		$http
		.jsonp('http://' + $scope.ip + '/ope=IP')
		.success(function (response) {
			// En caso de OK
			alert("OK");
		});
	};
});