angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController", ["$scope", "localStorageService", function($scope, localStorageService){
	if (localStorageService.get("angular-todolist")){
		$scope.todo = localStorageService.get("angular-todolist");
	}else{
		$scope.todo = [];
	}
	/*
		{
			actividad: "Terminar Curso de Angular",
			fecha: '05-05-2016'
		}
	*/

	$scope.$watchCollection('todo', function(newValue, oldValue){
		localStorageService.set("angular-todolist", $scope.todo);
	});

	$scope.addActv = function(){
		$scope.todo.push($scope.newActv);
		$scope.newActv = {};
	}

	$scope.cleanActv = function(){
		$scope.todo = [];
	}
}]);