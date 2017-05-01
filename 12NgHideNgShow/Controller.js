angular.module("MyFirstApp",[])
.controller('FirstController', ['$scope','$http', function($scope, $http) {
	$scope.posts = [];
	$scope.loading = true;

	$http.get( "https://jsonplaceholder.typicode.com/posts")
	.then(function(data){
		$scope.posts = data.data;
		$scope.loading = false;
	}, function (error){
		console.log("error: ", error);
		$scope.loading = false;
	});
}]);