/** Controller*/
vtoolsApp.controller('IPController', function($scope, $http) {
	$scope.ip = MyIp;


	// Metodo para realizar la llamada al servidor y recargar la IP
	$scope.reloadIp = function(){ 
		$http
		.jsonp('http://' + $scope.ip + '/?callback=JSON_CALLBACK&ope=IP&end')
		.success(function (response) {
			$scope.ip = response.result;
		})
		.error(function (response) {
			alert("Error");
		});
	};

	// Metodo para realizar la llamada al servidor y recargar la IP
	$scope.uploadFtp = function(){ 
		$http
		.jsonp('http://' + $scope.ip + '/?callback=JSON_CALLBACK&ope=FTP&end')
		.success(function (response) {
			alert("Ok");
		})
		.error(function (response) {
			alert("Error");
		});
	};
});
