angular.module("MyFirstApp",[]).controller("FirstController", 
	function($scope){
	$scope.nombre = "Juan Bazán";
	$scope.nuevoComentario = {};
	$scope.comentarios = [{
		comentario: "Buen Tutorial",
		username: "Usuario1"
	},
	{
		comentario: "Mal Tutorial",
		username: "Usuario2"
	}];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}
});