angular.module("MyFirstApp",[])
.run(function($rootScope){
	$rootScope.nombre = "Codigo Facilito";
})
.controller('FirstController', ['$scope',function($scope) {
	$scope.nombre = "CF";
}])
.controller('ChildController', ['$scope', function($scope){

}]);